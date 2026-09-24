/* =====================================================================
   HANGEUL DATA + COMPOSITION ENGINE  (Munhwao Mastery)
   Jamo charts, Dubeolsik keyboard layout, and a syllable composer.
   Used by the virtual keyboard so Latin-keyboard users can type Hangul.
   ===================================================================== */
"use strict";

window.MH = window.MH || {};

/* ---- Jamo tables --------------------------------------------------- */

MH.CHO = [
  { j: "ㄱ", p: "g/k",   en: "gieuk",     sound: "g as in 'go'; k when final" },
  { j: "ㄲ", p: "kk",    en: "ssanggieuk", sound: "doubled, tense g" },
  { j: "ㄴ", p: "n",     en: "nieun",     sound: "n as in 'noon'" },
  { j: "ㄷ", p: "d/t",   en: "dieut",     sound: "d as in 'door'; t when final" },
  { j: "ㄸ", p: "tt",    en: "ssangdieut", sound: "doubled, tense d" },
  { j: "ㄹ", p: "r/l",   en: "rieul",     sound: "r between vowels (tapped); l when final" },
  { j: "ㅁ", p: "m",     en: "mieum",     sound: "m as in 'moon'" },
  { j: "ㅂ", p: "b/p",   en: "bieup",     sound: "b at word start; p when final" },
  { j: "ㅃ", p: "pp",    en: "ssangbieup", sound: "doubled, tense b" },
  { j: "ㅅ", p: "s",     en: "sieut",     sound: "s as in 'sun' (sh before i/ㅣ)" },
  { j: "ㅆ", p: "ss",    en: "ssangsieut", sound: "doubled, tense s" },
  { j: "ㅇ", p: "(none)",en: "ieung",     sound: "silent at syllable start; ng when final" },
  { j: "ㅈ", p: "j",     en: "jieut",     sound: "j as in 'jam'" },
  { j: "ㅉ", p: "jj",    en: "ssangjieut", sound: "doubled, tense j" },
  { j: "ㅊ", p: "ch",    en: "chieut",    sound: "ch as in 'chip'" },
  { j: "ㅋ", p: "k",     en: "kieuk",     sound: "strong k with a puff of air" },
  { j: "ㅌ", p: "t",     en: "tieut",     sound: "strong t with a puff of air" },
  { j: "ㅍ", p: "p",     en: "pieup",     sound: "strong p with a puff of air" },
  { j: "ㅎ", p: "h",     en: "hieut",     sound: "h as in 'hat' (often silent between vowels)" }
];

MH.JUNG = [
  { j: "ㅏ", p: "a",   en: "a",  sound: "a as in 'father' (short)" },
  { j: "ㅐ", p: "ae",  en: "ae", sound: "a as in 'cat' — kept distinct in the North" },
  { j: "ㅑ", p: "ya",  en: "ya", sound: "ya, like 'yarn'" },
  { j: "ㅒ", p: "yae", en: "yae",sound: "yae, 'yeah' with tight e" },
  { j: "ㅓ", p: "eo",  en: "eo", sound: "aw as in 'law' (unrounded, deep)" },
  { j: "ㅔ", p: "e",   en: "e",  sound: "e as in 'bed'" },
  { j: "ㅕ", p: "yeo", en: "yeo",sound: "yaw, like 'your' (short)" },
  { j: "ㅖ", p: "ye",  en: "ye", sound: "ye as in 'yes'" },
  { j: "ㅗ", p: "o",   en: "o",  sound: "o as in 'go' (tight, rounded)" },
  { j: "ㅘ", p: "wa",  en: "wa", sound: "wa, like 'wander'" },
  { j: "ㅙ", p: "wae", en: "wae",sound: "wae, like 'wet' + a" },
  { j: "ㅚ", p: "oe",  en: "oe", sound: "we/oe, a single rounded vowel" },
  { j: "ㅛ", p: "yo",  en: "yo", sound: "yo, like 'york'" },
  { j: "ㅜ", p: "u",   en: "u",  sound: "u as in 'moon' (tight, rounded short)" },
  { j: "ㅝ", p: "wo",  en: "wo", sound: "wo, like 'wonder'" },
  { j: "ㅞ", p: "we",  en: "we", sound: "we, like 'wet'" },
  { j: "ㅟ", p: "wi",  en: "wi", sound: "wi, like 'we'" },
  { j: "ㅠ", p: "yu",  en: "yu", sound: "yu, like 'you'" },
  { j: "ㅡ", p: "eu",  en: "eu", sound: "eu, a deep unrounded vowel (no English match)" },
  { j: "ㅢ", p: "ui",  en: "ui", sound: "ui - pronounced 'eu+i' (or just 'e' in a word)" },
  { j: "ㅣ", p: "i",   en: "i",  sound: "i as in 'see' (short)" }
];

