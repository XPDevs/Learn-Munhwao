/* =====================================================================
   EXTENDED TOOLBOX  (Munhwao Mastery)
   Overrides renderTools to add a full reference desk: dictionary,
   North vs South comparison, frequency and example banks, flashcard
   generator, Anki export, stroke reference, handwriting canvas, OCR,
   grammar encyclopedia, bookmark and note manager, analytics,
   certificates, export and import, cloud sync, a local community board,
   a classroom mode, and settings for your profile and speech rate.
   ===================================================================== */
(function () {
  "use strict";
  window.MF = window.MF || {};

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    window.deferredPrompt = e;
  });

  /* ---------- feather weight dispatch ---------- */
  var FEATURES = {};

  window.renderTools = function () {
    var box = el("tools-content");
    var html = '<div class="tool-box"><div class="grid-2">';
    var groups = [
      { head: "Reference", items: [
        ["dict", "Dictionary", "Look up any word with Munhwao notes and samples."],
        ["compare", "North vs South", "Compare the Munhwao form with the South form."],
        ["freq", "Frequency", "Banded word lists to target your study."],
        ["examples", "Example bank", "Real sentences with grammar tags and level."],
        ["gramency", "Grammar encyclopedia", "Searchable grammar articles for every rule."],
        ["lesson-search", "Lesson search", "Find any lesson across all 140."]
      ] },
      { head: "Practice", items: [
        ["flash", "Flashcards", "Spaced repetition queue of words you are learning."],
        ["gen", "Deck generator", "Build a custom flashcard deck from any band or tier."],
        ["anki", "Anki export", "Export a deck as a text file for the Anki app."],
        ["conjugator", "Conjugator", "Input any verb stem; see the polite forms."],
        ["numbers", "Numbers", "Native and Sino number trainer."],
        ["hangul", "Hangul", "Alphabet chart and composer."],
        ["writing", "Writing", "Write target words and check closeness."],
        ["strokes", "Stroke order", "Jamo strokes and syllable anatomy."],
        ["handwrite", "Handwriting", "Trace syllables with a pen on a canvas."],
        ["ocr", "OCR scanner", "Read Hangul from a photo of text."]
      ] },
      { head: "Study", items: [
        ["placement", "Placement", "Retake the level placement test."],
        ["roadmap", "Roadmap", "A1 to C2 progression map with your position."],
        ["plan", "Study plan", "Set a daily goal and a custom plan."],
        ["achieve", "Achievements", "Quest list with progress bars."],
        ["analytics", "Analytics", "Accuracy, SRS health and learning velocity."]
      ] },
      { head: "Your data", items: [
        ["bookmarks", "Bookmarks and notes", "Everything you saved, with sticky notes."],
        ["export", "Export", "Save your full progress as a JSON file."],
        ["import", "Import", "Restore a JSON backup on this device or another."],
        ["sync", "Cloud sync", "Push and pull with your own server."],
        ["cert", "Certificates", "Download a certificate for each finished tier."]
      ] },
      { head: "Community", items: [
        ["community", "Community board", "A local forum for posts, likes and study groups."],
        ["class", "Classroom", "Create a class, join with a code, share a practice deck."]
      ] },
      { head: "Setup", items: [
        ["settings", "Settings", "Name, speech rate and appearance."],
        ["api", "API and contribution", "The documented data files and how to add words."]
      ] }
    ];
    groups.forEach(function (g) {
      html += '<div class="tool-group"><div class="tool-group-head">' + g.head + "</div>";
      g.items.forEach(function (t) {
        html += '<button class="tool-card" data-open="' + t[0] + '"><div class="tool-name">' + t[1] + '</div><div class="tool-desc">' + t[2] + "</div></button>";
      });
      html += "</div>";
    });
    html += "</div></div>";
    box.innerHTML = html;
    box.querySelectorAll(".tool-card").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.dataset.open;
        if (FEATURES[id]) openFeature(id);
        else openTool(id);
      });
    });
  };

  function openFeature(id) {
    var box = el("tools-content");
    box.innerHTML = '<div class="tool-box"><button class="back-btn" id="tool-back">BACK TO TOOLS</button><div id="tool-pane"></div></div>';
    el("tool-back").addEventListener("click", renderTools);
    FEATURES[id](el("tool-pane"));
  }

  /* =====================================================================
     DICTIONARY
     ===================================================================== */
  FEATURES.dict = function (pane) {
    var html = '<input type="text" class="lesson-input" id="dict-q" placeholder="Search in Hangul or English...">'
      + '<div id="dict-cats"></div><div id="dict-out"></div>';
    pane.innerHTML = html;
    var cats = {};
    MH.dictAll().forEach(function (d) { (cats[d.c] = cats[d.c] || []).push(d); });

    function row(d) {
      var b = state.bookmarks.indexOf("dict:" + d.h) >= 0;
      return '<button class="ref-row" data-h="' + d.h + '"><span class="ref-h">' + d.h + "</span><span class=\"ref-e\">" + d.e + '</span><span class="ref-speak">' + (b ? "SAVED" : "PLAY") + "</span></button>";
    }
    function paint(items) {
      var out = el("dict-out");
      if (!items.length) { out.innerHTML = '<div style="color:var(--text-dim);padding:12px;">No matches.</div>'; return; }
      out.innerHTML = items.map(row).join("");
      out.querySelectorAll(".ref-row").forEach(function (b) { b.addEventListener("click", function () { dictDetail(b.dataset.h); }); });
    }
    var catHtml = "";
    Object.keys(cats).sort().forEach(function (c) {
      catHtml += '<button class="chip dic-cat" data-c="' + c + '">' + c + " " + cats[c].length + "</button>";
    });
    el("dict-cats").innerHTML = catHtml;
    el("dict-cats").querySelectorAll(".dic-cat").forEach(function (b) {
      b.addEventListener("click", function () { paint(cats[b.dataset.c]); });
    });
    el("dict-q").addEventListener("input", function () {
      var q = el("dict-q").value.trim().toLowerCase();
      if (!q) return;
      paint(MH.dictLookup(q));
    });
    paint(MH.dictAll().slice(0, 40));
  };

  function dictDetail(h) {
    var d = MH.lookupHangul(h) || MH.VOCAB[Object.keys(MH.VOCAB).find(function (k) { return MH.VOCAB[k].h === h; })];
    var box = el("tools-content");
    box.innerHTML = '<div class="tool-box"><button class="back-btn" id="td-back">BACK TO DICTIONARY</button><div id="tool-pane"></div></div>';
    if (d) {
      var html = '<div class="learn-card"><div class="learn-hangul">' + d.h + '</div>'
        + '<button class="speaker-btn" id="td-speak">SP</button>'
        + (d.p ? '<div class="learn-phon">' + d.p + "</div>" : "")
        + '<div class="learn-en">' + d.e + "</div>"
        + (d.n ? '<div class="learn-note">' + d.n + "</div>" : "")
        + (d.s ? '<div class="learn-sample"><div class="ls-h">' + d.s + "</div></div>" : "")
        + '<div class="rd-actions"><button class="lesson-btn ghost" id="td-bm">' + (state.bookmarks.indexOf("dict:" + d.h) >= 0 ? "Remove bookmark" : "Bookmark") + "</button></div></div>";
      el("tool-pane").innerHTML = html;
      el("td-speak").addEventListener("click", function () { speak(d.h); });
      el("td-bm").addEventListener("click", function () {
        var k = "dict:" + d.h;
        var i = state.bookmarks.indexOf(k);
        if (i >= 0) state.bookmarks.splice(i, 1); else state.bookmarks.push(k);
        saveState(); dictDetail(h);
      });
    } else {
      el("tool-pane").innerHTML = '<div style="color:var(--text-dim);">Not found.</div>';
    }
    el("td-back").addEventListener("click", function () { FEATURES.dict(el("tools-content").querySelector("#tool-pane")); });
  }

  /* =====================================================================
     NORTH VS SOUTH
     ===================================================================== */
  FEATURES.compare = function (pane) {
    var html = '<div class="rd-tip">The same idea in the two standards. North on the left, South on the right. This is a reference tool for awareness, not for learning South words.</div>';
    (MH.COMPARE || []).forEach(function (c) {
      html += '<div class="cmp-row"><div class="cmp-side cmp-nk"><div class="cmp-w">' + c.nk + '</div><button class="mini-speak" data-tts="' + c.nk + '">PLAY</button></div>'
        + '<div class="cmp-sym">\u2194</div>'
        + '<div class="cmp-side"><div class="cmp-w">' + c.sk + "</div></div>"
        + '<div class="cmp-note">' + (c.e ? "<b>" + c.e + "</b> " : "") + c.n + "</div></div>";
    });
    pane.innerHTML = html;
    pane.querySelectorAll(".mini-speak").forEach(function (b) { b.addEventListener("click", function () { speak(b.dataset.tts); }); });
  };

  /* =====================================================================
     FREQUENCY
     ===================================================================== */
  FEATURES.freq = function (pane) {
    var html = '<div class="rd-tip">Frequency bands for focused study. Tap a band to start a flashcard session with those words.</div>';
    MH.freqBands().forEach(function (b) {
      html += '<button class="freq-row" data-name="' + b.name + '"><div class="freq-name">' + b.name + "</div><div class=\"freq-desc\">" + b.desc + "</div><div class=\"freq-count\">" + b.keys.length + " words</div></button>";
    });
    pane.innerHTML = html;
    pane.querySelectorAll(".freq-row").forEach(function (b) {
      b.addEventListener("click", function () {
        var band = MH.freqBands().find(function (x) { return x.name === b.dataset.name; });
        if (!band || !band.keys.length) return;
        deckSession(band.keys, band.name);
      });
    });
  };

  /* ---------- shared deck session (uses state.srs scheduling) ---------- */
  function deckSession(keys, title) {
    var box = el("tools-content");
    box.innerHTML = '<div class="tool-box"><button class="back-btn" id="dk-back">BACK TO TOOLS</button><div id="tool-pane"></div></div>';
    el("dk-back").addEventListener("click", renderTools);
    var pane = el("tool-pane");
    var q = keys.slice();
    shuffle(q);
    var i = 0, good = 0;

    function step() {
      if (i >= q.length) {
        pane.innerHTML = '<div style="text-align:center;"><div class="complete-icon">DONE</div><h2>Deck complete</h2><p style="color:var(--text-dim);">' + good + " of " + q.length + " marked good. Your reviews are saved.</p></div>";
        return;
      }
      var k = q[i];
      var card = MH.DICT[k] || MH.vocab(k);
      pane.innerHTML = '<div style="text-align:center;"><div class="lesson-prompt">' + title + "</div>"
        + '<div class="learn-card"><div class="learn-hangul">' + (card ? card.h : k) + "</div>"
        + (card && card.p ? '<div class="learn-phon">' + card.p + "</div>" : "")
        + '<button class="lesson-btn speaker" id="dk-play">PLAY</button>'
        + '<div class="learn-en" id="dk-en" style="display:none;">' + (card ? card.e : "") + "</div>"
        + '<div id="dk-act" style="margin-top:14px;display:none;">'
        + '<button class="lesson-btn wrong" id="dk-bad">Again</button> '
        + '<button class="lesson-btn check" id="dk-good">Good</button> '
        + '<button class="lesson-btn correct" id="dk-easy">Easy</button></div></div>';
      if (card) speak(card.h);
      el("dk-play").addEventListener("click", function () { if (card) speak(card.h); });
      el("dk-en").style.display = "block";
      el("dk-act").style.display = "block";
      el("dk-bad").addEventListener("click", function () { srsReview(k, 1); saveState(); i++; step(); });
      el("dk-good").addEventListener("click", function () { srsReview(k, 4); saveState(); good++; i++; step(); });
      el("dk-easy").addEventListener("click", function () { srsReview(k, 5); saveState(); good++; i++; step(); });
    }
    step();
  }

  /* =====================================================================
     EXAMPLE BANK
     ===================================================================== */
  FEATURES.examples = function (pane) {
    var html = '<input type="text" class="lesson-input" id="ex-q" placeholder="Filter by grammar tag...">'
      + '<select class="lesson-input" id="ex-tier"><option value="">All levels</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option></select>'
      + '<div id="ex-out"></div>';
    pane.innerHTML = html;
    function paint() {
      var q = (el("ex-q").value || "").toLowerCase();
      var t = el("ex-tier").value;
      var items = (MH.EXAMPLE_SENTENCES || []).filter(function (s) {
        var okT = !t || String(s.tier) === t;
        var okQ = !q || (s.ko + " " + s.en + " " + (s.g || "")).toLowerCase().indexOf(q) >= 0;
        return okT && okQ;
      });
      el("ex-out").innerHTML = items.map(function (s) {
        return '<div class="ex-row"><div class="rd-ko">' + s.ko + ' <button class="mini-speak" data-tts="' + MF.esc(s.ko) + '">PLAY</button></div>'
          + '<div class="rd-en">' + MF.esc(s.en) + "</div>"
          + '<div class="ex-g">' + MF.esc(s.g || "") + (s.tier ? " \u00B7 tier " + s.tier : "") + "</div></div>";
      }).join("");
      el("ex-out").querySelectorAll(".mini-speak").forEach(function (b) { b.addEventListener("click", function () { speak(b.dataset.tts); }); });
    }
    el("ex-q").addEventListener("input", paint);
    el("ex-tier").addEventListener("change", paint);
    paint();
  };

  /* =====================================================================
     GRAMMAR ENCYCLOPEDIA
     ===================================================================== */
  FEATURES.gramency = function (pane) {
    var html = '<input type="text" class="lesson-input" id="ge-q" placeholder="Search the grammar encyclopedia...">' + '<div id="ge-out"></div>';
    pane.innerHTML = html;
    function paint() {
      var q = (el("ge-q").value || "").toLowerCase();
      var items = (MH.GRAMMAR_ENCYCLOPEDIA || []).filter(function (g2) {
        var hay = ((g2.title || "") + " " + (g2.body || "") + " " + (g2.example || "") + " " + (g2.pattern || "") + " " + ((g2.tags || []).join(" "))).toLowerCase();
        return !q || hay.indexOf(q) >= 0;
      });
      var html2 = items.map(function (g2, i) {
        return '<button class="ge-card" data-i="' + i + '"><div class="ge-title">' + MF.esc(g2.title || "") + '</div><div class="ge-pat">' + MF.esc(g2.pattern || "") + "</div></button>";
      }).join("");
      el("ge-out").innerHTML = html2 || '<div style="color:var(--text-dim);padding:12px;">No entries.</div>';
      el("ge-out").querySelectorAll(".ge-card").forEach(function (b) {
        b.addEventListener("click", function () {
          var g2 = items[parseInt(b.dataset.i, 10)];
          var tgt = el("tool-pane");
          tgt.innerHTML = '<button class="back-btn" id="ge-back">BACK</button><div class="ge-card open"><div class="ge-title">' + MF.esc(g2.title || "") + '</div>'
            + '<div class="ge-pat">' + MF.esc(g2.pattern || "") + "</div>"
            + (g2.body ? '<div class="ge-body">' + MF.esc(g2.body) + "</div>" : "")
            + (g2.example ? '<div class="ge-example">' + MF.esc(g2.example) + " <button class=\"mini-speak\" data-tts=\"" + MF.esc((MF.cleanKo ? MF.cleanKo(g2.example) : g2.example)) + '">PLAY</button></div>' : "")
            + "</div>";
          el("ge-back").addEventListener("click", function () { FEATURES.gramency(tgt); });
          var sp = tgt.querySelector(".mini-speak");
          if (sp) sp.addEventListener("click", function () { speak(sp.dataset.tts); });
        });
      });
    }
    el("ge-q").addEventListener("input", paint);
    paint();
  };

  /* =====================================================================
     LESSON SEARCH
     ===================================================================== */
  FEATURES["lesson-search"] = function (pane) {
    var html = '<input type="text" class="lesson-input" id="ls-q" placeholder="Search lesson titles and word cards...">' + '<div id="ls-out"></div>';
    pane.innerHTML = html;
    function paint() {
      var q = (el("ls-q").value || "").toLowerCase();
      var out = el("ls-out");
      if (!q) { out.innerHTML = ""; return; }
      var hits = [];
      MH.LESSONS.forEach(function (l) {
        var hay = l.title + " " + (l.desc || "") + " ";
        (l.learn || []).forEach(function (c) { hay += (c.h || "") + " " + (c.e || "") + " "; });
        if (hay.toLowerCase().indexOf(q) >= 0) hits.push(l);
      });
      out.innerHTML = hits.slice(0, 30).map(function (l) {
        return '<button class="ref-row ls-row" data-id="' + l.id + '"><span class="ref-h">' + l.id + " \u00B7 " + MF.esc(l.title) + "</span><span class=\"ref-e\">tier " + l.tier + "</span></button>";
      }).join("");
      out.querySelectorAll(".ls-row").forEach(function (b) {
        b.addEventListener("click", function () { startLesson(parseInt(b.dataset.id, 10)); });
      });
    }
    el("ls-q").addEventListener("input", paint);
    paint();
  };

  /* =====================================================================
     DECK GENERATOR
     ===================================================================== */
  FEATURES.gen = function (pane) {
    var html = '<div class="lesson-prompt">Build a custom deck</div>'
      + '<div class="rd-tip">Choose a frequency band or a tier of the course, then start a flashcard session or export to Anki.</div>'
      + '<div id="gen-mode"><select class="lesson-input" id="gen-src"><option value="band">Frequency band</option><option value="tier">Course tier</option></select></div>'
      + '<div id="gen-picker"></div>'
      + '<div class="ls-actions" style="margin-top:12px;"><button class="lesson-btn check" id="gen-go">Start flashcards</button> '
      + '<button class="lesson-btn ghost" id="gen-anki">Export to Anki</button></div>';
    pane.innerHTML = html;
    function picker() {
      var src = el("gen-src").value;
      var opt = "";
      if (src === "band") MH.freqBands().forEach(function (b) { opt += '<option value="b:' + b.name + '">' + b.name + "</option>"; });
      else for (var t = 1; t <= 20; t++) {
        var lessons = MH.LESSONS.filter(function (l) { return l.tier === t; });
        if (lessons.length) opt += '<option value="t:' + t + '">Tier ' + t + " (" + lessons.length + " lessons)</option>";
      }
      el("gen-picker").innerHTML = '<select class="lesson-input" id="gen-which">' + opt + "</select>";
    }
    function resolve() {
      var which = el("gen-which").value;
      var keys = [];
      if (which.indexOf("b:") === 0) {
        var band = MH.freqBands().find(function (x) { return x.name === which.slice(2); });
        keys = band ? band.keys.slice() : [];
      } else if (which.indexOf("t:") === 0) {
        var t = parseInt(which.slice(2), 10);
        var seen = {};
        MH.LESSONS.filter(function (l) { return l.tier === t; }).forEach(function (l) {
          ((l.learn || []).concat(l.learnExtra || [])).forEach(function (c) {
            if (c.k && !seen[c.k]) { seen[c.k] = true; keys.push(c.k); }
          });
        });
      }
      return keys.filter(function (k) { return MH.DICT[k]; });
    }
    el("gen-src").addEventListener("change", picker);
    el("gen-go").addEventListener("click", function () {
      var keys = resolve();
      if (!keys.length) { toast("No words found in that group"); return; }
      deckSession(keys, "Custom deck");
    });
    el("gen-anki").addEventListener("click", function () { exportAnkiFrom(resolve()); });
    picker();
  };

  /* =====================================================================
     ANKI EXPORT
     ===================================================================== */
  function exportAnkiFrom(keys) {
    if (!keys.length) { toast("Nothing to export. Build a deck first."); return; }
    var lines = [];
    keys.forEach(function (k) {
      var d = MH.DICT[k];
      if (!d) return;
      var front = d.h;
      var back = d.e + (d.p ? "\n" + d.p : "") + (d.s ? "\n" + d.s : "") + (d.n ? "\n" + d.n : "");
      lines.push(front + "\t" + back.replace(/[\r\n]+/g, " "));
    });
    downloadText("munhwao_deck.txt", lines.join("\n"));
    toast("Exported " + lines.length + " cards");
  }
  FEATURES.anki = function (pane) {
    var html = '<div class="lesson-prompt">Anki export</div>'
      + '<div class="rd-tip">Export all words, one frequency band, or the whole dictionary as a two column text file. Anki imports it as a basic card type.</div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="an-1">All course words</button> '
      + '<button class="lesson-btn check" id="an-2">Band only</button> '
      + '<button class="lesson-btn check" id="an-3">Full dictionary</button></div>';
    pane.innerHTML = html;
    function bandKeys() {
      var sel = document.createElement("select");
      sel.id = "an-band";
      sel.className = "lesson-input";
      var opt = "";
      MH.freqBands().forEach(function (b) { opt += '<option value="' + b.name + '">' + b.name + "</option>"; });
      sel.innerHTML = opt;
      pane.appendChild(sel);
      return sel;
    }
    el("an-1").addEventListener("click", function () { exportAnkiFrom(MH.VOCAB_KEYS.slice()); });
    el("an-3").addEventListener("click", function () { exportAnkiFrom(Object.keys(MH.DICT)); });
    el("an-2").addEventListener("click", function () {
      var sel = el("an-band");
      if (!sel) sel = bandKeys();
      var band = MH.freqBands().find(function (x) { return x.name === sel.value; });
      exportAnkiFrom(band ? band.keys : []);
    });
  };

  function downloadText(name, text) {
    var blob = new Blob(["\uFEFF" + text], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  }

  /* =====================================================================
     STROKE ORDER
     ===================================================================== */
  var STROKE_COUNTS = {
    "\u3131": 2, "\u3132": 4, "\u3133": 3, "\u3134": 2, "\u3135": 3, "\u3136": 4, "\u3137": 3, "\u3138": 1,
    "\u3139": 4, "\u313A": 3, "\u313B": 4, "\u313C": 3, "\u313D": 4, "\u313E": 5, "\u313F": 6, "\u3140": 5,
    "\u3141": 4, "\u3142": 3, "\u3143": 4, "\u3144": 5, "\u3145": 3, "\u3146": 4, "\u3147": 1, "\u3148": 3,
    "\u3149": 4, "\u314A": 4, "\u314B": 3, "\u314C": 4, "\u314D": 4, "\u314E": 3,
    "\u314F": 2, "\u3150": 3, "\u3151": 3, "\u3152": 4, "\u3153": 2, "\u3154": 2, "\u3155": 3, "\u3156": 3,
    "\u3157": 1, "\u3158": 1, "\u3159": 3, "\u315A": 2, "\u315B": 3, "\u315C": 3, "\u315D": 2
  };
  FEATURES.strokes = function (pane) {
    var html = '<div class="lesson-prompt">Stroke order reference</div>'
      + '<div class="rd-tip">Jamo stroke counts as standard writing practice. Tap a syllable to break it into its letters.</div>'
      + '<div class="chip-row">';
    (MH.STROKE_EXAMPLES || []).forEach(function (s) { html += '<button class="chip" data-h="' + s.h + '">' + s.h + "</button>"; });
    html += "</div><div id=\"st-out\"></div>";
    pane.innerHTML = html;
    function anatomy(h) {
      var jamos = decomposeSyllable(h);
      if (!jamos) return "";
      var rows = jamos.map(function (jn) {
        var j = fromJamoCode(jn);
        return '<div class="st-row"><span class="st-j">' + (j || jn) + "</span><span>" + (STROKE_COUNTS[j] || STROKE_COUNTS[jn] || "?") + " strokes</span></div>";
      }).join("");
      return '<div class="learn-card" style="margin-top:12px;"><div class="learn-hangul">' + h + "</div>" + rows + "</div>";
    }
    function paintH() {
      var h = el("st-current");
      if (!h) return;
      h = h.textContent;
      el("st-out").innerHTML = anatomy(h);
    }
    pane.innerHTML = html + '<div class="st-current" id="st-current">반</div><div id="st-out"></div>';
    el("st-out").innerHTML = anatomy("반");
    pane.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        el("st-current").textContent = b.dataset.h;
        el("st-out").innerHTML = anatomy(b.dataset.h);
      });
    });
  };

  var JONG_BY_INDEX = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  function decomposeSyllable(s) {
    if (!s || !/[가-힣]/.test(s)) return null;
    var code = s.charCodeAt(0) - 0xac00;
    var jong = code % 28, jung = ((code - jong) / 28) % 21, cho = Math.floor((code - jong) / 28 / 21);
    var out = [];
    if (MH.CHO && MH.CHO[cho]) out.push(MH.CHO[cho].j); else out.push(String.fromCharCode(0x3131 + choOffset(cho)));
    if (MH.JUNG && MH.JUNG[jung]) out.push(MH.JUNG[jung].j);
    if (jong) out.push(JONG_BY_INDEX[jong] || ("ㄱ"));
    return out;
  }
  function choOffset(i) {
    var map = { 0: 0, 1: 2, 2: 3, 3: 6, 4: 13, 5: 17, 6: 19, 7: 20, 8: 22, 9: 25, 10: 26, 11: 27, 12: 30, 13: 32, 14: 35, 15: 37, 16: 39, 17: 42, 18: 51 };
    return map[i] || i;
  }
  function fromJamoCode(j) {
    for (var i = 0; i < j.length; i++) {
      var ch = j.charAt(i);
      if (/[ㄱ-ㅎㅏ-ㅣ]/.test(ch)) return ch;
    }
    var code = j.charCodeAt(0);
    return code >= 0x3131 && code <= 0x3163 ? j : j;
  }

  /* =====================================================================
     HANDWRITING CANVAS
     ===================================================================== */
  FEATURES.handwrite = function (pane) {
    var html = '<div class="lesson-prompt">Handwriting practice</div>'
      + '<div class="rd-tip">Trace the syllable with your mouse or finger. Press clear to start again. Check yourself against the model each time.</div>'
      + '<div class="hw-line"><span class="hw-word" id="hw-word">한</span> <button class="lesson-btn check" id="hw-new">New syllable</button> <button class="lesson-btn ghost" id="hw-clear">Clear</button></div>'
      + '<div class="hw-wrap"><canvas id="hw-canvas" width="420" height="420"></canvas></div>';
    pane.innerHTML = html;
    var canvas = el("hw-canvas");
    var ctx = canvas.getContext("2d");
    var drawing = false;
    var model = "한";
    function target() {
      var d = Object.keys(MH.DICT).map(function (k) { return MH.DICT[k]; }).find(function (x) { return x.h && x.h.length === 1; });
      if (d) model = d.h; else model = "한";
      el("hw-word").textContent = model;
    }
    function clearG() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#3c3c3c";
    canvas.addEventListener("pointerdown", function (e) {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(offsetX(e), offsetY(e));
    });
    canvas.addEventListener("pointermove", function (e) {
      if (!drawing) return;
      ctx.lineTo(offsetX(e), offsetY(e));
      ctx.stroke();
    });
    function offsetX(e) { var r = canvas.getBoundingClientRect(); return (e.clientX - r.left) * (canvas.width / r.width); }
    function offsetY(e) { var r = canvas.getBoundingClientRect(); return (e.clientY - r.top) * (canvas.height / r.height); }
    window.addEventListener("pointerup", function () { drawing = false; });
    el("hw-new").addEventListener("click", target);
    el("hw-clear").addEventListener("click", clearG);
    target();
  };

  /* =====================================================================
     OCR SCANNER
     ===================================================================== */
  FEATURES.ocr = function (pane) {
    var html = '<div class="lesson-prompt">OCR scanner</div>'
      + '<div class="rd-tip">Upload a photo of Korean text and the scanner reads it with Tesseract.js, then checks it against the Munhwao rules. The scanner needs a network connection the first time to load the engine and the Hangul model.</div>'
      + '<input type="file" id="ocr-file" accept="image/*">'
      + '<div class="ls-actions"><button class="lesson-btn check" id="ocr-go">Read text</button></div>'
      + '<div id="ocr-out"></div>';
    pane.innerHTML = html;
    el("ocr-go").addEventListener("click", function () {
      var f = el("ocr-file").files[0];
      var out = el("ocr-out");
      if (!f) { toast("Choose an image first."); return; }
      out.innerHTML = '<span class="spk-wait">Loading the OCR engine. This needs the internet.</span>';
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      s.onload = function () {
        Tesseract.recognize(f, "kor").then(function (res) {
          var txt = res.data.text || "";
          var checks = MF.munhwaoChecks(txt);
          var html2 = '<div class="conj-card"><div class="conj-verb">Read text</div><div class="wr-row"><b>Recognised</b><div>' + MF.esc(txt) + "</div></div>"
            + '<div class="wr-row"><b>Munhwao reading</b><div>' + MF.esc(munhwao(txt)) + "</div></div>";
          if (checks.length) {
            html2 += "<div class=\"wr-notes\">";
            checks.forEach(function (c) { html2 += '<div class="wr-note"><span class="wr-fix">' + MF.esc(c.fix) + "</span><span>" + MF.esc(c.why) + "</span></div>"; });
            html2 += "</div>";
          }
          html2 += '<div class="rd-actions"><button class="lesson-btn check" id="ocr-copy">Copy text</button></div></div>';
          out.innerHTML = html2;
          el("ocr-copy").addEventListener("click", function () {
            try { navigator.clipboard.writeText(txt); toast("Copied to the clipboard"); } catch (e) { toast("Copy manually."); }
          });
          if (!txt) out.innerHTML = '<div style="color:var(--orange);">No text found. Try a clearer photo.</div>';
        }).catch(function (err) { out.innerHTML = '<div style="color:var(--orange);">The OCR engine could not run. Check your connection: ' + MF.esc(err.message || err) + "</div>"; });
      };
      s.onerror = function () { out.innerHTML = '<div style="color:var(--orange);">Could not load the OCR script. You need a network connection for the first scan.</div>'; };
      document.head.appendChild(s);
    });
  };

  /* =====================================================================
     ROADMAP: CEFR-STYLE PATHWAY
     ===================================================================== */
  FEATURES.roadmap = function (pane) {
    if (!MH.CEFR) { FEATURES.roadmap_old(pane); return; }
    var html = '<div class="rd-tip">The CEFR style pathway from A1 to C1. Each level has a grammar, vocabulary, reading, listening and speaking gauge computed from your progress. A level counts as reached when its overall gauge passes 70 per cent.</div>';
    var cur = MH.cefrLevel ? MH.cefrLevel() : "A1";
    MH.CEFR.forEach(function (c) {
      var p = MH.cefrProgress ? MH.cefrProgress(c.level) : null;
      var reached = p && p.overall >= 70;
      html += '<div class="rm-row"><div class="rm-name">' + c.level + (cur === c.level ? ' <span style="color:var(--green);">CURRENT</span>' : "") + "</div>"
        + '<div class="rm-track"><div class="rm-fill" style="width:' + (p ? p.overall : 0) + '%;"></div></div>'
        + '<div class="rm-num">' + (p ? p.overall : 0) + "%</div></div>";
      html += '<div class="rm-desc">' + MF.esc(c.desc) + "</div>";
      if (p) {
        html += '<div class="rm-skills">'
          + skillGauge("Grammar", p.grammar) + skillGauge("Vocabulary", p.vocab) + skillGauge("Reading", p.reading) + skillGauge("Listening", p.listening) + skillGauge("Speaking", p.speaking)
          + "</div>";
      }
      if (reached) html += '<div style="color:var(--green);font-size:0.8rem;font-weight:800;padding:2px 0 10px;">REACHED</div>';
      html += '<div class="cd-list">';
      (c.canDo || []).forEach(function (cd) { html += "<li>" + MF.esc(cd) + "</li>"; });
      html += "</div>";
    });
    pane.innerHTML = html;
  };
  function skillGauge(name, val) {
    return '<div class="rm-skill"><div>' + name + " " + val + '%</div><div class="rm-track"><div class="rm-fill" style="width:' + val + '%;"></div></div></div>';
  }
  FEATURES.roadmap_old = function (pane) {
    var bands = [
      { name: "A1", tiers: [1, 2, 3, 4], desc: "Greetings, alphabet, numbers, simple sentences." },
      { name: "A2", tiers: [5, 6, 7, 8], desc: "Daily routines, food, city life, past tense." },
      { name: "B1", tiers: [9, 10, 11, 12], desc: "Opinions, weather, media, future plans." },
      { name: "B2", tiers: [13, 14, 15, 16], desc: "Comparison, conditionals, formal news style." },
      { name: "C1", tiers: [17, 18], desc: "Literary texts, debate and complex sentences." },
      { name: "C2", tiers: [19, 20], desc: "Full fluency goals, original writing, native speed." }
    ];
    var html = '<div class="rd-tip">The course maps onto the European levels. Your position is set by the highest tier you have completed.</div>';
    bands.forEach(function (b) {
      var done = b.tiers.filter(function (t) {
        return MH.LESSONS.filter(function (l) { return l.tier === t; }).every(function (l) { return state.lessonCompletion[l.id]; });
      }).length;
      var total = b.tiers.length;
      html += '<div class="rm-row"><div class="rm-name">' + b.name + "</div>"
        + '<div class="rm-track"><div class="rm-fill" style="width:' + Math.round((done / total) * 100) + '%;"></div></div>'
        + '<div class="rm-num">' + done + "/" + total + " tiers</div></div>"
        + '<div class="rm-desc">' + b.desc + "</div>";
    });
    pane.innerHTML = html;
  };

  /* =====================================================================
     FLASHCARDS: SM-2 SPACED REPETITION CONSOLE
     Overrides the built in flash tool with a full review console.
     ===================================================================== */
  FEATURES.flash = function (pane) {
    var html = '<div class="lesson-prompt">Spaced repetition console</div>'
      + '<div class="rd-tip">The same schedule family as SM-2. Again resets a card, Hard and Good keep it growing, Easy pushes it forward. Cards with an interval of 21 days or more are matured. A card with eight lapses is a leech.</div>'
      + '<div class="srs-grid" id="srs-stats"></div>'
      + '<div class="ls-actions"><button class="lesson-btn continue" id="srs-review">Review due</button>'
      + '<button class="lesson-btn check" id="srs-new">Study new words</button></div>'
      + '<div id="srs-stage"></div>';
    pane.innerHTML = html;
    paintStats();
    el("srs-review").addEventListener("click", function () { srsSession("due"); });
    el("srs-new").addEventListener("click", function () { srsSession("new"); });
  };

  function srsStats() {
    var now = Math.round(Date.now() / 1000);
    var total = 0, due = 0, matured = 0, lapses = 0, easeSum = 0, easeN = 0;
    Object.keys(state.srs || {}).forEach(function (k) {
      var c = state.srs[k];
      total++;
      if (c.due <= now) due++;
      if (c.interval >= 21) matured++;
      if ((c.lapses || 0) >= 8) lapses++;
      if (c.ease) { easeSum += c.ease; easeN++; }
    });
    return { total: total, due: due, matured: matured, lapses: lapses, avgEase: easeN ? (easeSum / easeN).toFixed(2) : "2.50" };
  }
  function paintStats() {
    var box = el("srs-stats");
    if (!box) return;
    var s = srsStats();
    box.innerHTML = statCell("Due", s.due) + statCell("Learning", Math.max(0, s.total - s.matured)) + statCell("Matured", s.matured) + statCell("Leeches", s.lapses) + statCell("Average ease", s.avgEase);
  }
  function statCell(label, val) {
    return '<div class="srs-cell"><div class="srs-num">' + val + '</div><div class="srs-lab">' + label + "</div></div>";
  }

  var srsQ = [], srsI = 0, srsKind = "";
  function srsSession(kind) {
    var now = Math.round(Date.now() / 1000);
    if (kind === "due") {
      srsQ = Object.keys(state.srs || {}).filter(function (k) { return state.srs[k].due <= now; }).sort(function () { return Math.random() - 0.5; });
    } else {
      var have = new Set(Object.keys(state.srs || {}));
      srsQ = (MH.VOCAB_KEYS || []).filter(function (k) { return !have.has(k); }).sort(function () { return Math.random() - 0.5; }).slice(0, 10);
    }
    srsI = 0;
    srsKind = kind;
    if (!srsQ.length) {
      var stage = el("srs-stage");
      stage.innerHTML = '<div style="text-align:center;color:var(--text-dim);padding:20px;">' + (kind === "new" ? "No new words left to add. You are learning everything in the bank." : "All caught up. Nothing is due right now.") + "</div>";
      return;
    }
    srsStep();
  }
  function srsStep() {
    var stage = el("srs-stage");
    if (srsI >= srsQ.length) {
      paintStats();
      stage.innerHTML = '<div style="text-align:center;" class="ls-done"><div class="complete-icon">DONE</div><h2>Reviews complete</h2><p style="color:var(--text-dim);">Spaced repetition is up to date.</p><div class="hero-cta"><button class="lesson-btn check" id="srs-done">Back to console</button></div></div>';
      el("srs-done").addEventListener("click", function () { FEATURES.flash(el("tool-pane")); });
      return;
    }
    var key = srsQ[srsI];
    var card = MH.vocab ? MH.vocab(key) : null;
    var cur = srsGet(key);
    stage.innerHTML = '<div class="ls-progress">Card ' + (srsI + 1) + " of " + srsQ.length + "</div>"
      + '<div class="learn-card"><div class="learn-hangul">' + MF.esc(card ? card.h : key) + "</div>"
      + (card && card.p ? '<div class="learn-phon">' + MF.esc(card.p) + "</div>" : "")
      + '<button class="lesson-btn speaker" id="srs-speak" type="button">PLAY</button>'
      + '<div class="learn-en" id="srs-en" style="display:none;">' + (card ? MF.esc(card.e) : "") + "</div>"
      + (card && card.n ? '<div class="learn-note" id="srs-note" style="display:none;">' + MF.esc(card.n) + "</div>" : "")
      + "</div>"
      + '<div class="srs-next" id="srs-next" style="display:none;">Next interval: ' + nextInterval(cur, 3) + " days</div>"
      + '<div class="spk-actions" id="srs-btns">'
      + '<button class="lesson-btn wrong" id="srs-a">Again</button>'
      + '<button class="lesson-btn ghost" id="srs-h">Hard</button>'
      + '<button class="lesson-btn check" id="srs-g">Good</button>'
      + '<button class="lesson-btn correct" id="srs-e">Easy</button></div>';
    stage.querySelector("#srs-en").style.display = "block";
    if (stage.querySelector("#srs-note")) stage.querySelector("#srs-note").style.display = "block";
    stage.querySelector("#srs-next").style.display = "block";
    if (card) speak(card.h);
    el("srs-speak").addEventListener("click", function () { if (card) speak(card.h); });
    el("srs-a").addEventListener("click", function () { srsGrade(key, 1); });
    el("srs-h").addEventListener("click", function () { srsGrade(key, 3); });
    el("srs-g").addEventListener("click", function () { srsGrade(key, 4); });
    el("srs-e").addEventListener("click", function () { srsGrade(key, 5); });
  }
  function nextInterval(cur, q) {
    var reps = cur.reps || 0;
    var interval = cur.interval || 1;
    var ease = cur.ease || 2.5;
    if (q < 3) return 1;
    reps++;
    if (reps === 1) return 1;
    if (reps === 2) return 3;
    return Math.round(interval * ease);
  }
  function srsGrade(key, q) {
    srsReview(key, q);
    saveState();
    srsI++;
    srsStep();
  }

  /* =====================================================================
     STUDY PLAN
     ===================================================================== */
  FEATURES.plan = function (pane) {
    var html = '<div class="lesson-prompt">Your study plan</div>'
      + '<div class="rd-tip">A weekly goal turns streaks into progress. The plan suggests a daily bundle of one lesson, one deck and one reading.</div>'
      + '<div class="ls-input"><select class="lesson-input" id="pl-min"><option value="5">5 minutes a day</option><option value="10" selected>10 minutes a day</option><option value="20">20 minutes a day</option><option value="30">30 minutes a day</option></select></div>'
      + '<div class="ls-actions"><button class="lesson-btn continue" id="pl-save">Save plan</button></div><div id="pl-out"></div>';
    pane.innerHTML = html;
    function paint() {
      var p = state.plan;
      var out = el("pl-out");
      if (!p) { out.innerHTML = ""; return; }
      var d = new Date();
      out.innerHTML = '<div class="conj-card"><div class="conj-verb">Plan: ' + p.minutes + " minutes a day</div>"
        + '<div class="wr-row"><b>Today</b><div>' + (state.dayXp > 0 ? "You practised. " + state.dayXp + " XP today." : "You have not practised today yet.") + "</div></div>"
        + '<div class="wr-row"><b>Steps</b><div>1. One lesson or deck. 2. One reading line aloud. 3. Five new flashcards.</div></div></div>';
    }
    el("pl-save").addEventListener("click", function () {
      var d = new Date();
      state.plan = { minutes: parseInt(el("pl-min").value, 10), set: d.toISOString(), streakGoal: {} };
      saveState();
      toast("Plan saved");
      paint();
    });
    paint();
  };

  /* =====================================================================
     ACHIEVEMENTS
     ===================================================================== */
  FEATURES.achieve = function (pane) {
    var html = '<div class="rd-tip">Automatic quests. Read texts, finish lessons, keep streaks and pass placement to unlock them.</div><div id="ac-out"></div>';
    pane.innerHTML = html;
    var quests = [
      { id: "first", name: "First steps", check: function () { return Object.keys(state.lessonCompletion).length >= 1; }, desc: "Finish one lesson." },
      { id: "ten", name: "Ten lessons", check: function () { return Object.keys(state.lessonCompletion).length >= 10; }, desc: "Finish ten lessons." },
      { id: "half", name: "Half course", check: function () { return Object.keys(state.lessonCompletion).length >= 70; }, desc: "Finish seventy lessons." },
      { id: "course", name: "Course complete", check: function () { return Object.keys(state.lessonCompletion).length >= 140; }, desc: "Finish all 140 lessons." },
      { id: "streak3", name: "Three day streak", check: function () { return state.streak >= 3; }, desc: "Keep a three day streak." },
      { id: "streak7", name: "Week long", check: function () { return state.streak >= 7; }, desc: "Keep a seven day streak." },
      { id: "reader", name: "Reader", check: function () { return Object.keys(state.readTexts || {}).length >= 3; }, desc: "Read three library texts." },
      { id: "place", name: "Placement", check: function () { return !!state.placement; }, desc: "Take the placement test." },
      { id: "srs10", name: "Review master", check: function () { return Object.keys(state.srs).length >= 10; }, desc: "Have ten words in review." },
      { id: "speak1", name: "Talk time", check: function () { return (state.speaking && state.speaking.attempts || 0) >= 3; }, desc: "Score three speaking attempts." }
    ];
    function renderQ(q) {
      var got = q.check();
      return '<div class="ac-row ' + (got ? "done" : "") + '"><div class="ac-icon">' + (got ? "OK" : "?") + "</div>"
        + "<div><div class=\"ac-name\">" + q.name + "</div><div class=\"ac-desc\">" + q.desc + "</div></div>"
        + (got ? '<span style="color:var(--green);font-weight:900;">DONE</span>' : "") + "</div>";
    }
    el("ac-out").innerHTML = quests.map(renderQ).join("");
  };

  /* =====================================================================
     ANALYTICS
     ===================================================================== */
  FEATURES.analytics = function (pane) {
    var done = Object.keys(state.lessonCompletion).length;
    var acc = state.totalSeen ? Math.round((state.totalCorrect / state.totalSeen) * 100) : 0;
    var mastered = Object.keys(state.wordMastery).filter(function (k) { return state.wordMastery[k] >= 3; }).length;
    var due = dueReviewCount();
    var html = '<div class="anal-grid">'
      + '<div class="anal-card"><div class="anal-big">' + state.totalSeen + "</div><div class=\"anal-label\">questions seen</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + acc + "%</div><div class=\"anal-label\">accuracy</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + done + "</div><div class=\"anal-label\">lessons done</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + mastered + "</div><div class=\"anal-label\">words mastered</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + due + "</div><div class=\"anal-label\">reviews due</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + state.streak + "</div><div class=\"anal-label\">day streak</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + (state.speaking && state.speaking.attempts || 0) + "</div><div class=\"anal-label\">speaking tries</div></div>"
      + '<div class="anal-card"><div class="anal-big">' + (state.speaking && state.speaking.avgScore || 0) + "%</div><div class=\"anal-label\">average speaking score</div></div>"
      + "</div>";
    html += '<div class="lesson-prompt" style="margin-top:18px;">Words per category</div><div class="cat-bars">';
    var byC = {};
    MH.dictAll().forEach(function (d) { byC[d.c] = (byC[d.c] || 0) + 1; });
    Object.keys(byC).sort().slice(0, 12).forEach(function (c) {
      html += '<div class="cat-bar-row"><span class="cat-bar-name">' + c + "</span><div class=\"cat-bar-track\"><div class=\"cat-bar-fill\" style=\"width:" + Math.min(100, Math.round((byC[c] / 60) * 100)) + "%;\"></div></div><span class=\"cat-bar-num\">" + byC[c] + "</span></div>";
    });
    html += "</div>";
    pane.innerHTML = html;
  };

  /* =====================================================================
     CERTIFICATES
     ===================================================================== */
  FEATURES.cert = function (pane) {
    var tiers = [5, 10, 15, 20];
    var html = '<div class="lesson-prompt">Certificates</div>'
      + '<div class="rd-tip">A printable certificate appears when you complete the last lesson of a milestone tier.</div>'
      + '<div class="ls-input"><input type="text" class="lesson-input" id="cert-name" placeholder="Your name" value="' + MF.esc(state.user && state.user.name || "") + '"></div>'
      + '<div id="cert-list"></div>';
    pane.innerHTML = html;
    function paint() {
      var out = el("cert-list");
      var doneCount = Object.keys(state.lessonCompletion).length;
      out.innerHTML = tiers.map(function (t) {
        var maxId = Math.max.apply(null, MH.LESSONS.filter(function (l) { return l.tier === t; }).map(function (l) { return l.id; }));
        var ok = state.lessonCompletion[maxId] && !state.lessonCompletion[maxId].skipped;
        var name = t <= 10 ? "Tier " + t + " milestone" : "Advanced tier " + t;
        if (t === 20) name = "Course completion";
        return '<div class="cert-row"><span class="cert-name">' + name + "</span>"
          + (doneCount >= maxId ? '<button class="lesson-btn check" data-t="' + t + '">Make certificate</button>' : '<span style="color:var(--text-dim);">Complete tier ' + t + " to unlock</span>")
          + "</div>";
      }).join("");
      out.querySelectorAll("[data-t]").forEach(function (b) {
        b.addEventListener("click", function () { makeCertificate(parseInt(b.dataset.t, 10)); });
      });
    }
    function makeCertificate(t) {
      var name = el("cert-name").value.trim() || (state.user && state.user.name) || "Munhwao Learner";
      var canvas = document.createElement("canvas");
      canvas.width = 1000; canvas.height = 700;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, 1000, 700);
      ctx.strokeStyle = "#58cc02"; ctx.lineWidth = 12; ctx.strokeRect(24, 24, 952, 652);
      ctx.fillStyle = "#3c3c3c";
      ctx.textAlign = "center";
      ctx.font = "900 80px Nunito, sans-serif";
      ctx.fillText("CERTIFICATE", 500, 150);
      ctx.font = "700 34px Nunito, sans-serif";
      ctx.fillText("of Munhwao achievement", 500, 200);
      ctx.font = "600 40px Nunito, sans-serif";
      ctx.fillText("This certifies that", 500, 300);
      ctx.font = "900 64px Nunito, sans-serif";
      ctx.fillStyle = "#58cc02";
      ctx.fillText(name, 500, 380);
      ctx.fillStyle = "#777";
      ctx.font = "600 32px Nunito, sans-serif";
      ctx.fillText(t >= 20 ? "has completed the full 140 lesson course in North Korean Munhwao" : "has completed the tier " + t + " milestone in North Korean Munhwao", 500, 460);
      ctx.fillText(new Date().toDateString(), 500, 540);
      var a = document.createElement("a");
      a.download = "munhwao_certificate_" + t + ".png";
      a.href = canvas.toDataURL("image/png");
      a.click();
      toast("Certificate file saved.");
    }
    paint();
  };

  /* =====================================================================
     BOOKMARKS AND NOTES
     ===================================================================== */
  FEATURES.bookmarks = function (pane) {
    var html = '<div class="lesson-prompt">Bookmarks</div><div id="bm-list"></div>'
      + '<div class="lesson-prompt" style="margin-top:18px;">Notes</div>'
      + '<div class="ls-input"><textarea class="lesson-input wr-area" id="bm-note" rows="3" placeholder="Write a study note..."></textarea></div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="bm-add">Add note</button></div><div id="bm-notes"></div>';
    pane.innerHTML = html;
    function paintBM() {
      var out = el("bm-list");
      if (!state.bookmarks.length) { out.innerHTML = '<div style="color:var(--text-dim);">Nothing saved yet.</div>'; return; }
      out.innerHTML = state.bookmarks.map(function (k) {
        var label = k;
        if (k.indexOf("text:") === 0) {
          var t = (MH.LIBRARY || []).find(function (x) { return x.id === k.slice(5); });
          label = t ? t.title : k;
        } else if (k.indexOf("news:") === 0) {
          var n = (MH.NEWS || []).find(function (x) { return x.id === k.slice(5); });
          label = n ? n.title : k;
        } else if (k.indexOf("culture:") === 0) {
          var c = (MH.CULTURE || []).find(function (x) { return x.id === k.slice(8); });
          label = c ? c.title : k;
        }
        return '<button class="ref-row bm-row" data-k="' + k + '"><span class="ref-h">' + MF.esc(label) + '</span><span class="ref-e">remove</span></button>';
      }).join("");
      out.querySelectorAll(".bm-row").forEach(function (b) {
        b.addEventListener("click", function () {
          var k = b.dataset.k;
          state.bookmarks = state.bookmarks.filter(function (x) { return x !== k; });
          saveState();
          FEATURES.bookmarks(el("tool-pane"));
        });
      });
    }
    function paintNotes() {
      var out = el("bm-notes");
      if (!(state.notes && state.notes.length)) { out.innerHTML = '<div style="color:var(--text-dim);">No notes yet.</div>'; return; }
      out.innerHTML = state.notes.map(function (n, i) {
        return '<div class="note-row">' + MF.esc(n.text) + '<button class="mini-speak ghost" data-i="' + i + '">DEL</button></div>';
      }).join("");
      out.querySelectorAll("[data-i]").forEach(function (b) {
        b.addEventListener("click", function () {
          state.notes.splice(parseInt(b.dataset.i, 10), 1);
          saveState();
          FEATURES.bookmarks(el("tool-pane"));
        });
      });
    }
    el("bm-add").addEventListener("click", function () {
      var t = el("bm-note").value.trim();
      if (!t) return;
      state.notes = state.notes || [];
      state.notes.push({ text: t, date: Date.now() });
      saveState();
      el("bm-note").value = "";
      paintNotes();
    });
    paintBM();
    paintNotes();
  };

  /* =====================================================================
     EXPORT AND IMPORT
     ===================================================================== */
  FEATURES.export = function (pane) {
    pane.innerHTML = '<div class="lesson-prompt">Export</div>'
      + '<div class="rd-tip">Save everything as a JSON file. This includes XP, streaks, mastery, decks, notes and settings.</div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="ex-go">Export progress</button></div>';
    el("ex-go").addEventListener("click", function () {
      downloadText("munhwao_backup_" + new Date().toISOString().slice(0, 10) + ".json", JSON.stringify(state, null, 2));
      toast("Backup saved");
    });
  };
  FEATURES.import = function (pane) {
    pane.innerHTML = '<div class="lesson-prompt">Import</div>'
      + '<div class="rd-tip">Restore a backup JSON file. Your current progress is replaced by the file contents.</div>'
      + '<input type="file" id="im-file" accept=".json,application/json">'
      + '<div class="ls-actions"><button class="lesson-btn check" id="im-go">Import</button></div>';
    el("im-go").addEventListener("click", function () {
      var f = el("im-file").files[0];
      if (!f) { toast("Choose a backup file first."); return; }
      var r = new FileReader();
      r.onload = function () {
        try {
          var data = JSON.parse(r.result);
          state = Object.assign({}, DEFAULT_STATE, data);
          state.settings = Object.assign({}, DEFAULT_STATE.settings, data.settings || {});
          saveState(); forceResetUI();
          toast("Backup imported");
        } catch (e) { toast("That file is not a valid backup."); }
      };
      r.readAsText(f);
    });
  };
  function forceResetUI() {
    applyTheme();
    updateTopbarStats();
    renderTree();
  }

  /* =====================================================================
     CLOUD SYNC
     ===================================================================== */
  FEATURES.sync = function (pane) {
    var html = '<div class="lesson-prompt">Cloud sync</div>'
      + '<div class="rd-tip">Host your own tiny sync server and the app will push and pull your JSON backup from it. The server address is stored on this device only. A reference server script is described in the README.</div>'
      + '<div class="ls-input"><input type="text" class="lesson-input" id="sy-url" placeholder="https://your-server.example.com/munhwao" value="' + MF.esc(state.syncCfg && state.syncCfg.remote || "") + '"></div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="sy-save">Save address</button> '
      + '<button class="lesson-btn continue" id="sy-push">Push now</button> '
      + '<button class="lesson-btn ghost" id="sy-pull">Pull now</button></div>'
      + '<div id="sy-out"></div>';
    pane.innerHTML = html;
    function msg(t, ok) { el("sy-out").innerHTML = '<div class="wr-note" style="color:' + (ok ? "var(--green)" : "var(--orange)") + ';">' + MF.esc(t) + "</div>"; }
    el("sy-save").addEventListener("click", function () {
      state.syncCfg = state.syncCfg || {};
      state.syncCfg.remote = el("sy-url").value.trim();
      saveState();
      msg("Address saved.", true);
    });
    el("sy-push").addEventListener("click", function () {
      var url = state.syncCfg && state.syncCfg.remote;
      if (!url) { msg("Save a server address first.", false); return; }
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: JSON.stringify(state) })
      }).then(function (r) { if (r.ok) { state.syncCfg.lastPush = Date.now(); saveState(); msg("Pushed to the server.", true); } else msg("Server answered " + r.status, false); })
        .catch(function () { msg("Could not reach the server. Check the address and your connection.", false); });
    });
    el("sy-pull").addEventListener("click", function () {
      var url = state.syncCfg && state.syncCfg.remote;
      if (!url) { msg("Save a server address first.", false); return; }
      fetch(url).then(function (r) { return r.json(); }).then(function (data) {
        if (data && data.data) {
          var saved = typeof data.data === "string" ? JSON.parse(data.data) : data.data;
          state = Object.assign({}, DEFAULT_STATE, saved);
          state.settings = Object.assign({}, DEFAULT_STATE.settings, saved.settings || {});
          saveState();
          forceResetUI();
          msg("Pulled from the server.", true);
        } else msg("No data at that address yet.", false);
      }).catch(function () { msg("Could not reach the server.", false); });
    });
  };

  /* =====================================================================
     COMMUNITY
     ===================================================================== */
  FEATURES.community = function (pane) {
    var html = '<div class="lesson-prompt">Community board</div>'
      + '<div class="rd-tip">A local first community. Posts live in your browser and you share them by exporting your backup. For a shared board, host the sync server and exchange file names.</div>'
      + '<div class="ls-input"><input type="text" class="lesson-input" id="cm-post" placeholder="Share a tip or a question..."></div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="cm-go">Post</button></div><div id="cm-list"></div>';
    pane.innerHTML = html;
    function paint() {
      var out = el("cm-list");
      var posts = (state.community && state.community.posts) || [];
      if (!posts.length) { out.innerHTML = '<div style="color:var(--text-dim);">No posts yet. Be the first to share a study tip.</div>'; return; }
      out.innerHTML = posts.slice().reverse().map(function (p, i) {
        return '<div class="cm-post"><div class="cm-head">' + MF.esc(p.name || "Munhwao learner") + " \u00B7 " + new Date(p.date).toLocaleDateString() + "</div>"
          + "<div class=\"cm-body\">" + MF.esc(p.text) + "</div>"
          + '<div class="cm-foot"><button class="mini-speak" data-id="' + p.id + '">' + ((state.community.likes || {})[p.id] ? "Unlike " : "Like ") + (p.likes || 0) + "</button></div></div>";
      }).join("");
      out.querySelectorAll("[data-id]").forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.dataset.id;
          state.community.likes = state.community.likes || {};
          if (state.community.likes[id]) {
            state.community.likes[id] = false;
            (state.community.posts.find(function (x) { return x.id === id; }) || {}).likes = Math.max(0, ((state.community.posts.find(function (x) { return x.id === id; }) || {}).likes || 1) - 1);
          } else {
            state.community.likes[id] = true;
            (state.community.posts.find(function (x) { return x.id === id; }) || {}).likes = ((state.community.posts.find(function (x) { return x.id === id; }) || {}).likes || 0) + 1;
          }
          saveState();
          FEATURES.community(el("tool-pane"));
        });
      });
    }
    el("cm-go").addEventListener("click", function () {
      var t = el("cm-post").value.trim();
      if (!t) return;
      state.community = state.community || {};
      state.community.posts = state.community.posts || [];
      state.community.likes = state.community.likes || {};
      state.community.posts.push({ id: "p" + Date.now(), text: t, name: (state.user && state.user.name) || "Munhwao learner", date: Date.now(), likes: 0 });
      saveState();
      paint();
    });
    paint();
  };

  /* =====================================================================
     CLASSROOM
     ===================================================================== */
  FEATURES.class = function (pane) {
    var html = '<div class="lesson-prompt">Classroom mode</div>'
      + '<div class="rd-tip">A teacher creates a class and gets a code. Learners join with that code. Share a practice deck as homework by exporting it.</div>'
      + '<div id="cl-state"></div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="cl-create">Create a class</button> '
      + '<button class="lesson-btn ghost" id="cl-join">Join with a code</button> '
      + '<button class="lesson-btn ghost" id="cl-leave">Leave class</button></div>'
      + '<div class="ls-actions"><button class="lesson-btn continue" id="cl-homework">Share homework deck</button></div>';
    pane.innerHTML = html;
    function paint() {
      var out = el("cl-state");
      var code = state.classroom && state.classroom.code;
      out.innerHTML = code
        ? '<div class="conj-card"><div class="conj-verb">Class ' + code + "</div>"
          + '<div class="wr-row"><b>Joined</b><div>' + new Date(state.classroom.joinedAt).toDateString() + "</div></div>"
          + '<div class="wr-row"><b>Note</b><div>Classroom scores live on this device. Use the sync server or backups to bring results together.</div></div></div>'
        : '<div class="conj-card"><div class="conj-verb">No class yet</div><div class="wr-row"><b>Teacher</b><div>Press create to make a code.</div></div><div class="wr-row"><b>Learner</b><div>Press join and type the teacher code.</div></div></div>';
    }
    el("cl-create").addEventListener("click", function () {
      var code = "MH" + Math.floor(1000 + Math.random() * 9000);
      state.classroom = { code: code, joinedAt: 0, scores: {} };
      saveState();
      paint();
      toast("Class code: " + code);
    });
    el("cl-join").addEventListener("click", function () {
      var code = prompt("Enter the class code");
      if (code) { state.classroom = Object.assign({}, state.classroom, { code: code.trim(), joinedAt: Date.now() }); saveState(); paint(); }
    });
    el("cl-leave").addEventListener("click", function () {
      if (state.classroom) state.classroom.code = "";
      saveState(); paint();
    });
    el("cl-homework").addEventListener("click", function () {
      var keys = MH.FREQ_BANDS[0] ? MH.FREQ_BANDS[0].keys : [];
      exportAnkiFrom(keys);
      toast("Homework deck exported. Send the file to your learners.");
    });
    paint();
  };

  /* =====================================================================
     SETTINGS
     ===================================================================== */
  FEATURES.settings = function (pane) {
    var html = '<div class="lesson-prompt">Settings</div>'
      + '<div class="ls-input"><label class="set-label">Your name</label><input type="text" class="lesson-input" id="set-name" value="' + MF.esc(state.user && state.user.name || "") + '"></div>'
      + '<div class="ls-input"><label class="set-label">Speaking rate</label><input type="range" id="set-rate" min="0.5" max="1.2" step="0.05" value="' + (state.settings.rate || 0.85) + '"><span id="set-rate-v"></span></div>'
      + '<div class="ls-actions"><button class="lesson-btn check" id="set-save">Save settings</button></div>'
      + '<div class="rd-tip" style="margin-top:12px;">Everything is stored on this device only. The partner and the coach run from the offline knowledge base, so nothing you write or say is sent anywhere.</div>';
    pane.innerHTML = html;
    function paintRate() { el("set-rate-v").textContent = " " + el("set-rate").value; }
    el("set-rate").addEventListener("input", paintRate);
    paintRate();
    el("set-save").addEventListener("click", function () {
      state.settings = Object.assign({}, state.settings, {
        rate: parseFloat(el("set-rate").value)
      });
      state.user = Object.assign({}, state.user || {}, { name: el("set-name").value.trim() });
      saveState();
      toast("Settings saved");
    });
  };

  /* =====================================================================
     API AND CONTRIBUTION
     ===================================================================== */
  FEATURES.api = function (pane) {
    var html = '<div class="lesson-prompt">Data files you can extend</div>'
      + '<div class="rd-tip">Every lesson, word, text and comparison lives in a plain JavaScript file under the data folder. Edit them and refresh to grow the course.</div>';
    var files = [
      ["data/vocab.js", "Course vocabulary. Add entries as MH.VOCAB fields."],
      ["data/dict.js", "DICTIONARY extras, comparison pairs, frequency bands and example sentences."],
      ["data/library.js", "Graded texts, news, culture notes and the media manifest."],
      ["data/ai.js", "The offline knowledge base for the partner and coach. Add as many pattern and reply pairs as you like."],
      ["data/lessons.js", "The 140 lessons and 20 tiers with their cards."],
      ["data/grammar.js", "Conjugation rules and the grammar reference."],
      ["data/hangeul.js", "The alphabet data with Munhwao letter names."],
      ["audio folder", "Drop mp3 and mp4 files into media and audio for real native voices."]
    ];
    files.forEach(function (f) {
      html += '<div class="api-row"><span class="api-file">' + f[0] + "</span><span>" + f[1] + "</span></div>";
    });
    html += '<div class="lesson-prompt" style="margin-top:16px;">Review pipeline</div>'
      + '<div class="rd-tip">New words are marked as extra. Future native speakers can verify each entry in the note field, then move it into the course vocabulary.</div>';
    pane.innerHTML = html;
  };
})();