/* =====================================================================
   GRADED READER GENERATOR  (Munhwao Mastery)
   Builds thousands of graded reading passages from A1 to C2. Every
   passage is generated deterministically from registered sentence and
   slot banks, so the content is stable, offline and repeatable. Each
   passage is a normal library text: paragraphs, English line by line,
   a glossary, and a small comprehension check. The generator is a data
   tool: add sentence banks below to grow the readers without touching
   any application code.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

/* ---- small deterministic PRNG (mulberry32) -------------------------- */
function _mhRng(seed) {
  var s = seed >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) >>> 0;
    var t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
MH._pick = function (arr, rnd) { return arr[Math.floor(rnd() * arr.length) % arr.length]; };
MH._shuf = function (arr, rnd) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(rnd() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
};

/* ---- slot banks (hangul + english) ---------------------------------- */
var P = {
  people: [["리명수", "Ri Myong-su"], ["김정님", "Kim Jong-nim"], ["박철민", "Pak Chol-min"], ["최선녀", "Choe Son-nyo"], ["한동무", "comrade Han"], ["우리 가족", "our family"]],
  places: [["평양", "Pyongyang"], [" 학교", "school"], ["  시장", "the market"], [" 공원", "the park"], [" 도서관", "the library"], [" 지하철", "the metro"], [" 공장", "the factory"], [" 병원", "the hospital"]],
  foods: [["사과", "apples"], ["수박", "watermelons"], ["감자", "potatoes"], ["쌀", "rice"], ["물고기", "fish"], ["반찬", "side dishes"], ["국수", "noodles"], ["김치", "kimchi"]],
  items: [["책", "a book"], ["공책", "a notebook"], ["연필", "a pencil"], ["꽃", "a flower"], ["그림", "a picture"], ["편지", "a letter"], ["선물", "a gift"], ["옷", "clothes"]],
  days: [["월요일", "Monday"], ["화요일", "Tuesday"], ["수요일", "Wednesday"], ["목요일", "Thursday"], ["금요일", "Friday"], ["토요일", "Saturday"], ["일요일", "Sunday"]],
  seasons: [["봄", "spring"], ["여름", "summer"], ["가을", "autumn"], ["겨울", "winter"]],
  acts: [["읽습니다", "reads"], ["씁니다", "writes"], ["만납니다", "meets"], ["돕습니다", "helps"], ["가르칩니다", "teaches"], ["배웁니다", "learns"]],
  vacts: [["공부를 합니다", "studies"], ["운동을 합니다", "exercises"], ["말을 합니다", "speaks"], ["노래를 부릅니다", "sings"], ["놀습니다", "plays"], ["쉽니다", "rests"]],
  adj: [["좋은", "good"], ["새로운", "new"], ["아름다운", "beautiful"], ["중요한", "important"], ["즐거운", "pleasant"], ["고마운", "welcome"]]
};
var slot = function (rnd, key) { return MH._pick(P[key], rnd); };
function glossWord(pass, ko, en) { pass[ko] = en; }

/* ---- sentence banks per level ---------------------------------------
   Each bank: { run: fun, glosses: {word: en} }  -- run(rnd, pass) returns
   an array of { ko, en } sentences that are appended to the passage.
   --------------------------------------------------------------------- */