MH.JONG = [
  { j: "ㄱ", p: "k",   sound: "closed k — tongue blocks, no release" },
  { j: "ㄴ", p: "n",   sound: "n at syllable end" },
  { j: "ㄷ", p: "t",   sound: "closed t" },
  { j: "ㄹ", p: "l",   sound: "l at syllable end" },
  { j: "ㅁ", p: "m",   sound: "m at syllable end" },
  { j: "ㅂ", p: "p",   sound: "closed p" },
  { j: "ㅇ", p: "ng",  sound: "ng as in 'sing'" }
];

/* ---- Compact lookup maps -------------------------------------------- */
MH.CHO_INDEX = {}; MH.JUNG_INDEX = {};
MH.CHO.forEach((x, i) => { MH.CHO_INDEX[x.j] = i; });
MH.JUNG.forEach((x, i) => { MH.JUNG_INDEX[x.j] = i; });

/* final-consonant characters (single + common compound) with their
   representative reading sounds */
MH.FINALS = {
  "ㄱ":"ㄱ","ㄲ":"ㄱ","ㄳ":"ㄱ","ㄴ":"ㄴ","ㄵ":"ㄴ","ㄶ":"ㄴ",
  "ㄷ":"ㄷ","ㄸ":"ㄷ","ㄹ":"ㄹ","ㄺ":"ㄹ","ㄻ":"ㅁ","ㄼ":"ㄹ","ㄽ":"ㄹ",
  "ㄾ":"ㄹ","ㄿ":"ㅍ","ㅀ":"ㄹ","ㅁ":"ㅁ","ㅂ":"ㅂ","ㅄ":"ㅂ","ㅃ":"ㅂ",
  "ㅅ":"ㄷ","ㅆ":"ㄷ","ㅇ":"ㅇ","ㅈ":"ㄷ","ㅊ":"ㄷ","ㅋ":"ㄱ","ㅌ":"ㄷ",
  "ㅍ":"ㅂ","ㅎ":"ㄷ"
};
MH.FINAL_JONG_INDEX = {};
MH.FINALS["ㄳ"]="ㄱ"; // compound covers handled via FINALS map only

/* Convert a batchim (받침) character to its representative ㄱㄴㄷㄹㅁㅂㅇ reading:
   returns the 7-set index used when composing +++ we only compose single finals,
   but for the writing exercise show representative sound. */
MH.finalSound = function (ch) {
  var r = MH.FINALS[ch]; return r || ch || "";
};

/* ---- Dubeolsik (두벌식) QWERTY mapping --------------------------------
   Lets the physical Latin keyboard type Hangul the standard Korean way. */
MH.DUBEOLSIK = {
  "q":"ㅂ","Q":"ㅃ","w":"ㅈ","W":"ㅉ","e":"ㄷ","E":"ㄸ","r":"ㄱ","R":"ㄲ",
  "t":"ㅅ","T":"ㅆ","y":"ㅛ","Y":"ㅛ","u":"ㅕ","U":"ㅕ","i":"ㅑ","I":"ㅑ",
  "o":"ㅐ","O":"ㅒ","p":"ㅔ","P":"ㅖ",
  "a":"ㅁ","A":"ㅁ","s":"ㄴ","S":"ㄴ","d":"ㅇ","D":"ㅇ","f":"ㄹ","F":"ㄹ",
  "g":"ㅎ","G":"ㅎ","h":"ㅗ","H":"ㅗ","j":"ㅓ","J":"ㅓ","k":"ㅏ","K":"ㅏ",
  "l":"ㅣ","L":"ㅣ",
  "z":"ㅋ","Z":"ㅋ","x":"ㅌ","X":"ㅌ","c":"ㅊ","C":"ㅊ","v":"ㅍ","V":"ㅍ",
  "b":"ㅠ","B":"ㅠ","n":"ㅜ","N":"ㅜ","m":"ㅡ","M":"ㅡ"
};

