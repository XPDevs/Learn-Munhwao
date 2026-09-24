/* =====================================================================
   GRADED LIBRARY, NEWS, CULTURE AND MEDIA  (Munhwao Mastery)
   Reading texts in Munhwao register, ordered from A1 to B2. Every text
   carries sentence translations, a small glossary and the course words
   it recycles. News items use the plain formal newspaper style. The
   media manifest lists where to place your own audio and video files so
   the immersion page stays fully offline.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.LIBRARY = [
  {
    id: "s1", level: "A1", tag: "story", title: "첫 수업, the first lesson",
    intro: "A very short first lesson. All words are from the first tiers.",
    paras: [
      { ko: "오늘은 제 첫 수업입니다.", en: "Today is my first lesson." },
      { ko: "아침에 일찍 일어납니다.", en: "In the morning I get up early." },
      { ko: "교실에 들어갑니다.", en: "I enter the classroom." },
      { ko: "선생님께서 반갑습니다라고 말씀하십니다.", en: "The teacher says that she is delighted to meet me." },
      { ko: "저는 반갑습니다, 선생님 하고 대답합니다.", en: "I answer, delighted to meet you, teacher." },
      { ko: "오늘은 조선글을 배웁니다.", en: "Today we learn the Korean script." },
      { ko: "정말 재미있습니다.", en: "It is really interesting." }
    ],
    gloss: { "첫": "first", "일찍": "early", "들어갑니다": "enters", "선생님": "teacher", "말씀하십니다": "speaks (honored)", "대답합니다": "answers", "조선글": "the Korean script", "정말": "really" },
    vocab: ["d_lesson", "d_classroom", "d_teacher", "d_student", "v_learn", "a_fun"]
  },
  {
    id: "s2", level: "A1", tag: "culture", title: "평양의 거리, the streets of Pyongyang",
    intro: "A simple walk through the capital.",
    paras: [
      { ko: "평양은 우리 나라의 수도입니다.", en: "Pyongyang is the capital of our country." },
      { ko: "거리는 넓고 깨끗합니다.", en: "The streets are wide and clean." },
      { ko: "지하철을 타고 도시를 려행합니다.", en: "I ride the metro and travel about the city." },
      { ko: "거리에는 사람들이 참 많습니다.", en: "There are very many people in the streets." },
      { ko: "우리는 동무들과 함께 걷습니다.", en: "We walk together with our friends." }
    ],
    gloss: { "평양": "Pyongyang", "수도": "capital", "넓고": "wide and", "참": "very", "함께": "together", "걷습니다": "walk" },
    vocab: ["city_city", "city_pyongyang", "city_street", "d_subway", "t_metro", "t_travel", "vb_people_p", "p_friend"]
  },
  {
    id: "s3", level: "A2", tag: "story", title: "시장에 가는 하루, a day at the market",
    intro: "Shopping for the weekend meal.",
    paras: [
      { ko: "일요일 아침, 우리는 시장에 갑니다.", en: "On Sunday morning we go to the market." },
      { ko: "시장에는 채소와 과일이 많습니다.", en: "The market has many vegetables and fruit." },
      { ko: "안해는 사과와 수박을 삽니다.", en: "My wife buys apples and a watermelon." },
      { ko: "나는 채소와 물고기를 삽니다.", en: "I buy vegetables and fish." },
      { ko: "값이 싸서 우리는 기쁩니다.", en: "The prices are low, so we are happy." },
      { ko: "저녁에는 맛있는 반찬을 만들어 먹습니다.", en: "In the evening we make tasty side dishes and eat them." }
    ],
    gloss: { "일요일": "Sunday", "안해": "wife", "수박": "watermelon", "물고기": "fish", "값이": "the price", "싸서": "is cheap so", "기쁩니다": "are glad", "반찬": "side dish", "만들어": "make and" },
    vocab: ["city_market", "d_vegetable", "d_fruit", "d_wife", "d_apple", "f_watermelon", "d_fish", "a_cheap", "f_side", "v_make"]
  },
  {
    id: "s4", level: "A2", tag: "news", title: "새 지하철 공사, new metro works",
    intro: "A short newspaper story about the unfinished metro extension.",
    paras: [
      { ko: "수도에서 새 지하철 공사가 시작됩니다.", en: "Construction of a new metro line begins in the capital." },
      { ko: "로동자들은 밤낮으로 일합니다.", en: "The workers labour day and night." },
      { ko: "새 렬차는 빠르고 안전합니다.", en: "The new trains are fast and safe." },
      { ko: "려객들은 새 역을 기대합니다.", en: "Passengers look forward to the new stations." }
    ],
    gloss: { "공사": "construction works", "밤낮으로": "day and night", "안전합니다": "are safe", "역": "station", "기대합니다": "look forward to" },
    vocab: ["d_worker", "v_work", "d_train", "t_train", "d_passenger", "d_subway", "a_fast"]
  },
  {
    id: "s5", level: "B1", tag: "story", title: "겨울 방학, the winter holiday",
    intro: "Snow, mountains and warm rooms.",
    paras: [
      { ko: "겨울 방학에 우리는 산에 갑니다.", en: "During the winter holiday we go to the mountains." },
      { ko: "아침에 눈이 많이 왔습니다.", en: "In the morning a lot of snow fell." },
      { ko: "산은 온통 하얗습니다.", en: "The mountain is completely white." },
      { ko: "아이들은 눈사람을 만듭니다.", en: "The children make a snowman." },
      { ko: "저녁에는 따뜻한 방에서 차를 마십니다.", en: "In the evening we drink tea in the warm room." },
      { ko: "겨울 방학은 정말 즐겁습니다.", en: "The winter holiday is really delightful." }
    ],
    gloss: { "방학": "holiday from school", "눈": "snow", "온통": "completely", "하얗습니다": "is white", "눈사람": "snowman", "따뜻한": "warm", "즐겁습니다": "is delightful" },
    vocab: ["nat_snow", "nat_mountain", "d_tea", "a_warm", "a_happy", "h_room"]
  },
  {
    id: "s6", level: "B1", tag: "news", title: "과학과 기술, science and technology",
    intro: "A news item in the modern economy style.",
    paras: [
      { ko: "우리 나라에서는 과학과 기술이 빨리 발전합니다.", en: "In our country science and technology advance quickly." },
      { ko: "새 콤퓨터는 아주 빠릅니다.", en: "The new computers are very fast." },
      { ko: "젊은 기술자들이 열심히 연구합니다.", en: "Young technicians research with effort." },
      { ko: "라지오와 텔레비죤에서 과학 이야기를 들을 수 있습니다.", en: "You can hear science stories on radio and television." },
      { ko: "우리는 과학을 배우고 싶습니다.", en: "We want to learn science." }
    ],
    gloss: { "과학": "science", "기술": "technology", "발전합니다": "advances", "콤퓨터": "computer", "젊은": "young", "기술자": "technician", "열심히": "with effort", "연구합니다": "they research", "들을 수 있습니다": "can hear", "싶습니다": "want" },
    vocab: ["d_radio", "nk_tv", "v_listen", "v_learn", "a_fast"]
  },
  {
    id: "s7", level: "B2", tag: "literature", title: "우리 말 사랑, love for our language",
    intro: "A short reflective essay in the literary register.",
    paras: [
      { ko: "말은 겨레의 마음입니다.", en: "Language is the heart of a nation." },
      { ko: "우리 겨레는 한 가지 말을 씁니다.", en: "Our nation uses one language." },
      { ko: "북쪽에서는 그 말을 문화어라고 부릅니다.", en: "In the north we call that language Munhwao." },
      { ko: "문화어는 오랜 력사에 뿌리를 둡니다.", en: "Munhwao takes root in the long history." },
      { ko: "우리는 우리 말을 사랑하고 지킵니다.", en: "We love our language and protect it." }
    ],
    gloss: { "겨레": "the nation", "마음": "heart", "한 가지": "one kind", "부릅니다": "call it", "문화어": "Munhwao", "오랜": "long deling", "뿌리를 둡니다": "takes root", "지킵니다": "protect" },
    vocab: ["d_nation", "d_kinsfolk", "v_like", "d_motherland"]
  },
  {
    id: "s8", level: "B2", tag: "history", title: "옛 도시 평양, the ancient city",
    intro: "A history note about the capital through the ages.",
    paras: [
      { ko: "평양은 삼천 년의 력사를 자랑합니다.", en: "Pyongyang takes pride in three thousand years of history." },
      { ko: "대동강가에 자리 잡은 도시입니다.", en: "It is a city seated by the Taedong River." },
      { ko: "예로부터 사람들은 이곳에서 살았습니다.", en: "From long ago people have lived here." },
      { ko: "우리는 력사 박물관에서 그 이야기를 배웁니다.", en: "In the history museum we learn that story." }
    ],
    gloss: { "삼천": "three thousand", "자랑합니다": "takes pride", "대동강": "the Taedong River", "자리 잡은": "seated at", "예로부터": "from long ago", "박물관": "museum" },
    vocab: ["d_nation", "city_museum", "d_city", "v_learn", "nat_river"]
  }
];

/* ---------- News reader ---------- */
MH.NEWS = [
  {
    id: "n1", title: "새 병원이 문을 열었습니다", cat: "생활", date: "2월 12일",
    paras: [
      { ko: "시 남쪽에 새 병원이 문을 열었습니다.", en: "A new hospital has opened in the south of the city." },
      { ko: "의사들과 간호원들이 환자를 정성껏 돌봅니다.", en: "Doctors and nurses care for patients with attention." },
      { ko: "환자들은 그 병원을 아주 좋아합니다.", en: "The patients like the hospital very much." }
    ],
    gloss: { "병원": "hospital", "문을 열었습니다": "has opened", "남쪽": "the south", "간호원": "nurse", "환자": "patient", "정성껏": "with care", "돌봅니다": "cares for" }
  },
  {
    id: "n2", title: "전국 대학 시험 결과", cat: "과학", date: "3월 5일",
    paras: [
      { ko: "전국 대학 입학 시험 결과가 발표됩니다.", en: "The results of the national university entrance test are announced." },
      { ko: "수천 명의 학생이 시험을 봤습니다.", en: "Thousands of students sat the test." },
      { ko: "합격한 학생들은 열심히 공부하기 시작합니다.", en: "The admitted students begin to study hard." }
    ],
    gloss: { "전국": "the whole country", "입학": "entrance", "발표됩니다": "are announced", "수천": "several thousand", "합격한": "admitted", "공부하기": "to study" }
  },
  {
    id: "n3", title: "겨울철 려행 안내", cat: "생활", date: "1월 20일",
    paras: [
      { ko: "겨울철에 산간 지방을 려행하는 사람이 많습니다.", en: "Many people travel to the mountain regions in winter." },
      { ko: "려행자들은 따뜻한 옷을 챙겨야 합니다.", en: "Travellers must bring warm clothes." },
      { ko: "새 렬차는 정각에 떠납니다.", en: "The new trains leave on time." }
    ],
    gloss: { "겨울철": "the winter season", "산간": "mountain", "지방": "region", "려행자": "traveller", "옷": "clothes", "챙겨야": "must bring", "정각": "on the dot" }
  },
  {
    id: "n4", title: "도서관에서 책을 빌립니다", cat: "과학", date: "4월 1일",
    paras: [
      { ko: "시 도서관에서는 무료로 책을 빌려줍니다.", en: "The city library lends books free of charge." },
      { ko: "우리는 매주 과학 책을 빌립니다.", en: "Every week we borrow science books." },
      { ko: "책은 지식을 넓혀 줍니다.", en: "Books widen our knowledge." }
    ],
    gloss: { "도서관": "library", "무료로": "free of charge", "빌려줍니다": "lends", "매주": "every week", "빌립니다": "we borrow", "지식": "knowledge", "넓혀 줍니다": "widens" }
  }
];

