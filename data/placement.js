/* =====================================================================
   PLACEMENT TEST (Munhwao Mastery)
   24 mixed questions graded from beginner to advanced. ~5 minutes.
   Score determines the tier you start the course from so you never
   repeat what you already know. Pure Munhwao, no South Korean traps.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.PLACEMENT = [
  /* ---- beginner 0-5 --------------------------------------------------- */
  { t: "mc", q: "Which vowel sounds like 'a' in father?", opt: ["ㅏ", "ㅓ", "ㅡ", "ㅣ"], ans: 0, note: "ㅏ opens to the right and sounds like a short 'a'." },
  { t: "mc", q: "Which letter makes the N sound?", opt: ["ㄱ", "ㄴ", "ㅁ", "ㅅ"], ans: 1, note: "ㄴ (nieun) is the N: 나 = na." },
  { t: "mc", q: "How do you read this block? 가", opt: ["ga", "ka", "ja", "sa"], ans: 0, note: "ㄱ+ㅏ = ga." },
  { t: "mc", q: "How do you read this block? 강", opt: ["gang", "gat", "gam", "gar"], ans: 0, note: "The final ㅇ is always 'ng'." },
  { t: "mc", q: "What is the North Korean native word for zero?", opt: ["령", "공", "영", "백"], ans: 0, note: "In the North, zero is 령 (ryeong). The South's 공 appears only in sports scores." },
  { t: "mc", q: "Which is the native number for 5?", opt: ["오", "다섯", "삼", "일곱"], ans: 1, note: "다섯 (da-seot) is native five; 오 is Sino." },

  /* ---- elementary 6-11 -------------------------------------------------- */
  { t: "mc", q: "What does 고맙습니다 mean?", opt: ["Thank you", "Goodbye", "I'm sorry", "Welcome"], ans: 0, note: "The Northern standard thank-you." },
  { t: "mc", q: "The formal first-time greeting North Koreans prefer is...", opt: ["반갑습니다", "안녕", "헬로", "감사합니다"], ans: 0, note: "반갑습니다 (bangapseumnida) is preferred for first meetings." },
  { t: "mc", q: "What does 안녕하십니까 mean?", opt: ["Hello (formal)", "Good night", "Congratulations", "Excuse me"], ans: 0, note: "The standard formal greeting." },
  { t: "mc", q: "Which word means 'friend' in the North?", opt: ["동무", "애인", "가족", "이웃"], ans: 0, note: "동무 is the everyday North Korean word for friend." },
  { t: "mc", q: "In the sentence 저는 학생입니다, what does 저는 mean?", opt: ["as for me", "he is", "you are", "we are"], ans: 0, note: "저 = humble 'I', 는 = topic particle: 'as for me'." },
  { t: "mc", q: "Which particle marks the OBJECT (as in 밥을)?", opt: ["을/를", "은/는", "이/가", "에"], ans: 0, note: "The object takes 을/를: 밥을 먹습니다." },

  /* ---- intermediate 12-17 ------------------------------------------------ */
  { t: "mc", q: "How do you say 21 (native)?", opt: ["스물하나", "이십일", "스물하느", "이십하나"], ans: 0, note: "Native compounds = ten + one: 스물 + 하나." },
  { t: "mc", q: "The North writes the number 6 as...", opt: ["륙", "육", "루", "룩"], ans: 0, note: "The North keeps the initial R sound: 륙." },
  { t: "mc", q: "What time is '세 시 반'?", opt: ["3:30", "4:30", "3:15", "6:30"], ans: 0, note: "반 after the hour = half past: 3:30." },
  { t: "mc", q: "What did you do yesterday? Use the past: 갔다면... 'I went' is...", opt: ["갔습니다", "갑니다", "가겠습니다", "가십시오"], ans: 0, note: "가 + 았습니다 = 갔습니다: I went." },
  { t: "mc", q: "'I want to go' is...", opt: ["가고 싶습니다", "가겠습니다", "가는 좋아합니다", "가십시오"], ans: 0, note: "Verb stem + 고 싶습니다 expresses desire." },
  { t: "mc", q: "How do you politely ask someone to help you?", opt: ["도와주십시오", "도와주세요", "가십시오", "앉으십시오"], ans: 0, note: "줍니다 -> 주십시오: please give (help) to me." },

  /* ---- advanced 18-23 ----------------------------------------------------- */
  { t: "mc", q: "The North keeps the initial N/R that the South drops. Which IS Northern?", opt: ["녀자", "여자", "여행", "육"], ans: 0, note: "녀자 (woman) keeps the N; the South writes 여자." },
  { t: "mc", q: "'Because it is cold, I don't go' - pick the correct learner form.", opt: ["추워서 안 갑니다", "춥고 갑니다", "추워서 갑니다", "추울지만 갑니다"], ans: 0, note: "춥다 -> 추워서 (because cold) + 안 갑니다 (don't go)." },
  { t: "mc", q: "The North Korean word for 'travel' is...", opt: ["려행", "여행", "여행사", "료행"], ans: 0, note: "려행 (ryeo-haeng) keeps the R." },
  { t: "mc", q: "Which sentence means 'As for me, I am not a student'?", opt: ["저는 학생이 아닙니다", "저는 학생입니다", "저는 학생입니다 아니", "저는 학생이 아저씨입니다"], ans: 0, note: "아닙니다 negates: 학생이 아닙니다." },
  { t: "mc", q: "What does 'Inside the motive' - no. Which is 'Please don't go'?", opt: ["가지 마십시오", "가십시오", "가고 싶습니다", "가는 가십시오"], ans: 0, note: "-지 마십시오 is the polite negative command." },
  { t: "mc", q: "The ideology centered on self-reliance that the North promotes is called...", opt: ["주체", "주작", "자주", "주민"], ans: 0, note: "주체 (Juche) = self-reliance, the guiding ideology." }
];

/* All questions labelled with hints for the "why" feedback. */
MH.placementTier = function (score) {
  var max = MH.PLACEMENT.length;
  var pct = score / max;
  if (pct >= 0.95) return { tier: 20, title: "Mastery", lesson: 137 };
  if (pct >= 0.85) return { tier: 18, title: "Idioms & Fluency", lesson: 125 };
  if (pct >= 0.75) return { tier: 16, title: "Pyongyang Daily Life", lesson: 113 };
  if (pct >= 0.65) return { tier: 14, title: "Complex Grammar", lesson: 98 };
  if (pct >= 0.55) return { tier: 12, title: "Past & Future Tense", lesson: 86 };
  if (pct >= 0.45) return { tier: 8, title: "Food & Restaurants", lesson: 61 };
  if (pct >= 0.35) return { tier: 5, title: "Core Sentences & Particles", lesson: 38 };
  if (pct >= 0.25) return { tier: 3, title: "Greetings & Politeness", lesson: 23 };
  if (pct >= 0.12) return { tier: 2, title: "Numbers & Counting", lesson: 12 };
  return { tier: 1, title: "Hangul Foundations", lesson: 1 };
};