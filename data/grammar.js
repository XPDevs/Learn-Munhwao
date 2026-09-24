/* =====================================================================
   MUNHWAE GRAMMAR ENGINE  (Munhwao Mastery)
   A real Munhwao verb conjugator + grammar reference data.
   conjugate() composes the formal polite forms (습니다/니까) that the
   North uses every day, plus past, future and command forms. All
   spellings follow standard Northern orthography.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

/* ---- syllable helpers (built on hangeul.js primitives) ------------------ */
/* Split one syllable into {cho, jung, jong} jamo (jong uses the FULL
   final, so 있 -> { cho: ㅇ, jung: ㅣ, jong: ㅆ }). */
MH.syllParts = function (syll) {
  var code = syll.charCodeAt(0);
  if (code >= 0xAC00 && code <= 0xD7A3) {
    var idx = code - 0xAC00;
    return {
      cho: MH.CHO[Math.floor(idx / (21 * 28))].j,
      jung: MH.JUNG[Math.floor((idx % (21 * 28)) / 28)].j,
      jong: (idx % 28) ? MH.JONG_FULL[idx % 28] : ""
    };
  }
  return { cho: "", jung: syll, jong: "" };
};

/* Close an open syllable with a final consonant, keeping full orthography. */
MH.attachJong = function (syll, jong) {
  var p = MH.syllParts(syll);
  if (p.jong) return syll;
  if (!p.cho && !p.jung) return syll;
  return MH.COMBINE_FULL(p.cho || "ㅇ", p.jung, jong);
};

/* Standard vowel contraction when a connective 아/어 runs into the stem:
   returns the merged medial vowel, or null when no contraction applies
   (the connective is then kept as its own syllable). */
MH.mergeMedial = function (medial, connector) {
  return ( {
    "ㅏㅏ":"ㅏ",  /* 가 + 아 -> 가      */
    "ㅓㅓ":"ㅓ",  /* 서 + 어 -> 서      */
    "ㅕㅓ":"ㅕ",  /* 켜 + 어 -> 켜      */
    "ㅐㅓ":"ㅐ",  /* 내 + 어 -> 내      */
    "ㅔㅓ":"ㅔ",  /* 세 + 어 -> 세      */
    "ㅗㅏ":"ㅘ",  /* 오 + 아 -> 와      */
    "ㅡㅓ":"ㅓ",  /* 쓰 + 어 -> 써      */
    "ㅣㅓ":"ㅕ",  /* 마시 + 어 -> 마셔  */
    "ㅜㅓ":"ㅝ"   /* 배우 + 어 -> 배워  */
  } )[medial + connector] || null;
};

/* strip final 다 / 하다 from a dictionary form.
   stem = form minus the final 다 (so X하다 -> stem X하, haStem X). */
MH.stripDa = function (v) {
  if (typeof v !== "string") return { stem: "", endsInHa: false, haStem: "" };
  if (v.slice(-1) !== "다") return { stem: v, endsInHa: false, haStem: "" };
  var stem = v.slice(0, -1);
  var endsInHa = stem.slice(-1) === "하";
  return { stem: stem, endsInHa: endsInHa, haStem: endsInHa ? stem.slice(0, -1) : "" };
};

/* ---- irregular verbs (the handful that defy the regular rules) ---------- */
MH.IRREGULAR = {
  "주다":    { past: "주었습니다",  pastQ: "주었습니까", imperative: "주십시오" },
  "모르다":  { present: "모릅니다", presentQ: "모릅니까", past: "몰랐습니다", pastQ: "몰랐습니까" },
  "돕다":    { imperative: "도우십시오", past: "도왔습니다", pastQ: "도왔습니까", casual: "도와" },
  "춥다":    { past: "추웠습니다",  pastQ: "추웠습니까",  casual: "추워" },
  "덥다":    { past: "더웠습니다",  pastQ: "더웠습니까",  casual: "더워" },
  "아프다":  { past: "아팠습니다",  pastQ: "아팠습니까",  casual: "아파" },
  "기쁘다":  { past: "기뻤습니다",  pastQ: "기뻤습니까",  casual: "기뻐" },
  "알다":    { imperative: "아십시오" },
  "자다":    { imperative: "주무십시오" },
  "있다":    { imperative: "계십시오" }
};

