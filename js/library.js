/* =====================================================================
   LIBRARY AND READING FEATURES  (Munhwao Mastery)
   Provides the landing page, the graded reading library with tap-to-
   translate, the news reader with an advanced archive, the listening
   lab (dictation, shadowing and comprehension quizzes), novels and
   literature, academic reading, the media immersion list and the
   culture notes.
   Depends on the inline engine in index.html (el, speak, state, MH).
   ===================================================================== */
(function () {
  "use strict";
  window.MF = window.MF || {};

  MF.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  MF.ready = function () {
    if (!state.readTexts) state.readTexts = {};
    if (!state.readLast) state.readLast = {};
    if (!state.completedQuests) state.completedQuests = {};
  };

  /* ---------- word tokenizer with gloss lookup ---------- */
  MF.tokHTML = function (ko, gloss) {
    return MF.esc(ko).split(/([가-힣ㄱ-ㅎㅏ-ㅣ]+)/).map(function (chunk) {
      if (/([가-힣ㄱ-ㅎㅏ-ㅣ]+)/.test(chunk)) {
        return '<span class="rd-tok" data-w="' + MF.esc(chunk) + '">' + MF.esc(chunk) + "</span>";
      }
      return MF.esc(chunk);
    }).join("");
  };

  var PARTICLES = ["께서", "에서", "에게", "으로", "으로", "을", "를", "은", "는", "이", "가", "의", "에", "도", "만", "과", "와", "에서"];
  MF.wordInfo = function (w, gloss) {
    if (gloss && gloss[w]) return { h: w, e: gloss[w] };
    var d = MH.lookupHangul(w);
    if (d) return d;
    for (var i = 0; i < PARTICLES.length; i++) {
      var p = PARTICLES[i];
      if (w.length > p.length + 1 && w.slice(-p.length) === p) {
        var stem = w.slice(0, -p.length);
        if (gloss && gloss[stem]) return { h: stem, e: gloss[stem] };
        var dd = MH.lookupHangul(stem);
        if (dd) return dd;
      }
    }
    var hits = MH.dictLookup(w);
    for (var j = 0; j < hits.length; j++) {
      var h = hits[j];
      if (w.indexOf(h.h) === 0 || h.h.indexOf(w) === 0) return h;
    }
    return null;
  };

  /* =====================================================================
     LANDING PAGE
     ===================================================================== */
  window.renderHome = function () {
    MF.ready();
    var words = Object.keys(MH.DICT).length;
    var texts = MH.LIBRARY.length;
    var done = Object.keys(state.lessonCompletion).length;
    var tier = state.placement ? state.placement.tier : 0;
    var box = el("home-content");
    var pct = Math.round((done / 140) * 100);
    var html = "";
    html += '<section class="hero">'
      + '<div class="hero-badge">MUNHWAE</div>'
      + '<h1 class="hero-title">Learn North Korean,<br>the Munhwao standard</h1>'
      + '<p class="hero-sub">Every word, sentence and lesson in this app uses only the authentic North Korean standard. No beginner courses will teach you the Northern spellings verbs and particles the way this one does.</p>'
      + '<div class="hero-cta">'
      + '<button class="lesson-btn continue" id="hm-start">Continue learning</button>'
      + '<button class="lesson-btn ghost" id="hm-placement">Placement test</button>'
      + '</div>'
      + '<div class="hero-stats">'
      + statStrip("140", "lessons") + statStrip("20", "tiers") + statStrip(String(words), "words") + statStrip(String(texts), "readings")
      + '</div>'
      + '</section>';

    html += '<section class="hm-cards">'
      + featureCard("learn", "Follow the path", "140 lessons across 20 tiers, from Hangul to literature, with drills, hearts and streaks.")
      + featureCard("library", "Read and listen", "Graded stories from A1 to C2, news with an advanced archive, novels, academic texts and listening drills with dictation, shadowing and comprehension quizzes.")
      + featureCard("speak", "Speak and be heard", "Pronunciation scoring, speech recognition and a conversation partner.")
      + featureCard("tools", "Open the toolbox", "Dictionary, North vs South comparison, flashcards, SRS, Anki and more.")
      + '</section>';

    if (done === 0 && !state.placementSeen && !state.placement) {
      html += '<section class="hm-banner"><div class="banner-icon" style="margin:0 auto 12px;">GO</div>'
        + '<h2>Welcome to Munhwao Mastery</h2>'
        + '<p style="color:var(--text-dim);line-height:1.6;margin-top:6px;">Start with lesson 1 to learn the alphabet and formal greetings, or take the placement test to begin at your level.</p>'
        + '<div class="hero-cta"><button class="lesson-btn continue" id="hm-start2">Start lesson 1</button></div></section>';
    } else {
      html += '<section class="hm-banner"><div class="banner-icon">MAP</div>'
        + '<h2>' + done + " of 140 lessons complete</h2>"
        + '<p style="color:var(--text-dim);line-height:1.6;margin-top:6px;">Keep your streak alive. Review due words and open the next lesson on the course map.</p>'
        + '<div class="hm-meter"><div class="hm-meter-fill" style="width:' + pct + '%;"></div></div>'
        + (tier ? '<p style="color:var(--text-dim);font-size:0.85rem;margin-top:6px;">Placed at tier ' + tier + ". You can retake the test anytime." + "</p>" : "")
        + "</section>";
    }

    html += '<section id="hm-install" style="display:none;" class="hm-banner"><div class="banner-icon">APP</div>'
      + "<h2>Install on your device</h2>"
      + '<p style="color:var(--text-dim);line-height:1.6;margin-top:6px;">Add Munhwao Mastery to your home screen. It works offline as a desktop, Android, iOS and Windows app through the install prompt.</p>'
      + '<div class="hero-cta"><button class="lesson-btn check" id="hm-install-btn">Install now</button></div></section>';

    box.innerHTML = html;

    function wireSec(name, fn) {
      var b = el(name);
      if (b) b.addEventListener("click", function () { showPage(fn); });
    }
    wireSec("hm-start", "learn");
    wireSec("hm-start2", "learn");
    wireSec("hm-placement", "learn");
    box.querySelectorAll(".hm-card").forEach(function (c) {
      c.addEventListener("click", function () { showPage(c.dataset.go); });
    });

    var p = window.deferredPrompt;
    var inst = el("hm-install");
    if (p) inst.style.display = "block";
    el("hm-install-btn") && el("hm-install-btn").addEventListener("click", function () {
      if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then(function () {
          window.deferredPrompt = null;
          inst.style.display = "none";
        });
      } else {
        toast("Install requires the browser prompt. Open this app over http and tap Install.");
      }
    });
  };

  function statStrip(big, sub) {
    return '<div class="hs-item"><div class="hs-big">' + big + '</div><div class="hs-sub">' + sub + "</div></div>";
  }
  function featureCard(go, title, desc) {
    return '<button class="hm-card" data-go="' + go + '"><div class="hm-card-title">' + title + '</div><div class="hm-card-desc">' + desc + "</div></button>";
  }

  /* =====================================================================
     LIBRARY HUB
     ===================================================================== */
  window.renderLibraryHub = function () {
    MF.ready();
    var box = el("library-content");
    box.innerHTML = '<div class="lib-tabs">'
      + tabBtn("read", "Reading") + tabBtn("news", "News") + tabBtn("listen", "Listening") + tabBtn("novels", "Novels") + tabBtn("academic", "Academic") + tabBtn("culture", "Culture") + tabBtn("media", "Media")
      + "</div>" + '<div id="lib-pane"></div>';
    box.querySelectorAll(".lib-tab").forEach(function (b) {
      b.addEventListener("click", function () {
        box.querySelectorAll(".lib-tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        renderLibPane(b.dataset.tab);
      });
    });
    renderLibPane("read");
  };

  function tabBtn(id, label) {
    return '<button class="lib-tab" data-tab="' + id + '">' + label + "</button>";
  }

  function renderLibPane(tab) {
    var pane = el("lib-pane");
    if (tab === "read") renderReadTab(pane);
    else if (tab === "news") renderNewsTab(pane);
    else if (tab === "listen") renderListenTab(pane);
    else if (tab === "novels") renderNovelsTab(pane);
    else if (tab === "academic") renderAcademicTab(pane);
    else if (tab === "media") renderMediaTab(pane);
    else renderCultureTab(pane);
  }

  function levelColor(lv) {
    return { "A1": "var(--green)", "A2": "var(--green-light)", "B1": "var(--orange)", "B2": "var(--blue)", "C1": "var(--purple)", "C2": "var(--teal)", "ADV": "var(--purple)" }[lv] || "var(--green)";
  }

  /* ---------- Reading tab ---------- */
  function renderReadTab(pane) {
    var groups = {};
    (MH.LIBRARY || []).forEach(function (t) { (groups[t.level] = groups[t.level] || []).push(t); });
    var order = ["A1", "A2", "B1", "B2", "C1", "C2"];
    var html = "";
    order.forEach(function (lv) {
      if (!groups[lv]) return;
      html += '<div class="rd-level"><div class="rd-level-head"><span class="rd-level-chip" style="border-color:' + levelColor(lv) + ';color:' + levelColor(lv) + ';">' + lv + "</span><span>" + lvdesc(lv) + "</span></div>";
      groups[lv].forEach(function (t) {
        var read = state.readTexts && state.readTexts[t.id];
        html += '<button class="rd-card" data-id="' + t.id + '"><div class="rd-card-title">' + MF.esc(t.title) + '</div><div class="rd-card-desc">' + MF.esc(t.intro || "") + '</div><div class="rd-card-meta"><span class="rd-tag">' + t.tag + "</span>" + (read ? '<span style="color:var(--green);font-weight:800;">READ</span>' : '<span style="color:var(--text-dim);">New</span>') + "</div></button>";
      });
      html += "</div>";
    });
    pane.innerHTML = html || '<p style="color:var(--text-dim);text-align:center;">No texts loaded.</p>';
    pane.querySelectorAll(".rd-card").forEach(function (c) {
      c.addEventListener("click", function () { renderReader(c.dataset.id); });
    });
  }

  function lvdesc(lv) {
    return { "A1": "Starter lines, all from tier one to four nouns.", "A2": "Short stories and news with daily words.", "B1": "Longer sentences, leisure and science.", "B2": "Literary and historical register for advanced readers.", "C1": "Long form articles and reflective essays for confident readers.", "C2": "Scholarly and literary prose for advanced readers." }[lv] || "";
  }

  function renderReader(id) {
    var t = (MH.LIBRARY || []).find(function (x) { return x.id === id; });
    if (!t) { toast("Text not found"); return; }
    var pane = el("lib-pane");
    var html = '<button class="back-btn" id="rd-back">BACK TO LIBRARY</button>';
    html += '<div class="rd-head"><span class="rd-level-chip" style="border-color:' + levelColor(t.level) + ';color:' + levelColor(t.level) + ';">' + t.level + "</span><div><div class=\"rd-title\">" + MF.esc(t.title) + "</div><div class=\"rd-tag\">" + t.tag + "</div></div></div>";
    html += '<div class="rd-tip">Tap any word to see its meaning. Listen paragraph by paragraph, then read out loud.</div>';
    html += '<div id="rd-tapinfo" class="rd-tapinfo"></div>';
    (t.paras || []).forEach(function (p, i) {
      html += '<div class="rd-para"><div class="rd-para-row">'
        + '<button class="mini-speak" data-tts="' + MF.esc(p.ko) + '">LISTEN</button>'
        + '<button class="mini-speak ghost" data-rep="' + i + '">REPEAT</button>'
        + "</div>"
        + '<div class="rd-ko">' + MF.tokHTML(p.ko, t.gloss) + "</div>"
        + '<div class="rd-en">' + MF.esc(p.en) + "</div></div>";
    });
    if (t.vocab && t.vocab.length) {
      html += '<div class="rd-vocab-head">Words in this text</div><div class="chip-row">';
      t.vocab.forEach(function (k) {
        var d = MH.DICT[k];
        if (d) html += '<button class="chip" data-h="' + MF.esc(d.h) + '">' + MF.esc(d.h) + " \u00B7 " + MF.esc(d.e.split(",")[0]) + "</button>";
      });
      html += "</div>";
    }
    html += '<div class="rd-actions">';
    if (state.bookmarks && state.bookmarks.indexOf("text:" + id) >= 0) {
      html += '<button class="lesson-btn ghost" id="rd-bookmark">Remove bookmark</button>';
    } else {
      html += '<button class="lesson-btn ghost" id="rd-bookmark">Bookmark</button>';
    }
    if (state.readTexts && state.readTexts[id]) {
      html += '<button class="lesson-btn check" id="rd-read" disabled>Completed</button>';
    } else {
      html += '<button class="lesson-btn continue" id="rd-read">Mark as read</button>';
    }
    html += "</div>";
    pane.innerHTML = html;

    el("rd-back").addEventListener("click", renderLibraryHub);
    pane.querySelectorAll(".rd-tok").forEach(function (sp) {
      sp.addEventListener("click", function () { showTapWord(sp.dataset.w, t.gloss); });
    });
    pane.querySelectorAll(".mini-speak").forEach(function (b) {
      if (b.dataset.tts) b.addEventListener("click", function () { speak(b.dataset.tts); });
      if (b.dataset.rep) b.addEventListener("click", function () {
        var p = t.paras[parseInt(b.dataset.rep, 10)];
        if (p) repeatSentence(p.ko);
      });
    });
    pane.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () { speak(c.dataset.h); });
    });
    el("rd-bookmark").addEventListener("click", function () { toggleBookmark("text:" + id); renderReader(id); });
    el("rd-read").addEventListener("click", function () {
      MF.ready();
      if (state.readTexts[id]) return;
      state.readTexts[id] = Date.now();
      addXp(20);
      saveState();
      updateTopbarStats();
      toast("Reading completed. 20 XP");
      renderReader(id);
    });
  }

  function showTapWord(w, gloss) {
    var info = MF.wordInfo(w, gloss);
    var box = el("rd-tapinfo");
    if (!box) return;
    if (!info) {
      box.innerHTML = "<b>" + MF.esc(w) + "</b> not in the dictionary yet. Add it to data/dict.js under MH.DICT_EXTRA.";
      return;
    }
    var html = '<div class="tw-h">' + MF.esc(info.h) + " <button class=\"mini-speak\" data-tts=\"" + MF.esc(info.h) + "\">LISTEN</button></div>"
      + (info.p ? '<div class="tw-p">' + MF.esc(info.p) + "</div>" : "")
      + '<div class="tw-e">' + MF.esc(info.e) + "</div>"
      + (info.n ? '<div class="tw-n">' + MF.esc(info.n) + "</div>" : "");
    box.innerHTML = html;
    box.classList.add("show");
    var sp = box.querySelector(".mini-speak");
    if (sp) sp.addEventListener("click", function () { speak(info.h); });
  }

  function toggleBookmark(key) {
    state.bookmarks = state.bookmarks || [];
    var i = state.bookmarks.indexOf(key);
    if (i >= 0) state.bookmarks.splice(i, 1);
    else state.bookmarks.push(key);
    saveState();
  }

  /* ---------- News tab with advanced archive ---------- */
  function renderNewsTab(pane) {
    var html = '<div class="rd-tip">The news of today in the plain formal register, plus an advanced archive of longer editorials and features.</div>';
    html += '<div class="rd-level"><div class="rd-level-head"><span class="rd-level-chip" style="border-color:var(--orange);color:var(--orange);">Today</span><span style="color:var(--text-dim);font-size:0.82rem;">Short items in daily style</span></div>';
    (MH.NEWS || []).forEach(function (n) {
      html += newsCard(n, "news");
    });
    html += "</div>";
    html += '<div class="rd-level"><div class="rd-level-head"><span class="rd-level-chip" style="border-color:var(--purple);color:var(--purple);">Advanced archive</span><span style="color:var(--text-dim);font-size:0.82rem;">Long editorials and features</span></div>';
    (MH.ARCHIVE || []).forEach(function (n) {
      html += newsCard(n, "archive");
    });
    html += "</div>";
    pane.innerHTML = html;
    pane.querySelectorAll(".rd-card").forEach(function (c) {
      var src = c.dataset.src === "archive" ? (MH.ARCHIVE || []) : (MH.NEWS || []);
      c.addEventListener("click", function () {
        var n = src.find(function (x) { return x.id === c.dataset.id; });
        if (n) openArticle({ title: n.title, tag: n.cat, paras: n.paras, gloss: n.gloss, id: n.id }, "BACK TO NEWS", function () {
          renderLibraryHub();
          setTimeout(function () { renderNewsTab(el("lib-pane")); }, 0);
        }, { key: "news", level: c.dataset.src === "archive" ? "ADV" : "" });
      });
    });
  }

  function newsCard(n, src) {
    return '<button class="rd-card" data-id="' + n.id + '" data-src="' + src + '"><div class="rd-card-title">' + MF.esc(n.title) + '</div><div class="rd-card-meta"><span class="rd-tag">' + MF.esc(n.cat) + "</span><span style=\"color:var(--text-dim);\">" + MF.esc(n.date || "") + "</span></div></button>";
  }

  /* ---------- generic article reader ---------- */
  function openArticle(item, backLabel, backFn, opts) {
    opts = opts || {};
    var html = '<button class="back-btn" id="oa-back">' + MF.esc(backLabel) + "</button>";
    html += '<div class="rd-head">'
      + (opts.level ? '<span class="rd-level-chip" style="border-color:' + levelColor(opts.level) + ';color:' + levelColor(opts.level) + ';">' + opts.level + "</span>" : "")
      + "<div><div class=\"rd-title\">" + MF.esc(item.title) + "</div>"
      + (item.tag ? '<div class="rd-tag">' + MF.esc(item.tag) + "</div>" : "")
      + "</div></div>";
    html += '<div class="rd-tip">Tap any word to see its meaning. Listen each paragraph, then read it out loud.</div>';
    html += '<div id="rd-tapinfo" class="rd-tapinfo"></div>';
    (item.paras || []).forEach(function (p, i) {
      html += '<div class="rd-para"><div class="rd-para-row">'
        + '<button class="mini-speak" data-tts="' + MF.esc(p.ko) + '">LISTEN</button>'
        + '<button class="mini-speak ghost" data-rep="' + i + '">REPEAT</button>'
        + "</div>"
        + '<div class="rd-ko">' + MF.tokHTML(p.ko, item.gloss) + "</div>"
        + '<div class="rd-en">' + MF.esc(p.en) + "</div></div>";
    });
    html += '<div class="rd-actions"><button class="lesson-btn check" id="oa-save">Save to bookmarks</button></div>';
    el("lib-pane").innerHTML = html;
    el("oa-back").addEventListener("click", backFn || renderLibraryHub);
    el("oa-save").addEventListener("click", function () {
      state.bookmarks = state.bookmarks || [];
      if (state.bookmarks.indexOf((opts.key || "text") + ":" + item.id) < 0) state.bookmarks.push((opts.key || "text") + ":" + item.id);
      saveState();
      toast("Saved to bookmarks");
    });
    el("lib-pane").querySelectorAll(".rd-tok").forEach(function (sp) {
      sp.addEventListener("click", function () { showTapWord(sp.dataset.w, item.gloss); });
    });
    el("lib-pane").querySelectorAll(".mini-speak").forEach(function (b) {
      if (b.dataset.tts) b.addEventListener("click", function () { speak(b.dataset.tts); });
      if (b.dataset.rep) b.addEventListener("click", function () {
        var p = item.paras[parseInt(b.dataset.rep, 10)];
        if (p) repeatSentence(p.ko);
      });
    });
  }

  /* ---------- Novels and literature tab ---------- */
  function renderNovelsTab(pane) {
    var html = '<div class="rd-tip">Novels and literary works in Munhwao, split into short parts. Tap any word to see its meaning.</div>';
    var works = {};
    (MH.NOVELS || []).forEach(function (n) { (works[n.work] = works[n.work] || []).push(n); });
    Object.keys(works).forEach(function (w) {
      html += '<div class="rd-level"><div class="rd-level-head"><span class="rd-level-chip" style="border-color:var(--purple);color:var(--purple);">' + MF.esc(w) + "</span></div>";
      works[w].forEach(function (n) {
        html += '<button class="rd-card" data-id="' + n.id + '"><div class="rd-card-title">' + MF.esc(n.title) + '</div><div class="rd-card-meta"><span class="rd-tag">Novel</span><span class="rd-tag" style="color:var(--purple);">' + MF.esc(n.part) + "</span></div></button>";
      });
      html += "</div>";
    });
    pane.innerHTML = html || '<p style="color:var(--text-dim);text-align:center;">No novels loaded.</p>';
    pane.querySelectorAll(".rd-card").forEach(function (c) {
      c.addEventListener("click", function () {
        var n = (MH.NOVELS || []).find(function (x) { return x.id === c.dataset.id; });
        if (n) openArticle({ title: n.title, tag: "novel", paras: n.paras, gloss: n.gloss, id: n.id }, "BACK TO NOVELS", function () {
          renderLibraryHub();
          setTimeout(function () { renderNovelsTab(el("lib-pane")); }, 0);
        }, { key: "novel" });
      });
    });
  }

  /* ---------- Academic reading tab ---------- */
  function renderAcademicTab(pane) {
    var html = '<div class="rd-tip">Academic reading: short lecture and essay extracts in formal Munhwao. Tap any word to see its meaning.</div>';
    (MH.ACADEMIC || []).forEach(function (a) {
      html += '<button class="rd-card" data-id="' + a.id + '"><div class="rd-card-title">' + MF.esc(a.title) + '</div><div class="rd-card-meta"><span class="rd-tag">Academic</span><span class="rd-tag" style="color:var(--teal);">' + MF.esc(a.field || "") + "</span></div></button>";
    });
    pane.innerHTML = html || '<p style="color:var(--text-dim);text-align:center;">No academic texts loaded.</p>';
    pane.querySelectorAll(".rd-card").forEach(function (c) {
      c.addEventListener("click", function () {
        var a = (MH.ACADEMIC || []).find(function (x) { return x.id === c.dataset.id; });
        if (a) openArticle({ title: a.title, tag: a.field || "academic", paras: a.paras, gloss: a.gloss, id: a.id }, "BACK TO ACADEMIC", function () {
          renderLibraryHub();
          setTimeout(function () { renderAcademicTab(el("lib-pane")); }, 0);
        }, { key: "acad", level: a.level || "" });
      });
    });
  }

  /* ---------- Listening tab ---------- */
  function renderListenTab(pane) {
    var html = '<div class="rd-tip">Three ways to train your ears. Dictation plays a sentence and you type it. Shadowing plays a sentence and you repeat it out loud. The comprehension quiz plays a sentence and asks a question about it.</div>';
    html += '<div class="ls-modes">'
      + modeBtn("dict") + modeBtn("shadow") + modeBtn("quiz")
      + "</div>" + '<div id="ls-mode-wrap"></div>';
    pane.innerHTML = html;
    function modeBtn(m) {
      if (m === "dict") return '<button class="lib-tab ls-mode" data-mode="dict">Dictation</button>';
      if (m === "shadow") return '<button class="lib-tab ls-mode" data-mode="shadow">Shadowing</button>';
      return '<button class="lib-tab ls-mode" data-mode="quiz">Comprehension</button>';
    }
    function showMode(m) {
      var wrap = el("ls-mode-wrap");
      wrap.innerHTML = "";
      if (m === "quiz") {
        wrap.appendChild(makeDiv('listening', '<div class="lesson-prompt">Comprehension quiz</div><div class="ls-stage" id="ls-stage"></div>'));
        initQuiz();
        return;
      }
      var sel = document.createElement("select");
      sel.className = "lesson-input listen-select";
      (MH.LIBRARY || []).forEach(function (t) {
        var o = document.createElement("option");
        o.value = t.id;
        o.textContent = t.level + " " + t.title;
        sel.appendChild(o);
      });
      wrap.appendChild(sel);
      wrap.appendChild(makeDiv('listening', '<div class="lesson-prompt">' + (m === "dict" ? "Dictation" : "Shadowing") + '</div><div class="ls-stage" id="ls-stage"></div>'));
      pickText(sel.value, m);
      sel.addEventListener("change", function () { pickText(sel.value, m); });
    }
    pane.querySelectorAll(".ls-mode").forEach(function (b) {
      b.addEventListener("click", function () {
        pane.querySelectorAll(".ls-mode").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        showMode(b.dataset.mode);
      });
    });
    showMode("dict");
  }

  function makeDiv(klass, html) {
    var d = document.createElement("div");
    d.className = klass;
    d.innerHTML = html;
    return d;
  }

  function pickText(id, mode) {
    var t = (MH.LIBRARY || []).find(function (x) { return x.id === id; });
    if (!t) return;
    if (mode === "dict") initDictation(t);
    else initShadowing(t);
  }

  function initDictation(t) {
    var stage = el("ls-stage");
    if (!stage) return;
    var sentences = t.paras.map(function (p) { return p.ko; });
    var idx = 0, correctCount = 0, total = sentences.length;
    stage.innerHTML = "";

    function paint() {
      if (idx >= total) {
        stage.innerHTML = '<div style="text-align:center;" class="ls-done"><div class="complete-icon">DONE</div><h2>Dictation finished</h2>'
          + "<p style=\"color:var(--text-dim);margin:8px 0;\">You got " + correctCount + " of " + total + " sentences correct.</p>"
          + '<div class="hero-cta"><button class="lesson-btn check" id="ls-restart">Play again</button></div></div>';
        var r = el("ls-restart");
        if (r) r.addEventListener("click", function () { initDictation(t); });
        return;
      }
      var s = sentences[idx];
      stage.innerHTML = '<div class="ls-progress">Sentence ' + (idx + 1) + " of " + total + "</div>"
        + '<div class="ls-card"><div class="ls-question" id="ls-q" style="letter-spacing:1px;">\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF</div></div>'
        + '<div class="ls-actions"><button class="lesson-btn check" id="ls-play">Play</button>'
        + '<button class="lesson-btn ghost" id="ls-slow">Slow</button></div>'
        + '<div class="ls-input"><input type="text" class="lesson-input" id="ls-in" placeholder="Type what you heard...">'
        + '<div id="ls-kbd"></div></div>'
        + '<div class="ls-actions"><button class="lesson-btn continue" id="ls-check" disabled>Check</button>'
        + '<button class="lesson-btn ghost" id="ls-skip">Skip</button></div>';
      buildKeyboard(el("ls-kbd"), { target: el("ls-in"), composed: true });
      el("ls-in").addEventListener("input", function () {
        var v = toHangul(el("ls-in").value);
        if (v !== el("ls-in").value) el("ls-in").value = v;
        el("ls-check").disabled = el("ls-in").value.trim() === "";
      });
      el("ls-play").addEventListener("click", function () { speak(s, 0.85); });
      el("ls-slow").addEventListener("click", function () { speak(s, 0.6); });
      el("ls-check").addEventListener("click", function () {
        var got = toHangul(el("ls-in").value).replace(/\s+/g, " ").trim();
        var right = got.replace(/[^\uac00-\ud7af]/g, "") === s.replace(/[^\uac00-\ud7af]/g, "") || got === s;
        if (right) correctCount++;
        var fb = el("ls-fb");
        if (!fb) {
          var d = document.createElement("div");
          d.className = "feedback-banner " + (right ? "correct" : "wrong");
          d.id = "ls-fb";
          d.innerHTML = '<div class="fb-head">' + (right ? "Correct" : "Listen again") + "</div>"
            + '<div class="fb-why">' + s + " = " + MF.esc(t.paras[idx].en) + "</div>";
          stage.appendChild(d);
        }
        el("ls-check").disabled = true;
        var next = document.createElement("button");
        next.className = "lesson-btn continue " + (right ? "correct" : "wrong");
        next.textContent = "Continue";
        next.addEventListener("click", function () { idx++; paint(); });
        stage.appendChild(next);
      });
      el("ls-skip").addEventListener("click", function () { idx++; paint(); });
    }
    paint();
  }

  function initShadowing(t) {
    var stage = el("ls-stage");
    if (!stage) return;
    var sentences = t.paras.map(function (p) { return p.ko; });
    var idx = 0;
    stage.innerHTML = "";

    function paint() {
      if (idx >= sentences.length) {
        stage.innerHTML = '<div style="text-align:center;" class="ls-done"><div class="complete-icon">DONE</div><h2>Shadowing finished</h2>'
          + '<p style="color:var(--text-dim);margin:8px 0;">Repeat each line after the speaker to build the Northern rhythm.</p>'
          + '<div class="hero-cta"><button class="lesson-btn check" id="ls-restart">Play again</button></div></div>';
        var r = el("ls-restart");
        if (r) r.addEventListener("click", function () { initShadowing(t); });
        return;
      }
      var s = sentences[idx];
      stage.innerHTML = '<div class="ls-progress">Line ' + (idx + 1) + " of " + sentences.length + "</div>"
        + '<div class="ls-card"><div class="ls-question">' + MF.esc(t.paras[idx].en) + "</div>"
        + '<div class="ls-hidden" id="ls-reveal" style="display:none;">' + MF.esc(s) + "</div></div>"
        + '<div class="ls-actions">'
        + '<button class="lesson-btn check" id="ls-play">Listen</button>'
        + '<button class="lesson-btn ghost" id="ls-reveal-btn">Reveal</button>'
        + '<button class="lesson-btn continue" id="ls-again">Continue</button></div>';
      el("ls-play").addEventListener("click", function () { speak(s, 0.85); });
      el("ls-reveal-btn").addEventListener("click", function () {
        el("ls-reveal").style.display = "block";
      });
      el("ls-again").addEventListener("click", function () { idx++; paint(); });
    }
    paint();
  }

  /* ---------- Listening comprehension quiz ---------- */
  function initQuiz() {
    var stage = el("ls-stage");
    if (!stage) return;
    MF.ready();
    var items = MH.LISTEN_QUIZ || [];
    var idx = 0, right = 0;
    if (!items.length) { stage.innerHTML = '<p style="color:var(--text-dim);text-align:center;">No quiz items loaded.</p>'; return; }
    stage.innerHTML = "";
    function paint() {
      if (idx >= items.length) {
        var total = items.length;
        var pct = Math.round((right / total) * 100);
        var gained = false;
        if (pct >= 80 && !(state.quizDone && state.quizDone.compre)) {
          state.quizDone = state.quizDone || {};
          state.quizDone.compre = 1;
          addXp(30);
          saveState();
          updateTopbarStats();
          gained = true;
        }
        stage.innerHTML = '<div style="text-align:center;" class="ls-done"><div class="complete-icon">DONE</div><h2>Comprehension finished</h2>'
          + '<p style="color:var(--text-dim);margin:8px 0;">You answered ' + right + " of " + total + " correctly (" + pct + "%).</p>"
          + (gained ? '<p style="color:var(--green);font-weight:800;">+30 XP</p>' : "")
          + '<div class="hero-cta"><button class="lesson-btn check" id="ls-restart">Play again</button></div></div>';
        var r = el("ls-restart");
        if (r) r.addEventListener("click", function () { initQuiz(); });
        return;
      }
      var it = items[idx];
      stage.innerHTML = '<div class="ls-progress">Question ' + (idx + 1) + " of " + items.length + "</div>"
        + '<div class="ls-card"><div class="ls-question" id="ls-q" style="letter-spacing:2px;">\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF</div></div>'
        + '<div class="ls-actions"><button class="lesson-btn check" id="ls-play">Play</button>'
        + '<button class="lesson-btn ghost" id="ls-slow">Slow</button></div>'
        + '<div class="ls-quiz-q">' + MF.esc(it.q) + "</div>"
        + '<div class="ls-quiz-opts" id="ls-quiz-opts"></div>';
      el("ls-play").addEventListener("click", function () { speak(it.ko, 0.85); });
      el("ls-slow").addEventListener("click", function () { speak(it.ko, 0.6); });
      var opts = el("ls-quiz-opts");
      it.opts.forEach(function (o, oi) {
        var b = document.createElement("button");
        b.className = "lesson-btn ghost ls-opt";
        b.textContent = o;
        b.addEventListener("click", function () {
          var good = oi === it.a;
          if (good) right++;
          var fb = document.createElement("div");
          fb.className = "feedback-banner " + (good ? "correct" : "wrong");
          fb.innerHTML = '<div class="fb-head">' + (good ? "Correct" : "Not quite") + "</div>"
            + '<div class="fb-why">' + MF.esc(it.en) + "</div>";
          stage.appendChild(fb);
          var next = document.createElement("button");
          next.className = "lesson-btn continue";
          next.textContent = "Continue";
          next.addEventListener("click", function () { idx++; paint(); });
          stage.appendChild(next);
          [].forEach.call(opts.children, function (x) { x.disabled = true; });
        });
        opts.appendChild(b);
      });
    }
    paint();
  }

  /* ---------- Media tab ---------- */
  function renderMediaTab(pane) {
    var html = '<div class="rd-tip">This immersion page lists places to grow your own collection. Put audio and video files in the media folder, then press play.</div>';
    (MH.MEDIA || []).forEach(function (m, i) {
      var icon = { "radio": "\u25B6", "news": "N", "video": "V", "music": "\u266A", "lesson": "L" }[m.kind] || ">";
      html += '<div class="media-card"><div class="media-icon">' + icon + "</div>"
        + '<div><div class="media-name">' + MF.esc(m.name) + "</div>"
        + "<div class=\"media-kind\">" + MF.esc(m.kind) + "</div>"
        + '<div class="media-note">' + MF.esc(m.note) + "</div></div>"
        + (m.kind === "video" || m.kind === "lesson"
            ? '<video class="media-video" controls src="' + MF.esc(BASE_URL + "media/" + m.file) + '" data-msg="Add your own file: media\\' + MF.esc(m.file) + '"></video>'
            : '<button class="lesson-btn check media-play" data-file="' + MF.esc(m.file) + '">Play</button>')
        + "</div>";
    });
    pane.innerHTML = html;
    pane.querySelectorAll(".media-play").forEach(function (b) {
      b.addEventListener("click", function () {
        var src = BASE_URL + "media/" + b.dataset.file;
        ensureAudio();
        audioQ.push(src);
        if (!audioBusy) { audioBusy = true; audioNext(); }
        setTimeout(function () {
          if (audioEl && audioEl.error) toast("Put your own file in the media folder: " + b.dataset.file);
        }, 1200);
      });
    });
    pane.querySelectorAll("video").forEach(function (v) {
      v.addEventListener("error", function () {
        v.outerHTML = '<div class="media-note" style="color:var(--orange);">Add your own file: ' + MF.esc(v.dataset.msg || v.getAttribute("src")) + "</div>";
      });
    });
  }

  /* ---------- Culture tab ---------- */
  function renderCultureTab(pane) {
    var html = '<div class="rd-tip">Culture and history notes in plain Munhwao. Tap any word to see its meaning.</div>';
    var groups = {};
    (MH.CULTURE || []).forEach(function (c) { (groups[c.tag] = groups[c.tag] || []).push(c); });
    Object.keys(groups).forEach(function (tag) {
      html += '<div class="rd-level"><div class="rd-level-head"><span class="rd-level-chip" style="border-color:var(--orange);color:var(--orange);">' + MF.esc(tag) + "</span></div>";
      groups[tag].forEach(function (c) {
        html += '<button class="rd-card" data-id="' + c.id + '"><div class="rd-card-title">' + MF.esc(c.title) + "</div></button>";
      });
      html += "</div>";
    });
    pane.innerHTML = html;
    pane.querySelectorAll(".rd-card").forEach(function (b) {
      b.addEventListener("click", function () { openCulture(b.dataset.id); });
    });
  }

  function openCulture(id) {
    var c = (MH.CULTURE || []).find(function (x) { return x.id === id; });
    if (!c) return;
    openArticle({ title: c.title, tag: c.tag, paras: c.paras, gloss: c.gloss, id: c.id }, "BACK TO CULTURE", function () {
      renderLibraryHub();
      setTimeout(function () { renderCultureTab(el("lib-pane")); }, 0);
    }, { key: "culture" });
  }

  /* ---------- repeat: listen then record ---------- */
  function repeatSentence(ko) {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      speak(ko, 0.85);
      setTimeout(function () {
        startListenCheck(ko);
      }, Math.max(1500, ko.length * 120));
    } else {
      speak(ko, 0.85);
      toast("Tap the speaker to hear it again, then read aloud.");
    }
  }

  function startListenCheck(target) {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    var rec = new SR();
    rec.lang = "ko-KR";
    rec.interimResults = false;
    rec.maxAlternatives = 2;
    rec.onresult = function (ev) {
      var txt = (ev.results[0][0].transcript || "").trim();
      var clean = function (s) { return String(s).replace(/[^\uac00-\ud7af\s]/g, "").replace(/\s+/g, " ").trim(); };
      var score = compareTexts(clean(txt), clean(target));
      var fb = document.createElement("div");
      fb.className = "feedback-banner " + (score >= 70 ? "correct" : "wrong");
      fb.innerHTML = '<div class="fb-head">' + (score >= 70 ? "Good reading" : "Keep trying") + " " + score + "</div>"
        + '<div class="fb-why">Heard: ' + MF.esc(txt) + "</div>";
      var stage = el("ls-stage") || el("lib-pane");
      if (stage) stage.appendChild(fb);
    };
    rec.onerror = function () { toast("Speech recognition unavailable. Read the sentence out loud."); };
    try { rec.start(); } catch (e) { toast("Speech recognition needs a secure or local web origin."); }
  }

  function compareTexts(a, b) {
    var sa = a.split(""), sb = b.split("");
    var m = 0, n = sb.length;
    sb.forEach(function (ch) {
      var i = sa.indexOf(ch);
      if (i >= 0) { m++; sa.splice(i, 1); }
    });
    return n ? Math.round((m / Math.max(n, 1)) * 100) : 0;
  }

  /* =====================================================================
     LIVE LANDING REFRESH
     The landing page keeps its own progress numbers fresh without a
     reload. A small timer re-renders it whenever a relevant part of the
     saved state changes while the page is visible, and again when the
     tab returns to view.
     ===================================================================== */
  function liveSignature() {
    try {
      var dk = 0;
      try { if (typeof dueReviewCount === "function") dk = dueReviewCount(); } catch (e) {}
      var ud = state.user || {};
      return [Object.keys(state.lessonCompletion || {}).length, state.xp, state.streak, state.dayXp,
        Object.keys(state.wordMastery || {}).length, (state.placement || {}).tier || "tier0", ud.name || ""].join("|") + "|" + dk;
    } catch (e) { return ""; }
  }
  MF.startLive = function () {
    if (MF._liveOn) return;
    MF._liveOn = true;
    MF._liveSig = liveSignature();
    setInterval(function () {
      var pg = document.getElementById("page-home");
      if (!pg || !pg.classList.contains("active")) return;
      if (document.visibilityState === "hidden") return;
      var cur = liveSignature();
      if (cur !== MF._liveSig) {
        MF._liveSig = cur;
        if (typeof renderHome === "function") renderHome();
      }
    }, 1200);
    document.addEventListener("visibilitychange", function () {
      var pg = document.getElementById("page-home");
      if (document.visibilityState === "visible" && pg && pg.classList.contains("active") && typeof renderHome === "function") renderHome();
    });
  };
  MF.startLive();
})();