/* =====================================================================
   MUNHWAE CURRICULUM  (Munhwao Mastery)  -  PART 1
   20 tiers, 140 lessons. English -> North Korean Standard (Munhwao).
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

/* ---- helpers --------------------------------------------------------- */
function card(_h, _p, _e, _n, _s, _key) {
  return { h: _h, p: _p || "", e: _e || "", n: _n || "", s: _s || "", k: _key || "" };
}
function vocabCards() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    var v = MH.vocab(arguments[i]);
    if (v) out.push({ h: v.h, p: v.p, e: v.e, n: v.n, s: v.s, k: arguments[i] });
  }
  return out;
}
function grammarCard(title, body, lines) {
  return { g: true, title: title, body: body, lines: lines || [] };
}

/* ---- TIERS ----------------------------------------------------------- */
MH.TIERS = [
  { id: 1,  color: "green",  title: "Hangul Foundations",      desc: "Learn to read and write the Korean alphabet syllable by syllable." },
  { id: 2,  color: "blue",   title: "Numbers & Counting",      desc: "Native and Sino-Korean numbers, counters, dates and money." },
  { id: 3,  color: "purple", title: "Greetings & Politeness",  desc: "Formal Munhwao greetings for everyday life." },
  { id: 4,  color: "orange", title: "People & Pronouns",       desc: "Families, friends (dong-mu!), occupations and pronouns." },
  { id: 5,  color: "red",    title: "Core Sentences & Particles", desc: "SOV order and the glue words that build sentences." },
  { id: 6,  color: "teal",   title: "Everyday Verbs",          desc: "The essential verbs conjugated in formal Munhwao." },
  { id: 7,  color: "pink",   title: "Time & Daily Routine",    desc: "Clocks, calendars, days and months." },
  { id: 8,  color: "gold",   title: "Food & Restaurants",      desc: "Kimchi, kugsu, cold noodles and table manners." },
  { id: 9,  color: "green",  title: "Places & Transport",      desc: "Pyongyang streets, the metro and asking the way." },
  { id: 10, color: "blue",   title: "Shopping & Money",        desc: "Prices, bargains and money words." },
  { id: 11, color: "purple", title: "School, Work & Health",   desc: "Classrooms, workplaces and the doctor." },
  { id: 12, color: "orange", title: "Past & Future Tense",     desc: "What happened and what will happen." },
  { id: 13, color: "red",    title: "Descriptions & Feelings", desc: "Colors, weather, size and emotions." },
  { id: 14, color: "teal",   title: "Complex Grammar",         desc: "Requests, joining, because, wants and commands." },
  { id: 15, color: "pink",   title: "Munhwao Pronunciation",   desc: "The sound rules of Northern speech." },
  { id: 16, color: "gold",   title: "Pyongyang Daily Life",    desc: "City signs, culture, media and daily words." },
  { id: 17, color: "green",  title: "Media & State Speech",    desc: "News, speeches and public ceremonies." },
  { id: 18, color: "blue",   title: "Idioms & Fluency",        desc: "Sayings, fillers and natural flow." },
  { id: 19, color: "purple", title: "Advanced Conversation",   desc: "Opinions, plans, stories and deep emotion." },
  { id: 20, color: "orange", title: "Mastery",                 desc: "Reading, writing and the final challenge." }
];

/* ---- LESSONS --------------------------------------------------------- */
MH.LESSONS = [];
function add(lesson) { MH.LESSONS.push(lesson); }

/* =====================================================================
   TIER 1 - HANGUL FOUNDATIONS
   ===================================================================== */
add({ id: 1, tier: 1, title: "Meet the Hangul Alphabet", desc: "The Korean alphabet was invented as a people's alphabet.",
  grammar: grammarCard("Why Hangul is the smartest alphabet", "Hangul was created in 1443 so that every person could read. Each consonant mimics the mouth shape that makes it:", [
    "The vertical line ㅣ represents a person standing.",
    "The horizontal line ㅡ represents the earth.",
    "Consonants are built from strokes that copy the tongue and lips.",
    "Vowels are small marks around the basic strokes.",
    "Letters stack into syllable blocks: consonant + vowel (+ final consonant)."
  ]),
  learn: [
    card("가나다라마바사", "ga-na-da-ra-ma-ba-sa", "Consonants + the vowel ㅏ stacked", "The alphabet order like ABC.", "가나다라마바사!"),
    card("ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ", "", "First seven consonants", "ㄱ(g/k) ㄴ(n) ㄷ(d/t) ㄹ(r/l) ㅁ(m) ㅂ(b/p) ㅅ(s).", ""),
    card("ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ", "a eo o u eu i", "First six vowels", "ㅏ opens right, ㅓ opens left, ㅗ/ㅜ point up/down, ㅡ is the earth line, ㅣ is the standing person.", ""),
    card("세종대왕", "se-jong-dae-wang", "King Sejong the Great", "Hangul was proclaimed in Hunminjeongeum in 1443.", "세종대왕님!"),
    card("조선글", "jo-seon-geul", "Korean script (North name)", "The North calls the alphabet 조선글; the South says 한글.", "조선글은 쉽고 아름답습니다. = Korean script is easy and beautiful.")
  ],
  drillTypes: ["mc", "pick", "read"]
});

add({ id: 2, tier: 1, title: "The First Vowels", desc: "Six vowels open the door: ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ.",
  learn: [
    card("ㅏ", "a", "vowel A - opens to the right", "Like 'a' in father but short.", "아 - first sound of 'art'."),
    card("ㅓ", "eo", "vowel EO - opens to the left", "Like 'aw' in 'law', short and deep.", "어 - the sound in 'on', opened."),
    card("ㅗ", "o", "vowel O - points up", "Round and tight, like the 'o' in 'go' without sliding to w.", "오 - the sound in 'old'."),
    card("ㅜ", "u", "vowel U - points down", "Like 'oo' in 'moon' but short.", "우 - the sound in 'loop'."),
    card("ㅡ", "eu", "vowel EU - the earth line", "Flat and deep, no English match. Keep lips relaxed.", "으 - say 'uh' then relax."),
    card("ㅣ", "i", "vowel I - the standing person", "Like 'ee' in 'see' but short.", "이 - the sound in 'key'."),
    card("아 어 오 우 으 이", "a eo o u eu i", "Read them in order", "These six give every basic vowel colour.", "")
  ],
  drillTypes: ["read", "mc", "pick", "write"]
});

add({ id: 3, tier: 1, title: "Consonants: ㄱ ㄴ ㅁ ㅅ ㅇ", desc: "Five essential consonants, enough to build real words.",
  learn: [
    card("ㄱ", "g/k", "giyeok (g/k)", "Starts as 'g'; at a syllable end it is a cut-off 'k'.", "가 = ga."),
    card("ㄴ", "n", "nieun (n)", "Like 'n' in 'noon', always.", "나 = na."),
    card("ㅁ", "m", "mieum (m)", "Like 'm' in 'moon', always.", "마 = ma."),
    card("ㅅ", "s", "siot (s)", "Like 's' in 'sun'; before ㅣ it sounds close to 'sh'.", "사 = sa."),
    card("ㅇ", "silent / ng", "ieung (silent initiator)", "At the start it makes no sound; at the end it is 'ng'.", "아 = a (the ㅇ is silent)."),
    card("가나마사", "ga-na-ma-sa", "Syllables you can already read", "ㄱ+ㅏ=가, ㄴ+ㅏ=나, ㅁ+ㅏ=마, ㅅ+ㅏ=사.", "Read them out loud!"),
    card("아마", "a-ma", "Word: maybe", "ㅇ+ㅏ + ㅁ+ㅏ. A real word!", "아마 그렇습니다 = Maybe that's so.")
  ],
  drillTypes: ["read", "mc", "write", "pick"]
});

add({ id: 4, tier: 1, title: "Consonants: ㄷ ㄹ ㅂ ㅈ ㅎ", desc: "Five more: the flowing ㄹ, the light ㅂ and the fresh ㅎ.",
  learn: [
    card("ㄷ", "d/t", "digeut (d/t)", "Starts as 'd'; ends as a cut-off 't'.", "다 = da."),
    card("ㄹ", "r/l", "rieul (r/l)", "A flick like Spanish 'r' between vowels; 'l' at a syllable end.", "라 = ra."),
    card("ㅂ", "b/p", "bieup (b/p)", "Starts as 'b'; ends as a cut-off 'p'.", "바 = ba."),
    card("ㅈ", "j", "jieut (j)", "Like 'j' in 'jam'.", "자 = ja."),
    card("ㅎ", "h", "hieut (h)", "Like 'h' in 'hat' - often very light between vowels.", "하 = ha."),
    card("우리 나라", "u-ri na-ra", "Our country", "우리 = we/our, 나라 = country. North Koreans say 우리 나라 for 'my country'.", "우리 나라는 아름답습니다. = Our country is beautiful."),
    card("바다", "ba-da", "The sea", "ㅂ+ㅏ + ㄷ+ㅏ.", "바다가 깊습니다. = The sea is deep.")
  ],
  drillTypes: ["read", "mc", "pick", "write"]
});

add({ id: 5, tier: 1, title: "Strong & Doubled Consonants", desc: "Breathy and tensed consonants add power and precision.",
  learn: [
    card("ㅋ ㅌ ㅍ ㅊ", "k t p ch", "Breathy consonants (with air)", "Push a puff of air out for these.", "카 = ka (with breath)."),
    card("ㄲ ㄸ ㅃ ㅆ ㅉ", "kk tt pp ss jj", "Doubled tense consonants", "Squeeze the throat and release tight. Crucial for clarity.", "까 = kka (tight, no breath)."),
    card("가 vs 까", "ga vs kka", "Plain vs tense", "가 is soft, 까 is tight. It changes meaning.", "Listen for the difference!"),
    card("김치", "gim-chi", "Kimchi", "ㄱ+ㅣ+ㅁ, ㅊ+ㅣ. A famous word you can now read!", "김치가 맵습니다. = Kimchi is spicy."),
    card("축하", "chu-ka", "Congratulations", "ㅊ+ㅜ=추, ㅎ+ㅏ=하.", "축하합니다! = Congratulations!")
  ],
  drillTypes: ["read", "mc", "write", "pick"]
});

add({ id: 6, tier: 1, title: "Compound Vowels", desc: "Complex vowels glue two sounds: ㅐ ㅔ ㅘ ㅝ ㅚ ㅟ ㅢ plus the y-sounds.",
  learn: [
    card("ㅐ", "ae", "vowel AE", "Like 'a' in 'cat'. The North keeps ㅐ and ㅔ clearly different.", "개 = gae (dog)."),
    card("ㅔ", "e", "vowel E", "Like 'e' in 'bed'.", "게 = ge (crab)."),
    card("ㅘ ㅝ", "wa wo", "W-sounds", "ㅗ+ㅏ = ㅘ (wa). ㅜ+ㅓ = ㅝ (wo).", "와 = wa, 워 = wo."),
    card("ㅚ ㅟ ㅢ", "oe wi ui", "Round the lips", "ㅗ+ㅣ=ㅚ, ㅜ+ㅣ=ㅟ, ㅡ+ㅣ=ㅢ (eu+i).", "되 = doe (become)."),
    card("ㅑ ㅕ ㅛ ㅠ", "ya yeo yo yu", "Y-sounds", "Adding a stroke turns a vowel into its y-version.", "야, 여, 요, 유."),
    card("왜", "wae", "Why", "왜 = why. 뭐 = what (spoken).", "왜 비가 옵니까? = Why is it raining?"),
    card("새해", "sae-hae", "New Year", "새 = new, 해 = year.", "새해 인사를 드립니다. = I give New Year greetings.")
  ],
  drillTypes: ["read", "mc", "pick", "write"]
});

