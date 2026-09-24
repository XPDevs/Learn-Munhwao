/* =====================================================================
   CEFR-STYLE PATHWAY  (Munhwao Mastery)
   A1 to C1 levels with can-do statements, the course tiers they cover,
   suggested readings and computed progress across five skills: grammar,
   vocabulary, reading, listening and speaking. The pathway tool renders
   a progress bar per skill and unlocks the next level at 70 percent in
   every skill.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.CEFR = [
  {
    level: "A1",
    title: "Breakthrough",
    tiers: [1, 2, 3, 4],
    desc: "Read the alphabet, greet people, count, and manage the simplest exchanges.",
    canDo: [
      "Read and write every Hangul syllable",
      "Greet and introduce myself and others",
      "Count with native and Sino numbers",
      "Ask and answer the simplest personal questions",
      "Understand very short spoken phrases"
    ],
    readingLevels: ["A1"], listeningLevels: ["A1"], scenarioLevel: "A1"
  },
  {
    level: "A2",
    title: "Waystage",
    tiers: [5, 6, 7, 8],
    desc: "Handle everyday routine: travel, food, shopping and the simple past.",
    canDo: [
      "Describe daily routines and the past",
      "Order food and buy things at the market",
      "Ask and give directions",
      "Talk about family, work and health simply",
      "Understand short announcements and dialogues"
    ],
    readingLevels: ["A2"], listeningLevels: ["A2"], scenarioLevel: "A2"
  },
  {
    level: "B1",
    title: "Threshold",
    tiers: [9, 10, 11, 12],
    desc: "Express opinions, plans and feelings; follow the gist of news and talks.",
    canDo: [
      "Give opinions and reasons on familiar topics",
      "Describe experiences, plans and ambitions",
      "Follow the main points of news broadcasts",
      "Read short editorials and feature articles",
      "Handle most situations met in daily life"
    ],
    readingLevels: ["B1"], listeningLevels: ["B1"], scenarioLevel: "B1"
  },
  {
    level: "B2",
    title: "Vantage",
    tiers: [13, 14, 15, 16],
    desc: "Follow news style, comparison and conditionals; argue a point clearly.",
    canDo: [
      "Argue a point and weigh opinions",
      "Understand the plain formal register speech",
      "Read serious newspaper and magazine material",
      "Give presentations on familiar subjects",
      "Keep up a longer conversation without strain"
    ],
    readingLevels: ["B2"], listeningLevels: ["B2"], scenarioLevel: "B2"
  },
  {
    level: "C1",
    title: "Effective operational proficiency",
    tiers: [17, 18],
    desc: "Handle literary texts, abstract topics and debates with confidence.",
    canDo: [
      "Understand long, complex texts with abstraction",
      "Express ideas fluently and precisely",
      "Follow academic and literary material",
      "Use idiom, irony and register sensitivities",
      "Produce clear, structured writing on complex subjects"
    ],
    readingLevels: ["C1"], listeningLevels: ["C1"], scenarioLevel: "C1"
  }
];

/* ---- reading and listening targets per level ------------------------- */
MH.readingsForLevel = function (lv) {
  var targets = [];
  (MH.LIBRARY || []).forEach(function (it) {
    if (it.level === lv && targets.indexOf(it.id) < 0) targets.push(it.id);
  });
  (MH.ARTICLES || []).forEach(function (it) {
    if (it.level === lv && targets.indexOf(it.id) < 0) targets.push(it.id);
  });
  for (var i = 1; i <= 8; i++) {
    var pid = "r" + lv + "_" + i;
    if (targets.indexOf(pid) < 0) targets.push(pid);
  }
  return targets;
};

MH.listenForLevel = function (lv) {
  return (MH.LISTEN_COURSES || []).filter(function (l) { return l.level === lv; }).map(function (l) { return l.id; });
};

/* ---- computed progress for one level --------------------------------- */
MH.cefrProgress = function (lvl) {
  var conf = MH.CEFR.find(function (c) { return c.level === lvl; });
  if (!conf) return null;
  var done = 0;
  var tiersDone = conf.tiers.filter(function (t) {
    return MH.LESSONS.filter(function (l) { return l.tier === t; }).every(function (l) { return state.lessonCompletion[l.id]; });
  }).length;
  var grammar = Math.round((tiersDone / conf.tiers.length) * 100);

  var vocabCount = MH.VOCAB_KEYS ? MH.VOCAB_KEYS.length : 0;
  var mastered = Object.keys(state.wordMastery || {}).filter(function (k) { return state.wordMastery[k] >= 3; }).length;
  var vocabTarget = { "A1": 120, "A2": 240, "B1": 400, "B2": 700, "C1": 1100 }[lvl];
  var vocab = Math.min(100, Math.round((mastered / vocabTarget) * 100));

  var readIds = (conf.readingLevels || []).reduce(function (arr, lv) {
    return arr.concat((MH.readingsForLevel ? MH.readingsForLevel(lv) : []) || []);
  }, []);
  var readDone = readIds.filter(function (id) { return state.readTexts && state.readTexts[id]; }).length;
  var read = readIds.length ? Math.min(100, Math.round((readDone / readIds.length) * 100)) : 0;

  var listenIds = (conf.listeningLevels || []).reduce(function (arr, lv) {
    return arr.concat((MH.listenForLevel ? MH.listenForLevel(lv) : []) || []);
  }, []);
  var listenDone = listenIds.filter(function (id) { return state.listenDone && state.listenDone[id]; }).length;
  var listen = listenIds.length ? Math.min(100, Math.round((listenDone / listenIds.length) * 100)) : 0;

  var attempts = (state.speaking && state.speaking.attempts) || 0;
  var speakGoal = { "A1": 5, "A2": 15, "B1": 35, "B2": 70, "C1": 120 }[lvl];
  var speaking = Math.min(100, Math.round((attempts / speakGoal) * 100));

  return { grammar: grammar, vocab: vocab, reading: read, listening: listen, speaking: speaking,
    overall: Math.round((grammar + vocab + read + listen + speaking) / 5) };
};

/* ---- highest achieved level ------------------------------------------ */
MH.cefrLevel = function () {
  var current = "A1";
  MH.CEFR.forEach(function (c) {
    var p = MH.cefrProgress(c.level);
    if (p && p.overall >= 70) current = c.level;
  });
  return current;
};