/* =====================================================================
   GRADED LIBRARY, NEWS, CULTURE AND MEDIA  (Munhwao Mastery)
   Reading texts in Munhwao register, ordered from A1 to C2, plus an
   advanced newspaper archive, novels and literature, an academic
   reading section and a listening comprehension quiz bank. Every text
   carries sentence translations and a small glossary. News items use
   the plain formal newspaper style. The media manifest lists where to
   place your own audio and video files so the immersion page stays
   fully offline.
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
  },
  {
    id: "s9", level: "C1", tag: "article", title: "책을 읽는 즐거움, the pleasure of reading books",
    intro: "A longer reflective article for confident readers.",
    paras: [
      { ko: "사람들은 저마다 즐거움을 찾습니다.", en: "People each find their own pleasure." },
      { ko: "어떤 이는 운동을 좋아하고, 어떤 이는 노래를 좋아합니다.", en: "Some people like exercise, and others like singing." },
      { ko: "저는 휴식 시간에 책을 읽는 것을 가장 좋아합니다.", en: "I most enjoy reading books in my rest time." },
      { ko: "좋은 책은 좋은 벗과 같습니다.", en: "A good book is like a good friend." },
      { ko: "책을 읽으면 모르던 세상을 알게 됩니다.", en: "When I read a book, I come to know a world I did not know." },
      { ko: "책은 우리를 먼 나라와 먼 옛날로 데려다 줍니다.", en: "Books take us to distant countries and distant times." },
      { ko: "읽고 나면 마음에 새로운 힘이 생깁니다.", en: "After reading, a new strength is born in the heart." },
      { ko: "그러므로 나는 언제나 한 권의 책을 곁에 둡니다.", en: "That is why I always keep one book at my side." }
    ],
    gloss: { "저마다": "each one", "어떤 이는": "some people", "휴식": "rest", "가장": "most", "벗": "friend", "모르던": "that I did not know", "알게 됩니다": "come to know", "옛날": "times of long ago", "데려다 줍니다": "takes us", "생깁니다": "is born", "언제나": "always", "곁에": "at ones side", "둡니다": "keeps" }
  },
  {
    id: "s10", level: "C1", tag: "article", title: "기차로 떠나는 겨울 려행, a winter journey by train",
    intro: "A long feature article about travelling by rail in winter.",
    paras: [
      { ko: "겨울에는 기차로 먼 려행을 떠납니다.", en: "In winter we set out on a long journey by train." },
      { ko: "차창 밖으로 눈 덮인 들과 산이 지나갑니다.", en: "Snow covered fields and mountains pass outside the window." },
      { ko: "기차는 정각에 떠나고 정각에 도착합니다.", en: "The train departs on time and arrives on time." },
      { ko: "차 안은 따뜻하고 조용합니다.", en: "Inside the train it is warm and quiet." },
      { ko: "려객들은 차창으로 바깥 풍경을 구경합니다.", en: "The passengers look at the outside scenery through the window." },
      { ko: "한참 뒤에 작은 역에 도착합니다.", en: "After a good while we arrive at a small station." },
      { ko: "눈 속에 서 있는 역 건물은 아늑해 보입니다.", en: "The station building standing in the snow looks cosy." },
      { ko: "그곳에서 따뜻한 차를 마시고 다시 길을 떠납니다.", en: "There we drink warm tea and set out on our way again." }
    ],
    gloss: { "차창": "train window", "눈 덮인": "snow covered", "지나갑니다": "pass by", "정각에": "exactly on time", "도착합니다": "arrive", "바깥": "outside", "구경합니다": "look at", "한참": "a long while", "아늑해": "cosy", "보입니다": "looks", "다시": "again", "길을 떠납니다": "set out on the way" }
  },
  {
    id: "s11", level: "C2", tag: "literature", title: "가을의 강가, an autumn by the river",
    intro: "A literary prose piece for advanced readers.",
    paras: [
      { ko: "가을 아침, 강가에는 안개가 내려앉습니다.", en: "On autumn mornings the mist settles over the riverside." },
      { ko: "물결은 바람에 따라 고요히 움직입니다.", en: "The waves move quietly with the wind." },
      { ko: "먼 곳에는 산의 윤곽이 희미하게 보입니다.", en: "In the distance the outlines of the mountains are dimly visible." },
      { ko: "나뭇잎은 노랗고 붉게 물들었습니다.", en: "The leaves have coloured themselves yellow and red." },
      { ko: "나는 잠시 그 자리에 서서 강물을 바라봅니다.", en: "For a moment I stand there and gaze at the river water." },
      { ko: "세월은 물과 같이 흐릅니다.", en: "The years flow on like the water." },
      { ko: "그러나 강가의 풍경은 해마다 그 자리를 지킵니다.", en: "Yet the riverside scene keeps its place year after year." }
    ],
    gloss: { "안개": "mist", "내려앉습니다": "settles down", "물결": "waves", "고요히": "quietly", "윤곽": "outline", "희미하게": "dimly", "물들었습니다": "have coloured", "잠시": "for a moment", "바라봅니다": "gaze at", "세월": "the years", "흐릅니다": "flow", "풍경": "scene", "해마다": "year after year", "지킵니다": "keeps" }
  },
  {
    id: "s12", level: "C2", tag: "article", title: "우리 말의 뿌리에 대하여, on the roots of our language",
    intro: "A scholarly essay on the history of the language.",
    paras: [
      { ko: "모든 말은 길고 오랜 력사를 가집니다.", en: "Every language has a long and ancient history." },
      { ko: "하나의 낱말이 여러 가지 뜻을 나타낼 수 있습니다.", en: "A single word can express several meanings." },
      { ko: "그러므로 문장에서는 앞뒤가 맞물려 그 뜻이 정해집니다.", en: "That is why in a sentence the context interlocks and fixes the meaning." },
      { ko: "고대의 말은 오늘날까지 다양한 형태로 남아 있습니다.", en: "The ancient language survives today in various forms." },
      { ko: "언어학자들은 옛 기록을 연구하여 그 뿌리를 찾습니다.", en: "Linguists study old records to find its roots." },
      { ko: "우리는 옛 글을 바로 읽음으로써 그 의미를 되찾습니다.", en: "We recover their meanings by reading the old texts correctly." },
      { ko: "말을 바로 씀으로써 문화를 앞으로 이어 갑니다.", en: "By using language correctly we carry culture forward." },
      { ko: "이것이 한 낱말에 대한 연구의 가치입니다.", en: "This is the value of studying a single word." }
    ],
    gloss: { "오랜": "ancient", "낱말": "a single word", "나타낼 수 있습니다": "can express", "문장": "sentence", "앞뒤": "context before and after", "맞물려": "interlocking", "정해집니다": "is fixed", "고대": "ancient times", "다양한": "various", "형태": "form", "남아 있습니다": "remains", "언어학자": "linguist", "기록": "record", "뿌리": "root", "바로": "correctly", "되찾습니다": "recover", "가치": "value" }
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

/* ---------- Advanced newspaper archive ---------- */
MH.ARCHIVE = [
  {
    id: "a1", title: "과학 기술의 힘으로", cat: "논설", date: "지난주 발행분",
    paras: [
      { ko: "우리 인민경제는 해마다 새로운 차원에서 발전합니다.", en: "Our national economy develops each year from a new level." },
      { ko: "그 발전의 밑바탕에는 과학 기술의 힘이 있습니다.", en: "At the base of that development lies the force of science and technology." },
      { ko: "공장들에서는 새 기계를 도입하고 생산 방법을 개선합니다.", en: "Factories introduce new machines and improve their production methods." },
      { ko: "연구소의 성과는 곧 생산 현장의 성과로 이어집니다.", en: "The results of research institutes are soon linked to results at the production site." },
      { ko: "과학자들은 현장의 문제를 깊이 연구하여 실천으로 풀어 갑니다.", en: "Scientists study the problems of the field deeply and solve them through practice." },
      { ko: "우리는 교육과 과학 기술을 더욱 힘차게 발전시킬 것입니다.", en: "We will develop education and science and technology still more vigorously." },
      { ko: "이 길이 우리 나라의 앞날을 밝혀 줍니다.", en: "This road brightens the future of our country." }
    ],
    gloss: { "인민경제": "the national economy", "차원": "level", "밑바탕": "foundation", "도입하고": "introducing", "생산": "production", "개선합니다": "improve", "성과": "achievements", "이어집니다": "are linked", "현장": "the field", "깊이": "deeply", "실천": "practice", "풀어 갑니다": "work out gradually", "더욱": "still more", "힘차게": "vigorously", "발전시킬": "will develop", "밝혀 줍니다": "brightens", "앞날": "the future" }
  },
  {
    id: "a2", title: "자연과 함께 사는 도시", cat: "특집", date: "이달의 특집",
    paras: [
      { ko: "도시 사람들도 자연과 함께 살아야 합니다.", en: "City people too must live together with nature." },
      { ko: "거리마다 나무를 심고 꽃밭을 가꿉니다.", en: "On every street they plant trees and tend flower beds." },
      { ko: "강가에는 공원이 조성되어 산책길이 이어집니다.", en: "Parks have been laid out along the river, and walking paths run along it." },
      { ko: "아침마다 많은 사람이 그 길을 걸으며 운동합니다.", en: "Every morning many people walk that path and take exercise." },
      { ko: "신록의 계절에는 도시 전체가 푸르러 보입니다.", en: "In the season of new leaves the whole city looks green." },
      { ko: "자연과 사이좋게 사는 것이 건강한 생활의 첫걸음입니다.", en: "Living in harmony with nature is the first step of a healthy life." }
    ],
    gloss: { "심고": "planting", "꽃밭": "flower bed", "가꿉니다": "tend", "조성되어": "have been laid out", "산책길": "walking path", "아침마다": "every morning", "걸으며": "walking while", "운동합니다": "take exercise", "신록": "new leaves", "푸르러": "green looking", "사이좋게": "in harmony", "첫걸음": "first step" }
  },
  {
    id: "a3", title: "청년들의 배움의 길", cat: "특집", date: "이달의 특집",
    paras: [
      { ko: "청년들은 나라의 미래입니다.", en: "Young people are the future of the country." },
      { ko: "그들은 학교에서 기초를 배우고 여가를 이용하여 더 많은 것을 공부합니다.", en: "They learn the foundations at school and study more in their free time." },
      { ko: "많은 청년이 도서관과 강습소를 찾습니다.", en: "Many young people come to libraries and study circles." },
      { ko: "혼자 공부하는 시간은 짧지만 알차야 합니다.", en: "Time for private study is short, so it must be made full and fruitful." },
      { ko: "그들은 배운 지식을 현실의 문제를 푸는 데 씁니다.", en: "They use the knowledge they have learned to solve the problems of reality." },
      { ko: "배움의 길은 힘들지만 그 결실은 한없이 큽니다.", en: "The road of learning is hard, but its fruit is endlessly great." }
    ],
    gloss: { "청년": "young people", "미래": "future", "기초": "foundation", "여가": "free time", "강습소": "study circle", "찾습니다": "come to", "알차야": "must be fruitful", "지식": "knowledge", "현실": "reality", "결실": "fruit", "한없이": "boundlessly" }
  },
  {
    id: "a4", title: "민족 문화를 이어 가는 일", cat: "논설", date: "지난주 발행분",
    paras: [
      { ko: "한 민족의 문화는 그 말 속에 담겨 있습니다.", en: "The culture of a nation is contained in its language." },
      { ko: "노래와 춤, 건축과 음식은 세대를 이어 전해집니다.", en: "Songs, dances, architecture and food are handed down from generation to generation." },
      { ko: "우리는 그 문화를 배우고 보존할 책임을 집니다.", en: "We bear the responsibility to learn that culture and preserve it." },
      { ko: "오늘의 청년들은 옛것을 배워 새로운 법으로 표현합니다.", en: "Today young people learn the old things and express them in new ways." },
      { ko: "이와 같이 하여 문화는 죽지 않고 살아 움직입니다.", en: "In this way culture does not die but lives and moves." },
      { ko: "민족 문화를 지키는 일은 나라를 지키는 일과 같습니다.", en: "Guarding national culture is the same as guarding the country." },
      { ko: "우리는 조상들의 슬기를 오늘에 이어 갑니다.", en: "We carry on to today the wisdom of our ancestors." }
    ],
    gloss: { "담겨 있습니다": "is contained", "건축": "architecture", "세대": "generation", "전해집니다": "is handed down", "보존할": "to preserve", "책임": "responsibility", "집니다": "bear", "옛것": "the old things", "표현합니다": "express", "살아 움직입니다": "lives and moves", "지키는": "guarding", "같습니다": "is the same", "조상": "ancestors", "슬기": "wisdom", "이어 갑니다": "carry on" }
  }
];