add({ id: 7, tier: 1, title: "Syllable Blocks & Final Consonants", desc: "Hangul packs letters into blocks. Master the 받침 (final consonant).",
  learn: [
    card("가 나 다 라", "ga na da ra", "Consonant + vertical vowel", "They stand side by side.", ""),
    card("고 누 두 루", "go nu du ru", "Consonant + horizontal vowel", "Consonant goes on top, vowel below.", ""),
    card("받침", "bat-chim", "Final consonant", "A syllable may end with one consonant under the vowel.", ""),
    card("강", "gang", "River / strong", "ㄱ+ㅏ+ㅇ. The final ㅇ is 'ng'.", "대동강 = the Taedong River."),
    card("한", "han", "One (native)", "ㅎ+ㅏ+ㄴ.", "한 번 = once."),
    card("물", "mul", "Water", "ㅁ+ㅜ+ㄹ. Final ㄹ is 'l'.", "물을 마십니다. = I drink water."),
    card("밤", "bam", "Night / chestnut", "ㅂ+ㅏ+ㅁ.", "밤이 깊었습니다. = The night is deep."),
    card("손", "son", "Hand", "ㅅ+ㅗ+ㄴ.", "손을 씻습니다. = I wash my hands.")
  ],
  drillTypes: ["read", "write", "mc", "pick", "build"]
});

add({ id: 8, tier: 1, title: "Reading Practice 1", desc: "Read real words - the payoff of learning letters.",
  learn: [
    card("사람", "sa-ram", "person", "ㅅ+ㅏ, ㄹ+ㅏ+ㅁ.", "사람 = person."),
    card("하늘", "ha-neul", "sky", "ㅎ+ㅏ, ㄴ+ㅡ+ㄹ.", "하늘이 맑습니다. = The sky is clear."),
    card("꽃", "kkot", "flower", "ㄲ+ㅗ+ㅊ.", "꽃이 피었습니다. = The flower bloomed."),
    card("산", "san", "mountain", "ㅅ+ㅏ+ㄴ.", "묘향산은 아름답습니다. = Mt Myohyang is beautiful."),
    card("문", "mun", "door", "ㅁ+ㅜ+ㄴ.", "문을 여십시오. = Please open the door."),
    card("아침", "a-chim", "morning / breakfast", "ㅇ+ㅏ, ㅊ+ㅣ+ㅁ.", "아침밥을 먹습니다. = I eat breakfast."),
    card("저녁", "jeo-nyeok", "evening / dinner", "ㅈ+ㅓ, ㄴ+ㅕ+ㄱ.", "저녁에 뭐 합니다? = What do you do in the evening?")
  ],
  drillTypes: ["read", "pick", "mc", "write"]
});

add({ id: 9, tier: 1, title: "Writing Practice", desc: "Build syllables yourself - the deepest path to fluent reading.",
  grammar: grammarCard("How to build a syllable", "Every syllable = at least one consonant + one vowel. Arrange by the vowel shape:", [
    "Vertical vowel (ㅏ ㅓ ㅣ): consonant LEFT, vowel RIGHT: 가.",
    "Horizontal vowel (ㅗ ㅜ ㅡ): consonant TOP, vowel BELOW: 구.",
    "Final consonant: place under everything: 강.",
    "Compound vowel: treat like its main shape, consonant first: 과.",
    "Practice each block with one smooth motion, left-to-right, top-to-bottom."
  ]),
  learn: [
    card("가", "ga", "ㄱ + ㅏ", "Consonant first.", ""),
    card("구", "gu", "ㄱ + ㅜ", "Vowel goes below for ㅜ.", ""),
    card("간", "gan", "ㄱ + ㅏ + ㄴ", "Final consonant sits at the bottom.", ""),
    card("바다", "ba-da", "Two-block word", "바 then 다.", ""),
    card("우리", "u-ri", "we / our", "우 then 리.", ""),
    card("조선", "jo-seon", "Korea (North)", "You just wrote Korea's name!", "")
  ],
  drillTypes: ["write", "build", "read", "mc"]
});

add({ id: 10, tier: 1, title: "Reading Practice 2", desc: "Longer words, phrases and the sound of real Munhwao.",
  learn: [
    card("고맙습니다", "go-map-seum-ni-da", "Thank you", "Read the letters: 고-맙-습-니-다.", "고맙습니다! = Thank you!"),
    card("평양", "pyeong-yang", "Pyongyang", "ㅍ+ㅕ+ㅇ, ㅇ+ㅑ+ㅇ.", "평양은 아름답습니다. = Pyongyang is beautiful."),
    card("안녕하십니까", "ahn-nyuhng-ha-shim-ni-kka", "Hello (formal)", "안-녕-하-십-니-까.", "안녕하십니까! = Hello!"),
    card("읽을 수 있습니다", "il-geul su it-seum-ni-da", "Can read", "Every block is a door: 읽, 을, 수, 있, 습, 니, 다.", "You are reading Korean now!"),
    card("감사", "gam-sa", "gratitude", "The North prefers 고맙습니다, but 감사 appears in songs and writing.", "")
  ],
  drillTypes: ["read", "pick", "mc", "build"]
});

add({ id: 11, tier: 1, title: "Hangul Checkpoint", desc: "Solidify forever: can you read, write and recognise every letter?",
  learn: [
    card("19 consonants", "", "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ", "Ten plain, five doubled, four breathy.", ""),
    card("21 vowels", "", "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ", "Six basic, four y-forms, eleven glided compounds.", ""),
    card("읽기", "il-gi", "Reading", "Now sound out any Korean text aloud, even unseen words.", "글 = writing."),
    card("쓰기", "sseu-gi", "Writing", "Build syllables from sounds you hear.", "편지 = a letter."),
    card("말하기", "mal-ha-gi", "Speaking", "The most important: say each block clearly, let vowels sing.", "말 = speech.")
  ],
  drillTypes: ["read", "write", "mc", "pick", "listen"],
  checkpoint: true
});

/* =====================================================================
   TIER 2 - NUMBERS & COUNTING
   ===================================================================== */
add({ id: 12, tier: 2, title: "Native Numbers 1-5", desc: "Count objects and people with the native number system.",
  learn: vocabCards("n_1", "n_2", "n_3", "n_4", "n_5"),
  drillTypes: ["mc", "listen", "type", "pick", "numDrill"],
  numDrill: { kind: "native", min: 0, max: 5 }
});
add({ id: 13, tier: 2, title: "Native Numbers 6-10", desc: "Complete the first block of counting.",
  learn: vocabCards("n_6", "n_7", "n_8", "n_9", "n_0"),
  drillTypes: ["mc", "listen", "type", "pick", "numDrill"],
  numDrill: { kind: "native", min: 5, max: 10 }
});
add({ id: 14, tier: 2, title: "Counting 10-20", desc: "열 and the teens.",
  learn: vocabCards("n_10", "n_11", "n_20"),
  learnExtra: [
    card("열둘", "yeol-dul", "twelve (native)", "열 + 둘.", "열둘 = 12."),
    card("열여섯", "yeol-lyeo-seot", "sixteen (native)", "열 + 여섯, read smoothly.", "열여섯 = 16.")
  ],
  drillTypes: ["mc", "type", "listen", "numDrill"],
  numDrill: { kind: "native", min: 0, max: 20 }
});
add({ id: 15, tier: 2, title: "Native Tens 20-90", desc: "스물 서른 마흔 쉰 예순 일흔 여든 아흔.",
  learn: vocabCards("n_20", "n_30", "n_40", "n_50", "n_60", "n_70", "n_80", "n_90"),
  drillTypes: ["mc", "listen", "type", "pick", "numDrill"],
  numDrill: { kind: "native", min: 20, max: 99, step: 10 }
});
add({ id: 16, tier: 2, title: "Compound Numbers 21-99", desc: "Tens + units join into one smooth word.",
  grammar: grammarCard("How compound native numbers work", "Join a ten-word and a unit-word directly:", [
    "21 = 스물 (20) + 하나 (1) = 스물하나.",
    "35 = 서른 (30) + 다섯 (5) = 서른다섯.",
    "44 = 마흔 (40) + 넷 (4) = 마흔넷.",
    "99 = 아흔 (90) + 아홉 (9) = 아흔아홉.",
    "100 = 백. There is no separate 'one-hundred'."
  ]),
  learn: vocabCards("n_21", "n_30", "n_100"),
  learnExtra: [
    card("서른다섯", "seo-reun-da-seot", "35", "서른 + 다섯.", ""),
    card("여든여덟", "yeo-deun-yeo-deol", "88", "Fun to say!", "")
  ],
  drillTypes: ["type", "listen", "numDrill"],
  numDrill: { kind: "native", min: 1, max: 99 }
});
add({ id: 17, tier: 2, title: "Counting Things (Counters)", desc: "Korean uses counting words: 개, 명, 장, 권.",
  grammar: grammarCard("Counters - the 'unit words'", "After a native number you need a category word:", [
    "개 = things: 사과 두 개 = two apples.",
    "명 = people: 사람 세 명 = three people.",
    "장 = flat things: 종이 한 장 = one sheet of paper.",
    "권 = books: 책 네 권 = four books.",
    "잔 = cups: 차 한 잔 = one cup of tea.",
    "하나 둘 셋 넷 스물 shorten: 한, 두, 세, 네, 스무 before counters."
  ]),
  learn: [
    card("한 개", "han gae", "one thing", "하나 -> 한 before 개.", "사과 한 개 = one apple."),
    card("두 명", "du myeong", "two people", "둘 -> 두.", "두 명이 왔습니다."),
    card("세 장", "se jang", "three sheets", "셋 -> 세.", "종이 세 장."),
    card("네 권", "ne gwon", "four books", "넷 -> 네.", "책 네 권을 읽었습니다."),
    card("스무 개", "seu-mu gae", "twenty things", "스물 -> 스무.", "스무 개 있습니다."),
    card("한 잔", "han jan", "one cup", "차 한 잔 주십시오.", "잔 = cup.")
  ],
  drillTypes: ["mc", "pick", "build", "listen"]
});
add({ id: 18, tier: 2, title: "Sino-Korean Numbers 1-5", desc: "The second number system - for dates, money and ordering.",
  learn: vocabCards("s_1", "s_2", "s_3", "s_4", "s_5"),
  drillTypes: ["mc", "listen", "type", "pick"],
  numDrill: { kind: "sino", min: 1, max: 10 }
});
add({ id: 19, tier: 2, title: "Sino Numbers 6-10 (North style!)", desc: "The North says 륙 for six - keeping the R sound.",
  grammar: grammarCard("The North keeps the R-L sound", "The South's 육 (six) becomes 륙 in Munhwao:", [
    "6 = 륙 (ryuk).",
    "60 = 륙십 (ryuk-sip).",
    "June = 류월 (ryu-wol) - as a month, 륙 changes to 류.",
    "The same rule keeps initial N in 녀자 and initial R in 려행.",
    "The North SPELLS and PRONOUNCES them this way."
  ]),
  learn: vocabCards("s_6", "s_7", "s_8", "s_9", "s_10"),
  drillTypes: ["mc", "listen", "type", "pick"],
  numDrill: { kind: "sino", min: 6, max: 10 }
});
add({ id: 20, tier: 2, title: "Sino Tens & Hundreds", desc: "십 from ten upward.",
  learn: vocabCards("s_10", "s_100", "s_1000", "s_10000"),
  learnExtra: [
    card("이십", "i-sip", "20 (Sino)", "이 + 십.", "20 = 이십."),
    card("삼십오", "sam-sip-o", "35 (Sino)", "삼십 + 오.", "35 = 삼십오.")
  ],
  drillTypes: ["type", "listen", "numDrill"],
  numDrill: { kind: "sino", min: 1, max: 100 }
});
add({ id: 21, tier: 2, title: "Dates, Money & Zero", desc: "Real territory: prices in 원, months, and 령 for zero.",
  grammar: grammarCard("When to use which system", "The two systems live side by side:", [
    "NATIVE: counting objects, people, hours, ages (한 시, 두 명, 스무 살).",
    "SINO: dates, months, money, phone numbers, minutes (일 일, 이 원, 오 분).",
    "Zero = 령 (ryeong) in the North. The South's 공 is only for sports scores.",
    "100 = 백 (same in both systems).",
    "Age: ask 몇 살, answer native - 스무 살 = 20 years old."
  ]),
  learn: vocabCards("n_0", "s_money", "s_won", "tm_hour"),
  learnExtra: [
    card("몇 시입니까", "myeot si-im-ni-kka", "What time is it?", "몇 (how many) + 시.", ""),
    card("일 이 삼 사 오", "il i sam sa o", "Counting off, North style", "Phone numbers and ceremonies.", "전화번호 = phone number.")
  ],
  drillTypes: ["mc", "pick", "listen", "numDrill"],
  numDrill: { kind: "sino", min: 0, max: 100 }
});
add({ id: 22, tier: 2, title: "Big Numbers", desc: "천 (thousands) and 만 (ten thousands) open the door to street numbers and money.",
  learn: vocabCards("s_1000", "s_10000"),
  learnExtra: [
    card("이천", "i-cheon", "2,000", "이 + 천.", ""),
    card("일만", "il-man", "10,000", "10,000 is one unit in Korea: 만.", "만 원 = 10,000 won.")
  ],
  drillTypes: ["type", "listen", "mc"],
  numDrill: { kind: "sino", min: 100, max: 10000 }
});/* =====================================================================
   MUNHWAE CURRICULUM  (Munhwao Mastery)  -  PART 2
   ===================================================================== */