/* ---- conjugation engine ------------------------------------------------- */
MH.conjugate = function (dictionaryForm) {
  var info = MH.stripDa(dictionaryForm);
  var stem = info.stem;
  var last = Array.from(stem).pop() || "";
  var p = MH.syllParts(last);
  var irr = MH.IRREGULAR[dictionaryForm] || {};
  var prefix = stem.slice(0, stem.length - last.length);
  var open = !p.jong;
  var isHa = info.endsInHa;

  function comp(cho, jung, jong) { return MH.COMBINE_FULL(cho, jung, jong); }

  /* present: 하다 -> 합니다; ㄹ-stems drop ㄹ -> ㅂ니다 (알다 -> 압니다,
     만들다 -> 만듭니다); open stems close with ㅂ; closed add 습니다 */
  function present() {
    if (irr.present) return irr.present;
    if (isHa) return info.haStem + comp("ㅎ", "ㅏ", "ㅂ") + "니다";
    if (p.jong === "ㄹ") return prefix + comp(p.cho, p.jung, "ㅂ") + "니다";
    if (open) return prefix + comp(p.cho, p.jung, "ㅂ") + "니다";
    return stem + "습니다";
  }
  function presentQ() {
    if (irr.presentQ) return irr.presentQ;
    if (isHa) return info.haStem + comp("ㅎ", "ㅏ", "ㅂ") + "니까";
    if (p.jong === "ㄹ") return prefix + comp(p.cho, p.jung, "ㅂ") + "니까";
    if (open) return prefix + comp(p.cho, p.jung, "ㅂ") + "니까";
    return stem + "습니까";
  }

  /* connectives are VOWEL JAMO (ㅏ/ㅓ) - the same codepoints as the
     mergeMedial table keys, and distinct from the syllables 아/어. */
  function connector() { return (p.jung === "ㅏ" || p.jung === "ㅗ") ? "ㅏ" : "ㅓ"; }

  /* past: 하다 -> 했습니다; open stems merge + ㅆ; closed concat 았/었 */
  function past() {
    if (irr.past) return irr.past;
    var base;
    if (isHa) base = info.haStem + comp("ㅎ", "ㅐ", "ㅆ");
    else if (open) {
      var conn = connector();
      var m = MH.mergeMedial(p.jung, conn);
      if (m) base = prefix + MH.attachJong(comp(p.cho, m, ""), "ㅆ");
      else base = stem + attachConnSyll(conn);
    } else {
      base = stem + attachConnSyll(connector());
    }
    return base + "습니다";
  }
  function attachConnSyll(conn) {  // 았 / 었 as one syllable
    return comp("ㅇ", conn, "ㅆ");
  }
  function connSyll(conn) {        // 아 / 어 as one syllable
    return comp("ㅇ", conn, "");
  }
  function pastQ() {
    if (irr.pastQ) return irr.pastQ;
    return past().replace(/습니다$/, "습니까");
  }

  function future() { return stem + "겠습니다"; }
  function futureQ() { return stem + "겠습니까"; }

  /* command: open (or ㄹ-final) stems take 십시오, others 으십시오 */
  function imperative() {
    if (irr.imperative) return irr.imperative;
    if (open || p.jong === "ㄹ") return stem + "십시오";
    return stem + "으십시오";
  }

  function propositive() {
    if (isHa) return info.haStem + comp("ㅎ", "ㅏ", "ㅂ") + "시다";
    if (open) return prefix + comp(p.cho, p.jung, "ㅂ") + "시다";
    return stem + "읍시다";
  }

  /* casual friendly form used with classmates and close friends */
  function casual() {
    if (irr.casual) return irr.casual;
    if (isHa) return info.haStem + "해";
    if (open) {
      var m = MH.mergeMedial(p.jung, connector());
      if (m) return prefix + comp(p.cho, m, "");
      return stem + connSyll(connector());
    }
    return stem + connSyll(connector());
  }

  return {
    verb: dictionaryForm,
    stem: stem,
    hasBatchim: !open,
    present: present(),
    presentQ: presentQ(),
    past: past(),
    pastQ: pastQ(),
    future: future(),
    futureQ: futureQ(),
    imperative: imperative(),
    propositive: propositive(),
    casualPresent: casual()
  };
};