/* ---------- Novels and literature ---------- */
MH.NOVELS = [
  { id: "v1a", work: "산마을의 봄", part: "1장", title: "첫 눈이 녹을 무렵",
    paras: [
      { ko: "산마을에는 겨울이 길었습니다.", en: "Winter lasted long in the mountain village." },
      { ko: "이월이 되자 언덕 위의 눈이 녹기 시작했습니다.", en: "When February came, the snow on the slope began to melt." },
      { ko: "할아버지는 앞산을 바라보며 말씀하셨습니다.", en: "Grandfather looked at the front mountain and spoke." },
      { ko: "봄은 언제나 제때에 온다, 하고 말씀하셨습니다.", en: "He said that spring always comes in its own good time." },
      { ko: "나는 그 말이 마음에 와 닿았습니다.", en: "Those words reached my heart." }
    ],
    gloss: { "산마을": "mountain village", "이월": "February", "언덕": "slope", "녹기 시작했습니다": "began to melt", "앞산": "the front mountain", "바라보며": "looking at", "말씀하셨습니다": "he spoke (honored)", "언제나": "always", "제때에": "in due time", "와 닿았습니다": "reached and touched" } },
  { id: "v1b", work: "산마을의 봄", part: "2장", title: "밭갈이",
    paras: [
      { ko: "이튿날 아침, 마을 사람들이 밭으로 나섰습니다.", en: "The next morning the villagers set out for the fields." },
      { ko: "소가 쟁기를 끌고, 그 뒤에서 사람들이 씨앗을 뿌렸습니다.", en: "The ox drew the plough, and behind it the people scattered the seed." },
      { ko: "흙에서는 물기 있는 따뜻한 냄새가 났습니다.", en: "From the earth rose a damp and warm smell." },
      { ko: "어린이들은 마을 앞 길에서 함께 뛰어놀았습니다.", en: "The children ran about together on the road in front of the village." },
      { ko: "저녁에는 뜨거운 국을 먹으며 그 날의 이야기를 나누었습니다.", en: "In the evening we ate hot soup and shared the day's stories." }
    ],
    gloss: { "이튿날": "the next day", "나섰습니다": "set out", "쟁기": "plough", "끌고": "drawing", "씨앗": "seed", "뿌렸습니다": "scattered", "물기": "moisture", "냄새": "smell", "뛰어놀았습니다": "ran about playing", "뜨거운": "hot", "국": "soup", "나누었습니다": "shared" } },
  { id: "v1c", work: "산마을의 봄", part: "3장", title: "새싹이 돋다",
    paras: [
      { ko: "며칠 뒤, 이랑마다 연한 새싹이 돋았습니다.", en: "A few days later, tender shoots sprouted in every ridge." },
      { ko: "노인들은 올해는 일찌감치 농사가 잘될 것이라고 말했습니다.", en: "The elders said that this year the farming would go well from the very start." },
      { ko: "봄비가 내리자 산과 들이 한층 푸르러졌습니다.", en: "When the spring rain fell, the mountains and fields became all the greener." },
      { ko: "마을 밖으로 나가는 길에도 풀잎이 돋았습니다.", en: "Blades of grass sprang up even on the road leading out of the village." },
      { ko: "나는 산마을의 봄이 이렇게 조용히 오는구나 하고 생각했습니다.", en: "I thought to myself, so this is how quietly spring comes to the mountain village." }
    ],
    gloss: { "며칠": "a few days", "이랑": "raised ridge", "연한": "tender", "새싹": "new shoots", "돋았습니다": "sprouted", "노인": "elder", "일찌감치": "from early on", "농사": "farming", "봄비": "spring rain", "한층": "all the more", "푸르러졌습니다": "grew green", "풀잎": "blades of grass", "조용히": "quietly", "오는구나": "so it comes (exclaiming)" } },
  { id: "v2a", work: "대동강의 뱃노래", part: "1장", title: "노 젓는 배",
    paras: [
      { ko: "대동강에는 저녁마다 배가 오갑니다.", en: "On the Taedong River boats come and go every evening." },
      { ko: "노 젓는 사람들이 뱃노래를 부릅니다.", en: "The rowers sing their boat songs." },
      { ko: "노래는 강물을 따라 저 멀리 퍼져 나갑니다.", en: "The song spreads far away along the river water." },
      { ko: "물새들이 그 소리에 놀라 날아오릅니다.", en: "The water birds startle at the sound and fly up." },
      { ko: "강가의 버드나무가 바람에 흔들립니다.", en: "The willows along the bank sway in the wind." }
    ],
    gloss: { "대동강": "the Taedong River", "저녁마다": "every evening", "오갑니다": "come and go", "노": "oar", "뱃노래": "boat song", "퍼져 나갑니다": "spreads out", "물새": "water birds", "놀라": "startled", "날아오릅니다": "fly up", "버드나무": "willow", "흔들립니다": "sway" } },
  { id: "v2b", work: "대동강의 뱃노래", part: "2장", title: "밤중의 강",
    paras: [
      { ko: "밤이 되면 강은 고요해집니다.", en: "When night comes the river grows quiet." },
      { ko: "달빛이 수면에 반짝입니다.", en: "Moonlight glitters on the surface of the water." },
      { ko: "남은 배 한 척이 물결을 가르며 지나갑니다.", en: "One remaining boat passes by cutting through the waves." },
      { ko: "노 젓는 소리만이 뚜렷하게 들립니다.", en: "Only the sound of the oars is clearly heard." },
      { ko: "강은 마을의 꿈을 싣고 조용히 흐릅니다.", en: "The river flows quietly, carrying the dream of the village." }
    ],
    gloss: { "고요해집니다": "grows quiet", "달빛": "moonlight", "수면": "water surface", "반짝입니다": "glitters", "한 척": "one boat", "가르며": "cutting through", "뚜렷하게": "distinctly", "들립니다": "is heard", "꿈": "dream", "싣고": "carrying", "흐릅니다": "flows" } },
  { id: "v2c", work: "대동강의 뱃노래", part: "3장", title: "매일 밤의 전설",
    paras: [
      { ko: "사람들은 그 뱃노래가 오래전부터 불려 왔다고 말합니다.", en: "People say that the boat song has been sung since long ago." },
      { ko: "노인들은 어렸을 적에 그 노래를 들었다고 합니다.", en: "The elders say they heard the song when they were young children." },
      { ko: "노래의 가락은 강둑 마을마다 조금씩 다릅니다.", en: "The tune of the song differs a little from village to village along the bank." },
      { ko: "그러나 누구나 그 노래를 들으면 마음이 평안해집니다.", en: "But whoever hears the song feels peace in the heart." },
      { ko: "그래서 오늘도 배는 노래를 싣고 강을 오갑니다.", en: "And so even today the boats carry the song up and down the river." }
    ],
    gloss: { "불려 왔다고": "has been sung", "어렸을 적": "when (they) were young", "가락": "tune", "강둑": "river bank", "조금씩": "a little at a time", "다릅니다": "differ", "누구나": "whoever", "평안해집니다": "becomes peaceful", "그래서": "and so" } }
];

