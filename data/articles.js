/* =====================================================================
   REAL-WORLD ARTICLES  (Munhwao Mastery)
   Articles in the plain formal register on everyday real-world topics:
   daily life, work, city, health, environment, education, science,
   history, economy and culture. Each has a level, category, sentence
   translations, a glossary and three comprehension questions.
   Written in Munhwao register (initial n-/l- preserved: 려행, 력사,
   륙, 로동, etc).
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.ARTICLES = [
  {
    id: "ar1", level: "A2", cat: "daily", title: "아침의 일과, the morning routine",
    paras: [
      { ko: "우리 가족은 아침을 일찍 시작합니다.", en: "Our family starts the morning early." },
      { ko: "여섯 시에 일어나 세수를 합니다.", en: "We get up at six and wash our faces." },
      { ko: "아침밥은 밥과 국, 반찬으로 됩니다.", en: "Breakfast is rice, soup and side dishes." },
      { ko: "아버지께서는 신문을 읽으십니다.", en: "Father reads the newspaper." },
      { ko: "우리는 시간을 아끼며 준비합니다.", en: "We get ready, saving our time." },
      { ko: "일곱 시 반에 집을 나섭니다.", en: "We leave the house at seven thirty." }
    ],
    gloss: { "세수": "washing the face", "반찬": "side dishes", "아끼며": "saving, treasuring", "나섭니다": "set out" },
    q: [
      { q: "What time does the family get up?", opts: ["Six o'clock", "Seven thirty", "Eight o'clock"], a: 0 },
      { q: "What does father do in the morning?", opts: ["Reads the newspaper", "Washes the car", "Goes out running"], a: 0 },
      { q: "What is breakfast made of?", opts: ["Rice, soup and side dishes", "Bread and coffee", "Noodles only"], a: 0 }
    ]
  },
  {
    id: "ar2", level: "A2", cat: "city", title: "평양 지하철의 하루, a day on the Pyongyang metro",
    paras: [
      { ko: "평양 지하철은 아침부터 붐빕니다.", en: "The Pyongyang metro is busy from morning." },
      { ko: "역에는 가득한 사람들이 있습니다.", en: "The stations are full of people." },
      { ko: "차창 밖 풍경이 빠르게 지나갑니다.", en: "The scenery outside the window passes quickly." },
      { ko: "노동자들은 일터로, 학생들은 학교로 갑니다.", en: "Workers go to the workplace, students to school." },
      { ko: "지하철은 우리 생활의 큰 부분입니다.", en: "The metro is a big part of our life." },
      { ko: "저녁 시간에도 다시 많은 사람이 탑니다.", en: "In the evening many people ride again." }
    ],
    gloss: { "붐빕니다": "is crowded", "가득한": "full of", "차창": "car window", "노동자들": "the workers", "탑니다": "ride" },
    q: [
      { q: "When is the metro busy?", opts: ["From the morning", "Only at night", "On weekends only"], a: 0 },
      { q: "Where do the students go?", opts: ["To school", "To the factory", "To the shop"], a: 0 },
      { q: "Who rides the metro in the morning?", opts: ["Workers and students", "Only tourists", "Only the elderly"], a: 0 }
    ]
  },
  {
    id: "ar3", level: "B1", cat: "health", title: "웃음의 힘, the power of laughter",
    paras: [
      { ko: "웃음은 값싼 약이라고 합니다.", en: "They say laughter is a cheap medicine." },
      { ko: "연구에 따르면 웃음은 몸의 긴장을 풉니다.", en: "According to research, laughter relaxes the body." },
      { ko: "웃음은 마음에도 좋은 영향을 줍니다.", en: "Laughter also has a good effect on the mind." },
      { ko: "어려운 일이 있어도 함께 웃는 사람들이 있습니다.", en: "Even in hard times, some people laugh together." },
      { ko: "그들은 문제를 더 가볍게 봅니다.", en: "They see problems more lightly." },
      { ko: "건강은 몸뿐 아니라 마음에서 옵니다.", en: "Health comes from the heart, not only the body." }
    ],
    gloss: { "값싼": "cheap", "긴장을 풉니다": "releases tension", "영향": "influence", "가볍게": "lightly", "건강": "health" },
    q: [
      { q: "What does laughter do according to the article?", opts: ["Relaxes the body", "Causes fatigue", "Raises stress"], a: 0 },
      { q: "How do people who laugh together see problems?", opts: ["More lightly", "More heavily", "More fearfully"], a: 0 },
      { q: "Where does health come from according to the text?", opts: ["The mind and the body", "Only medicine", "Only exercise"], a: 0 }
    ]
  },
  {
    id: "ar4", level: "B1", cat: "education", title: "배움은 평생의 일, learning is a lifelong task",
    paras: [
      { ko: "학교를 마친 뒤에도 배움은 끝나지 않습니다.", en: "Learning does not end after school." },
      { ko: "새로운 기술과 지식이 끊임없이 생깁니다.", en: "New skills and knowledge are constantly produced." },
      { ko: "일하면서 배우는 사람은 앞서갑니다.", en: "Those who learn while working move ahead." },
      { ko: "우리 나라에는 어른들을 위한 배움의 집이 많습니다.", en: "Our country has many places of learning for adults." },
      { ko: "저녁에는 직장 동무들이 같이 공부합니다.", en: "In the evening workmates study together." },
      { ko: "배우는 기쁨은 나이가 없습니다.", en: "The joy of learning has no age." }
    ],
    gloss: { "끊임없이": "ceaselessly", "앞서갑니다": "moves ahead", "어른들": "the adults", "직장": "workplace", "나이": "age" },
    q: [
      { q: "What does the article say about new knowledge?", opts: ["It is constantly created", "It stopped long ago", "It only comes from books"], a: 0 },
      { q: "Who learns in the evening?", opts: ["Workmates together", "Only children", "Only teachers"], a: 0 },
      { q: "What does the joy of learning have?", opts: ["No age", "A fixed age", "An age limit"], a: 0 }
    ]
  },
  {
    id: "ar5", level: "B1", cat: "work", title: "로동의 땀과 자부심, the sweat and pride of labour",
    paras: [
      { ko: "공장에서는 매일 새로운 일이 벌어집니다.", en: "New work unfolds in the factory every day." },
      { ko: "기계와 사람의 손이 함께 움직입니다.", en: "Machines and human hands work together." },
      { ko: "한 부품의 불량이 전체를 그르칠 수 있습니다.", en: "A single faulty part can spoil the whole." },
      { ko: "그래서 로동자들은 늘 정성을 다합니다.", en: "That is why the workers always give their utmost care." },
      { ko: "잘 만든 제품을 볼 때 뿌듯합니다.", en: "It is gratifying to see a well-made product." },
      { ko: "땀은 결과로, 결과는 자부심으로 돌아옵니다.", en: "Sweat returns as results, and results as pride." }
    ],
    gloss: { "벌어집니다": "unfolds, happens", "부품": "a spare part", "불량": "a defect", "그르칠": "to spoil", "뿌듯합니다": "feel gratified", "자부심": "pride" },
    q: [
      { q: "What can a faulty part do?", opts: ["Spoil the whole product", "Improve the machine", "Speed up the work"], a: 0 },
      { q: "What do the workers always give?", opts: ["Their utmost care", "Their complaints", "Their spare time"], a: 0 },
      { q: "What does sweat return as?", opts: ["Results and pride", "Fatigue and doubt", "Nothing"], a: 0 }
    ]
  },
  {
    id: "ar6", level: "B2", cat: "environment", title: "기후, 우리의 공동 집, climate, our common home",
    paras: [
      { ko: "기후 변화는 더 이상 먼 나라의 문제가 아닙니다.", en: "Climate change is no longer a distant country's problem." },
      { ko: "봄에는 예전보다 더 많은 비가 내립니다.", en: "In spring more rain falls than before." },
      { ko: "여름에는 폭염이 잦아졌습니다.", en: "Heat waves have become frequent in summer." },
      { ko: "농사는 이 변화를 가장 먼저 느낍니다.", en: "Farming feels this change the soonest." },
      { ko: "물을 아끼고 에너지를 절약하는 것이 시작입니다.", en: "Saving water and conserving energy is the beginning." },
      { ko: "한 사람의 작은 행동이 함께 큰 물결이 됩니다.", en: "One person's small action together becomes a great tide." }
    ],
    gloss: { "폭염": "a heat wave", "잦아졌습니다": "has become frequent", "농사": "farming", "아끼고": "saving, sparing", "절약하는": "conserving", "물결": "a tide, a wave" },
    q: [
      { q: "What has become frequent in summer?", opts: ["Heat waves", "Snowstorms", "Fog"], a: 0 },
      { q: "What does farming do according to the article?", opts: ["Feels the change the soonest", "Always stays the same", "Avoids the weather"], a: 0 },
      { q: "What is the beginning of the solution?", opts: ["Saving water and energy", "Changing the crops", "Building more houses"], a: 0 }
    ]
  },
  {
    id: "ar7", level: "B2", cat: "science", title: "하늘을 보는 나라의 일, a nation's work of watching the sky",
    paras: [
      { ko: "우리 나라 과학자들은 밤낮으로 하늘을 봅니다.", en: "Our country's scientists watch the sky day and night." },
      { ko: "위성은 기상과 농사에 없어서는 안 됩니다.", en: "Satellites are indispensable for weather and farming." },
      { ko: "관측 자료는 연구소마다 서로 나눕니다.", en: "Observational data is shared among the institutes." },
      { ko: "한 번의 정확한 예보가 많은 것을 살립니다.", en: "One accurate forecast saves a great deal." },
      { ko: "과학은 땅 위 생활의 지붕입니다.", en: "Science is the roof over life on the ground." },
      { ko: "연구는 소리 없이, 그러나 꾸준히 진보합니다.", en: "Research advances silently, but steadily." }
    ],
    gloss: { "밤낮으로": "day and night", "위성": "a satellite", "관측": "observation", "예보": "a forecast", "지붕": "a roof", "꾸준히": "steadily" },
    q: [
      { q: "What are satellites indispensable for?", opts: ["Weather and farming", "Trade and travel", "Music and art"], a: 0 },
      { q: "What do the institutes share?", opts: ["Observational data", "Machines", "Buildings"], a: 0 },
      { q: "How does research advance?", opts: ["Silently but steadily", "Rapidly and loudly", "Only in spring"], a: 0 }
    ]
  },
  {
    id: "ar8", level: "B2", cat: "history", title: "옛 혁명전적지, the old revolutionary sites",
    paras: [
      { ko: "우리 나라에는 오랜 력사를 간직한 곳이 많습니다.", en: "Our country has many places holding a long history." },
      { ko: "산골의 작은 마을에도 옛 전적지가 있습니다.", en: "Even small mountain villages have old revolutionary sites." },
      { ko: "젊은 세대는 그곳을 찾아 교훈을 배웁니다.", en: "The young generations visit them and learn lessons." },
      { ko: "옛길은 걷는 사람을 과거로 데려갑니다.", en: "An old path carries the walker back to the past." },
      { ko: "기억을 지키는 것은 앞으로 가는 일입니다.", en: "Guarding memory is work that goes forward." },
      { ko: "력사는 태우지 않는 등불과 같습니다.", en: "History is like a lamp that never goes out." }
    ],
    gloss: { "간직한": "holding, preserving", "산골": "a mountain valley", "전적지": "a revolutionary site", "교훈": "a lesson", "데려갑니다": "takes (someone) back", "등불": "a lamp" },
    q: [
      { q: "Where can old revolutionary sites be found?", opts: ["Even in small mountain villages", "Only in the capital", "Only abroad"], a: 0 },
      { q: "What do the young generations learn there?", opts: ["Lessons from memory", "Modern technology", "Foreign languages"], a: 0 },
      { q: "What is history compared to?", opts: ["A lamp that never goes out", "A river that dries", "A wall that falls"], a: 0 }
    ]
  },
  {
    id: "ar9", level: "C1", cat: "economy", title: "기술혁신과 경제의 새바람, technical innovation and a new wind in the economy",
    paras: [
      { ko: "경제의 발전은 기술혁신과 함께 걸어갑니다.", en: "Economic development walks alongside technical innovation." },
      { ko: "새 공법이 도입되면 같은 원료로 더 많은 생산이 됩니다.", en: "When new methods are introduced, the same raw materials yield more output." },
      { ko: "발명가는 공장의 꽃이라고 합니다.", en: "It is said that inventors are the flower of the factory." },
      { ko: "그러나 혁신은 한 사람의 천재에서만 오지 않습니다.", en: "Yet innovation does not come only from a single genius." },
      { ko: "여러 부문의 협동이 기술의 문을 엽니다.", en: "The cooperation of many sectors opens the door of technology." },
      { ko: "경제의 내일은 오늘의 계획 속에 있습니다.", en: "The economy's tomorrow lies in today's plan." }
    ],
    gloss: { "기술혁신": "technical innovation", "공법": "a production method", "원료": "raw material", "발명가": "an inventor", "천재": "a genius", "부문": "a sector", "협동": "cooperation" },
    q: [
      { q: "What do innovation and development do together?", opts: ["Walk alongside each other", "Pull in opposite ways", "Never meet"], a: 0 },
      { q: "Where does innovation come from according to the text?", opts: ["Cooperation of many sectors", "Only a single genius", "Only imported machines"], a: 0 },
      { q: "Where does tomorrow's economy lie?", opts: ["In today's plan", "In yesterday's luck", "In waiting"], a: 0 }
    ]
  },
  {
    id: "ar10", level: "C1", cat: "culture", title: "전통과 현대의 대화, a dialogue between tradition and modernity",
    paras: [
      { ko: "전통은 박물관의 전시물이 아닙니다.", en: "Tradition is not an exhibit in a museum." },
      { ko: "그것은 우리의 습관과 말 속에 살아 있습니다.", en: "It lives in our habits and our speech." },
      { ko: "현대의 건축 속에도 옛 미가 흐릅니다.", en: "In modern architecture the old beauty also flows." },
      { ko: "한복과 전통무용이 오늘의 무대에서 다시 춤춥니다.", en: "Hanbok and traditional dance dance again on today's stage." },
      { ko: "보존과 창조는 대립이 아니라 보완입니다.", en: "Preservation and creation are not opposites but complements." },
      { ko: "전통을 아는 세대가 새로운 세대를 키웁니다.", en: "The generation that knows tradition raises a new generation." }
    ],
    gloss: { "전시물": "an exhibit", "습관": "a habit", "건축": "architecture", "한복": "traditional dress", "무용": "dance", "대립": "opposition", "보완": "complement" },
    q: [
      { q: "What is tradition compared to?", opts: ["Living habits and speech", "A museum exhibit", "An outdated fashion"], a: 0 },
      { q: "How are preservation and creation related?", opts: ["Complements", "Opposites", "Unrelated"], a: 0 },
      { q: "Where does the old beauty also flow?", opts: ["In modern architecture", "In ruins only", "In foreign films"], a: 0 }
    ]
  },
  {
    id: "ar11", level: "C1", cat: "society", title: "이웃의 온기, the warmth of neighbours",
    paras: [
      { ko: "도시에서도 이웃의 얼굴은 여전히 중요합니다.", en: "Even in the city, the face of a neighbour still matters." },
      { ko: "골목은 사람들이 만나는 마당입니다.", en: "The alley is the courtyard where people meet." },
      { ko: "어려운 일이 생기면 이웃이 제일 먼저 옵니다.", en: "When trouble comes, the neighbour arrives first." },
      { ko: "반찬 하나를 나누는 일에서 공동체가 솟습니다.", en: "From sharing a single side dish, community springs." },
      { ko: "바쁜 현대의 시간 속에서 우리는 서로를 찾습니다.", en: "In the busy time of the modern age we seek one another." },
      { ko: "온기는 높은 온도계보다 더 따뜻합니다.", en: "Warmth is warmer than a high thermometer." }
    ],
    gloss: { "골목": "an alley", "마당": "a courtyard", "반찬": "a side dish", "공동체": "a community", "온기": "warmth", "온도계": "a thermometer" },
    q: [
      { q: "What is the alley described as?", opts: ["A courtyard where people meet", "A road for cars only", "An empty space"], a: 0 },
      { q: "What does sharing a side dish do?", opts: ["Springs community", "Creates rivalry", "Ends friendship"], a: 0 },
      { q: "What is warmth compared to?", opts: ["A high thermometer", "A deep river", "A cold morning"], a: 0 }
    ]
  },
  {
    id: "ar12", level: "C2", cat: "society", title: "세대의 다리, the bridge of generations",
    paras: [
      { ko: "세대의 간극은 말의 차이만이 아닙니다.", en: "The gap between generations is not only a difference of words." },
      { ko: "그것은 가치의 좌표가 서로 다른 자리에서 움직임입니다.", en: "It is the movement of value coordinates from different places." },
      { ko: "어른은 경험으로, 젊은이는 열정으로 이야기합니다.", en: "Elders speak from experience, the young from passion." },
      { ko: "대화가 끊기면 서로는 낯선 나라 사람이 됩니다.", en: "When dialogue breaks, the two sides become strangers." },
      { ko: "다리를 놓는 일은 한쪽의 양보가 아니라 양쪽의 걸음입니다.", en: "Building a bridge is not one side's concession but steps from both sides." },
      { ko: "서로의 말을 끝까지 들을 때 세대는 하나가 됩니다.", en: "When each side listens to the other to the end, the generations become one." }
    ],
    gloss: { "간극": "a gap", "가치": "value", "좌표": "coordinates", "열정": "passion", "낯선": "unfamiliar, strange", "양보": "a concession", "걸음": "a step" },
    q: [
      { q: "From what do the young speak?", opts: ["Passion", "Experience", "Distance"], a: 0 },
      { q: "What happens when dialogue breaks?", opts: ["The two sides become strangers", "The family grows closer", "The elders give up"], a: 0 },
      { q: "What builds the bridge between generations?", opts: ["Listen each other to the end", "Debates that never end", "Silence"], a: 0 }
    ]
  }
];