/* ---------- Culture and history notes ---------- */
MH.CULTURE = [
  {
    id: "c1", tag: "말과 글", title: "조선글",
    paras: [
      { ko: "북쪽에서는 글자를 조선글이라고 부릅니다.", en: "In the north the script is called Chosongul." },
      { ko: "적은 수의 글자로 온갖 소리를 적을 수 있습니다.", en: "With a small number of letters you can write every sound." }
    ],
    gloss: { "글자": "letter", "조선글": "the Korean script", "적은": "small", "온갖": "every kind of", "소리": "sound", "적을 수 있습니다": "can write" }
  },
  {
    id: "c2", tag: "말과 글", title: "문화어",
    paras: [
      { ko: "문화어는 북쪽의 언어 규범입니다.", en: "Munhwao is the language standard of the north." },
      { ko: "그것은 남쪽 표준어와 여러 점에서 다릅니다.", en: "It differs from the southern standard in several points." },
      { ko: "기윽, 디읃, 시읏 같은 이름도 다릅니다.", en: "Even letter names differ, like gieuk, dieut and sieut." }
    ],
    gloss: { "규범": "standard", "표준어": "standard language", "점": "point", "다릅니다": "differs" }
  },
  {
    id: "c3", tag: "음식", title: "랭면과 김치",
    paras: [
      { ko: "랭면은 차가운 국수입니다.", en: "Naengmyon is cold noodles." },
      { ko: "겨울에도 사람들은 그것을 즐겨 먹습니다.", en: "Even in winter people enjoy eating it." },
      { ko: "김치는 모든 밥상에서 만날 수 있습니다.", en: "Kimchi can be found at every table." }
    ],
    gloss: { "랭면": "cold noodles", "차가운": "cold", "국수": "noodles", "즐겨": "enjoyably", "밥상": "meal table", "만날 수 있습니다": "can be met" }
  },
  {
    id: "c4", tag: "도시", title: "지하철 풍경",
    paras: [
      { ko: "평양의 지하철은 땅 깊은 곳에 있습니다.", en: "The Pyongyang metro is deep underground." },
      { ko: "려객들은 긴 에스컬레이터를 타고 내려갑니다.", en: "Passengers ride down on long escalators." },
      { ko: "역 안은 밝고 조용합니다.", en: "The stations are bright and calm." }
    ],
    gloss: { "땅": "ground", "깊은": "deep", "에스컬레이터": "escalator", "타고 내려갑니다": "ride down", "역": "station", "조용합니다": "is calm" }
  },
  {
    id: "c5", tag: "예절", title: "동무라는 말",
    paras: [
      { ko: "북쪽에서는 친한 사람을 동무라고 부릅니다.", en: "In the north close people are called comrade." },
      { ko: "학생들도 서로 동무라고 합니다.", en: "Students also call one another comrade." },
      { ko: "그 말에는 서로 돕는 마음이 담겨 있습니다.", en: "The word carries a spirit of mutual help." }
    ],
    gloss: { "친한": "close", "서로": "one another", "돕는": "helping", "마음": "heart", "담겨 있습니다": "is contained" }
  },
  {
    id: "c6", tag: "명절", title: "설날",
    paras: [
      { ko: "설날에는 가족들이 모입니다.", en: "On Lunar New Year families gather." },
      { ko: "그 날에는 떡국을 먹습니다.", en: "On that day they eat soup with rice cakes." },
      { ko: "어린이는 어른에게 세배를 합니다.", en: "Children make the new year bow to the elders." }
    ],
    gloss: { "설날": "Lunar New Year", "모입니다": "gather", "떡국": "rice cake soup", "어린이": "child", "어른": "elder", "세배": "the new year bow" }
  },
  {
    id: "c7", tag: "노래", title: "아리랑",
    paras: [
      { ko: "아리랑은 아주 오랜 노래입니다.", en: "Arirang is a very old song." },
      { ko: "여러 지방에서 그 노래를 다르게 부릅니다.", en: "Different regions sing it in different ways." },
      { ko: "노래를 부르면 마음이 상쾌해집니다.", en: "Singing the song refreshes the heart." }
    ],
    gloss: { "아리랑": "Arirang", "여러": "several", "지방": "regions", "다르게": "differently", "상쾌해집니다": "becomes refreshed" }
  },
  {
    id: "c8", tag: "경제", title: "시장 생활",
    paras: [
      { ko: "시장은 도시 생활의 중심입니다.", en: "The market is the centre of city life." },
      { ko: "사람들은 그곳에서 옷, 음식과 생활용품을 삽니다.", en: "People buy clothes, food and daily goods there." },
      { ko: "값은 물건마다 다릅니다.", en: "Prices differ from object to object." }
    ],
    gloss: { "중심": "centre", "생활용품": "daily goods", "물건": "object", "마다": "each" }
  }
];