/* Verified conjugation table shown in the Grammar tool */
MH.CONJ_TABLE = {
  "가다":   { present: "갑니다",   past: "갔습니다",   future: "가겠습니다",  imp: "가십시오",  tip: "go" },
  "오다":   { present: "옵니다",   past: "왔습니다",   future: "오겠습니다",  imp: "오십시오",  tip: "come" },
  "먹다":   { present: "먹습니다", past: "먹었습니다", future: "먹겠습니다",  imp: "먹으십시오", tip: "eat" },
  "마시다": { present: "마십니다", past: "마셨습니다", future: "마시겠습니다", imp: "마시십시오", tip: "drink" },
  "하다":   { present: "합니다",   past: "했습니다",   future: "하겠습니다",  imp: "하십시오",  tip: "do" },
  "공부하다":{present: "공부합니다", past: "공부했습니다", future: "공부하겠습니다", imp: "공부하십시오", tip: "study" },
  "있다":   { present: "있습니다", past: "있었습니다", future: "있겠습니다",  imp: "계십시오",  tip: "exist/have (honored: 계십니다)" },
  "없다":   { present: "없습니다", past: "없었습니다", future: "없겠습니다",  imp: "--",         tip: "not exist" },
  "주다":   { present: "줍니다",   past: "주었습니다", future: "주겠습니다",  imp: "주십시오",  tip: "give" },
  "알다":   { present: "압니다",   past: "알았습니다", future: "알겠습니다",  imp: "아십시오",  tip: "know" },
  "모르다": { present: "모릅니다", past: "몰랐습니다", future: "모르겠습니다", imp: "모르십시오", tip: "not know" },
  "보다":   { present: "봅니다",   past: "봤습니다",   future: "보겠습니다",  imp: "보십시오",  tip: "see/watch" },
  "읽다":   { present: "읽습니다", past: "읽었습니다", future: "읽겠습니다",  imp: "읽으십시오", tip: "read" },
  "자다":   { present: "잡니다",   past: "잤습니다",   future: "자겠습니다",  imp: "주무십시오", tip: "sleep (honored: 주무십시오)" },
  "쉬다":   { present: "쉽니다",   past: "쉬었습니다", future: "쉬겠습니다",  imp: "쉬십시오",  tip: "rest" },
  "만나다": { present: "만납니다", past: "만났습니다", future: "만나겠습니다", imp: "만나십시오", tip: "meet" },
  "배우다": { present: "배웁니다", past: "배웠습니다", future: "배우겠습니다", imp: "배우십시오", tip: "learn" },
  "크다":   { present: "큽니다",   past: "컸습니다",   future: "크겠습니다",  imp: "--",         tip: "be big" },
  "작다":   { present: "작습니다", past: "작았습니다", future: "작겠습니다",  imp: "--",         tip: "be small" },
  "좋다":   { present: "좋습니다", past: "좋았습니다", future: "좋겠습니다",  imp: "--",         tip: "be good" },
  "아프다": { present: "아픕니다", past: "아팠습니다", future: "아프겠습니다", imp: "--",         tip: "hurt/sick" },
  "돕다":   { present: "돕습니다", past: "도왔습니다", future: "돕겠습니다",  imp: "도우십시오", tip: "help (도와주십시오 = 'please help')" },
  "돌아가다":{present: "돌아갑니다", past: "돌아갔습니다", future: "돌아가겠습니다", imp: "돌아가십시오", tip: "return" }
};