/* Compounds formed by adding a second vowel to a first vowel (dubeolsik). */
MH.VOWEL_COMPOUND = {
  "ㅗㅏ":"ㅘ","ㅗㅐ":"ㅙ","ㅗㅣ":"ㅚ",
  "ㅜㅓ":"ㅝ","ㅜㅔ":"ㅞ","ㅜㅣ":"ㅟ",
  "ㅡㅣ":"ㅢ","ㅏㅣ":"ㅐ","ㅓㅣ":"ㅔ","ㅑㅣ":"ㅒ","ㅕㅣ":"ㅖ"
};

/* ---- Composition engine ----------------------------------------------
   compose(raw): turn a sequence of jamo characters into Hangul syllables.
   Example: ["ㄱ","ㅏ","ㄴ","ㄱ","ㅜ","ㄴ"] -> "간군"  (actually gan + gun)
   Also accepts the compound vowel pairs (ㅗㅏ -> ㅘ). */
/* Full juridical list of all 27 possible final consonants (Unicode order),
   including ㅆ, ㄲ and the compound finals. Unlike the 7 representative
   sounds, these are the REAL code points used when writing Hangul. */
MH.JONG_FULL = [
  "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
  "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ",
  "ㅋ", "ㅌ", "ㅍ", "ㅎ"
];
MH.JONG_FULL_INDEX = {};
MH.JONG_FULL.forEach(function (j, i) { if (j) MH.JONG_FULL_INDEX[j] = i; });

/* Compose a syllable keeping the FULL final consonant (있 = ㅇ+ㅣ+ㅆ,
   not ㅇ+ㅣ+ㄷ). Use this whenever writing real orthography, e.g. verbs. */
MH.COMBINE_FULL = function (cho, jung, jong) {
  var ci = MH.CHO_INDEX[cho]; if (ci === undefined) ci = 0; // ㅇ placeholder
  var ji = MH.JUNG_INDEX[jung]; if (ji === undefined) return cho + jung + (jong || "");
  var sol = 0xAC00 + ci * 21 * 28 + ji * 28;
  if (jong) {
    var jidx = MH.JONG_FULL_INDEX[jong];
    if (jidx === undefined) jidx = 0;
    sol += jidx;
  }
  return String.fromCharCode(sol);
};

MH.COMBINE = function (cho, jung, jong) {
  var ci = MH.CHO_INDEX[cho]; if (ci === undefined) ci = 0; // ㅇ placeholder
  var ji = MH.JUNG_INDEX[jung]; if (ji === undefined) return cho + jung + (jong || "");
  var sol = 0xAC00 + ci * 21 * 28 + ji * 28;
  if (jong) {
    var jc = MH.FINALS[jong] || jong;
    var jidx = ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅇ"].indexOf(jc);
    if (jidx >= 0) sol += jidx + 1;
  }
  return String.fromCharCode(sol);
};

MH.compose = function (chars) {
  var out = "";
  var cho = null, jung = null, jong = null;
  var flush = function () {
    if (cho || jung) {
      out += MH.COMBINE(cho || "ㅇ", jung || "ㅡ", jong);
    }
    cho = null; jung = null; jong = null;
  };
  chars.forEach(function (ch) {
    if (!ch) return;
    if (ch === " ") { flush(); out += " "; return; }
    if (MH.CHO_INDEX[ch] !== undefined) {
      // a consonant
      if (cho !== null && jung !== null && jong === null) {
        // place as final consonant if valid, else this consonant starts a new syllable
        var rep = MH.FINALS[ch];
        if (rep && rep !== "ㅇ") { jong = ch; }
        else { flush(); cho = ch; }
      } else if (cho !== null && jung === null) {
        // two consonants before a vowel: keep the new one and treat prior as final
        var rep2 = MH.FINALS[cho];
        if (rep2 && rep2 !== "ㅇ" && jung === null) { jong = cho; cho = ch; }
        else cho = ch;
      } else {
        // new syllable start
        if (cho === null && jung === null) cho = ch;
        else if (cho) { flush(); cho = ch; }
      }
    } else if (MH.JUNG_INDEX[ch] !== undefined) {
      // a vowel
      if (jung === null) {
        if (cho === null) cho = "ㅇ";
        jung = ch;
      } else {
        var merged = MH.VOWEL_COMPOUND[jung + ch];
        if (merged) jung = merged;
        else { flush(); cho = "ㅇ"; jung = ch; }
      }
    } else {
      flush(); out += ch;
    }
  });
  flush();
  return out;
};