/* ---------- Media immersion manifest ----------
   The immersion page lists these slots. Place your own audio and video
   files in the media/ folder with these names and they play offline. */
MH.MEDIA = [
  { kind: "radio", name: "조선중앙방송", file: "kcna-radio.mp3", note: "Place a radio news excerpt in media/kcna-radio.mp3 to listen offline." },
  { kind: "radio", name: "조선의 소리", file: "vos-intro.mp3", note: "Place an excerpt in media/vos-intro.mp3. This service broadcasts in several languages." },
  { kind: "news", name: "아침 뉴스", file: "news-morning.mp3", note: "Place a morning news reading in media/news-morning.mp3." },
  { kind: "video", name: "문화 예술 공연", file: "art-show.mp4", note: "Place a short video in media/art-show.mp4 for offline viewing." },
  { kind: "video", name: "도시 산책", file: "city-walk.mp4", note: "Place a city walk video in media/city-walk.mp4." },
  { kind: "music", name: "민요 모음", file: "folk-song.mp3", note: "Place folk songs in media/folk-song.mp3 and media/folk-song-2.mp3." },
  { kind: "lesson", name: "발음 동영상", file: "pronounce.mp4", note: "Place a pronunciation lesson in media/pronounce.mp4." }
];

/* ---------- Stroke order demonstration strings ---------- */
MH.STROKE_EXAMPLES = [
  { h: "녀", p: "nyeo", e: "woman" },
  { h: "력", p: "ryeok", e: "strength" },
  { h: "랭", p: "raeng", e: "cold" },
  { h: "한", p: "han", e: "Korean" },
  { h: "글", p: "geul", e: "script" },
  { h: "사", p: "sa", e: "four" },
  { h: "람", p: "ram", e: "person" },
  { h: "반", p: "ban", e: "half" },
  { h: "갑", p: "gap", e: "box" },
  { h: "습", p: "seup", e: "used in polite endings" },
  { h: "니", p: "ni", e: "to be (polite)" },
  { h: "다", p: "da", e: "plain ending" }
];