var A1_TOPICS = [
  { t: "첫걸음, first steps", run: function (r, g) {
    var p = slot(r, "people"), pl = slot(r, "places");
    return [
      { ko: "오늘은 " + p[0] + "의 이야기입니다.", en: "Today is the story of " + p[1] + "." },
      { ko: p[0] + "은 마을에 삽니다.", en: p[1] + " lives in the village." },
      { ko: "매일 아침 " + pl[0] + "에 갑니다.", en: "Every morning " + p[1] + " goes to" + pl[1] + "." },
      { ko: "거기에서 일을 합니다.", en: "There " + p[1] + " works." },
      { ko: "저녁에 집으로 돌아옵니다.", en: "In the evening " + p[1] + " returns home." },
      { ko: "그리고 글을 배웁니다.", en: "And " + p[1] + " learns to read and write." }
    ];
  }},
  { t: "우리 집, our home", run: function (r, g) {
    return [
      { ko: "우리 집은 작고 깨끗합니다.", en: "Our home is small and clean." },
      { ko: "방에는 침대와 책상이 있습니다.", en: "In the room there is a bed and a desk." },
      { ko: "책상 위에는 책이 있습니다.", en: "On the desk there is a book." },
      { ko: "아침에는 밥을 먹습니다.", en: "In the morning we eat rice." },
      { ko: "저녁에는 함께 텔레비전을 봅니다.", en: "In the evening we watch television together." },
      { ko: "우리 집은 정말 따뜻합니다.", en: "Our home is really warm." }
    ];
  }},
  { t: "시장의 하루, a day at the market", run: function (r, g) {
    var f = slot(r, "foods"), it = slot(r, "items");
    glossWord(g, f[0], f[1]);
    glossWord(g, it[0], it[1]);
    return [
      { ko: "오늘은 시장에 가는 날입니다.", en: "Today is the day we go to the market." },
      { ko: "시장에는 " + f[0] + "이 많습니다.", en: "The market has plenty of " + f[1] + "." },
      { ko: "우리는 " + f[0] + "을 삽니다.", en: "We buy " + f[1] + "." },
      { ko: "그리고 " + it[0] + "도 삽니다.", en: "And we also buy " + it[1] + "." },
      { ko: "값이 싸서 기쁩니다.", en: "The prices are low, so we are glad." },
      { ko: "집에 돌아가서 맛있게 먹습니다.", en: "We go home and eat well." }
    ];
  }},
  { t: "일요일 아침, Sunday morning", run: function (r, g) {
    var it = slot(r, "items"), p = slot(r, "people");
    glossWord(g, it[0], it[1]);
    return [
      { ko: "일요일 아침, 우리는 늦게 일어납니다.", en: "On Sunday morning we get up late." },
      { ko: "아침에 " + it[0] + "을 봅니다.", en: "In the morning we look at " + it[1] + "." },
      { ko: p[0] + "은 밥을 짓습니다.", en: p[1] + " cooks the rice." },
      { ko: "우리는 함께 먹습니다.", en: "We eat together." },
      { ko: "오후에는 산책을 합니다.", en: "In the afternoon we take a walk." },
      { ko: "일요일은 정말 즐겁습니다.", en: "Sunday is really pleasant." }
    ];
  }},
  { t: "도시의 거리, the city streets", run: function (r, g) {
    var pl = slot(r, "places");
    return [
      { ko: "거리는 넓고 깨끗합니다.", en: "The street is wide and clean." },
      { ko: "지하철을 타고 " + pl[0] + "에 갑니다.", en: "We take the metro and go to" + pl[1] + "." },
      { ko: "거리에는 사람들이 많습니다.", en: "There are many people in the street." },
      { ko: "버스도 많이 다닙니다.", en: "Many buses run too." },
      { ko: "오후에는 집에 돌아옵니다.", en: "In the afternoon we return home." },
      { ko: "오늘은 좋은 날입니다.", en: "It is a good day today." }
    ];
  }},
  { t: "어떻게 지내십니까, how are you", run: function (r, g) {
    var d = slot(r, "days"), v = slot(r, "vacts");
    return [
      { ko: "동무, 반갑습니다!", en: "Comrade, delighted to meet you!" },
      { ko: "어떻게 지내십니까?", en: "How are you?" },
      { ko: "저는 잘 지냅니다.", en: "I am doing well." },
      { ko: "오늘은 " + d[0] + "입니다.", en: "Today is " + d[1] + "." },
      { ko: "오후에 " + v[0] + ".", en: "In the afternoon " + v[1] + "." },
      { ko: "내일 다시 만납시다!", en: "Let us meet again tomorrow!" }
    ];
  }},
  { t: "계절, the seasons", run: function (r, g) {
    var s = slot(r, "seasons");
    return [
      { ko: "지금은 " + s[0] + "입니다.", en: "Now it is " + s[1] + "." },
      { ko: s[0] + "에는 날씨가 좋습니다.", en: "In " + s[1] + " the weather is good." },
      { ko: "꽃이 피고 새가 웁니다.", en: "Flowers bloom and birds sing." },
      { ko: "우리는 밖에 나가 놉니다.", en: "We go outside and play." },
      { ko: "온 가족이 함께 즐겁습니다.", en: "The whole family is happy together." },
      { ko: "이 계절이 참 좋습니다.", en: "This season is really nice." }
    ];
  }}
];