/* Break a Hangul syllable string into its jamo parts (for writing drills). */
MH.decompose = function (word) {
  return Array.from(word).map(function (ch) {
    var code = ch.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      var idx = code - 0xAC00;
      var choI = Math.floor(idx / (21 * 28));
      var jungI = Math.floor((idx % (21 * 28)) / 28);
      var jongI = idx % 28;
      var parts = [MH.CHO[choI].j, MH.JUNG[jungI].j];
      if (jongI > 0) parts.push(MH.JONG_FULL[jongI]);
      return parts;
    }
    return [ch];
  });
};

/* Normalise typed input: if user pasted pre-composed Hangul, keep it;
   if pasted jamo separated, compose it. Also trims spaces. */
MH.normaliseInput = function (s) {
  var n = s.normalize ? s.normalize("NFC") : s;
  if (n === s && MH.looksUncomposed(n)) {
    var jamoChars = Array.from(n).filter(function (c) { return MH.CHO_INDEX[c] !== undefined || MH.JUNG_INDEX[c] !== undefined || c === " "; });
    if (jamoChars.length === Array.from(n).length) return MH.compose(jamoChars);
  }
  return n.trim();
};
MH.looksUncomposed = function (s) {
  var any = false;
  Array.from(s).forEach(function (c) {
    if (MH.CHO_INDEX[c] !== undefined || MH.JUNG_INDEX[c] !== undefined) any = true;
  });
  return any;
};

/* On-screen keyboard rows (for the virtual Hangul keyboard). */
MH.KEYBOARD_ROWS = [
  [
    { j: "ㅂ", p: "b/p" }, { j: "ㅈ", p: "j" }, { j: "ㄷ", p: "d/t" },
    { j: "ㄱ", p: "g/k" }, { j: "ㅅ", p: "s" }, { j: "ㅁ", p: "m" },
    { j: "ㄴ", p: "n" }, { j: "ㅇ", p: "ng" }, { j: "ㄹ", p: "r/l" },
    { j: "ㅎ", p: "h" }, { j: "ㅋ", p: "k" }, { j: "ㅌ", p: "t" },
    { j: "ㅊ", p: "ch" }, { j: "ㅍ", p: "p" }
  ],
  [
    { j: "ㅏ", p: "a" }, { j: "ㅑ", p: "ya" }, { j: "ㅓ", p: "eo" },
    { j: "ㅕ", p: "yeo" }, { j: "ㅗ", p: "o" }, { j: "ㅛ", p: "yo" },
    { j: "ㅜ", p: "u" }, { j: "ㅠ", p: "yu" }, { j: "ㅡ", p: "eu" },
    { j: "ㅣ", p: "i" }, { j: "ㅐ", p: "ae" }, { j: "ㅔ", p: "e" }
  ],
  [
    { j: "ㄲ", p: "kk" }, { j: "ㄸ", p: "tt" }, { j: "ㅃ", p: "pp" },
    { j: "ㅆ", p: "ss" }, { j: "ㅉ", p: "jj" },
    { j: "ㅘ", p: "wa" }, { j: "ㅙ", p: "wae" }, { j: "ㅚ", p: "oe" },
    { j: "ㅝ", p: "wo" }, { j: "ㅞ", p: "we" }, { j: "ㅟ", p: "wi" },
    { j: "ㅢ", p: "ui" }, { j: "ㅒ", p: "yae" }, { j: "ㅖ", p: "ye" }
  ]
];

/* The 4 register rows used by the reference hangul chart. */
MH.HANGUL_VERSE = [
  { title: "Consonants (자음)", items: MH.CHO },
  { title: "Vowels (모음)", items: MH.JUNG },
  { title: "Final consonants (받침)", items: MH.JONG }
];