/* =====================================================================
   TIER 3 - GREETINGS & POLITENESS
   ===================================================================== */
add({ id: 23, tier: 3, title: "The Formal Hello", desc: "안녕하십니까 - the handshake of spoken Korean.",
  learn: vocabCards("g_hello", "g_hello2", "g_hi"),
  learnExtra: [
    card("안녕히", "ahn-nyuhng-hi", "peacefully", "The adverb used in farewells.", "안녕히 가십시오.")
  ],
  drillTypes: ["mc", "listen", "build", "pick"]
});
add({ id: 24, tier: 3, title: "First Meetings", desc: "반갑습니다 - how North Koreans open a new acquaintance.",
  learn: vocabCards("g_nice", "g_welcome", "ph_long_time"),
  learnExtra: [
    card("만나서", "man-na-seo", "having met", "만나다 + 서.", "만나서 반갑습니다! = Nice to meet you!"),
    card("처음", "cheo-eum", "first time", "처음 뵙겠습니다 = It is my first time meeting you.", "")
  ],
  drillTypes: ["mc", "listen", "build", "pick"]
});
add({ id: 25, tier: 3, title: "Farewells", desc: "Arrive and depart with grace.",
  grammar: grammarCard("Two polite goodbyes", "Korean says goodbye differently by who stays:", [
    "YOU STAY, OTHER LEAVES: 안녕히 가십시오 (go in peace).",
    "YOU LEAVE, OTHER STAYS: 안녕히 계십시오 (stay in peace).",
    "At work or on the phone, 가십시오 doubles as 'bye'.",
    "Close friends say 잘 가.",
    "At night: 안녕히 주무십시오 = good night (sleep peacefully)."
  ]),
  learn: vocabCards("g_goodbye", "g_goodbye2", "g_bye_casual", "g_eat_q"),
  drillTypes: ["mc", "listen", "build", "pick"]
});
add({ id: 26, tier: 3, title: "Thanks & Sorry", desc: "고맙습니다 and 미안합니다 - the daily oils of conversation.",
  learn: vocabCards("g_thanks", "g_thanks_hm", "g_sorry", "g_excuse"),
  learnExtra: [
    card("천만에요", "cheon-man-e-yo", "You're welcome / not at all", "Modest reply to thanks.", "가: 고맙습니다! 나: 천만에요.")
  ],
  drillTypes: ["mc", "listen", "build", "pick"]
});
add({ id: 27, tier: 3, title: "Introducing Yourself", desc: "저는 ... 입니다 - the sentence that starts every friendship.",
  grammar: grammarCard("The formal 'to be'", "Korean has no verb 'am'. Put 입니다 at the end:", [
    "저는 [name]입니다. = I am [name].",
    "저는 [country]사람입니다. = I am a person of [country].",
    "저는 학생입니다. = I am a student.",
    "Question: 입니까? 저는 학생입니까?",
    "Negative: 아닙니다. 저는 학생이 아닙니다."
  ]),
  learn: vocabCards("pr_i_hm", "pr_i", "vb_name", "p_student", "ph_that_is"),
  learnExtra: [
    card("제 이름은 ...입니다", "je i-reum-eun ... im-ni-da", "My name is ...", "제 = my (humble).", "제 이름은 빌입니다."),
    card("사람입니다", "sa-ram-im-ni-da", "(I) am a person of ...", "사람 + 입니다.", "저는 조선사람입니다.")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 28, tier: 3, title: "Asking 'What is this?'", desc: "이것은 무엇입니까 - your first genuine question.",
  learn: vocabCards("vb_what", "pr_this", "pr_that", "pr_that2", "vb_thing"),
  learnExtra: [
    card("...입니까?", "...-im-ni-kka?", "Is it ... ? / What ... ?", "The polite question ending.", "선생입니까? = Are you a teacher?")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 29, tier: 3, title: "Yes-No Question Pattern", desc: "Almost any sentence can become a question: change the ending.",
  learn: vocabCards("vb_yes", "vb_no", "ph_that_is", "ph_isnot"),
  learnExtra: [
    card("-습니까?", "-seum-ni-kka?", "Formal question ending", "Instead of 습니다 (statement) use 습니까 (question).", "갑니다 -> 갑니까?")
  ],
  drillTypes: ["mc", "listen", "build", "pick"]
});
add({ id: 30, tier: 3, title: "North Korean Respect Levels", desc: "When to use the formal style - and when friends drop it.",
  grammar: grammarCard("Speech levels in the North", "Munhwao speakers shift levels by situation:", [
    "FORMAL (-습니다/습니까): work, shops, first meetings, public speech. The North uses it broadly EVERY DAY.",
    "POLITE (haeyo ㅂ니다... actually 해요 style): still polite but softer; common between neighbours.",
    "FRIENDLY (오/소): a Northern habit - older speakers add -오/-소: 가오.",
    "PLAIN (반말): to close friends and children: 간다, 뭐 해?",
    "Rule: when unsure, use formal -습니다. Extra respect never offends."
  ]),
  learn: vocabCards("g_hello", "g_nice", "g_thanks", "ph_how_are_you"),
  drillTypes: ["mc", "pick", "listen", "build"]
});

/* =====================================================================
   TIER 4 - PEOPLE & PRONOUNS
   ===================================================================== */
add({ id: 31, tier: 4, title: "I, You, We", desc: "The personal map: 저 (humble), 나 (plain), 당신 (you), 우리 (we).",
  learn: vocabCards("pr_i", "pr_i_hm", "pr_you", "pr_you_f", "pr_we"),
  learnExtra: [
    card("저희", "jeo-hui", "we (humble)", "Even humbler 'we' for groups.", "저희는 학생입니다.")
  ],
  drillTypes: ["mc", "pick", "listen", "type"]
});
add({ id: 32, tier: 4, title: "Parents", desc: "아버지 and 어머니 - with the respectful -님 forms.",
  learn: vocabCards("fam_dad", "fam_mom", "fam_pa_h", "fam_ma_h"),
  learnExtra: [
    card("아버님 어머님", "a-beo-nim eo-meo-nim", "Father/mother (deep respect)", "Widely used in Northern homes.", "어머님께서 밥을 잡수십니다."),
    card("부모", "bu-mo", "parents", "부모님 = honored parents.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 33, tier: 4, title: "Siblings", desc: "Koreans split siblings by gender and age - use the right word!",
  grammar: grammarCard("The sibling words depend on YOU", "For a male speaker: 형 (older bro), 누나 (older sis). For a female: 오빠 (older bro), 언니 (older sis). Younger sibling = 동생 for both.", [
    "형 = older brother (men say this).",
    "오빠 = older brother (women say this).",
    "누나 = older sister (men say this).",
    "언니 = older sister (women say this).",
    "동생 = younger sibling (gender-neutral).",
    "Getting these right shows real fluency!"
  ]),
  learn: vocabCards("fam_big_bro", "fam_big_brosis", "fam_big_sis", "fam_big_siswome", "fam_you_sisbro"),
  drillTypes: ["mc", "pick", "listen", "build"]
});
add({ id: 34, tier: 4, title: "Comrades & Friends", desc: "동무 - the Northern word for friend.",
  grammar: grammarCard("동무 - friend AND comrade", "In the North, 동무 is THE everyday word for a friend and a respectful address:", [
    "동무 = friend/comrade. Name + 동무: 리동무 = Comrade Ri.",
    "The whole society is a collective - even co-workers are 동무.",
    "Young people also use 친구 these days.",
    "Addressing friendly adults: 아저씨 (uncle), 아주머니 (auntie).",
    "Never use 동무 for your beloved in a romantic sense - that's a friend only."
  ]),
  learn: vocabCards("p_friend", "p_friend2", "p_man", "p_woman", "p_child"),
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 35, tier: 4, title: "Occupations", desc: "What do people do? Teachers, workers, doctors and officials.",
  learn: vocabCards("p_teacher", "p_doctor", "p_worker", "p_official", "w_workplace"),
  learnExtra: [
    card("무슨 일을 하십니까", "mu-seun il-eul ha-sim-ni-kka", "What work do you do?", "The everyday 'what is your job?' question.", "저는 로동자입니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 36, tier: 4, title: "This, That, The Other", desc: "이 (this near me), 그 (that near you), 저 (that over there).",
  grammar: grammarCard("이 / 그 / 저 - the pointing words", "Attach to nouns for 'this book', 'that person':", [
    "이것 = this thing (이 + 것).",
    "그것 = that thing (near the listener).",
    "저것 = that thing (far away).",
    "이 사람 = this person. 저 산 = that mountain.",
    "Quest: 무엇입니까 = what is it?"
  ]),
  learn: vocabCards("pr_this", "pr_that", "pr_that2", "vb_thing", "pr_someone"),
  drillTypes: ["mc", "pick", "listen", "build"]
});
add({ id: 37, tier: 4, title: "People Review", desc: "Every new person in your world now has a Korean word.",
  learn: vocabCards("p_people_p", "p_friend", "fam_family", "p_nk_name", "p_nk_people"),
  drillTypes: ["mc", "listen", "pick", "build", "type"]
});

/* =====================================================================
   TIER 5 - CORE SENTENCES & PARTICLES
   ===================================================================== */
add({ id: 38, tier: 5, title: "SOV Word Order", desc: "Korean puts the verb LAST: Subject - Object - Verb.",
  grammar: grammarCard("The golden order", "English is SVO (I eat rice). Korean is SOV (I rice eat):", [
    "저는 물을 마십니다. = I water drink.",
    "동무가 신문을 읽습니다. = Friend newspaper reads.",
    "The verb always comes last - even long sentences.",
    "Particles glue words: subject takes 은/는 or 이/가; object takes 을/를.",
    "Read from the end: the verb shapes the meaning."
  ]),
  learn: [
    card("나는 학생입니다", "na-neun hak-saeng-im-ni-da", "I am a student", "나 + 는 + 학생 + 입니다.", ""),
    card("물을 마십니다", "mul-eul ma-sim-ni-da", "(I) drink water", "물 + 을 + 마시다.", ""),
    card("동무를 만납니다", "dong-mu-reul man-nam-ni-da", "(I) meet my friend", "동무 + 를 + 만나다.", ""),
    card("평양에 삽니다", "pyeong-yang-e sam-ni-da", "(I) live in Pyongyang", "평양 + 에 + 살다.", "")
  ],
  drillTypes: ["build", "mc", "type", "pick"]
});
add({ id: 39, tier: 5, title: "Topic Particle 은/는", desc: "This little hinge says 'as for...' and sets the topic.",
  grammar: grammarCard("은 or 는?", "Choose by the last letter of the noun:", [
    "Consonant end -> 은: 책은, 방은.",
    "Vowel end -> 는: 나는, 동무는... no, 동무 ends in ㅜ so 동무는. Correct: 나는.",
    "Tells what the sentence is ABOUT, or contrasts: 나는 as for me.",
    "Subjects often drop - Korean is a 'zero pronoun' language.",
    "Example: 저는 학생입니다. = As for me, I am a student."
  ]),
  learn: vocabCards("pt_topic", "pr_i", "pr_i_hm", "vb_name"),
  learnExtra: [
    card("책은", "chae-geun", "the book (as topic)", "책 + 은.", "책은 재미있습니다."),
    card("저는", "jeo-neun", "as for me (humble)", "저 + 는.", "저는 리동무입니다.")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 40, tier: 5, title: "Subject Particle 이/가", desc: "이/가 marks the SUBJECT doing the action - and answers 'who?'.",
  grammar: grammarCard("이 vs 가", "Same rule as 은/는:", [
    "Consonant end -> 이: 사람이, 비가... no, 비 ends in ㅣ so 비가. Correct: 사람이.",
    "Vowel end -> 가: 동무가, 우리가.",
    "이/가 centres the subject: 누가 옵니까? -> 동무가 옵니다.",
    "With 있다/없다: 돈이 있습니다 (there is money).",
    "이/가 vs 은/는 nuance refines with reading - memorise with sentences."
  ]),
  learn: vocabCards("pt_subject", "vb_who", "v_have_exist", "v_nothave"),
  learnExtra: [
    card("비가 옵니다", "bi-ga om-ni-da", "It is raining", "비 + 가 + 오다.", ""),
    card("동무가 옵니다", "dong-mu-ga om-ni-da", "The friend is coming", "동무 + 가.", "")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 41, tier: 5, title: "Object Particle 을/를", desc: "The object gets 을/를.",
  learn: vocabCards("pt_object", "f_meal", "v_eat"),
  learnExtra: [
    card("밥을 먹습니다", "bap-eul meok-seum-ni-da", "I eat rice", "밥 + 을.", ""),
    card("책을 읽습니다", "chae-geul il-geum-ni-da", "I read a book", "책 + 을.", ""),
    card("물을 마십니다", "mul-eul ma-sim-ni-da", "I drink water", "물 + 을.", "")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 42, tier: 5, title: "I am X: 입니다", desc: "States of being: 학생입니다, 의사입니다.",
  learn: vocabCards("ph_that_is", "ph_isnot", "p_teacher", "p_doctor"),
  learnExtra: [
    card("...입니다", "...-im-ni-da", "(It) is ...", "You already use it in 고맙습니다.", ""),
    card("아닙니다", "a-nim-ni-da", "(It) is not ...", "Put the word before: 학생이 아닙니다.", "")
  ],
  drillTypes: ["mc", "build", "type", "pick"]
});
add({ id: 43, tier: 5, title: "Negatives: 아닙니다", desc: "The polite 'is not'.",
  learn: vocabCards("ph_isnot", "vb_no", "v_notknow"),
  learnExtra: [
    card("이것은 책이 아닙니다", "i-geo-seun chae-gi a-nim-ni-da", "This is not a book", "것은 + 책이 + 아닙니다.", ""),
    card("아니요", "a-ni-yo", "No (spoken)", "Softer casual 'no'.", "")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 44, tier: 5, title: "Place Particles 에 / 에서", desc: "에 for destination, 에서 for the place of action.",
  grammar: grammarCard("에 vs 에서", "Two sades - choose by meaning:", [
    "에 = TO/AT (destination, existence): 평양에 갑니다, 방에 있습니다.",
    "에서 = AT (action there): 식당에서 먹습니다.",
    "에서 also = FROM: 어디에서 왔습니까?",
    "Asking location: 어디에 있습니까?",
    "To a person: 동무에게 (to my friend)."
  ]),
  learn: vocabCards("pt_loc", "pt_from", "vb_where", "v_go"),
  learnExtra: [
    card("집에 갑니다", "ji-be gam-ni-da", "(I) go home", "집 + 에 + 가다.", "")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 45, tier: 5, title: "Possession 의 and Locator 있다", desc: "My friend's book: 내 동무의 책.",
  learn: vocabCards("pt_of", "v_have_exist", "v_nothave", "vb_here", "vb_there"),
  learnExtra: [
    card("내 동무의 책", "nae dong-mu-ui chaek", "my friend's book", "내 (my) + 동무 + 의 + 책.", ""),
    card("여기에 있습니다", "yeo-gi-e it-seum-ni-da", "It is here", "여기 + 에 + 있다.", ""),
    card("있습니까?", "it-seum-ni-kka?", "Is there ... ?", "돈이 있습니까? = Do you have money?", "")
  ],
  drillTypes: ["mc", "build", "pick", "type"]
});
add({ id: 46, tier: 5, title: "Sentence Building Mastery", desc: "All particles at once: build full, real sentences.",
  grammar: grammarCard("One template, infinite sentences", "Combine what you know:", [
    "이것은 무엇입니까 (what is this?)",
    "저는 [place]에서 공부합니다 (I study at...).",
    "동무와 식당에서 랭면을 먹습니다.",
    "Order: topic + place + object + verb.",
    "Particles are spoken attached - no pauses."
  ]),
  learn: [
    card("동무와 식당에서 랭면을 먹습니다", "dong-mu-wa sik-dang-e-seo raeng-myeon-eul meok-seum-ni-da", "I eat cold noodles with my friend at the restaurant", "", ""),
    card("저는 평양에서 삽니다", "jeo-neun pyeong-yang-e-seo sam-ni-da", "I live in Pyongyang", "", ""),
    card("그것은 무엇입니까", "geu-geo-seun mu-eo-sim-ni-kka", "What is that?", "", "")
  ],
  drillTypes: ["build", "type", "mc", "listen"]
});

/* =====================================================================
   TIER 6 - EVERYDAY VERBS
   ===================================================================== */
add({ id: 47, tier: 6, title: "Go & Come", desc: "가다 and 오다 - the verbs of motion.",
  grammar: grammarCard("Formal present: -습니다", "Verb stems end in 습니다 (statement):", [
    "가다 -> 갑니다 (goes).",
    "오다 -> 옵니다 (comes).",
    "돌아가다 -> 돌아갑니다 (returns).",
    "Question: 갑니까? 옵니까?",
    "The pattern repeats for ALL verbs!"
  ]),
  learn: vocabCards("v_go", "v_come", "v_return", "v_enter", "v_exit"),
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 48, tier: 6, title: "Eat & Drink", desc: "밥을 먹습니다, 물을 마십니다.",
  learn: vocabCards("v_eat", "v_drink", "d_water", "f_meal"),
  learnExtra: [
    card("맛있게 먹습니다", "ma-sit-kke meok-seum-ni-da", "I eat deliciously", "The polite table verb.", "배불리 먹었습니다 = I ate until full.")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 49, tier: 6, title: "See, Read, Watch", desc: "보다 covers seeing, watching TV and reading newspapers.",
  learn: vocabCards("v_see", "v_read", "nk_tv", "w_book"),
  learnExtra: [
    card("신문을 봅니다", "sin-mun-eul bom-ni-da", "I look at the newspaper", "Or reading: sinmun-eul ik-seum-ni-da.", ""),
    card("텔레비죤을 봅니다", "tel-le-bi-jon-eul bom-ni-da", "I watch television", "North spelling: 텔레비죤.", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 50, tier: 6, title: "Sleep & Rest", desc: "자다 and 쉬다.",
  learn: vocabCards("v_sleep", "v_rest", "tm_wkend", "h_bed"),
  learnExtra: [
    card("잠을 잡니다", "jam-eul jam-ni-da", "I sleep (a sleep)", "Noun + verb pairs: 잠을 자다.", "매일 밤 잠을 잡니다.")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 51, tier: 6, title: "Give & Receive", desc: "주다, 받다, and the sacred -주십시오.",
  learn: vocabCards("v_give", "v_receive", "pt_to_someone"),
  learnExtra: [
    card("동무에게 줍니다", "dong-mu-e-ge jum-ni-da", "I give (it) to my friend", "에게 = to (a person).", ""),
    card("주십시오", "ju-sim-si-o", "Please give (me)", "The polite command of 주다.", "물 한 잔 주십시오.")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 52, tier: 6, title: "Do & Become", desc: "하다 - the verb that makes anything a verb.",
  grammar: grammarCard("하다 - the universal verb", "Any action noun + 하다 becomes a verb:", [
    "공부 + 하다 = 공부하다 (to study).",
    "노래 + 하다 = 노래하다 (to sing).",
    "청소 + 하다 = 청소하다 (to clean).",
    "Add 기 to turn verbs into nouns: 공부하기.",
    "되다 = to become: 선생이 됩니다."
  ]),
  learn: vocabCards("v_do", "v_study", "v_sing", "v_clean", "v_become"),
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 53, tier: 6, title: "Exist & Not Exist", desc: "있다 and 없다 - simple but everywhere.",
  learn: vocabCards("v_have_exist", "v_nothave", "ph_no_time", "s_money"),
  learnExtra: [
    card("돈이 있습니다", "do-ni it-seum-ni-da", "I have money", "돈이 + 있다.", ""),
    card("시간이 없습니다", "si-gan-i eop-seum-ni-da", "I have no time", "The humble refusal.", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 54, tier: 6, title: "Verb Review", desc: "The -습니다 engine, with everything you can do.",
  learn: vocabCards("v_go", "v_eat", "v_see", "v_make", "v_help", "v_begin", "v_finish", "v_wait"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 7 - TIME & DAILY ROUTINE
   ===================================================================== */
add({ id: 55, tier: 7, title: "What Time Is It?", desc: "Hours are native, minutes are Sino - the classic hybrid.",
  grammar: grammarCard("Hours + minutes = two systems", "Conquer the clock:", [
    "Hours use NATIVE numbers + 시: 한 시, 두 시, 세 시.",
    "Minutes use SINO numbers + 분: 일 분, 오 분, 삼십 분.",
    "Question: 지금 몇 시입니까?",
    "Half past: 반 after the hour: 세 시 반 = 3:30.",
    "Answer: 지금 네 시 십오 분입니다. = It is 4:15."
  ]),
  learn: vocabCards("tm_hour", "tm_minute", "tm_half", "vb_now"),
  learnExtra: [
    card("몇", "myeot", "how many", "몇 시, 몇 명 - always with a counter.", "")
  ],
  drillTypes: ["mc", "build", "type", "listen"]
});
add({ id: 56, tier: 7, title: "Morning Routine", desc: "From waking to leaving - narrate your morning.",
  learn: vocabCards("f_breakfast", "tm_early_morning", "v_wash", "f_meal"),
  learnExtra: [
    card("일어납니다", "i-reo-nam-ni-da", "I get up", "일어나다.", "이른 아침에 일어납니다."),
    card("손을 씻습니다", "so-neul ssit-seum-ni-da", "I wash my hands", "씻다.", ""),
    card("출근합니다", "chul-geun-ham-ni-da", "I go to work", "The day begins.", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 57, tier: 7, title: "Days of the Week", desc: "Monday to Sunday - with the element meaning behind each.",
  grammar: grammarCard("The elements inside the days", "Each day hides an element: 월 (Moon), 화 (Fire), 수 (Water), 목 (Wood), 금 (Gold), 토 (Earth), 일 (Sun).", [
    "월요일 = Moon-day = Monday.",
    "수요일 = Water-day = Wednesday.",
    "토요일 = Earth-day = Saturday.",
    "Asking: 오늘 무슨 요일입니까?",
    "Answer: 오늘은 월요일입니다."
  ]),
  learn: vocabCards("tm_mon", "tm_tue", "tm_wed", "tm_thu", "tm_fri", "tm_sat", "tm_sun"),
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 58, tier: 7, title: "Months & Dates", desc: "Sino number + 월: 칠월 (July), 십이월 (December).",
  grammar: grammarCard("The month formula", "Simple and regular:", [
    "일월, 이월, 삼월 ... 칠월, 팔월, 구월, 시월, 십일월, 십이월.",
    "June: 류월 (ryu-wol) - Northern spelling keeps the R.",
    "October drops the ㅂ: 시월 (not 십월).",
    "Dates: 일 일 (the 1st), 십오 일 (the 15th).",
    "Full date: 2026년 9월 14일."
  ]),
  learn: vocabCards("tm_month_sino", "tm_year_sino", "tm_year"),
  learnExtra: [
    card("새해", "sae-hae", "New Year", "새 (new) + 해 (year).", "새해를 축하합니다!")
  ],
  drillTypes: ["mc", "build", "type", "listen"]
});
add({ id: 59, tier: 7, title: "Yesterday, Today, Tomorrow", desc: "Anchoring time with the day pronouns.",
  learn: vocabCards("vb_today", "vb_yesterday", "vb_tomorrow", "tm_night", "tm_daytime"),
  learnExtra: [
    card("그저께", "geu-jeo-kke", "the day before yesterday", "", ""),
    card("모레", "mo-re", "the day after tomorrow", "", "모레 만납시다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 60, tier: 7, title: "Daily Routine Review", desc: "A whole day in Munhwao: wake, work, eat, rest, sleep.",
  learn: [
    card("아침에 일어납니다", "a-chi-me i-reo-nam-ni-da", "In the morning I wake up", "", ""),
    card("밥을 먹습니다", "bap-eul meok-seum-ni-da", "I eat meals", "All three: 아침/점심/저녁.", ""),
    card("일터에 갑니다", "il-teo-e gam-ni-da", "I go to the workplace", "", ""),
    card("쉬는 날에 쉽니다", "swi-neun-nal-e swim-ni-da", "On rest days I rest", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});/* =====================================================================
   MUNHWAE CURRICULUM  (Munhwao Mastery)  -  PART 3
   ===================================================================== */

/* =====================================================================
   TIER 8 - FOOD & RESTAURANTS
   ===================================================================== */
add({ id: 61, tier: 8, title: "Three Meals", desc: "아침, 점심, 저녁 - and the grains that fill them.",
  learn: vocabCards("f_breakfast", "f_lunch", "f_dinner", "f_meal", "f_rice"),
  drillTypes: ["mc", "pick", "listen", "type"]
});
add({ id: 62, tier: 8, title: "Kimchi & Banchan", desc: "Koreans eat tables full of side dishes.",
  learn: vocabCards("f_kimchi", "f_side", "f_soup", "f_veg", "f_veg2"),
  learnExtra: [
    card("배추김치", "bae-chu-gim-chi", "cabbage kimchi", "The most famous kind.", ""),
    card("된장국", "doen-jang-guk", "soybean-paste soup", "국 = soup.", ""),
    card("불고기", "bul-go-gi", "grilled meat", "불 (fire) + 고기 (meat).", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 63, tier: 8, title: "Noodles & Favorites", desc: "랭면 - Pyongyang cold noodles, the national pride.",
  grammar: grammarCard("평양랭면 - pride of Pyongyang", "Cold buckwheat noodles in icy broth, topped with beef and pear:", [
    "랭면 = cold noodles (North spelling; the South writes 냉면).",
    "평양랭면 = the Pyongyang original.",
    "Toppings: 배 (pear), 오이 (cucumber), boiled egg.",
    "Order: 랭면 한 그릇 주십시오 = one bowl, please.",
    "Mustard (겨자) goes on top - mix before eating."
  ]),
  learn: vocabCards("f_noodles", "f_porknoodles", "f_fruit", "f_apple"),
  learnExtra: [
    card("맛있습니다", "ma-sit-seum-ni-da", "It is delicious", "From 맛있다.", "평양랭면은 맛있습니다!")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 64, tier: 8, title: "Ordering at the Restaurant", desc: "The polite command -주십시오 brings the food.",
  grammar: grammarCard("Ordering like a local", "Use the polite request forms:", [
    "X 주십시오 = please give me X.",
    "X 주세요 = softer request.",
    "계산서 주십시오 = the bill, please.",
    "Recommendation: 무엇을 추천하십니까?",
    "Arrival cheers: 맛있게 잡수십시오 (host), 배불리 먹었습니다 (guest)."
  ]),
  learn: vocabCards("ph_please_help", "f_restaurant", "ph_enjoy_meal", "ph_delicious2"),
  learnExtra: [
    card("물 한 잔 주십시오", "mul han jan ju-sim-si-o", "One glass of water, please", "", ""),
    card("계산서", "gye-san-seo", "the bill", "", "계산서 주십시오.")
  ],
  drillTypes: ["mc", "build", "type", "listen"]
});
add({ id: 65, tier: 8, title: "Drinks", desc: "물, 차, 술, 단물 - what to sip in the North.",
  learn: vocabCards("d_water", "d_tea", "d_beer", "d_liquor", "d_milk", "d_juice", "d_coffee"),
  learnExtra: [
    card("뜨거운 물", "tteu-geo-un mul", "hot water", "The North loves hot water with meals.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 66, tier: 8, title: "Food Review", desc: "Name the table, order the bowl, thank the host.",
  learn: vocabCards("f_food", "a_delicious", "a_spicy", "a_sweet", "f_restaurant"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 9 - PLACES & TRANSPORT
   ===================================================================== */
add({ id: 67, tier: 9, title: "Pyongyang the Capital", desc: "Your map words for the city.",
  learn: vocabCards("city_pyongyang", "city_city", "city_street", "nk_capital", "nk_pyongyang_is"),
  learnExtra: [
    card("김일성광장", "gim-il-seong-gwang-jang", "Kim Il-sung Square", "The great central square.", ""),
    card("주체사상탑", "ju-che-sa-sang-tap", "Tower of Juche Ideas", "The landmark tower by the river.", ""),
    card("대동강", "dae-dong-gang", "the Taedong River", "Pyongyang flows along it.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 68, tier: 9, title: "Finding Your Way", desc: "Street to street - directions that actually work.",
  learn: vocabCards("city_street", "city_alley", "city_bridge", "t_road", "vb_where"),
  learnExtra: [
    card("길을 잃었습니다", "gi-reul il-leo-seum-ni-da", "I lost my way", "", ""),
    card("왼쪽", "oen-jjok", "left", "", "왼쪽으로 갑니다."),
    card("오른쪽", "o-reun-jjok", "right", "", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 69, tier: 9, title: "The Metro", desc: "Pyongyang's deep subway - 지하철 vocabulary.",
  grammar: grammarCard("Around the Pyongyang metro", "The metro is a genuine city experience:", [
    "지하철역 = metro station.",
    "The stations double as art galleries with murals.",
    "Two lines: Chollima and Hyoksin.",
    "Asia's deepest metro - long escalator rides.",
    "Ride politely: 자리를 양보합니다 (yield a seat)."
  ]),
  learn: vocabCards("t_metro", "t_station", "t_stop", "t_ticket", "v_ride"),
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 70, tier: 9, title: "Train & Bus", desc: "기차 and 버스 - the long-distance lifeline.",
  learn: vocabCards("t_train", "t_bus", "t_tram", "t_plane", "t_ship"),
  learnExtra: [
    card("기차역", "gi-cha-yeok", "train station", "역 = station.", ""),
    card("차표", "cha-pyo", "ticket", "", "차표 한 장 주십시오."),
    card("시간표", "si-gan-pyo", "timetable", "", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 71, tier: 9, title: "Asking Directions", desc: "어디에 있습니까 - the question that always works.",
  grammar: grammarCard("The two direction questions", "Master both and you are never lost:", [
    "[place]이/가 어디에 있습니까? = Where is [place]?",
    "어떻게 갑니까? = How does one get there?",
    "Answers: 곧은길로 가십시오 (go straight), 왼쪽으로 (turn left).",
    "대략 십 분 걸립니다 = it takes about 10 minutes.",
    "Opener: 실례합니다 = excuse me."
  ]),
  learn: vocabCards("g_excuse", "city_hospital", "city_dept", "city_market", "t_taxi"),
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 72, tier: 9, title: "Travel: 려행", desc: "North Korean trips and the special 려 sound.",
  learn: vocabCards("t_travel", "city_hotel", "t_airport", "city_museum", "nat_mountain"),
  learnExtra: [
    card("려행사", "ryeo-haeng-sa", "travel agency", "North word for tourism bureau.", "려행사에서 예약합니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 73, tier: 9, title: "Places Review", desc: "Move around the city with confidence.",
  learn: vocabCards("city_school", "city_post", "city_bank", "city_pharmacy", "city_park"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 10 - SHOPPING & MONEY
   ===================================================================== */
add({ id: 74, tier: 10, title: "Money Words", desc: "원, 돈, 잔돈 - the currency of the DPRK is the won.",
  learn: vocabCards("s_money", "s_won", "shop_change", "shop_price", "shop_receipt"),
  learnExtra: [
    card("조선원", "jo-seon-won", "Korean won", "Officially the DPRK's currency.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 75, tier: 10, title: "How Much? 얼마", desc: "The one-word question that opens every shop.",
  learn: vocabCards("shop_howmuch", "a_expensive", "a_cheap", "shop_discount"),
  learnExtra: [
    card("이것은 얼마입니까", "i-geo-seun eol-ma-im-ni-kka", "How much is this?", "얼마 = how much.", ""),
    card("비쌉니다", "bi-ssam-ni-da", "It is expensive", "From 비싸다.", "너무 비쌉니다!"),
    card("값을 좀 내려 주십시오", "gap-eul jom nae-ryeo ju-sim-si-o", "Please lower the price a little", "The bargaining line.", "")
  ],
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 76, tier: 10, title: "At the Shop", desc: "상점 vs 시장 - the state shop and the market.",
  grammar: grammarCard("Shops and markets", "Two worlds of shopping:", [
    "상점 = general state shop (fixed prices).",
    "시장 = the people's market (bustling, bargaining).",
    "백화점 = department store.",
    "기념품 = souvenirs.",
    "Ask: 무엇을 팝니까? = What do you sell?"
  ]),
  learn: vocabCards("city_shop", "city_market", "city_dept", "v_buy", "v_sell"),
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 77, tier: 10, title: "Buying Souvenirs", desc: "Gifts and keepsakes: 기념품, 가방, flags.",
  learn: vocabCards("shop_souvenir", "shop_bag", "nk_flag", "shop_free"),
  learnExtra: [
    card("선물", "seon-mul", "gift (present)", "", "동무에게 선물을 줍니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 78, tier: 10, title: "Numbers Drill (Money)", desc: "Prices fly fast - train your ear with thousands.",
  learn: [
    card("천 원", "cheon won", "1,000 won", "A cheap jot.", ""),
    card("오천 원", "o-cheon won", "5,000 won", "Lunch money.", ""),
    card("일만 원", "il-man won", "10,000 won", "The basic note.", ""),
    card("오만 원", "o-man won", "50,000 won", "Big family shopping.", ""),
    card("얼마", "eol-ma", "how much", "Say it with a smile.", "")
  ],
  drillTypes: ["listen", "type", "mc"],
  numDrill: { kind: "sino", min: 100, max: 10000, money: true }
});
add({ id: 79, tier: 10, title: "Shopping Review", desc: "Bargain, thank, and go home with your bundle.",
  learn: vocabCards("shop_price", "shop_change", "shop_receipt", "g_thanks"),
  learnExtra: [
    card("계산서 주십시오", "gye-san-seo ju-sim-si-o", "Please give me the bill", "", ""),
    card("잔돈 주십시오", "jan-don ju-sim-si-o", "Please give change", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 11 - SCHOOL, WORK & HEALTH
   ===================================================================== */
add({ id: 80, tier: 11, title: "School", desc: "배움터 and 학교 - the classroom words.",
  learn: vocabCards("city_school", "city_uni", "w_classroom", "w_lesson"),
  learnExtra: [
    card("배움터", "bae-um-teo", "place of learning", "A respectful North word for school.", "배움터에서 열심히 공부합니다."),
    card("교실", "gyo-sil", "classroom", "", "교실이 깨끗합니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 81, tier: 11, title: "Study Verbs", desc: "Keep learning: 공부하다, 배우다, 읽다, 쓰다.",
  learn: vocabCards("v_study", "v_learn", "v_read", "v_write", "w_paper"),
  learnExtra: [
    card("열심히 공부합니다", "yeol-sim-hi gong-bu-ham-ni-da", "I study hard", "열심히 = diligently.", ""),
    card("숙제합니다", "suk-je-ham-ni-da", "I do homework", "숙제 + 하다.", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 82, tier: 11, title: "Work & Labor", desc: "로동 - the work of the people, with Northern spelling.",
  learn: vocabCards("v_work", "v_begin", "v_finish", "w_factory", "w_office"),
  learnExtra: [
    card("로동자", "ro-dong-ja", "worker", "North spelling of 노동자.", ""),
    card("로임", "ro-im", "wage", "North spelling.", "로임을 받습니다."),
    card("출근", "chul-geun", "going to work", "", "출근합니다."),
    card("퇴근", "toe-geun", "leaving work", "", "퇴근합니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 83, tier: 11, title: "Body & Health", desc: "아프다 and the body map.",
  learn: vocabCards("b_head", "b_stomach", "h2_sick", "a_sick", "b_hand"),
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 84, tier: 11, title: "At the Doctor", desc: "The exam rooms: 의사, 병원, 약방.",
  learn: vocabCards("city_hospital", "city_pharmacy", "h2_medicine", "h2_fever", "h2_checkup"),
  learnExtra: [
    card("어디가 아픕니까", "eo-di-ga a-peum-ni-kka", "Where does it hurt?", "Doctor's opener.", ""),
    card("열이 납니다", "yeo-ri nam-ni-da", "I have a fever", "열 (fever) + 나다.", ""),
    card("약을 먹습니다", "ya-geul meok-seum-ni-da", "I take medicine", "약 + 을.", "")
  ],
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 85, tier: 11, title: "School, Work & Health Review", desc: "Your three communities fully named.",
  learn: vocabCards("p_teacher", "w_office", "p_doctor", "h2_nurse", "v_help"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 12 - PAST & FUTURE
   ===================================================================== */
add({ id: 86, tier: 12, title: "The Past: 았습니다", desc: "Add 었/았 to the stem to step into yesterday.",
  grammar: grammarCard("Formal past tense", "Stem + 았/었 + 습니다:", [
    "Vowel ㅏ/ㅗ stem -> 았습니다: 가다 -> 갔습니다.",
    "Other vowels -> 었습니다: 먹다 -> 먹었습니다.",
    "하다 -> 했습니다 (did).",
    "Question: 갔습니까? (Did you go?)",
    "Same ending logic as the present - just change the tense marker."
  ]),
  learn: [
    card("갔습니다", "gat-seum-ni-da", "(I) went", "가 + 았습니다.", ""),
    card("먹었습니다", "meo-geo-sseum-ni-da", "(I) ate", "먹 + 었습니다.", ""),
    card("봤습니다", "bwat-seum-ni-da", "(I) saw", "보 + 았습니다.", ""),
    card("했습니다", "haet-seum-ni-da", "(I) did", "하 + 였/앗.", "")
  ],
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 87, tier: 12, title: "Past Stories", desc: "Tell what you did yesterday with your new tense.",
  learn: [
    card("어제 시장에 갔습니다", "eo-je si-jang-e gat-seum-ni-da", "Yesterday I went to the market", "", ""),
    card("랭면을 먹었습니다", "raeng-myeon-eul meo-geo-sseum-ni-da", "I ate cold noodles", "", ""),
    card("동무를 만났습니다", "dong-mu-reul man-na-sseum-ni-da", "I met my friend", "만나다 -> 만났습니다.", ""),
    card("밤 늦게 잤습니다", "bam neut-kke jat-seum-ni-da", "I slept late at night", "자다 -> 잤습니다.", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});
add({ id: 88, tier: 12, title: "The Future: 겠습니다", desc: "겠합니다 - polite will / would.",
  grammar: grammarCard("Formal future/will", "Stem + 겠 + 습니다:", [
    "가다 -> 가겠습니다 (I will go).",
    "먹다 -> 먹겠습니다 (I will eat).",
    "알다 -> 알겠습니다 (understood! = 'I will know').",
    "모르다 -> 모르겠습니다 (polite 'I wouldn't know').",
    "겠 shows intention and softness."
  ]),
  learn: [
    card("가겠습니다", "ga-get-seum-ni-da", "I will go", "", "내일 평양에 가겠습니다."),
    card("알겠습니다", "al-get-seum-ni-da", "Understood! / I will know", "The all-purpose 'got it'.", ""),
    card("모르겠습니다", "mo-reu-get-seum-ni-da", "I wouldn't know / don't know", "The humble 'I don't know'.", ""),
    card("하겠습니다", "ha-get-seum-ni-da", "I will do (it)", "", "")
  ],
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 89, tier: 12, title: "Will & Plans", desc: "Plan tomorrow with 겠 and 내일.",
  learn: [
    card("내일 공부하겠습니다", "nae-il gong-bu-ha-get-seum-ni-da", "I will study tomorrow", "", ""),
    card("저녁에 먹겠습니다", "jeo-nyeo-ge meok-get-seum-ni-da", "I will eat in the evening", "", ""),
    card("내일 다시 보겠습니다", "nae-il da-si bo-get-seum-ni-da", "I will see you again tomorrow", "A warm farewell.", ""),
    card("열심히 하겠습니다", "yeol-sim-hi ha-get-seum-ni-da", "I will do my best", "The promise of effort.", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});
add({ id: 90, tier: 12, title: "Events Completed", desc: "Blend past + future to narrate whole days.",
  learn: vocabCards("v_begin", "v_finish", "tm_after", "tm_ago"),
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 91, tier: 12, title: "Tense Review", desc: "Present, past and future in one breath.",
  learn: [
    card("공부합니다 / 공부했습니다 / 공부하겠습니다", "", "study / studied / will study", "The three-form engine.", ""),
    card("갑니다 / 갔습니다 / 가겠습니다", "", "go / went / will go", "", ""),
    card("먹습니다 / 먹었습니다 / 먹겠습니다", "", "eat / ate / will eat", "", ""),
    card("합니다 / 했습니다 / 하겠습니다", "", "do / did / will do", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 13 - DESCRIPTIONS & FEELINGS
   ===================================================================== */
add({ id: 92, tier: 13, title: "Big & Small", desc: "Descriptive verbs end in -습니다 just like action verbs.",
  learn: vocabCards("a_big", "a_small", "a_tall", "a_low"),
  learnExtra: [
    card("평양이 큽니다", "pyeong-yang-i keum-ni-da", "Pyongyang is big", "크다 -> 큽니다.", ""),
    card("방이 작습니다", "bang-i jak-seum-ni-da", "The room is small", "작다 + 습니다.", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 93, tier: 13, title: "Colors of the North", desc: "The flag's stars, the streets' banners.",
  learn: vocabCards("col_red", "col_blue", "col_yellow", "col_white", "col_black", "col_green", "col_color"),
  learnExtra: [
    card("빨간별", "ppal-gan-byeol", "the red star", "빨갛다 -> 빨간.", ""),
    card("조선의 색", "jo-seon-ui saek", "the colors of Korea", "White = the hanbok's purity; red = the star.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 94, tier: 13, title: "Weather Words", desc: "Is it hot, cold, raining, snowing? Describe the sky.",
  learn: vocabCards("nat_weather", "a_hot", "a_cold", "a_warm", "a_cool", "nat_rain", "nat_snow"),
  learnExtra: [
    card("날씨가 좋습니다", "nal-ssi-ga jo-seum-ni-da", "The weather is good", "", ""),
    card("비가 옵니다", "bi-ga om-ni-da", "It is raining", "", ""),
    card("눈이 옵니다", "nu-ni om-ni-da", "It is snowing", "", "")
  ],
  drillTypes: ["mc", "listen", "build", "type"]
});
add({ id: 95, tier: 13, title: "Feelings & Emotions", desc: "기쁘다, 슬프다, 재미있다 - the inner weather.",
  learn: vocabCards("a_happy", "a_sad", "a_fun", "a_beautiful", "a_pretty"),
  learnExtra: [
    card("기쁩니다", "gi-ppeum-ni-da", "I am glad", "기쁘다.", "만나서 기쁩니다!"),
    card("재미있습니다", "jae-mi-it-seum-ni-da", "It is interesting", "재미 + 있다.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 96, tier: 13, title: "Comparing: 더 & 제일", desc: "더 (more) and 제일 (the most) for tastes.",
  learn: vocabCards("a_delicious", "a_expensive", "a_fast"),
  learnExtra: [
    card("더 맛있습니다", "deo ma-sit-seum-ni-da", "is more delicious", "더 = more.", ""),
    card("제일 좋습니다", "je-il jo-seum-ni-da", "is the best", "제일 = most.", ""),
    card("가장", "ga-jang", "the most (alternative)", "", "가장 맛있습니다.")
  ],
  drillTypes: ["mc", "build", "listen", "type"]
});
add({ id: 97, tier: 13, title: "Descriptions Review", desc: "Paint the world around you in Munhwao.",
  learn: vocabCards("a_diligent", "a_busy", "a_tired", "a_heavy", "a_light", "a_clean"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 14 - COMPLEX GRAMMAR
   ===================================================================== */
add({ id: 98, tier: 14, title: "Polite Requests: -주십시오", desc: "The key to getting help anywhere.",
  grammar: grammarCard("Please do X for me", "Verb stem + 어/아 + 주십시오 = 'please do ... for me':", [
    "주다 itself: 주십시오.",
    "도와주십시오 = please help me.",
    "가르쳐 주십시오 = please teach me.",
    "Softer: 주세요.",
    "Politeness opens every door."
  ]),
  learn: vocabCards("ph_please_help", "ph_slowly", "ph_once_more", "v_help"),
  learnExtra: [
    card("천천히 말해 주십시오", "cheon-cheon-hi mal-hae ju-sim-si-o", "Please speak slowly", "The student's lifeline!", ""),
    card("다시 한 번 해 주십시오", "da-si han beon hae ju-sim-si-o", "Please do it once more", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});
add({ id: 99, tier: 14, title: "Joining with -고", desc: "And then: the -고 connector.",
  learn: [
    card("먹고 잡니다", "meok-kko jam-ni-da", "Eat AND sleep", "Stem + 고 (and).", ""),
    card("일하고 공부합니다", "il-ha-go gong-bu-ham-ni-da", "Work and study", "", ""),
    card("병원에 가고 약을 삽니다", "", "Go to the hospital and buy medicine", "Sequence: first go, then buy.", ""),
    card("큰 도시입니다", "keun do-si-im-ni-da", "It is a big city", "크다 -> 큰 (attributive).", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 100, tier: 14, title: "But: 그렇지만", desc: "Contrast with 그렇지만 (but).",
  learn: [
    card("그렇지만", "geu-reo-chi-man", "but / however", "Connects two sentences.", "비가 옵니다. 그렇지만 갑니다."),
    card("그런데", "geu-reon-de", "but / by the way", "Soft opener.", "책은 좋습니다, 그런데 가격이 높습니다."),
    card("그래도", "geu-rae-do", "still / even so", "Concession.", "늦었습니다, 그래도 옵니다.")
  ],
  drillTypes: ["build", "mc", "listen", "pick"]
});
add({ id: 101, tier: 14, title: "Because: -어서 / -니까", desc: "Give your reasons the local way.",
  grammar: grammarCard("Because, the two forms", "Both mean because - slightly different rhythm:", [
    "-어서: simple reasons: 바빠서 (because busy).",
    "-니까: reasons to act on: 비가 오니까 우산을 가져가십시오.",
    "Because + noun: A 때문에 = because of A.",
    "Time 없어서 갈 수 없습니다 = because I have no time, I can't go.",
    "The because-clause comes FIRST, then the result."
  ]),
  learn: [
    card("비가 와서 산에 가지 않습니다", "", "Because it rains, I don't go to the mountain", "오다 -> 와서.", ""),
    card("바빠서 못 갑니다", "ba-ppa-seo mot gam-ni-da", "Because I'm busy, I can't go", "바쁘다 -> 바빠서.", ""),
    card("아파서 약을 먹습니다", "", "Because I'm sick, I take medicine", "", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 102, tier: 14, title: "Want To: -고 싶다", desc: "Express wishes with -고 싶습니다.",
  learn: [
    card("보고 싶습니다", "bo-go sip-seum-ni-da", "I want to see / I miss you", "보 + 고 싶다.", "동무가 보고 싶습니다."),
    card("먹고 싶습니다", "meok-kko sip-seum-ni-da", "I want to eat", "", "랭면을 먹고 싶습니다."),
    card("배우고 싶습니다", "bae-u-go sip-seum-ni-da", "I want to learn", "", "조선어를 배우고 싶습니다!"),
    card("가고 싶습니다", "ga-go sip-seum-ni-da", "I want to go", "", "평양에 가고 싶습니다.")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 103, tier: 14, title: "Must / Can", desc: "해야 합니다 (must) and 수 있습니다 (can).",
  grammar: grammarCard("Modals: can & must", "Two vital endings:", [
    "X 할 수 있습니다 = can do X.",
    "X 못 합니다 / X 할 수 없습니다 = cannot.",
    "X 해야 합니다 = must do X.",
    "X 해도 됩니다 = may do X.",
    "X 하면 안 됩니다 = must not. 늦으면 안 됩니다."
  ]),
  learn: [
    card("읽을 수 있습니다", "il-geul su it-seum-ni-da", "I can read", "", ""),
    card("갈 수 없습니다", "gal su eop-seum-ni-da", "I cannot go", "", ""),
    card("해야 합니다", "hae-ya ham-ni-da", "I must do (it)", "", "열심히 해야 합니다."),
    card("하면 안 됩니다", "ha-myeon an doe-m-ni-da", "must not do", "", "늦으면 안 됩니다.")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 104, tier: 14, title: "Negative Commands & Words", desc: "Stop politely: -지 마십시오, 안 and 못.",
  learn: [
    card("하지 마십시오", "ha-ji ma-sim-si-o", "Please don't do (it)", "", ""),
    card("가지 마십시오", "ga-ji ma-sim-si-o", "Please don't go", "", ""),
    card("안 갑니다", "an gam-ni-da", "I won't go", "안 + verb.", ""),
    card("못 갑니다", "mot gam-ni-da", "I can't go", "못 = cannot.", "못 differs from 안 (won't).")
  ],
  drillTypes: ["build", "mc", "listen", "pick"]
});
add({ id: 105, tier: 14, title: "Polite Social Phrases", desc: "The softeners that make strangers feel at ease.",
  learn: vocabCards("ph_wait", "ph_understand", "ph_slowly", "ph_once_more", "g_excuse"),
  learnExtra: [
    card("좀", "jom", "a little (softener)", "좀 앉으십시오 = please sit a bit.", "좀 makes requests gentle.")
  ],
  drillTypes: ["build", "listen", "mc", "pick"]
});
add({ id: 106, tier: 14, title: "Complex Grammar Review", desc: "Connect, reason, request, refuse - all with grace.",
  learn: [
    card("도와주십시오", "do-wa-ju-sim-si-o", "Please help me", "", ""),
    card("시간이 없어서 못 갔습니다", "", "Because I had no time, I couldn't go", "Past + because + can't.", ""),
    card("조선어를 배우고 싶습니다", "", "I want to learn Korean", "Your own goal!", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});/* =====================================================================
   MUNHWAE CURRICULUM  (Munhwao Mastery)  -  PART 4
   ===================================================================== */

/* =====================================================================
   TIER 15 - MUNHWAO PRONUNCIATION
   ===================================================================== */
add({ id: 107, tier: 15, title: "The Initial N & R Rule", desc: "The signature of Northern speech: keep the N and R.",
  grammar: grammarCard("North keeps ㄴ and ㄹ at word start", "The South drops some initial N/R; the North keeps them:", [
    "녀자 (nyeo-ja, woman) - South: 여자.",
    "려행 (ryeo-haeng, travel) - South: 여행.",
    "로동 (ro-dong, labor) - South: 노동.",
    "류경 (ryu-gyeong) - old name of Pyongyang.",
    "Never weaken these in Munhwao speech!"
  ]),
  learn: vocabCards("p_woman", "t_travel", "v_work", "s_6"),
  drillTypes: ["mc", "listen", "pick", "read"]
});
add({ id: 108, tier: 15, title: "륙 vs 육 - Northern Six", desc: "Numbers carry the rule too: 6 = 륙.",
  learn: vocabCards("s_6", "n_6", "tm_month_sino"),
  learnExtra: [
    card("륙십", "ryuk-sip", "sixty (Sino)", "", "60 = 륙십."),
    card("류월", "ryu-wol", "June", "As a month, 륙 becomes 류.", "류월에 평양에 갑니다."),
    card("백륙", "baeng-nyuk", "106", "Sound linking: 백 + 륙.", "")
  ],
  drillTypes: ["mc", "listen", "read", "pick"]
});
add({ id: 109, tier: 15, title: "Batchim Sound Changes", desc: "Final consonants pronounce differently at word boundaries.",
  grammar: grammarCard("The seven final sounds", "All final consonants collapse to seven sounds before a pause:", [
    "ㄱ ㄲ ㅋ = k. 읽다 reads ~ik-tta.",
    "ㄴ = n. ㄷ ㅅ ㅈ ㅊ ㅌ ㅎ = t.",
    "ㄹ = l. ㅁ = m. ㅂ ㅍ = p. ㅇ = ng.",
    "Before a vowel particle the sound carries over: 밥을 = ba-beul.",
    "Practice: 강 reads ~kang, 꽃 reads ~kkot."
  ]),
  learn: [
    card("읽습니다", "ik-tta / il-seum-ni-da", "reads", "The cluster ㄺ is complex.", ""),
    card("밥을", "ba-beul", "rice + object", "Final ㅂ becomes b before a vowel.", ""),
    card("꽃이", "kko-chi", "flower + subject", "꽃의 ㅊ + 이 flows.", ""),
    card("부엌", "bu-eok", "kitchen", "Final ㅋ = cut-off k.", "")
  ],
  drillTypes: ["read", "mc", "listen", "pick"]
});
add({ id: 110, tier: 15, title: "Intonation & Flow", desc: "Korean sentences rise and fall in long arcs.",
  grammar: grammarCard("Speak with Korean rhythm", "", [
    "No fixed word stress - syllables float evenly.",
    "Yes/no questions rise at the VERY end: 갑니까 (rising).",
    "Statements fall gently: 갑니다 (falling).",
    "Wh-questions fall but lift on the question word.",
    "Keep vowels round and crisp, consonants quick - the 'machine gun' feel."
  ]),
  learn: vocabCards("g_hello", "g_thanks", "vb_what", "vb_where"),
  drillTypes: ["listen", "mc", "pick", "read"]
});
add({ id: 111, tier: 15, title: "North vs South Sound", desc: "Ears of a native: notice the differences, stay Northern.",
  learn: vocabCards("p_woman", "t_travel", "v_work", "f_noodles", "s_6"),
  drillTypes: ["mc", "listen", "pick", "read"]
});
add({ id: 112, tier: 15, title: "Pronunciation Review", desc: "Sound check: say these like your teacher would.",
  learn: [
    card("녀성", "nyeo-seong", "woman (formal)", "Initial N kept.", ""),
    card("려권", "ryeo-gwon", "passport", "South writes 여권.", ""),
    card("력사", "ryeok-sa", "history", "South writes 역사.", ""),
    card("련습", "ryeon-seup", "practice / rehearsal", "North: 련습.", "")
  ],
  drillTypes: ["read", "listen", "mc", "pick"]
});

/* =====================================================================
   TIER 16 - PYONGYANG DAILY LIFE
   ===================================================================== */
add({ id: 113, tier: 16, title: "City Daily Vocabulary", desc: "Signs, stops and streets of everyday Pyongyang.",
  learn: vocabCards("city_street", "h_toilet", "city_park", "t_bus", "city_dept"),
  learnExtra: [
    card("지하보도", "ji-ha-bo-do", "underground passage", "Crossing big avenues.", ""),
    card("록색울타리", "rok-saek-ul-ta-ri", "green fence", "Making the city green.", ""),
    card("거리", "geo-ri", "street / avenue", "Now use it daily.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 114, tier: 16, title: "Table Manners & Local Foods", desc: "Every meal is a ritual - name it like an insider.",
  learn: vocabCards("ph_enjoy_meal", "ph_delicious2", "f_porknoodles", "d_juice", "f_rice"),
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 115, tier: 16, title: "Weather & Seasons", desc: "더울 때, 추울 때 - speak about the seasons.",
  learn: vocabCards("a_hot", "a_cold", "nat_weather", "nat_rain", "nat_snow"),
  learnExtra: [
    card("사계절", "sa-gye-jeol", "the four seasons", "", ""),
    card("봄", "bom", "spring", "", "봄이 옵니다."),
    card("여름", "yeo-reum", "summer", "", ""),
    card("가을", "ga-eul", "autumn", "", ""),
    card("겨울", "gyeo-ul", "winter", "", "겨울에 춥습니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 116, tier: 16, title: "Public Signs", desc: "Read the signs: 출입문, 금연, 영업중.",
  learn: [
    card("출입문", "chul-im-mun", "entrance door", "", ""),
    card("금연", "geum-yeon", "no smoking", "금 = forbid, 연 = smoke.", ""),
    card("영업", "yeong-eop", "the shop is open", "", ""),
    card("휴식실", "hyu-sik-sil", "rest room", "", ""),
    card("조심", "jo-sim", "be careful", "", "조심하십시오.")
  ],
  drillTypes: ["read", "mc", "pick", "build"]
});
add({ id: 117, tier: 16, title: "Youth & College Life", desc: "University words - the life of students.",
  learn: vocabCards("city_uni", "p_student", "w_lesson", "w_exam", "w_homework"),
  learnExtra: [
    card("김일성종합대학", "gim-il-seong jong-hap dae-hak", "Kim Il-sung University", "The country's top university.", ""),
    card("호텔려관", "ho-tel-ryeo-gwan", "hotel", "For visitors.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 118, tier: 16, title: "Daily Life Review", desc: "A full Pyongyang day in your words.",
  learn: vocabCards("nk_tv", "nk_radio", "nk_newspaper", "v_see", "v_listen"),
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 17 - MEDIA & STATE
   ===================================================================== */
add({ id: 119, tier: 17, title: "News Words", desc: "보도, 신문, 방송 - the media refresh.",
  learn: vocabCards("nk_news", "nk_newspaper", "nk_tv", "m_writer", "m_exhibit"),
  learnExtra: [
    card("조선중앙통신사", "jo-seon jung-ang tong-sin-sa", "Korean Central News Agency (KCNA)", "The state news agency.", ""),
    card("로동신문", "ro-dong sin-mun", "Rodong Sinmun (Workers' Daily)", "The party's flagship paper.", ""),
    card("보도기사", "bo-do gi-sa", "news article", "", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 120, tier: 17, title: "National Days & Songs", desc: "Mark the calendar of celebrations.",
  learn: vocabCards("m_song", "m_concert", "m_applause", "nk_flag"),
  drillTypes: ["mc", "listen", "pick"]
});
add({ id: 121, tier: 17, title: "Ceremonies & Events", desc: "행사, 연설, 회의 - the public calendar.",
  learn: vocabCards("m_conference", "m_leader_speech", "m_slogan", "m_honor", "m_champion"),
  learnExtra: [
    card("열리다", "yeol-li-da", "to be held (event)", "", "행사가 열립니다."),
    card("참가하다", "cham-ga-ha-da", "to take part in", "", "회의에 참가합니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 122, tier: 17, title: "Workplace & Collectives", desc: "Every worker belongs - learn the words of the collective.",
  learn: vocabCards("p_official", "m_cadre2", "nk_collective", "w_duty", "m_labor"),
  drillTypes: ["mc", "listen", "pick", "type"]
});
add({ id: 123, tier: 17, title: "Understanding Public Speech", desc: "Navigate phrases heard at every ceremonial moment.",
  learn: [
    card("인민을 위하여", "in-min-eul wi-ha-yeo", "for the people", "", ""),
    card("발전", "bal-jeon", "development / progress", "", ""),
    card("건설", "geon-seol", "construction", "", ""),
    card("통일", "tong-il", "reunification", "", ""),
    card("주체", "ju-che", "Juche", "The state ideology - now you know it.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 124, tier: 17, title: "Media Review", desc: "Read a headline's skeleton.",
  learn: vocabCards("m_writer", "nk_people", "m_propaganda", "m_honor", "m_hero"),
  drillTypes: ["build", "listen", "mc", "read"]
});

/* =====================================================================
   TIER 18 - IDIOMS & FLUENCY
   ===================================================================== */
add({ id: 125, tier: 18, title: "Everyday Idioms", desc: "Soup cooks, words stay - idiomatic Korean.",
  learn: [
    card("시간이 촉박합니다", "", "time is tight", "", ""),
    card("배가 고픕니다", "", "I am hungry (my stomach is hungry)", "The idiomatic way!", ""),
    card("목이 마릅니다", "", "I am thirsty (my throat is dry)", "목 = throat, 마르다 = dry.", ""),
    card("눈이 내립니다", "", "the snow falls", "More poetic than 눈이 옵니다.", ""),
    card("잠이 옵니다", "", "sleep comes to me", "The natural 'I'm sleepy'.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 126, tier: 18, title: "Proverbs (속담)", desc: "The wisdom locals quote.",
  learn: [
    card("시작이 반입니다", "si-jak-i ban-im-ni-da", "Beginning is half done", "The Korean 'well begun is half done'.", ""),
    card("말이 씨가 된다", "ma-ri ssi-ga doe-n-da", "What you say becomes the seed", "Words become reality.", ""),
    card("가는 말이 고와야 오는 말이 곱다", "", "Speak kindly to receive kindness", "The Golden Rule, proverb form.", ""),
    card("빈 수레가 요란합니다", "", "An empty cart rattles loudest", "The noisy know the least.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 127, tier: 18, title: "Fillers & Flow", desc: "The tiny words that keep conversation alive.",
  learn: [
    card("그런데", "geu-reon-de", "well / by the way", "The universal softener.", ""),
    card("음...", "eum", "um...", "Thinking time - Northern speakers say '음'.", ""),
    card("아! 그렇구나", "a! geu-reol-gu-na", "Oh! I see", "The lightbulb moment.", ""),
    card("정말입니까", "jeong-mal-im-ni-kka", "Really?", "Enthusiastic listening.", ""),
    card("맞습니다", "ma-seum-ni-da", "That's right", "Confirmation.", ""),
    card("그렇겠습니다", "geu-reo-ke-sseum-ni-da", "That must be so", "Empathetic agreement.", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 128, tier: 18, title: "Casual Speech 101", desc: "With friends: drop the formality gently.",
  learn: [
    card("잘 가", "jal ga", "Bye (close friend)", "Casual of 안녕히 가십시오.", ""),
    card("뭐 했어", "mwo hae-sseo", "What did you do?", "Casual question.", ""),
    card("밥 먹었어", "bap meo-geo-sseo", "Have you eaten? (casual)", "The friendliest check-in.", ""),
    card("고마워", "go-ma-wo", "Thanks (casual)", "Casual of 고맙습니다.", ""),
    card("미안해", "mi-an-hae", "Sorry (casual)", "", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 129, tier: 18, title: "Writing Basics", desc: "Letters and messages - the written register.",
  learn: [
    card("편지", "pyeon-ji", "a letter", "", "편지를 씁니다."),
    card("보냅니다", "bo-nam-ni-da", "I send", "보내다.", ""),
    card("받았습니다", "ba-da-sseum-ni-da", "I received", "받다, past.", ""),
    card("사연", "sa-yeon", "the message / content", "", ""),
    card("축하", "chu-ka", "congratulations", "", "축하합니다.")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 130, tier: 18, title: "Idiom & Flow Review", desc: "Think in proverbs, reply with fillers.",
  learn: [
    card("시작이 반입니다", "", "Beginning is half done - now you're fluent!", "", "Kick off!"),
    card("그런데", "", "by the way - keep the flow", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 19 - ADVANCED CONVERSATION
   ===================================================================== */
add({ id: 131, tier: 19, title: "Opinions", desc: "Give your view with grace.",
  learn: [
    card("제 생각에는", "je saeng-gak-e-neun", "In my opinion", "", ""),
    card("생각합니다", "saeng-gak-ham-ni-da", "I think (so)", "", ""),
    card("동의합니다", "dong-ui-ham-ni-da", "I agree", "", ""),
    card("그렇게 보지 않습니다", "", "I don't see it that way", "Politely differ.", ""),
    card("맞습니다", "ma-seum-ni-da", "That's right", "", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 132, tier: 19, title: "Making Plans", desc: "Plan your week in the target language.",
  learn: vocabCards("tm_after", "tm_week", "v_begin", "v_finish"),
  learnExtra: [
    card("만납시다", "man-nap-si-da", "Let's meet", "The polite 'let's'.", ""),
    card("갑시다", "gap-si-da", "Let's go", "", ""),
    card("어디에서 만납니까", "", "Where shall we meet?", "", ""),
    card("몇 시에", "myeot si-e", "at what time", "", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 133, tier: 19, title: "Telling Stories", desc: "Connect past events into a narrative.",
  learn: [
    card("그리고", "geu-ri-go", "and then", "The narrative thread.", ""),
    card("그때", "geu-ttae", "at that time", "", ""),
    card("며칠 전에", "myeo-chil jeo-ne", "a few days ago", "", ""),
    card("어느 날", "eo-neu nal", "one day", "The storyteller's opener.", ""),
    card("갑자기", "gap-ja-gi", "suddenly", "", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 134, tier: 19, title: "Deep Emotion", desc: "Share what moves you.",
  learn: vocabCards("a_happy", "a_sad", "a_beautiful"),
  learnExtra: [
    card("가슴이 아픕니다", "", "My heart aches", "Chest-pain as emotion.", ""),
    card("너무 기쁩니다", "", "I'm so glad", "", ""),
    card("정말 아름답습니다", "", "Really beautiful", "", ""),
    card("존경합니다", "jon-gyeong-ham-ni-da", "I respect you", "A big word - use with care.", "")
  ],
  drillTypes: ["build", "mc", "listen", "type"]
});
add({ id: 135, tier: 19, title: "Nuance & Register", desc: "Choose the right level for the right person.",
  learn: [
    card("알겠습니다", "", "Understood (to a superior)", "Firm formal.", ""),
    card("알았어", "", "Got it (to a friend)", "Casual.", ""),
    card("왔습니다", "", "I came (formal)", "", ""),
    card("왔어", "", "came (casual)", "", "")
  ],
  drillTypes: ["mc", "listen", "pick", "build"]
});
add({ id: 136, tier: 19, title: "Conversation Review", desc: "Opinions, plans, stories and feelings - full conversation.",
  learn: [
    card("이야기", "i-ya-gi", "story / talk", "", "이야기 잘 하기 = good conversation."),
    card("대화", "dae-hwa", "conversation", "", "You can do it.")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});

/* =====================================================================
   TIER 20 - MASTERY
   ===================================================================== */
add({ id: 137, tier: 20, title: "Reading Real Texts", desc: "Decode a short news-style passage word by word.",
  grammar: grammarCard("How to read a report", "State reports follow a pattern:", [
    "Opening: 보도에 따르면... = according to the report...",
    "Body: nouns + tense verbs: 건설, 발전, 참가, 열리다.",
    "Honorific verbs carry respect: 주신다, 계신다.",
    "Key phrases: 인민, 당, 로동, 투쟁.",
    "Read slowly, parse particles, then connect."
  ]),
  learn: vocabCards("nk_news", "nk_people", "m_conference", "m_hero", "m_honor"),
  drillTypes: ["read", "mc", "pick", "build"]
});
add({ id: 138, tier: 20, title: "Writing a Letter", desc: "Compose a warm letter in Munhwao.",
  learn: [
    card("친애하는", "chin-ae-ha-neun", "Dear (beloved)", "The letter opener.", ""),
    card("안녕히 지내십니까", "", "How are you keeping?", "", ""),
    card("되고 있습니다", "", "everything is going well", "되다 + 있다, progressive.", ""),
    card("그리워합니다", "geu-ri-wo-ham-ni-da", "I miss (you)", "", ""),
    card("고맙습니다", "", "thank you", "", ""),
    card("안녕히", "ahn-nyuhng-hi", "peacefully (sign-off)", "", "")
  ],
  drillTypes: ["build", "listen", "mc", "type"]
});
add({ id: 139, tier: 20, title: "Role-Play Conversation", desc: "A complete dialogue: welcoming a visitor to Pyongyang.",
  learn: [
    card("환영합니다!", "hwa-nyeong-ham-ni-da!", "Welcome!", "", ""),
    card("잘 오셨습니다", "jal o-syeosse-seum-ni-da", "Glad you've come", "The host's first line.", ""),
    card("교환해 주십시오", "", "Could you change (money)?", "", ""),
    card("맛있어요", "ma-si-sseo-yo", "It's delicious", "Soft polite praise.", ""),
    card("또 오시겠습니까?", "", "Will you come again?", "A warm finish.", "")
  ],
  drillTypes: ["build", "listen", "mc", "pick"]
});
add({ id: 140, tier: 20, title: "Final Mastery Challenge", desc: "Every skill at once - you've reached the start of mastery.",
  grammar: grammarCard("Beyond this course", "The final lesson is a beginning:", [
    "Keep daily: 1 new lesson + 10 flashcard reviews + 5 writing drills.",
    "Speak aloud - shadow the TTS voice.",
    "Read child stories, then news headlines.",
    "Write a journal entry each night in Munhwao.",
    "Fluency is a habit, not a destination - small reviews add up."
  ]),
  learn: vocabCards("g_hello", "g_nice", "g_thanks", "v_learn", "ph_how_are_you"),
  drillTypes: ["build", "listen", "mc", "type", "read", "pick"]
});

/* ---- expose helpers ------------------------------------------------ */
MH.addLesson = add;
MH.byId = function (id) { return MH.LESSONS.find(function (l) { return l.id === id; }); };
MH.byTier = function (tier) { return MH.LESSONS.filter(function (l) { return l.tier === tier; }); };
MH.nextLesson = function (id) { return MH.LESSONS.find(function (l) { return l.id === id + 1; }); };