var A2_TOPICS = [
  { t: "작은 서점, the little bookshop", run: function (r, g) {
    var it = slot(r, "items"), a = slot(r, "adj");
    glossWord(g, it[0], it[1]);
    return [
      { ko: "우리 마을에는 작은 서점이 있습니다.", en: "There is a small bookshop in our village." },
      { ko: "거기에는 " + it[0] + "이 많습니다.", en: "There are many " + it[1] + " there." },
      { ko: "주인 아주머니께서 친절하십니다.", en: "The owner is very kind." },
      { ko: "나는 " + a[0] + " 책을 삽니다.", en: "I buy a " + a[1] + " book." },
      { ko: "그 책은 참 재미있습니다.", en: "That book is really interesting." },
      { ko: "다음 주에도 다시 갑니다.", en: "I will go again next week." }
    ];
  }},
  { t: "공원에서, in the park", run: function (r, g) {
    var p = slot(r, "people"), v = slot(r, "vacts");
    return [
      { ko: "일요일에 우리는 공원에 갑니다.", en: "On Sunday we go to the park." },
      { ko: "공원에는 나무가 많습니다.", en: "There are many trees in the park." },
      { ko: p[0] + "은 친구들과 " + v[0] + ".", en: p[1] + " " + v[1] + " with friends." },
      { ko: "우리는 벤치에 앉아 이야기합니다.", en: "We sit on a bench and chat." },
      { ko: "오늘 날씨가 맑아서 좋습니다.", en: "The weather is clear today, so it is nice." },
      { ko: "저녁에 아쉽게 돌아갑니다.", en: "In the evening we go home, a little sorry to leave." }
    ];
  }},
  { t: "동무의 일, a friend's work", run: function (r, g) {
    var a = slot(r, "acts"), pl = slot(r, "places");
    glossWord(g, a[0], a[1]);
    return [
      { ko: "우리 동무는 " + pl[0] + "에서 일합니다.", en: "My friend works at" + pl[1] + "." },
      { ko: "매일 아침 일찍 나갑니다.", en: "Every morning " + "he leaves early." },
      { ko: "동무는 일을 잘합니다.", en: "My friend does good work." },
      { ko: "동무는 글도 " + a[0] + ".", en: "He also " + a[1] + " books." },
      { ko: "저녁에 함께 이야기합니다.", en: "In the evening we talk together." },
      { ko: "동무는 참 대단한 사람입니다.", en: "My friend is a really remarkable person." }
    ];
  }},
  { t: "비 오는 날, a rainy day", run: function (r, g) {
    var it = slot(r, "items");
    glossWord(g, it[0], it[1]);
    return [
      { ko: "오늘은 비가 옵니다.", en: "It is raining today." },
      { ko: "하늘은 회색입니다.", en: "The sky is grey." },
      { ko: "우리는 집에서 " + it[0] + "을 봅니다.", en: "At home we look at " + it[1] + "." },
      { ko: "차를 마시며 이야기합니다.", en: "We drink tea and talk." },
      { ko: "비가 그친 뒤 해가 납니다.", en: "After the rain stops the sun comes out." },
      { ko: "오후에는 밖에 나갑니다.", en: "In the afternoon we go outside." }
    ];
  }},
  { t: "배움의 기쁨, the joy of learning", run: function (r, g) {
    var a = slot(r, "acts"), it = slot(r, "items");
    glossWord(g, a[0], a[1]);
    return [
      { ko: "글을 배우는 것은 참 기쁨니다.", en: "Learning to read and write is a real joy." },
      { ko: "매일 한 시간씩 공부합니다.", en: "We study one hour every day." },
      { ko: "선생님께서 차분히 가르치십니다.", en: "The teacher teaches calmly." },
      { ko: "새로운 글자를 " + a[0] + ".", en: "We " + a[1] + " new letters." },
      { ko: "오늘 배운 것을 적습니다.", en: "We write down what we learned today." },
      { ko: "내일도 열심히 하겠습니다.", en: "Tomorrow we will study even harder." }
    ];
  }},
  { t: "겨울 준비, preparing for winter", run: function (r, g) {
    var f = slot(r, "foods");
    glossWord(g, f[0], f[1]);
    return [
      { ko: "겨울이 오기 전에 우리는 준비합니다.", en: "Before winter comes, we prepare." },
      { ko: "시장에서 김치를 담궈 둡니다.", en: "We make kimchi at the market." },
      { ko: "집에는 " + f[0] + "이 가득합니다.", en: "At home there is a lot of " + f[1] + "." },
      { ko: "옷도 따뜻하게 챙깁니다.", en: "We also prepare warm clothes." },
      { ko: "겨울에는 창밖이 아름답습니다.", en: "In winter the view outside is beautiful." },
      { ko: "우리는 편안하게 지냅니다.", en: "We live in comfort." }
    ];
  }}
];