/* ---------- Academic reading ---------- */
MH.ACADEMIC = [
  {
    id: "ac1", field: "언어학", title: "소리와 글자, 음운의 기초",
    paras: [
      { ko: "말은 소리로 이루어집니다.", en: "Language is made of sounds." },
      { ko: "음운은 뜻을 구별하는 가장 작은 소리 단위입니다.", en: "A phoneme is the smallest sound unit that distinguishes meaning." },
      { ko: "물과 불은 첫소리 하나로 뜻이 달라집니다.", en: "Water and fire differ in meaning by a single initial sound." },
      { ko: "조선글은 소리와 글자를 긴밀히 맞춘 글자입니다.", en: "Chosongul is a script that tightly matches letters to sounds." },
      { ko: "모음들은 그 형태에 따라 기본 무늬를 이룹니다.", en: "The vowels form basic patterns according to their shapes." },
      { ko: "이와 같이 글자 한 자 한 자에 체계가 담겨 있습니다.", en: "In this way every single letter contains a system." }
    ],
    gloss: { "이루어집니다": "is made of", "음운": "phoneme", "구별하는": "that distinguishes", "단위": "unit", "물": "water", "불": "fire", "첫소리": "initial sound", "달라집니다": "differ", "조선글": "the Korean script", "긴밀히": "closely", "맞춘": "matched", "모음": "vowel", "형태": "shape", "무늬": "pattern", "이룹니다": "form", "담겨 있습니다": "is contained" }
  },
  {
    id: "ac2", field: "지리", title: "평양의 도시 발달",
    paras: [
      { ko: "평양은 대동강가에 자리 잡은 오랜 도시입니다.", en: "Pyongyang is an old city seated on the banks of the Taedong River." },
      { ko: "도시는 강과 산의 지형에 맞추어 발달하였습니다.", en: "The city has developed in keeping with the terrain of the river and the hills." },
      { ko: "강을 건너는 다리들이 여러 곳에 놓였습니다.", en: "Bridges crossing the river have been built in several places." },
      { ko: "산기슭을 따라 큰 거리들이 펼쳐집니다.", en: "Great streets unfold along the foot of the hills." },
      { ko: "공원과 녹지가 생활 공간 사이에 배치되어 있습니다.", en: "Parks and green land are arranged among the living quarters." },
      { ko: "도시 계획은 사람들의 생활을 편리하게 하는 것을 목표로 합니다.", en: "City planning aims to make people's lives convenient." }
    ],
    gloss: { "대동강": "the Taedong River", "자리 잡은": "seated at", "지형": "terrain", "맞추어": "in keeping with", "건너는": "crossing", "놓였습니다": "have been built", "산기슭": "the foot of the hills", "펼쳐집니다": "unfold", "녹지": "green land", "배치되어 있습니다": "are arranged", "계획": "planning", "편리하게": "conveniently", "목표": "aim" }
  },
  {
    id: "ac3", field: "영양", title: "전통 음식과 영양",
    paras: [
      { ko: "전통 음식은 오랜 생활 속에서 다듬어졌습니다.", en: "Traditional food has been refined through long living." },
      { ko: "국과 반찬, 김치가 밥상의 기본을 이룹니다.", en: "Soup, side dishes and kimchi form the base of the meal table." },
      { ko: "김치는 채소를 절여 만든 저장 음식입니다.", en: "Kimchi is a preserved food made by salting vegetables." },
      { ko: "그 속에는 비타민과 좋은 미생물이 풍부합니다.", en: "It is rich in vitamins and good microorganisms." },
      { ko: "젓갈류는 단백질과 칼슘을 보충하여 줍니다.", en: "Salted seafood supplements protein and calcium." },
      { ko: "따라서 전통 밥상은 영양 면에서도 균형 잡힌 상입니다.", en: "The traditional meal table is therefore a balanced table even in nutrition." }
    ],
    gloss: { "다듬어졌습니다": "was refined", "반찬": "side dishes", "밥상": "meal table", "기본": "the base", "이룹니다": "form", "절여": "salting", "저장": "preserved", "비타민": "vitamin", "미생물": "microorganism", "풍부합니다": "are abundant", "젓갈": "salted seafood", "단백질": "protein", "칼슘": "calcium", "보충하여 줍니다": "supplement", "따라서": "therefore", "균형": "balance" }
  },
  {
    id: "ac4", field: "과학", title: "실험과 관찰",
    paras: [
      { ko: "과학 연구의 첫걸음은 관찰입니다.", en: "The first step of scientific research is observation." },
      { ko: "연구자는 현상을 자세히 기록하고 거기서 규칙을 찾습니다.", en: "The researcher records phenomena carefully and finds rules in them." },
      { ko: "그 다음에는 가설을 세우고 실험으로 검증합니다.", en: "Then he forms a hypothesis and verifies it by experiment." },
      { ko: "실험은 조건이 같게 반복되어야 믿을 수 있습니다.", en: "Experiments can be trusted only when they are repeated under the same conditions." },
      { ko: "얻은 결과는 여러 차례 비교하여 토론합니다.", en: "The results obtained are compared many times and discussed." },
      { ko: "이렇게 하여 과학은 어느 때나 스스로 바로잡아 갑니다.", en: "In this way science always corrects itself." }
    ],
    gloss: { "첫걸음": "first step", "관찰": "observation", "연구자": "researcher", "현상": "phenomenon", "기록하고": "recording", "규칙": "rule", "가설": "hypothesis", "검증합니다": "verify", "조건": "condition", "같게": "the same", "반복되어야": "must be repeated", "믿을 수 있습니다": "can be trusted", "여러 차례": "several times", "비교하여": "comparing", "토론합니다": "discuss", "스스로": "by itself", "바로잡아 갑니다": "keeps correcting" }
  }
];

