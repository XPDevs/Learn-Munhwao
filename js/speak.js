/* =====================================================================
   SPEAKING AND PARTNER FEATURES  (Munhwao Mastery)
   Pronunciation scoring with the browser speech recogniser, talking
   practice lines, the conversation partner, writing correction and
   the Munhwao spelling and grammar checkers. The partner and the
   writing coach answer from the offline knowledge base in data/ai.js,
   a big list of patterns and replies. There is no model anywhere and
   nothing is sent to any network.
   ===================================================================== */
(function () {
  "use strict";
  window.MF = window.MF || {};

  MF.PARTICLES = ["께서", "에서", "에게", "으로", "을", "를", "은", "는", "이", "가", "의", "에", "도", "만", "과", "와"];

  /* ---------- speech recognition helpers ---------- */
  function SR() { return window.SpeechRecognition || window.webkitSpeechRecognition; }
  MF.supportsSR = function () { return !!SR(); };

  MF.listen = function (onResult, onError) {
    var Klass = SR();
    if (!Klass) { if (onError) onError(new Error("no-speech")); return null; }
    var rec = new Klass();
    rec.lang = "ko-KR";
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onresult = function (ev) {
      var best = "", alts = [];
      for (var i = 0; i < ev.results.length; i++) {
        var r = ev.results[i];
        for (var j = 0; j < r.length; j++) alts.push(r[j].transcript);
      }
      best = alts[0] || "";
      if (onResult) onResult(best.trim(), alts);
    };
    rec.onerror = function (ev) { if (onError) onError(ev.error || new Error("speech-error")); };
    rec.onend = function () { try { rec.stop(); } catch (e) {} };
    try { rec.start(); } catch (e) { if (onError) onError(e); }
    return rec;
  };

  MF.cleanKo = function (s) {
    return String(s || "").replace(/[^\uac00-\ud7af\s]/g, "").replace(/\s+/g, " ").trim();
  };
  MF.score = function (heard, target) {
    var a = MF.cleanKo(heard), b = MF.cleanKo(target);
    if (!b) return 0;
    var sa = a.split("");
    var m = 0;
    b.split("").forEach(function (ch) {
      var i = sa.indexOf(ch);
      if (i >= 0) { m++; sa.splice(i, 1); }
    });
    return Math.round((m / b.length) * 100);
  };
  MF.lev = function (a, b) {
    a = String(a || ""); b = String(b || "");
    if (a === b) return 0;
    var m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    var prev = [], cur = [];
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      cur[0] = i;
      for (var j = 1; j <= n; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      prev = cur.slice();
    }
    return prev[n];
  };

  /* ---------- Munhwao rule checks for the checker tools ---------- */
  MF.munhwaoChecks = function (text) {
    var out = [];
    var t = text || "";
    if (/[가-힣]/.test(t) === false) return out;
    var tok = t.split(/([가-힣]+)/).filter(function (x) { return /[가-힣]/.test(x); });
    tok.forEach(function (w) {
      if (/^육$/.test(w)) out.push({ fix: "륙", why: "Six alone is 륙 in Munhwao. 육 is the South reading." });
      if (/^유월/.test(w) && w.length <= 4) out.push({ fix: "유월", why: "June is 유월 in the spoken form in both standards." });
      if (/냉/.test(w)) out.push({ fix: w.replace(/냉/g, "랭"), why: "The cold sound stays an r: 냉면 becomes 랭면." });
      if (/^노/.test(w) && /노(동|인|년|문|모|조|대|래)/.test(w)) out.push({ fix: w.replace(/^노/, "로"), why: "Munhwao keeps the initial r: 로동, 로인, 로년." });
      if (/^여/.test(w) && /여(행|사|자|성|권|객|관)/.test(w)) out.push({ fix: w.replace(/^여/, "려"), why: "Initial r with the travel family: 려행, 려사, 려자." });
      if (/^녀/.test(w)) out.push({ fix: "ko-ok", why: "녀 is already the Munhwao spelling for n sounds." });
    });
    if (/컴퓨터/.test(t)) out.push({ fix: "콤퓨터", why: "The computer is 콤퓨터 in Munhwao." });
    if (/휴대폰|핸드폰/.test(t)) out.push({ fix: "휴대전화 or 손전화", why: "The mobile phone is 휴대전화 or 손전화 in Munhwao." });
    if (/화장실/.test(t)) out.push({ fix: "위생실", why: "The toilet is 위생실 in Munhwao." });
    if (/약국/.test(t)) out.push({ fix: "약방", why: "The pharmacy is 약방 in Munhwao." });
    if (/간호사/.test(t)) out.push({ fix: "간호원", why: "The nurse is 간호원 in Munhwao." });
    if (/우체국/.test(t)) out.push({ fix: "체신소", why: "The post office is 체신소 in Munhwao." });
    if (/세계/.test(t)) out.push({ fix: "셰계", why: "The world keeps a glide: 셰계." });
    if (/라디오/.test(t)) out.push({ fix: "라지오", why: "The radio is 라지오 in Munhwao." });
    if (/텔레비전/.test(t)) out.push({ fix: "텔레비죤", why: "Television is 텔레비죤 in Munhwao." });
    if (/친구/.test(t)) out.push({ fix: "동무", why: "The Munhwao word for friend is 동무." });
    if (/아내/.test(t)) out.push({ fix: "안해", why: "The Munhwao word for wife is 안해." });
    if (/교사/.test(t)) out.push({ fix: "교원", why: "The Munhwao word for teacher is 교원." });
    return out;
  };

  MF.spellSuggest = function (word) {
    var w = String(word || "").trim();
    if (!w || !/[가-힣]/.test(w)) return null;
    if (MH.lookupHangul(w) || MH.dictLookup(w).length) return null;
    var best = null, bestD = 3;
    Object.keys(MH.DICT).forEach(function (k) {
      var d = MH.DICT[k];
      if (!d) return;
      if (d.h.length < 1) return;
      if (w.indexOf(d.h) === 0 || d.h.indexOf(w) === 0) {
        var dd = Math.max(0, Math.abs(d.h.length - w.length));
        if (dd < bestD) { bestD = dd; best = d.h; }
      }
      var lev = MF.lev(w, d.h);
      if (lev <= 1 && lev < bestD) { bestD = lev; best = d.h; }
    });
    return best;
  };

  /* ---------- example lines for speaking ---------- */
  var SPEAK_LINES = [
    { ko: "반갑습니다.", en: "Delighted to meet you.", tier: 1 },
    { ko: "저는 학생입니다.", en: "I am a student.", tier: 1 },
    { ko: "이름이 무엇입니까?", en: "What is your name?", tier: 1 },
    { ko: "오늘 날씨가 좋습니다.", en: "The weather is fine today.", tier: 2 },
    { ko: "우리 동무들과 함께 걷습니다.", en: "We walk together with our friends.", tier: 3 },
    { ko: "지하철을 타고 려행합니다.", en: "I travel by metro.", tier: 4 },
    { ko: "시장에서 채소와 과일을 삽니다.", en: "At the market I buy vegetables and fruit.", tier: 5 },
    { ko: "겨울에 눈이 많이 옵니다.", en: "In winter a lot of snow falls.", tier: 6 },
    { ko: "렬차가 정각에 떠납니다.", en: "The train leaves on time.", tier: 7 },
    { ko: "우리 말을 사랑하고 지킵니다.", en: "We love our language and protect it.", tier: 8 }
  ];
  MH.SPEAK_LINES = SPEAK_LINES;

  /* ---------- Brain helpers (offline knowledge base, not a model) ---------- */
  function brainNorm(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s`']/g, " ").replace(/\s+/g, " ").trim();
  }
  function fallbackReply(cat) {
    var fb = (MH.AI && MH.AI.fallbacks) || {};
    var list = (fb[cat]) || fb.partner || [];
    var pick = list[Math.floor(Math.random() * list.length)] || { r: "알겠습니다. 계속 말씀해 주십시오.", en: "Understood. Please keep talking." };
    return { ko: pick.r, en: pick.en };
  }
  MF.brainReply = function (text, categories) {
    var u = brainNorm(text);
    var cats = Array.isArray(categories) ? categories.slice() : [categories];
    var best = null, bestScore = 0;
    var cat, i, k;
    for (var c = 0; c < cats.length; c++) {
      cat = (MH.AI && MH.AI[cats[c]]) || [];
      for (i = 0; i < cat.length; i++) {
        var keys = String(cat[i].m || "").split("|");
        var score = 0;
        for (k = 0; k < keys.length; k++) {
          var key = brainNorm(keys[k]);
          if (!key) continue;
          if (key === u) score += 100;
          else if (u.indexOf(key) >= 0) score += Math.min(10, key.length) * 4;
        }
        if (score > bestScore) { bestScore = score; best = cat[i]; }
      }
    }
    if (best && bestScore > 0) return { ko: best.r, en: best.en, tag: best.tag || "" };
    return fallbackReply(cats[0]);
  };

  /* =====================================================================
     SPEAK HUB
     ===================================================================== */
  window.renderSpeakHub = function () {
    var box = el("speak-content");
    box.innerHTML = '<div class="lib-tabs">'
      + tab("practice", "Practice") + tab("pron", "Score") + tab("partner", "Partner") + tab("writing", "Writing") + tab("checker", "Checkers")
      + "</div>" + '<div id="spk-pane"></div>';
    box.querySelectorAll(".lib-tab").forEach(function (b) {
      b.addEventListener("click", function () {
        box.querySelectorAll(".lib-tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        renderSpkPane(b.dataset.tab);
      });
    });
    renderSpkPane("practice");
  };
  function tab(id, label) { return '<button class="lib-tab" data-tab="' + id + '">' + label + "</button>"; }

  function renderSpkPane(tab) {
    var pane = el("spk-pane");
    if (tab === "practice") renderPracticeTab(pane);
    else if (tab === "pron") renderPronTab(pane);
    else if (tab === "partner") renderPartnerTab(pane);
    else if (tab === "writing") renderWritingTab(pane);
    else renderCheckerTab(pane);
  }

  /* ---------- Practice tab ---------- */
  function renderPracticeTab(pane) {
    var html = '<div class="rd-tip">Read each line out loud, then check yourself. On browsers with speech recognition you get a score.</div>';
    html += '<div id="practice-list"></div>';
    pane.innerHTML = html;
    paintPractice(el("practice-list"));
  }

  function paintPractice(list) {
    if (!list) return;
    list.innerHTML = "";
    SPEAK_LINES.forEach(function (line) {
      var d = document.createElement("div");
      d.className = "spk-line";
      d.innerHTML = '<div class="spk-ko">' + MF.esc(line.ko) + ' <button class="mini-speak" data-tts="' + MF.esc(line.ko) + '">PLAY</button></div>'
        + '<div class="spk-en">' + MF.esc(line.en) + "</div>"
        + '<div class="spk-actions"><button class="lesson-btn check spk-go" data-ko="' + MF.esc(line.ko) + '">Listen and repeat</button></div>'
        + '<div class="spk-fb"></div>';
      d.querySelector(".mini-speak").addEventListener("click", function () { speak(line.ko); });
      d.querySelector(".spk-go").addEventListener("click", function () {
        speak(line.ko);
        if (MF.supportsSR()) {
          d.querySelector(".spk-fb").innerHTML = "<span class=\"spk-wait\">Speak now</span>";
          MF.listen(function (heard) {
            var score = MF.score(heard, line.ko);
            d.querySelector(".spk-fb").innerHTML = '<div class="feedback-banner ' + (score >= 70 ? "correct" : "wrong") + '"><div class="fb-head">' + (score >= 70 ? "Good speaking" : "Keep trying") + " " + score + "</div>"
              + '<div class="fb-why">Heard: ' + MF.esc(heard) + "</div></div>";
            touchSpeaking(score);
          }, function () {
            d.querySelector(".spk-fb").innerHTML = '<span style="color:var(--text-dim);">Recognition unavailable. Say the line out loud, then tap again.</span>';
          });
        } else {
          d.querySelector(".spk-fb").innerHTML = '<span style="color:var(--text-dim);">Say it out loud, then compare with the recording.</span>';
        }
      });
      list.appendChild(d);
    });
  }

  function touchSpeaking(score) {
    state.speaking = state.speaking || { attempts: 0, avgScore: 0 };
    var n = state.speaking.attempts || 0;
    state.speaking.avgScore = Math.round(((state.speaking.avgScore || 0) * n + score) / (n + 1));
    state.speaking.attempts = n + 1;
    saveState();
  }

  /* ---------- Score tab ---------- */
  function renderPronTab(pane) {
    var html = '<div class="rd-tip">Score your pronunciation on any dictionary word. Tap the word, say it, and read your percentage.</div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="pron-next">Pick a word</button></div>'
      + '<div id="pron-stage">' + pronCard("") + "</div>";
    pane.innerHTML = html;

    var curWord = "반갑습니다";
    function pronCard(h) {
      var word = h || "반갑습니다";
      var d = MH.lookupHangul(word) || MH.dictLookup(word)[0] || { h: word, e: "word" };
      curWord = d.h;
      return '<div class="ls-card"><div class="ls-question pron-word">' + MF.esc(d.h)
        + ' <button class="mini-speak" id="pron-play" data-tts="' + MF.esc(d.h) + '">PLAY</button></div>'
        + (d.p ? '<div class="tw-p">' + MF.esc(d.p) + "</div>" : "")
        + '<div class="tw-e">' + MF.esc(d.e) + "</div></div>"
        + '<div class="ls-actions"><button class="lesson-btn continue" id="pron-record">Record and score</button></div>'
        + '<div id="pron-fb"></div>';
    }
    function paintWord() {
      var keys = Object.keys(MH.DICT);
      var key = keys[Math.floor(Math.random() * keys.length)];
      var d = MH.DICT[key];
      el("pron-stage").innerHTML = pronCard(d ? d.h : "반갑습니다");
      el("pron-play").addEventListener("click", function () { speak(d ? d.h : "반갑습니다"); });
      el("pron-record").addEventListener("click", record);
    }
    function record() {
      if (!MF.supportsSR()) { toast("Speech recognition needs a web origin and Chrome or Edge."); return; }
      var h = curWord;
      el("pron-fb").innerHTML = '<span class="spk-wait">Speak now</span>';
      MF.listen(function (heard) {
        var score = MF.score(heard, h);
        touchSpeaking(score);
        el("pron-fb").innerHTML = '<div class="feedback-banner ' + (score >= 70 ? "correct" : "wrong") + '"><div class="fb-head">' + (score >= 70 ? "Clear reading" : "Close") + " " + score + "</div>"
          + '<div class="fb-why">Heard: ' + MF.esc(heard) + ". Target: " + MF.esc(h) + "</div></div>";
      }, function () { el("pron-fb").innerHTML = '<span style="color:var(--text-dim);">Recognition stopped. Try again.</span>'; });
    }
    el("pron-next").addEventListener("click", paintWord);
    paintWord();
  }

  /* ---------- Partner tab ---------- */
  function renderPartnerTab(pane) {
    var html = '<div class="rd-tip">Talk with a Munhwao partner. The partner answers from the offline knowledge base, a big list of patterns and replies. Nothing you type leaves this device.</div>'
      + '<div class="chat-box" id="chat-box"></div>'
      + '<div class="chat-input"><input type="text" class="lesson-input" id="chat-in" placeholder="Type in Munhwao or English...">'
      + '<button class="lesson-btn continue" id="chat-send">Send</button></div>';
    pane.innerHTML = html;
    var box = el("chat-box");
    function add(role, ko, en) {
      var d = document.createElement("div");
      d.className = "chat-row " + role;
      d.innerHTML = '<div class="chat-bubble"><div class="chat-ko">' + MF.esc(ko) + ' <button class="mini-speak" data-tts="' + MF.esc(ko) + '">PLAY</button></div>'
        + (en ? '<div class="chat-en">' + MF.esc(en) + "</div>" : "") + "</div>";
      box.appendChild(d);
      box.scrollTop = box.scrollHeight;
      var sp = d.querySelector(".mini-speak");
      if (sp) sp.addEventListener("click", function () { speak(ko); });
    }
    add("bot", "반갑습니다, 동무! 무엇을 이야기할까요?", "Delighted to meet you, comrade. What shall we talk about?");
    function send() {
      var v = el("chat-in").value.trim();
      if (!v) return;
      el("chat-in").value = "";
      add("user", v, "");
      var r = MF.brainReply(v, ["partner", "facts"]);
      setTimeout(function () { add("bot", r.ko, r.en); }, 350);
    }
    el("chat-send").addEventListener("click", send);
    el("chat-in").addEventListener("keydown", function (ev) { if (ev.key === "Enter") send(); });
  }

  /* ---------- Writing tab ---------- */
  function renderWritingTab(pane) {
    var html = '<div class="rd-tip">Write a sentence in Munhwao. The coach applies the Munhwao spelling rules, reports each change and adds a note from the offline knowledge base.</div>'
      + '<div class="ls-input"><textarea class="lesson-input wr-area" id="wr-area" rows="4" placeholder="여기에 문장을 적으십시오. Type a sentence here..."></textarea></div>'
      + '<div class="ls-actions"><button class="lesson-btn continue" id="wr-go">Correct and explain</button></div>'
      + '<div id="wr-out"></div>';
    pane.innerHTML = html;
    el("wr-go").addEventListener("click", function () {
      var txt = el("wr-area").value.trim();
      if (!txt) return;
      var out = el("wr-out");
      var checks = MF.munhwaoChecks(txt);
      var fixed = munhwao(txt);
      var insight = MF.brainReply(txt, ["coach", "facts"]);
      var html = '<div class="conj-card"><div class="conj-verb">Munhwao writing check</div>';
      html += '<div class="wr-row"><b>You wrote</b><div>' + MF.esc(txt) + "</div></div>";
      html += '<div class="wr-row"><b>Munhwao form</b><div>' + MF.esc(fixed) + "</div></div>";
      if (checks.length) {
        html += "<div class=\"wr-notes\">";
        checks.forEach(function (c) { html += '<div class="wr-note"><span class="wr-fix">' + MF.esc(c.fix) + "</span><span>" + MF.esc(c.why) + "</span></div>"; });
        html += "</div>";
      } else {
        html += '<div style="color:var(--green);font-weight:800;margin-top:10px;">No South spellings found. Clean Munhwao.</div>';
      }
      html += '<div class="wr-row" style="margin-top:12px;"><b>Coach note</b><div>' + MF.esc(insight.ko) + " " + MF.esc(insight.en) + "</div></div>";
      html += "</div>";
      out.innerHTML = html;
    });
  }

  /* ---------- Checker tab ---------- */
  function renderCheckerTab(pane) {
    var html = '<div class="rd-tip">Paste any Korean text. The checker finds South Korean spellings and unknown words, then suggests the Munhwao form.</div>'
      + '<div class="ls-input"><textarea class="lesson-input wr-area" id="ch-area" rows="5" placeholder="Paste or type Korean text..."></textarea></div>'
      + '<div class="ls-actions"><button class="lesson-btn continue" id="ch-go">Check</button></div>'
      + '<div id="ch-out"></div>';
    pane.innerHTML = html;
    el("ch-go").addEventListener("click", function () {
      var t = el("ch-area").value;
      var out = el("ch-out");
      var rules = MF.munhwaoChecks(t);
      var norm = munhwao(t);
      var unknown = [];
      t.split(/([가-힣]+)/).forEach(function (w) {
        if (!/[가-힣]/.test(w)) return;
        if (MH.lookupHangul(w)) return;
        if (norm.indexOf(w) >= 0 && w !== norm) return;
        var sug = MF.spellSuggest(w);
        if (sug) unknown.push({ w: w, s: sug });
      });
      var html = '<div class="conj-card"><div class="conj-verb">Check result</div>';
      html += '<div class="wr-row"><b>Munhwao reading</b><div>' + MF.esc(norm) + "</div></div>";
      if (rules.length) {
        html += "<div class=\"wr-notes\">";
        rules.forEach(function (c) { html += '<div class="wr-note"><span class="wr-fix">' + MF.esc(c.fix) + "</span><span>" + MF.esc(c.why) + "</span></div>"; });
        html += "</div>";
      } else {
        html += '<div style="color:var(--green);font-weight:800;margin-top:10px;">No South spellings detected.</div>';
      }
      if (unknown.length) {
        html += '<div class="wr-notes" style="margin-top:10px;">';
        unknown.forEach(function (u) { html += '<div class="wr-note"><span class="wr-fix">' + MF.esc(u.w) + "</span><span>maybe you mean " + MF.esc(u.s) + "</span></div>"; });
        html += "</div>";
      }
      html += "</div>";
      out.innerHTML = html;
    });
  }
})();