var B1_TOPICS = [
  { t: "생각의 기록, a record of thoughts", run: function (r, g) {
    return [
      { ko: "저녁이 되면 낮의 일을 돌아봅니다.", en: "When evening comes, I look back on the day." },
      { ko: "작은 일이라도 기록에 남깁니다.", en: "I write down even the small things." },
      { ko: "말할 수 없는 생각도 글이 됩니다.", en: "Thoughts I cannot voice become words." },
      { ko: "내일의 나를 위해 오늘을 적습니다.", en: "I write today for the me of tomorrow." },
      { ko: "공책은 오래된 친구와 같습니다.", en: "The notebook is like an old friend." },
      { ko: "글을 쓰는 습관은 곧 힘이 됩니다.", en: "The habit of writing soon becomes strength." }
    ];
  }},
  { t: "도시의 아침, morning in the city", run: function (r, g) {
    return [
      { ko: "도시의 아침은 전차와 사람들로 시작됩니다.", en: "The city morning begins with trams and people." },
      { ko: "거리에는 아침을 청소하는 분들이 계십니다.", en: "On the street, people are cleaning the morning." },
      { ko: "전차를 타고 일터로 향합니다.", en: "I take the tram toward work." },
      { ko: "창밖에는 새 건물들이 들어섭니다.", en: "New buildings are rising outside the window." },
      { ko: "도시는 매일 조금씩 달라집니다.", en: "The city changes a little every day." },
      { ko: "그 변화 속에 우리의 생활도 있습니다.", en: "Our daily life is inside that change." }
    ];
  }},
  { t: "겨울 저녁의 이야기, a winter evening tale", run: function (r, g) {
    return [
      { ko: "겨울 저녁은 길고 조용합니다.", en: "Winter evenings are long and quiet." },
      { ko: "아래에서 김치 냄비가 끓습니다.", en: "The kimchi pot simmers below." },
      { ko: "우리는 함께 앉아 옛이야기를 나눕니다.", en: "We sit together and share old tales." },
      { ko: "어른들은 젊은 시절을 회상합니다.", en: "The elders recall their younger days." },
      { ko: "웃음소리가 방 안에 가득합니다.", en: "The room fills with laughter." },
      { ko: "이런 저녁이야말로 가장 따뜻합니다.", en: "Such evenings are the warmest of all." }
    ];
  }},
  { t: "과학과 생활, science and daily life", run: function (r, g) {
    return [
      { ko: "기술은 우리 생활의 일부가 되었습니다.", en: "Technology has become part of our life." },
      { ko: "예전에는 꿈에도 생각 못 하던 일입니다.", en: "It is something people once never dreamed of." },
      { ko: "지금은 집에서 더운 물을 언제나 씁니다.", en: "Now we always use hot water at home." },
      { ko: "연구소의 일은 먼 이야기가 아닙니다.", en: "The work of research institutes is not distant." },
      { ko: "작은 발명이 큰 생활의 변화를 줍니다.", en: "A small invention brings a big change to life." },
      { ko: "그래서 배움을 멈출 수 없습니다.", en: "That is why we cannot stop learning." }
    ];
  }},
  { t: "동무의 편지, a letter from a friend", run: function (r, g) {
    return [
      { ko: "어제 반가운 편지가 한 통 왔습니다.", en: "A welcome letter arrived yesterday." },
      { ko: "오랜만에 보는 동무의 글씨였습니다.", en: "It was the handwriting of a friend I had not seen for long." },
      { ko: "편지에는 시골의 봄이 담겨 있었습니다.", en: "The letter carried the spring of the countryside." },
      { ko: "읽는 동안 그리움이 솟았습니다.", en: "As I read, longing rose in me." },
      { ko: "나도 답장을 곧 쓰기로 했습니다.", en: "I decided to write back right away." },
      { ko: "펜으로 쓰는 정은 온기가 있습니다.", en: "Words written by pen carry warmth." }
    ];
  }},
  { t: "일과 휴식, work and rest", run: function (r, g) {
    return [
      { ko: "일만 하고 쉬지 않으면 몸이 지칩니다.", en: "If you only work and never rest, your body tires." },
      { ko: "휴식은 다시 일하기 위한 준비입니다.", en: "Rest is preparation for working again." },
      { ko: "산책이나 운동으로 몸을 풉니다.", en: "I relax my body with walks or exercise." },
      { ko: "잠도 넉넉하게 자야 합니다.", en: "I must also sleep enough." },
      { ko: "건강한 생활이 좋은 일을 만듭니다.", en: "A healthy life makes good work." },
      { ko: "균형이야말로 생활의 지혜입니다.", en: "Balance is the wisdom of daily life." }
    ];
  }}
];