/* ---------- Listening comprehension quiz ----------
   Each item plays one sentence; the learner answers a question about it. */
MH.LISTEN_QUIZ = [
  { id: "q1", ko: "오늘은 비가 옵니다.", en: "It is raining today.", q: "What is the weather today?", opts: ["It is raining", "It is snowing", "It is sunny"], a: 0 },
  { id: "q2", ko: "저는 매일 아침에 운동을 합니다.", en: "I do exercise every morning.", q: "When does the speaker exercise?", opts: ["Every evening", "Every morning", "Every weekend"], a: 1 },
  { id: "q3", ko: "동무가 저에게 책을 주었습니다.", en: "My friend gave me a book.", q: "What did the friend give?", opts: ["A pen", "A book", "A bag"], a: 1 },
  { id: "q4", ko: "시장에서 과일을 샀습니다.", en: "We bought fruit at the market.", q: "Where did they buy the fruit?", opts: ["At the bank", "At the park", "At the market"], a: 2 },
  { id: "q5", ko: "그 학생은 도서관에서 공부합니다.", en: "That student studies in the library.", q: "Where does the student study?", opts: ["In the library", "In the classroom", "At home"], a: 0 },
  { id: "q6", ko: "기차는 오후 세 시에 떠납니다.", en: "The train leaves at three in the afternoon.", q: "When does the train leave?", opts: ["At nine in the morning", "At three in the afternoon", "At seven in the evening"], a: 1 },
  { id: "q7", ko: "저녁에 가족과 함께 영화를 봅니다.", en: "In the evening we watch a film with the family.", q: "What do they do in the evening?", opts: ["Watch a film", "Cook dinner", "Take a walk"], a: 0 },
  { id: "q8", ko: "이 김치는 아주 맵습니다.", en: "This kimchi is very spicy.", q: "How is the kimchi?", opts: ["Sweet", "Salty", "Very spicy"], a: 2 },
  { id: "q9", ko: "내일은 아버지의 생일입니다.", en: "Tomorrow is my father's birthday.", q: "Whose birthday is tomorrow?", opts: ["My sister's", "My father's", "My mother's"], a: 1 },
  { id: "q10", ko: "평양의 지하철은 땅 깊은 곳에 있습니다.", en: "The Pyongyang metro is deep underground.", q: "Where is the metro?", opts: ["Above the street", "Deep underground", "Beside the river"], a: 1 },
  { id: "q11", ko: "우리는 여름 방학에 바다에 갑니다.", en: "We go to the sea during the summer holiday.", q: "Where do they go in the summer?", opts: ["To the mountains", "To the sea", "To the city"], a: 1 },
  { id: "q12", ko: "그 도서관은 매주 월요일에 쉽니다.", en: "That library is closed every Monday.", q: "When is the library closed?", opts: ["On Monday", "On Friday", "On Sunday"], a: 0 }
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