/* ---- grammar reference (for the Grammar page) --------------------------- */
MH.GRAMMAR_REF = [
  { title: "Sentence order (SOV)", lines: [
    "Subject + Object + Verb, always with the verb at the end.",
    "저는 물을 마십니다 = I water drink. (I drink water.)",
    "Particles attach to nouns: 은/는 (topic), 이/가 (subject), 을/를 (object)."
  ]},
  { title: "Topic 은/는 vs Subject 이/가", lines: [
    "은/는 says what the sentence is ABOUT; 이/가 names the doer.",
    "Consonant -> 은/이: 책은, 사람이. Vowel -> 는/가: 나는, 동무가.",
    "저는 학생입니다 (As for me, I am a student).",
    "누가 옵니까? 동무가 옵니다 (Who comes? The friend does)."
  ]},
  { title: "Formal polite ending -습니다", lines: [
    "The daily formal style of the North: stem + 습니다.",
    "Open stems close with ㅂ: 가다 -> 갑니다 (ㄱ+ㅏ+ㅂ becomes 갑).",
    "Closed stems keep the batchim and add 습니다: 먹다 -> 먹습니다.",
    "Questions end -습니까: 갑니까? 먹습니까?",
    "Negative of nouns: 아닙니다. Verb negative: 안 / 못 before the verb."
  ]},
  { title: "Past tense", lines: [
    "가/오/사 -> 갔/왔/샀: open ㅏ and ㅗ stems add 았 (가아 -> 가 + ㅆ).",
    "먹/읽 -> 먹었/읽었: many stems add 었 + 습니다.",
    "하다 -> 했습니다 (공부했습니다).",
    "Question: 갔습니까? = Did (you) go?"
  ]},
  { title: "Future / intention", lines: [
    "Stem + 겠습니다: 가겠습니다 (I will go), 알겠습니다 (understood).",
    "모르겠습니다 = polite 'I wouldn't know'.",
    "Softer propositions: 갑시다 (let's go)."
  ]},
  { title: "Location, existence & possession", lines: [
    "Place + 에 = to/at: 평양에 갑니다, 방에 있습니다.",
    "Place + 에서 = action happens there / from: 식당에서 먹습니다.",
    "있다 (exists/have), 없다 (not exist).",
    "Possession: N의 N: 내 동무의 책 (my friend's book).",
    "Giving/receiving: X에게 = to a person: 동무에게 줍니다."
  ]},
  { title: "Requests & commands (polite)", lines: [
    "(으)십시오: 주십시오, 앉으십시오, 가십시오.",
    "Please do X for me: verb + 아/어 주십시오. 도와주십시오.",
    "Soft pressure: 좀 ... 주십시오 = please a bit ...",
    "Don't: -지 마십시오. 가지 마십시오 = please don't go."
  ]},
  { title: "Joining & because", lines: [
    "-고 (and then): 먹고 잡니다 (eat and sleep).",
    "그렇지만 (but), 그런데 (but/by the way).",
    "-아/어서 (because): 바빠서 (because busy).",
    "-니까 (because, reason to act): 비가 오니까 우산을 가져가십시오.",
    "A 때문에 = because of A."
  ]},
  { title: "Wants & ability", lines: [
    "Verb stem + 고 싶습니다: 가고 싶습니다 (I want to go).",
    "Verb stem + 수 있습니다: 읽을 수 있습니다 (I can read).",
    "Cannot: 수 없습니다 / 못 + verb.",
    "Must: 해야 합니다. Must not: 하면 안 됩니다."
  ]},
  { title: "Munhwao spelling differences", lines: [
    "Initial ㄴ kept: 녀자 (woman), 년 (year).",
    "Initial ㄹ kept: 려행 (travel), 려권 (passport), 로동 (labor).",
    "Six = 륙 (ryuk); June = 유월 (yu-wol).",
    "Food: 랭면 (cold noodles) - always with the R sound.",
    "Computer = 콤퓨터 / 전자계산기. TV = 텔레비죤. Radio = 라지오."
  ]}
];

MH.GRAMMAR_TOOLS = [
  { key: "numbers", title: "Number Trainer", desc: "Turn English numbers into Munhwao instantly - native or Sino, with an instant drill." },
  { key: "conjugate", title: "Verb Conjugator", desc: "Type any verb stem (e.g. 가다) and see the present, past, future, question and command forms." },
  { key: "hangul", title: "Hangul Composer", desc: "Type jamo letters on the keyboard and watch them snap into perfect syllables." }
];