var B2_TOPICS = [
  { t: "도시와 녹지, the city and its green", run: function (r, g) {
    return [
      { ko: "도시가 클수록 녹지는 더 귀해집니다.", en: "The bigger the city, the more precious green space becomes." },
      { ko: "공원은 단순한 쉼터가 아닙니다.", en: "A park is not merely a place to rest." },
      { ko: "그것은 주민들이 함께 숨쉬는 공간입니다.", en: "It is a space where residents breathe together." },
      { ko: "연구들은 공원이 건강에 미치는 영향을 밝힙니다.", en: "Research shows the effect parks have on health." },
      { ko: "나무 한 그루는 여름의 열기를 낮춥니다.", en: "A single tree lowers the summer heat." },
      { ko: "도시 계획은 사람의 측면에서 세워져야 합니다.", en: "City planning must be built from the human side." }
    ];
  }},
  { t: "문학과 현실, literature and reality", run: function (r, g) {
    return [
      { ko: "문학은 현실을 비추는 거울입니다.", en: "Literature is a mirror that reflects reality." },
      { ko: "작가는 시대의 소리를 글로 옮깁니다.", en: "Writers carry the voice of the era into words." },
      { ko: "소설 속 인물은 우리와 닮아 있습니다.", en: "The characters in a novel resemble us." },
      { ko: "그들의 고민은 곧 우리의 고민입니다.", en: "Their worries are our worries." },
      { ko: "그래서 고전은 세월이 지나도 읽힙니다.", en: "That is why the classics are read long after their time." },
      { ko: "독서는 마음의 문화를 키웁니다.", en: "Reading nurtures a culture of the mind." }
    ];
  }},
  { t: "기술의 시간, the time of technology", run: function (r, g) {
    return [
      { ko: "기술은 우리의 시간 감각을 바꾸었습니다.", en: "Technology has changed our sense of time." },
      { ko: "예전에는 편지를 기다리는 인내가 있었습니다.", en: "Once there was the patience of waiting for letters." },
      { ko: "지금은 소식이 눈 깜박할 사이에 닿습니다.", en: "Now news reaches us in the blink of an eye." },
      { ko: "빠르다는 것은 반드시 좋은 것은 아닙니다.", en: "Being fast is not always a good thing." },
      { ko: "스스로 멈추고 생각할 줄 알아야 합니다.", en: "We must know how to stop and think for ourselves." },
      { ko: "여유야말로 현대가 되찾아야 할 가치입니다.", en: "Leisure is a value the modern age must recover." }
    ];
  }},
  { t: "역사 속의 계절, seasons in history", run: function (r, g) {
    return [
      { ko: "역사는 달력의 해만으로 흐르지 않습니다.", en: "History does not flow only by calendar years." },
      { ko: "한 사회의 시간은 커다란 사건과 함께 회전합니다.", en: "A society turns with its great events." },
      { ko: "기록은 그 회전의 자취를 남깁니다.", en: "Records leave the trace of that turning." },
      { ko: "옛 글월은 오늘의 우리에게 여전히 말을 겁니다.", en: "Old writings still speak to us today." },
      { ko: "과거를 해석하는 노력은 현재를 이해하게 합니다.", en: "Efforts to interpret the past help us understand the present." },
      { ko: "그래서 역사 공부는 미래의 준비입니다.", en: "So studying history is preparing for the future." }
    ];
  }},
  { t: "음식과 기억, food and memory", run: function (r, g) {
    return [
      { ko: "어떤 맛은 시간을 뛰어넘습니다.", en: "Some tastes leap across time." },
      { ko: "어린 시절의 반찬 냄새는 오래 남습니다.", en: "The smell of childhood side dishes stays long." },
      { ko: "음식은 단순한 양식 이상입니다.", en: "Food is more than simple nourishment." },
      { ko: "그것은 세대를 잇는 대화입니다.", en: "It is a conversation passed between generations." },
      { ko: "같은 밥상을 둘러싼 이야기가 쌓입니다.", en: "Stories gather around the same dinner table." },
      { ko: "맛에는 집안과 나라의 뿌리가 들어 있습니다.", en: "In taste the roots of family and nation are contained." }
    ];
  }},
  { t: "희망의 언어, the language of hope", run: function (r, g) {
    return [
      { ko: "언어는 소통의 도구를 넘습니다.", en: "Language goes beyond a tool of communication." },
      { ko: "그 속에는 사람의 마음이 살아 있습니다.", en: "The human heart lives inside it." },
      { ko: "부드러운 말은 상처를 어루만집니다.", en: "Gentle words soothe wounds." },
      { ko: "정확한 말은 이해를 키웁니다.", en: "Precise words deepen understanding." },
      { ko: "말을 가꾸는 것은 곧 사람을 가꾸는 일입니다.", en: "Cultivating speech is cultivating people." },
      { ko: "우리의 언어는 희망으로 말할 수 있습니다.", en: "Our language can speak with hope." }
    ];
  }}
];

var C1_TOPICS = [
  { t: "자연과 문명의 경계, the border of nature and civilisation", run: function (r, g) {
    return [
      { ko: "문명의 진보는 자연을 길들이는 과정이었습니다.", en: "The advance of civilisation has been a process of taming nature." },
      { ko: "그러나 통제된 자연마저도 고유한 리듬을 간직합니다.", en: "Yet even tamed nature keeps its own rhythm." },
      { ko: "강은 인간의 계획이 아니라 자신의 속도로 흐릅니다.", en: "Rivers flow at their own pace, not by human plans." },
      { ko: "우리는 자연을 정복했다고 말하곤 했습니다.", en: "We used to say we had conquered nature." },
      { ko: "그러나 이제는 그 말의 대가를 묻는 때입니다.", en: "But now comes the time to ask the price of those words." },
      { ko: "생태의 균형은 우리의 선택에 달려 있습니다.", en: "The balance of ecology depends on our choices." }
    ];
  }},
  { t: "기억과 기록의 힘, the power of memory and record", run: function (r, g) {
    return [
      { ko: "인간은 기억의 동물입니다.", en: "Humans are creatures of memory." },
      { ko: "기록은 개인적 기억을 공적 기억으로 만듭니다.", en: "Records turn personal memory into public memory." },
      { ko: "잊히는 순간은 존재에서 지워지는 순간입니다.", en: "The moment something is forgotten, it fades from existence." },
      { ko: "그래서 문학과 역사는 끊임없이 기록을 이어갑니다.", en: "That is why literature and history endlessly continue recording." },
      { ko: "한 문장의 기록이 세대의 증인이 됩니다.", en: "A single recorded sentence may witness generations." },
      { ko: "우리는 기록하는 자로서 미래에 응답합니다.", en: "As those who record, we answer the future." }
    ];
  }},
  { t: "관점의 문제, a question of perspective", run: function (r, g) {
    return [
      { ko: "같은 사건도 바라보는 위치에 따라 달라집니다.", en: "The same event changes with the place you observe it from." },
      { ko: "한 사람의 진실은 다른 사람에게는 반쪽일 수 있습니다.", en: "One person's truth may be a half-truth to another." },
      { ko: "상대를 이해하려면 먼저 듣는 겸손이 필요합니다.", en: "To understand another, one must first have the humility to listen." },
      { ko: "성급한 판단은 대화를 닫아버립니다.", en: "Hasty judgement closes the conversation." },
      { ko: "물음은 단정보다 더 깊은 길을 엽니다.", en: "A question opens a deeper path than an assertion." },
      { ko: "진실의 지도는 여러 시선으로 그려집니다.", en: "The map of truth is drawn with many gazes." }
    ];
  }},
  { t: "일상의 철학, the philosophy of the everyday", run: function (r, g) {
    return [
      { ko: "위대한 물음도 일상의 작은 행위에서 시작됩니다.", en: "Even great questions begin in the small acts of everyday life." },
      { ko: "아침 일과의 반복 속에 우리의 성격이 주조됩니다.", en: "Our character is forged in the repetition of morning routines." },
      { ko: "사소한 선택의 쌓임이 삶의 방향을 만듭니다.", en: "The accumulation of trivial choices shapes the direction of life." },
      { ko: "철학은 멀리 있는 지식이 아닙니다.", en: "Philosophy is not a distant knowledge." },
      { ko: "그것은 지금 이 순간을 사는 방식입니다.", en: "It is a way of living this very moment." },
      { ko: "그러므로 우리는 매일을 사색할 가치로 봅니다.", en: "So we see each day as worth contemplating." }
    ];
  }},
  { t: "노동의 가치, the value of labour", run: function (r, g) {
    return [
      { ko: "노동은 생존의 수단을 넘어 존재의 방식입니다.", en: "Labour is a way of being, beyond a means of survival." },
      { ko: "손으로 만지는 일은 마음에 흙을 남깁니다.", en: "Working with one's hands leaves soil in the heart." },
      { ko: "거대한 건설도 수많은 작은 손의 합심입니다.", en: "Even vast construction is the unity of countless small hands." },
      { ko: "잘 만든 물건 속에는 만든 사람의 자부심이 담깁니다.", en: "A well-made object contains the pride of its maker." },
      { ko: "노동의 가치를 인정하는 사회가 성숙합니다.", en: "A society matures by honouring the value of labour." },
      { ko: "우리는 함께 일함으로써 함께 성장합니다.", en: "By working together we grow together." }
    ];
  }},
  { t: "집단과 개인, the collective and the individual", run: function (r, g) {
    return [
      { ko: "공동의 목표는 개인의 역량을 끌어올립니다.", en: "A shared goal raises individual capabilities." },
      { ko: "그러나 개인의 목소리가 사라져서는 안 됩니다.", en: "Yet the individual voice must not disappear." },
      { ko: "건강한 집단은 다름을 포용하는 능력을 지닙니다.", en: "A healthy collective has the capacity to embrace difference." },
      { ko: "토론의 기회는 공동체의 면역입니다.", en: "The chance for discussion is the immune system of a community." },
      { ko: "책임은 나누되 생각은 각자 하는 것입니다.", en: "Responsibility is shared, but each one thinks." },
      { ko: "그 균형 속에서 집단은 강해집니다.", en: "It is in that balance that the collective grows strong." }
    ];
  }}
];

var C2_TOPICS = [
  { t: "시간의 형이상학, the metaphysics of time", run: function (r, g) {
    return [
      { ko: "시간은 측정되지만 그것의 본성은 측량되지 않습니다.", en: "Time is measured, but its nature defies measurement." },
      { ko: "과거는 기억으로, 미래는 기대의 형태로 존재합니다.", en: "The past exists as memory, the future as expectation." },
      { ko: "현재는 두 경계 사이의 아슬아슬한 지점입니다.", en: "The present is the precarious point between the two frontiers." },
      { ko: "우리는 시간을 소유하려 하지만 시간은 흘러갑니다.", en: "We try to possess time, yet time flows away." },
      { ko: "의미 있는 순간은 길이가 아니라 깊이로 기억됩니다.", en: "Meaningful moments are remembered by depth, not length." },
      { ko: "그리하여 시간에 대한 물음은 존재에 대한 물음이 됩니다.", en: "Thus the question of time becomes the question of being." }
    ];
  }},
  { t: "저 너머의 소통, communication beyond", run: function (r, g) {
    return [
      { ko: "언어는 평면적인 도구가 아니라 다층의 현상입니다.", en: "Language is not a flat tool but a multi-layered phenomenon." },
      { ko: "말없는 사이에도 의미의 흐름은 멈추지 않습니다.", en: "Even in silence the current of meaning does not stop." },
      { ko: "존대와 평대의 경계는 장면에 따라 미묘하게 이동합니다.", en: "The boundary between honorific and plain speech shifts subtly by scene." },
      { ko: "한 문화의 깊이는 그 존대법의 정교함으로 드러납니다.", en: "A culture's depth is revealed in the refinement of its honorifics." },
      { ko: "성공적인 소통은 상대의 좌표를 읽는 데 있습니다.", en: "Successful communication lies in reading the other's coordinates." },
      { ko: "우리는 말하는 존재이며 동시에 듣기의 존재입니다.", en: "We are speaking beings and at the same time beings of listening." }
    ];
  }},
  { t: "정의의 척도, the measure of justice", run: function (r, g) {
    return [
      { ko: "정의는 평등한 자들 사이의 균형에서 시작됩니다.", en: "Justice begins in balance among equals." },
      { ko: "그러나 현실의 권력은 그 균형을 끊임없이 흔듭니다.", en: "Yet real power constantly unsettles that balance." },
      { ko: "약자의 목소리를 들을 때 법은 온전해집니다.", en: "Law becomes whole when the voice of the weak is heard." },
      { ko: "처벌보다 회복을 세우는 것이 진정한 정의입니다.", en: "True justice builds restoration rather than punishment." },
      { ko: "정의의 척도는 사회의 양심입니다.", en: "The measure of justice is the conscience of society." },
      { ko: "그러므로 정의의 문제는 결코 끝나지 않습니다.", en: "So the question of justice is never finished." }
    ];
  }},
  { t: "예술의 해석, the interpretation of art", run: function (r, g) {
    return [
      { ko: "예술 작품은 완성되는 순간부터 독립합니다.", en: "A work of art becomes independent the moment it is finished." },
      { ko: "창조자의 의도는 작품의 전부가 아닙니다.", en: "The creator's intention is not the whole of the work." },
      { ko: "관람자는 작품과의 대화에서 새 의미를 만듭니다.", en: "The viewer makes new meaning in dialogue with the work." },
      { ko: "모순된 해석이 공존할 때 예술은 살아 있습니다.", en: "When contradictory readings coexist, art is alive." },
      { ko: "아름다움의 기준은 시대와 함께 회전합니다.", en: "Standards of beauty rotate with the era." },
      { ko: "그래서 예술은 해석을 중단할 때 죽습니다.", en: "Thus art dies when interpretation stops." }
    ];
  }},
  { t: "개혁의 리듬, the rhythm of reform", run: function (r, g) {
    return [
      { ko: "개혁은 파도의 리듬으로 진행됩니다.", en: "Reform proceeds in the rhythm of waves." },
      { ko: "급격한 변화는 거침을, 지나친 침체는 낡음을 낳습니다.", en: "Abrupt change breeds turbulence, excessive stagnation breeds the obsolete." },
      { ko: "지속 가능한 개혁은 원칙과 유연성을 동시에 요구합니다.", en: "Sustainable reform demands principle and flexibility at once." },
      { ko: "구성원의 이해 없이는 어떤 계획도 뿌리를 내리지 못합니다.", en: "Without the understanding of members, no plan takes root." },
      { ko: "가르침과 배움이 함께하는 개혁이 성숙합니다.", en: "Reform matures when teaching and learning proceed together." },
      { ko: "역행 없는 전진이야말로 개혁의 기술입니다.", en: "Advancing without reversal is the art of reform." }
    ];
  }},
  { t: "인간 조건의 성찰, reflection on the human condition", run: function (r, g) {
    return [
      { ko: "한계를 인식할 때 인간은 비로소 자유의 문턱에 섭니다.", en: "In recognising limits, humans finally stand at the threshold of freedom." },
      { ko: "불완전함은 결핍이 아니라 성장의 조건입니다.", en: "Imperfection is not a deficit but a condition of growth." },
      { ko: "우리는 미래를 계획하지만 운명은 대화를 요구합니다.", en: "We plan the future, but fate demands a dialogue." },
      { ko: "고통의 의미를 묻는 것은 인간의 특권입니다.", en: "Asking the meaning of suffering is a human privilege." },
      { ko: "연대 속에서 개인의 약함은 집단의 강함이 됩니다.", en: "In solidarity, the weakness of the individual becomes the strength of the collective." },
      { ko: "이 성찰이야말로 인간다움의 출발입니다.", en: "This reflection is the very beginning of being human." }
    ];
  }}
];

var BANKS = { "A1": A1_TOPICS, "A2": A2_TOPICS, "B1": B1_TOPICS, "B2": B2_TOPICS, "C1": C1_TOPICS, "C2": C2_TOPICS };
var PER_LEVEL = { "A1": 360, "A2": 360, "B1": 360, "B2": 360, "C1": 360, "C2": 360 };
var TOTAL = 0;
Object.keys(PER_LEVEL).forEach(function (k) { TOTAL += PER_LEVEL[k]; });
MH.GRADED_READER_COUNT = TOTAL;

/* ---- build one passage ---------------------------------------------- */
function buildPassage(level, n) {
  var rnd = _mhRng(997 * (n + 1) + (level.charCodeAt(0) * 57) + (level.charCodeAt(1) * 13));
  var topics = BANKS[level];
  var topic = MH._pick(topics, rnd);
  var gloss = {};
  var paras = [];
  topic.run(rnd, gloss).forEach(function (s) { paras.push({ ko: s.ko, en: s.en }); });
  // comprehension: main topic + one word/thing
  var q = buildQuiz(rnd, topic, paras, gloss, level);
  return {
    id: "r" + level + "_" + n,
    level: level,
    tag: "reader",
    title: topic.t,
    intro: "A graded " + level + " reader. " + paras.length + " sentences.",
    paras: paras,
    gloss: gloss,
    q: q
  };
}

function buildQuiz(rnd, topic, paras, gloss, level) {
  // q1: what is it mostly about? topic title english is inside t ("eng, eng")
  var tEng = topic.t.split(",")[1].trim() || topic.t;
  var other = BANKS[level].filter(function (t) { return t !== topic; });
  var o2 = MH._pick(other, rnd).t.split(",")[1].trim();
  var o3 = MH._pick(other, rnd).t.split(",")[1].trim();
  var opts = [tEng, o2, o3];
  opts = MH._shuf(opts, rnd);
  // q2: a word appears in the text
  var gk = Object.keys(gloss);
  var gk2 = Object.keys(gloss);
  var used = gk2.length ? gk2[Math.floor(rnd() * gk2.length)] : "";
  var usedEn = gloss[used];
  var q2opts = [usedEn, "a distant star", "a mountain range"];
  q2opts = MH._shuf(q2opts, rnd);
  return [
    { q: "What is the passage mostly about?", opts: opts, a: opts.indexOf(tEng) },
    { q: "Which thing appears in the passage?", opts: q2opts, a: q2opts.indexOf(usedEn) }
  ];
}

/* ---- lazy cache ------------------------------------------------------ */
MH.PASSAGES = {};
MH.passages = function (level) {
  if (MH.PASSAGES[level]) return MH.PASSAGES[level];
  var list = [];
  for (var i = 0; i < PER_LEVEL[level]; i++) list.push(buildPassage(level, i));
  MH.PASSAGES[level] = list;
  return list;
};
MH.ALL_PASSAGES = function () {
  return Object.keys(BANKS).reduce(function (arr, lv) { return arr.concat(MH.passages(lv)); }, []);
};