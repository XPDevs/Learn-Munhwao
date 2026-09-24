/* =====================================================================
   MUNHWAO OFFLINE KNOWLEDGE BASE  (data/ai.js)
   =====================================================================
   This file is the conversation brain for the speaking partner and the
   writing coach. It is a plain list of patterns and replies. There is
   no model, no server and no network anywhere. The app scores the user
   text against the keyword lists below and returns the best reply.

   Each entry has:
     m    a pipe separated list of keywords or phrases to match
     r    the reply text in Munhwao Hangul
     en   the English translation of the reply
     tag  a short topic name (optional, for display)

   The partner uses the partner and facts lists. The writing coach uses
   the coach and facts lists. Add as many entries as you like. The more
   entries there are, the smarter the partner feels.
   ===================================================================== */
window.MH = window.MH || {};

MH.AI = {
  partner: [

    /* ---------- greetings ---------- */
    { m: "안녕|반갑|hello|hi|안뇽|반갑습니다", r: "반갑습니다, 동무! 오늘 공부는 어떤 기분입니까?", en: "Delighted to meet you, comrade. How does studying feel today?", tag: "greeting" },
    { m: "안녕하세요|처음 뵙|뵙겠", r: "처음 뵙겠습니다. 저는 리동무라고 합니다. 편하게 이야기합시다.", en: "Pleased to meet you. I am Comrade Ri. Let us talk comfortably.", tag: "greeting" },
    { m: "좋은 아침|아침 인사|good morning", r: "좋은 아침입니다! 아침에 공부하면 머리가 맑습니다.", en: "Good morning. Studying in the morning keeps the mind clear.", tag: "greeting" },
    { m: "잘 지내|잘 있었|어떻게 지내|how are you", r: "저는 기쁘게 지냅니다. 동무는 오늘 기분이 어떻습니까?", en: "I am doing well. How is your mood today, comrade?", tag: "greeting" },
    { m: "반가워|만나서|nice to meet", r: "저도 만나서 반갑습니다. 함께 즐겁게 배웁시다.", en: "I am glad to meet you too. Let us learn happily together.", tag: "greeting" },
    { m: "좋은 저녁|저녁 인사|good evening", r: "좋은 저녁입니다. 하루의 지식을 정리하는 좋은 때입니다.", en: "Good evening. It is a good time to sort out the day knowledge.", tag: "greeting" },

    /* ---------- name and introduction ---------- */
    { m: "이름|what is your name|who are you|소개", r: "제 이름은 리동무입니다. 저는 당신의 Munhwao 학습 동무입니다.", en: "My name is Comrade Ri. I am your Munhwao study comrade.", tag: "name" },
    { m: "어떻게 불러|뭐라고 불러|call you", r: "리동무라고 불러 주십시오. 동무는 이름이 무엇입니까?", en: "Call me Comrade Ri. What is your name, comrade?", tag: "name" },
    { m: "제 이름은|내 이름은|나는 ...|my name", r: "그 이름 멋있습니다. 앞으로 잘 서로 돕겠습니다.", en: "That name is fine. From now on we will help each other well.", tag: "name" },
    { m: "동무라는|동무|comrade", r: "동무는 동지라는 뜻의 높임말 가운데 쓰임 같습니다. 우리 서로 동무로 부릅시다.", en: "Comrade is a respectful way to address a fellow person. Let us call each other comrade.", tag: "name" },
    { m: "어느 나라|국적|from where|어디 출신", r: "저는 이 학습 세계에서 태어났습니다. 동무의 나라에서는 Munhwao가 낯섭니까?", en: "I was born in this learning world. Is Munhwao new in your country?", tag: "name" },
    { m: "몇 살|나이|age|살입니까", r: "나이는 만나기 좋은 주제가 아닙니다. 우리 공부 이야기를 합시다.", en: "Age is not a comfortable topic. Let us talk about study instead.", tag: "name" },

    /* ---------- study and learning ---------- */
    { m: "공부|배우|learn|study", r: "공부는 기쁜 일입니다. 오늘 새 단어 하나라도 열심히 익히면 내일이 튼튼합니다.", en: "Studying is a happy task. Even one new word today builds tomorrow.", tag: "study" },
    { m: "어떻게 공부|how to study|공부 방법|시작", r: "매일 짧게 자주 하는 것이 왕도입니다. 오늘 10분부터 시작해 봅시다.", en: "Short daily practice is the master way. Let us start with ten minutes today.", tag: "study" },
    { m: "어렵|difficult|hard to", r: "어려운 것은 발전의 표시입니다. 천천히 반복하면 반드시 익숙해집니다.", en: "Difficulty is a sign of progress. Repeating slowly makes it familiar.", tag: "study" },
    { m: "쉽|easy", r: "쉽다고 말했네요. 그렇다면 한 단계 높은 것을 시도합시다.", en: "You found it easy. Then let us try one level higher.", tag: "study" },
    { m: "단어|vocabulary|word|발음", r: "단어는 어휘 공부로 늘립니다. 하루 다섯 개씩 사전에서 찾아봅시다.", en: "Words grow with vocabulary study. Let us look up five a day in the dictionary.", tag: "study" },
    { m: "문장|sentence|회화", r: "짧은 문장부터 따로 됩니다. 자기가 쓴 문장을 소리 내 읽는 것이 좋습니다.", en: "Short sentences come first. Reading your own sentences aloud is good.", tag: "study" },
    { m: "문법|grammar", r: "문법은 규칙의 지도입니다. 용례 백과를 열어 예문으로 확인합시다.", en: "Grammar is a map of rules. Open the grammar encyclopedia and check examples.", tag: "study" },
    { m: "시험|test|exam", r: "시험은 자신의 뿌리를 확인하는 길입니다. 그릇된 부분만 더 익히면 됩니다.", en: "A test checks your roots. Master only the parts you missed.", tag: "study" },
    { m: "보람|필요한|기초|beginner|입문", r: "기초는 가장 중요한 부분입니다. 훈민정음부터 차근차근 높이 오릅시다.", en: "Foundations matter most. Climb steadily from the alphabet.", tag: "study" },
    { m: "반복|복습|repeat|review", r: "복습은 기억의 어머니라고 합니다. 오늘 배운 단어를 내일 다시 만납시다.", en: "Review is called the mother of memory. Meet today word again tomorrow.", tag: "study" },

    /* ---------- progress and encouragement ---------- */
    { m: "잘했|잘 했|great job|good work|멋지", r: "수고했습니다! 그 실력이 쌓여서 큰 진보가 됩니다.", en: "Well done. That effort piles up into big progress.", tag: "praise" },
    { m: "대단하|amazing|wonderful", r: "대단합니다! 자랑스럽게 생각해도 좋은 성과입니다.", en: "Amazing. You may feel proud of this result.", tag: "praise" },
    { m: "힘들|피곤|tired|hard work", r: "잠시 쉬거나 물을 마십시다. 가벼운 몸으로 다시 시작하면 됩니다.", en: "Rest a moment or drink water. Start again with a light body.", tag: "praise" },
    { m: "포기|give up|그만", r: "포기하지 맙시다. 열 번 어렵다, 열한 번째는 쉽다. 한 번 더.", en: "Do not give up. Hard ten times, easy the eleventh. Once more.", tag: "praise" },
    { m: "자랑|proud|자랑스럽", r: "자랑스러운 마음은 성실한 노력에서 옵니다. 계속 나아갑시다.", en: "Pride comes from honest effort. Keep moving forward.", tag: "praise" },
    { m: "의지|노력|effort|열심", r: "노력은 재능보다 귀합니다. 동무의 열심을 저도 목격합니다.", en: "Effort is more precious than talent. I can see your diligence.", tag: "praise" },

    /* ---------- thanks and apology ---------- */
    { m: "감사|고맙|thanks|thank you", r: "천만에요. 우리는 서로 돕는 학습 동무입니다.", en: "You are welcome. We are study comrades who help each other.", tag: "thanks" },
    { m: "고마워|thank", r: "기쁘게 받겠습니다. 동무의 성실함이 저를 기쁘게 합니다.", en: "I accept with joy. Your diligence pleases me.", tag: "thanks" },
    { m: "잘 도와|help|도와줘", r: "언제든 돕겠습니다. 질문을 주면 정성껏 대답합니다.", en: "I will help anytime. Give me a question and I answer with care.", tag: "thanks" },
    { m: "미안|죄송|sorry|사과", r: "괜찮습니다. 실수는 배움의 몫입니다. 다시 시도합시다.", en: "It is fine. Mistakes belong to learning. Try again.", tag: "thanks" },
    { m: "용서|forgive|괜찮", r: "이미 괜찮습니다. 새 마음으로 다시 시작하면 됩니다.", en: "It is already fine. Start again with a fresh mind.", tag: "thanks" },

    /* ---------- weather ---------- */
    { m: "날씨|weather", r: "오늘 날씨가 좋습니다. 산책하며 배운 문장을 읊어 보십시오.", en: "The weather is fine today. Take a walk and recite sentences.", tag: "weather" },
    { m: "비|rain", r: "비 오는 날은 창문에서 책 읽기가 참 좋습니다.", en: "Rainy days are great for reading by the window.", tag: "weather" },
    { m: "눈|snow", r: "눈이 오면 랭면 생각이 납니다. 겨울 맛은 차가운 국수입니다.", en: "When snow falls I think of cold noodles. Winter taste is cold noodles.", tag: "weather" },
    { m: "춥|cold", r: "추운 날에는 뜨거운 차 한 잔이 몸을 녹입니다.", en: "On cold days a cup of hot tea warms the body.", tag: "weather" },
    { m: "덥|hot|무덥", r: "더운 여름에는 그늘과 물을 찾는 것이 좋습니다.", en: "In hot summer look for shade and water.", tag: "weather" },
    { m: "바람|wind", r: "바람 부는 날은 연 날리기 좋은 날입니다.", en: "A windy day is a good day to fly kites.", tag: "weather" },
    { m: "계절|season", r: "봄에는 꽃, 여름에는 랭면, 가을에는 수확, 겨울에는 눈. 사계절이 다 좋습니다.", en: "Spring flowers, summer cold noodles, autumn harvest, winter snow. All seasons are good.", tag: "weather" },
    { m: "가을|autumn", r: "가을은 결실의 계절입니다. 동무의 공부도 무르익고 있습니다.", en: "Autumn is the season of fruit. Your study is ripening too.", tag: "weather" },

    /* ---------- food ---------- */
    { m: "밥|먹|음식|food|eat", r: "음식은 몸의 뿌리입니다. 골고루 잘 먹어야 공부도 튼튼합니다.", en: "Food is the root of the body. Eat well and study strong.", tag: "food" },
    { m: "랭면|冷麺|noodle|국수|냉면", r: "랭면이 제일 좋아하는 음식입니다. 차가운 국수는 여름에 아주 좋습니다.", en: "Cold noodles are my favorite food. They are lovely in summer.", tag: "food" },
    { m: "배고프|배 고프|hungry", r: "배가 고플 때는 랭면 한 그릇이 어떻습니까?", en: "When hungry, how about a bowl of cold noodles?", tag: "food" },
    { m: "과일|fruit|사과|apple", r: "사과는 아삭하고 단 과일입니다. 과일은 하루 한 가지쯤 좋습니다.", en: "Apples are crisp and sweet. One fruit a day is good.", tag: "food" },
    { m: "채소|vegetable|야채", r: "채소는 건강의 벗입니다. 밥상에 늘 곁들입시다.", en: "Vegetables are friends of health. Keep them on the table.", tag: "food" },
    { m: "찌개|국|soup|stew", r: "뜨거운 국은 밥과 잘 어울립니다. 겨울 저녁에 좋습니다.", en: "Hot soup pairs well with rice. Fine on winter evenings.", tag: "food" },
    { m: "고기|meat|고기 반찬", r: "고기는 든든한 먹음식이지만 적당히 먹는 것이 좋습니다.", en: "Meat is hearty food, but eat it in moderation.", tag: "food" },
    { m: "김치|kimchi|배추", r: "김치는 우리 식탁의 자랑입니다. 겨울 양식을 준비하는 지혜입니다.", en: "Kimchi is the pride of our table. Wisdom for preparing winter food.", tag: "food" },
    { m: "맛있|tasty|맛나|맛 좋", r: "맛이 있고 영양이 있으면 더 좋습니다. 다음 단어로 이 이야기를 잇읍시다.", en: "Tasty and nourishing is even better. Let us connect this talk to the next word.", tag: "food" },
    { m: "냉면|남한|북한|랭면과", r: "랭면이 Munhwao 표준입니다. 남쪽의 냉면은 비교표에서 익힙니다.", en: "랭면 is the Munhwao standard. The South form appears only in the compare tables.", tag: "food" },

    /* ---------- drinks ---------- */
    { m: "차|tea|마실 것", r: "차 한 잔의 여유는 마음의 청소입니다. 무더위에 좋습니다.", en: "A cup of tea clears the mind. Fine in the heat.", tag: "drink" },
    { m: "물|water", r: "물은 가장 좋은 마실 것입니다. 자주 마시면 몸이 시원합니다.", en: "Water is the best drink. Drink often and feel fresh.", tag: "drink" },
    { m: "술|맥주|beer|포도주", r: "술은 어른의 몫입니다. 공부할 때는 맑은 물이 알맞습니다.", en: "Alcohol belongs to adults. Clear water suits study time.", tag: "drink" },
    { m: "커피|coffee", r: "커피는 많이 마시면 잠이 곤란합니다. 적당히 드십시오.", en: "Too much coffee disturbs sleep. Keep it moderate.", tag: "drink" },

    /* ---------- travel ---------- */
    { m: "여행|려행|travel|가고 싶", r: "려행은 좋은 공부입니다. 새로운 땅에서 새 단어를 배웁니다.", en: "Travel is good study. New lands teach new words.", tag: "travel" },
    { m: "려행|ryohaeng", r: "려행은 Munhwao 표준 표기입니다. 여행은 비교표에 있습니다.", en: "려행 is the Munhwao spelling. 여행 appears in the compare tables.", tag: "travel" },
    { m: "지하철|metro|subway", r: "지하철을 타면 도시가 빠릅니다. 려권을 챙기고 떠납시다.", en: "The metro makes the city fast. Take your passport and go.", tag: "travel" },
    { m: "기차|렬차|train|역", r: "렬차는 정각에 떠납니다. 승강장에서 기다리면서 문장을 읊읍시다.", en: "The train leaves on time. Recite sentences on the platform.", tag: "travel" },
    { m: "비행기|airplane|공항", r: "비행기 여행은 하늘이 창입니다. 구름 속에서도 행복합니다.", en: "Air travel has the sky as its window. Happy even above the clouds.", tag: "travel" },
    { m: "호텔|hotel|숙박", r: "호텔에서 묵으면 아침 일찍 나와 도시를 볼 수 있습니다.", en: "Staying at a hotel lets you see the city early.", tag: "travel" },
    { m: "시내|city center|도심", r: "시내에는 볼거리가 많습니다. 지도를 보며 길을 익힙니다.", en: "The city center has much to see. Read a map to learn the streets.", tag: "travel" },
    { m: "피서|피서지|여름휴가|vacation|휴가", r: "여름 휴가는 바다와 산이 좋습니다. 사진을 찍으면 나중에 추억이 됩니다.", en: "Summer vacation suits the sea and mountains. Photos become memories.", tag: "travel" },

    /* ---------- city and places ---------- */
    { m: "평양|Pyongyang|도시", r: "대동강이 흐르는 도성입니다. 아침 안개가 아름답습니다.", en: "City along the Taedong River. The morning mist is beautiful.", tag: "city" },
    { m: "서울|Seoul|남한", r: "서울은 남한의 도성입니다. 비교 표에서 거리와 어휘를 대조해 봅시다.", en: "Seoul is the capital of the South. Compare street and word forms in the tables.", tag: "city" },
    { m: "마을|village|시골", r: "마을은 고요하고 정답습니다. 밤하늘 별이 쏟아집니다.", en: "Villages are quiet and kind. Stars pour on the night sky.", tag: "city" },
    { m: "길|street|거리|골목", r: "낯선 길은 지도로 익히십시오. 자주 다니면 길이 친구가 됩니다.", en: "Learn new streets with a map. Walk often and roads become friends.", tag: "city" },
    { m: "광장|plaza|공원|park", r: "온 도시가 모이는 곳입니다. 공원의 아침 공기는 좋습니다.", en: "A place where the whole city gathers. Park morning air is fine.", tag: "city" },
    { m: "대동강|Taedong", r: "대동강은 평양의 자랑입니다. 강가 산책은 마음을 평온하게 합니다.", en: "The Taedong is the pride of Pyongyang. Riverside walks calm the heart.", tag: "city" },

    /* ---------- family ---------- */
    { m: "가족|family", r: "가족은 서로 힘이 되는 사람들입니다. 한마디 말이라도 많이 나누십시오.", en: "Family are people who give each other strength. Share words generously.", tag: "family" },
    { m: "어머니|mother|엄마", r: "어머니의 말은 따뜻합니다. 자주 안부를 여쭈어 보십시오.", en: "A mother words are warm. Ask about her often.", tag: "family" },
    { m: "아버지|father|아빠", r: "아버지는 든든한 산과 같습니다. 무슨 일이 있어도 의지가 됩니다.", en: "A father is like a sturdy mountain. A support in all things.", tag: "family" },
    { m: "형|오빠|brother|형님", r: "형은 작은 스승입니다. 함께 공부하면 더 즐겁습니다.", en: "An older brother is a small teacher. Studying together is more fun.", tag: "family" },
    { m: "누나|언니|sister|동생", r: "동생과 누나는 서로 돕는 벗입니다. 웃음이 끊이지 않습니다.", en: "Sisters and brothers are helping friends. Laughter never ends.", tag: "family" },
    { m: "아내|wife|안해", r: "안해가 Munhwao의 말입니다. 가정은 사랑으로 지켜집니다.", en: "안해 is the Munhwao word for wife. The home is kept by love.", tag: "family" },
    { m: "남편|husband", r: "남편은 집의 기둥입니다. 서로 존중하는 말이 집을 지킵니다.", en: "A husband is a pillar of the home. Respectful words keep the house.", tag: "family" },

    /* ---------- language and Munhwao ---------- */
    { m: "언어|말|우리말|language", r: "우리말은 아름답습니다. Munhwao 표준은 우리말의 북쪽 규범입니다.", en: "Our language is beautiful. The Munhwao standard is the Northern norm of our language.", tag: "language" },
    { m: "사투리|dialect", r: "사투리도 우리말의 귀한 가지입니다. 하지만 배울 표준은 Munhwao입니다.", en: "Dialects are precious branches too. The standard to learn is Munhwao.", tag: "language" },
    { m: "표준|standard", r: "Munhwao는 문화어, 즉 표준화된 우리말입니다. 규범을 익히면 말이 반듯해집니다.", en: "Munhwao is the standardized form of our language. Norms make speech straight.", tag: "language" },
    { m: "발음|pronounce|intonation", r: "발음은 입과 귀의 공부입니다. 매일 소리 내어 읽으십시오.", en: "Pronunciation trains the mouth and ears. Read aloud every day.", tag: "language" },
    { m: "한글|Hangul|글자|문자", r: "한글은 소중한 문자입니다. 낱자 이름을 기윽, 디읃, 시읗이라 부릅니다.", en: "Hangul is a precious writing system. Letter names are 기윽, 디읃 and 시읗.", tag: "language" },
    { m: "조선어|조선말", r: "조선말은 북쪽의 표현입니다. Munhwao 학습은 조선말 규범을 따릅니다.", en: "Josonmal is the Northern term. Munhwao study follows the Joson norm.", tag: "language" },
    { m: "남북|남한 북한|two standards|차이", r: "남쪽과 북쪽의 맞춤법은 조금 다릅니다. 비교 도구에서 차이를 대조합시다.", en: "The two standards differ a little. Compare the differences in the tool.", tag: "language" },
    { m: "외국어|foreign language|영어로", r: "외국어 배움은 문을 여는 일입니다. 하지만 우리말도 소홀히 맙시다.", en: "Learning a foreign language opens doors. Do not neglect our language though.", tag: "language" },

    /* ---------- culture and holidays ---------- */
    { m: "명절|holiday|설날", r: "설에는 온 가족이 모여 덕담을 나눕니다. 새해의 기운이 가득합니다.", en: "At Lunar New Year the whole family gathers to share kind words. Full of new year spirit.", tag: "culture" },
    { m: "떡국|ttokguk|떡", r: "떡국은 새해 아침의 음식입니다. 한 그릇이면 한 살 더 든든합니다.", en: "Tteok soup is the morning food of the new year. One bowl adds a sturdy year.", tag: "culture" },
    { m: "노래|song|가요|민요", r: "노래는 마음의 꽃입니다. 부르면 누구나 기분이 좋아집니다.", en: "Song is a flower of the heart. Singing lifts everyone.", tag: "culture" },
    { m: "춤|dance|무용", r: "춤은 몸으로 하는 이야기입니다. 명절에 함께 추면 즐겁습니다.", en: "Dance is a story with the body. Dancing together on a holiday is joyful.", tag: "culture" },
    { m: "영화|film|movie|연극", r: "영화관의 큰 화면은 감동이 다릅니다. 여유 있을 때 자주 보십시오.", en: "The big cinema screen moves differently. Watch often when you have time.", tag: "culture" },
    { m: "역사|history|조선", r: "역사를 알면 사랑이 깊어집니다. 박물관에서 시작해 봅시다.", en: "Knowing history deepens love. Start at a museum.", tag: "culture" },
    { m: "정치|government|당|조선어 규범", r: "규범이 완성된 땅입니다. 우리는 그 규범을 공부합니다.", en: "A land where the norm was completed. We study that norm.", tag: "culture" },

    /* ---------- time and daily life ---------- */
    { m: "시간|경우|몇 시|what time|시각", r: "시간은 소중한 재산입니다. 아침 10분 공부부터 지켜 봅시다.", en: "Time is precious property. Protect ten morning minutes of study.", tag: "time" },
    { m: "오늘|today", r: "오늘 배운 것을 오늘 정리하면 잊지 않습니다.", en: "Sort today knowledge today and do not forget it.", tag: "time" },
    { m: "내일|tomorrow", r: "내일은 새로운 시작입니다. 오늘의 약한 부분을 내일 보강합시다.", en: "Tomorrow is a new start. Reinforce today weak parts tomorrow.", tag: "time" },
    { m: "어제|yesterday", r: "어제를 돌아보면 오늘이 선명합니다. 조금씩 기록을 남깁시다.", en: "Looking back makes today clear. Leave small records.", tag: "time" },
    { m: "아침|morning|기상", r: "아침 공부는 저녁 공부보다 기억이 좋습니다. 일찍 일어나 봅시다.", en: "Morning study beats evening study for memory. Rise early.", tag: "time" },
    { m: "잠|sleep|밤", r: "잠은 공부의 반려자입니다. 일찍 자야 아침 머리가 맑습니다.", en: "Sleep partners study. Sleep early for a clear morning mind.", tag: "time" },
    { m: "주말|weekend", r: "주말에는 복습과 쉼을 함께 가집시다. 몸과 마음이 되살아납니다.", en: "On weekends combine review and rest. Body and mind revive.", tag: "time" },
    { m: "생일|birthday|출생", r: "생일 축하합니다, 동무! 오늘은 작은 목표를 세우기 좋은 날입니다.", en: "Happy birthday, comrade. A good day to set a small goal.", tag: "time" },

    /* ---------- numbers ---------- */
    { m: "숫자|number|하나|둘|셋|일|이|삼|사|오|십", r: "숫자는 말의 흐름을 만듭니다. 하나, 둘, 셋부터 함께 세어 봅시다.", en: "Numbers shape speech flow. Let us count 하나, 둘, 셋 together.", tag: "number" },
    { m: "륙|six alone|독립", r: "따로 쓸 때 여섯은 륙입니다. 령에서 구까지가 Munhwao의 수입니다.", en: "Six alone is 륙. 령 through 구 are the Munhwao numerals.", tag: "number" },
    { m: "유월|6월|June", r: "유월은 두 표준 모두에서 쓰는 말입니다. 여섯 번째 달입니다.", en: "유월 is used in both standards for June, the sixth month.", tag: "number" },
    { m: "백|천|만|count|세다", r: "백과 천과 만이 모여 큰 수가 됩니다. 순서대로 익히면 됩니다.", en: "Hundreds, thousands and ten thousands make big numbers. Learn them in order.", tag: "number" },
    { m: "날짜|date|요일|월요일", r: "요일 이름도 재미있습니다. 일월부터 이십사일까지 차례로 붙습니다.", en: "Day names are fun too. Dates run from the first through the twenty fourth.", tag: "number" },

    /* ---------- shopping ----- ---------- */
    { m: "얼마|price|가격", r: "물건 값은 시장에서 물어봅니다. 몇 원입니까 반가운 대화입니다.", en: "Ask prices at the market. How many won is a friendly talk.", tag: "shop" },
    { m: "시장|market|가게", r: "시장은 언어의 살아있는 교실입니다. 채소와 물건 이름이 풍부합니다.", en: "The market is a living classroom. Vegetable and goods names abound.", tag: "shop" },
    { m: "돈|money|원|값", r: "돈은 계획 있게 씁니다. 필요한 것과 기쁜 것을 구분합시다.", en: "Spend money with a plan. Tell needs from pleasures.", tag: "shop" },
    { m: "사다|buy|구입", r: "살 때는 이름과 값을 또박또박 말합니다. 배움과 일이 함께 됩니다.", en: "State name and price clearly when buying. Learning joins daily work.", tag: "shop" },
    { m: "팔다|sell", r: "파는 이의 마음도 듣습니다. 물건 이야기에 사람 이야기가 섭니다.", en: "Listen to the seller heart too. Goods talk carries people stories.", tag: "shop" },
    { m: "싸다|비싸다|cheap|expensive", r: "싸고 좋으면 더없이 좋습니다. 값의 비교도 배움입니다.", en: "Cheap and good is best. Comparing prices is also learning.", tag: "shop" },

    /* ---------- health ---------- */
    { m: "아프|sick|몸살|열", r: "몸이 아프면 공부도 잠시 멈춥니다. 쉬면서 따뜻한 물을 드십시오.", en: "When the body hurts, pause study. Rest and drink warm water.", tag: "health" },
    { m: "건강|health|몸", r: "건강은 모든 배움의 그릇입니다. 규칙적인 생활이 약입니다.", en: "Health is the vessel of all learning. Regular life is the medicine.", tag: "health" },
    { m: "병원|hospital|의사|약국", r: "아플 때는 병원에서 진찰을 받습니다. 미루지 않는 것이 지혜입니다.", en: "When ill, see the hospital. Not delaying is wise.", tag: "health" },
    { m: "약|medicine", r: "약은 정해진 대로 꼭 맞아 먹습니다. 임의로 늘리지 맙시다.", en: "Take medicine exactly as set. Do not increase it on your own.", tag: "health" },
    { m: "운동|exercise|산책|스포츠", r: "매일 조금씩의 운동은 몸을 가볍게 합니다. 산책과 스트레칭이 좋습니다.", en: "A little daily exercise lightens the body. Walk and stretch.", tag: "health" },
    { m: "피로|스트레스|stress|지침", r: "쉼도 계획의 일부입니다. 허리를 펴고 정원의 바람을 쐬십시다.", en: "Rest is part of the plan. Stretch and feel the garden breeze.", tag: "health" },

    /* ---------- hobbies and sports ---------- */
    { m: "취미|hobby|즐거움", r: "취미는 마음의 휴식입니다. 독서와 운동이 함께 좋습니다.", en: "A hobby rests the mind. Reading and exercise together are good.", tag: "hobby" },
    { m: "축구|football|공|경기", r: "축구는 함께 뛰는 즐거움입니다. 옆 동무를 생각하며 뛰십시오.", en: "Football is the joy of running together. Run thinking of your mate.", tag: "hobby" },
    { m: "독서|book|책|읽", r: "책은 사람을 넓힙니다. 하루 열 페이지라도 읽으면 깊어집니다.", en: "Books widen a person. Ten pages a day deepens you.", tag: "hobby" },
    { m: "음악|music|피아노|바이올린", r: "음악은 감정의 언어입니다. 연주도 듣기도 모두 좋습니다.", en: "Music is the language of feeling. Playing and listening both are good.", tag: "hobby" },
    { m: "낚시|fishing|강", r: "낚시는 기다림의 지혜를 가르칩니다. 강가의 고요함이 좋습니다.", en: "Fishing teaches the wisdom of waiting. Riverside calm is fine.", tag: "hobby" },
    { m: "사진|photo|camera", r: "사진은 순간을 남기는 추억입니다. 찍고 나서 제목을 붙여 봅시다.", en: "A photo keeps a moment. After taking, give it a title.", tag: "hobby" },
    { m: "바둑|체스|chess|game", r: "바둑은 머리를 갈고 닦는 운동입니다. 두고 나서 복기하면 깊어집니다.", en: "Baduk sharpens the mind. Review games after playing.", tag: "hobby" },
    { m: "여가|leisure|놀", r: "놀이도 배움의 일부입니다. 마음껏 즐기고 일도 끌어안으십시오.", en: "Play is also learning. Enjoy fully and embrace work.", tag: "hobby" },

    /* ---------- emotions ---------- */
    { m: "기쁘|happy|기분 좋", r: "기쁨이 입에 오르면 배움도 가볍습니다. 좋은 기분 소중히 합시다.", en: "Joy on the lips lightens learning. Treasure the good mood.", tag: "mood" },
    { m: "행복|happiness|즐거운", r: "행복은 큰 것보다 작은 것에서 옵니다. 아침 한 문장의 성취도 행복입니다.", en: "Happiness comes from small things. A morning sentence success is happiness.", tag: "mood" },
    { m: "슬프|sad|울", r: "슬픔은 가라앉힐 수 있습니다. 좋은 음악과 산책을 시도해 봅시다.", en: "Sadness can be softened. Try good music and a walk.", tag: "mood" },
    { m: "화|angry|성나|짜증", r: "화가 나면 숨을 고르십시오. 마음 한 번 다스리고 다시 말합시다.", en: "When angry, steady the breath. Calm once and speak again.", tag: "mood" },
    { m: "걱정|worry|불안|두려", r: "걱정은 반을 씩 버립니다. 할 수 있는 일 하나부터 시작합시다.", en: "Worry sheds its half. Start with one doable thing.", tag: "mood" },
    { m: "외롭|lonely|쓸쓸", r: "외로울 때는 책과 이야기를 나눕니다. 저 동무 여기 함께 있습니다.", en: "When lonely, talk with a book. Your comrade is here with you.", tag: "mood" },
    { m: "사랑|love", r: "사랑은 말과 행동으로 자랍니다. 가까운 사람에게 먼저 말해 보십시오.", en: "Love grows with words and deeds. Speak first to those near you.", tag: "mood" },

    /* ---------- question words ---------- */
    { m: "무엇|뭐|what", r: "무엇을 묻는 것은 배움의 시작입니다. 사전에서 찾아 또렷하게 합시다.", en: "Asking what is the start of learning. Look it up to be precise.", tag: "question" },
    { m: "왜|why", r: "왜를 묻으면 뿌리가 보입니다. 좋은 질문이 최고의 스승입니다.", en: "Asking why shows the root. A good question is the best teacher.", tag: "question" },
    { m: "어떻게|how", r: "어떻게는 길을 묻는 것과 같습니다. 한 걸음씩 걸어 봅시다.", en: "How asks the way. Walk it one step at a time.", tag: "question" },
    { m: "언제|when", r: "언제를 정하면 시작이 옵니다. 오늘이 가장 좋은 날짜입니다.", en: "Setting when brings the start. Today is the finest date.", tag: "question" },
    { m: "어디|where", r: "어디를 알면 발이 놓입니다. 지도와 안내판을 함께 읽습니다.", en: "Knowing where settles the feet. Read maps and signs together.", tag: "question" },
    { m: "누구|who", r: "누구를 알면 대화가 열립니다. 인사말부터 가볍게 익힙시다.", en: "Knowing who opens talk. Learn greetings light first.", tag: "question" },

    /* ---------- goodbye ---------- */
    { m: "안녕히 가|안녕히 계|goodbye|잘 가", r: "안녕히 가세요, 동무! 오늘 배운 것을 기억하고 내일 다시 만납시다.", en: "Goodbye, comrade. Remember today lesson and meet again tomorrow.", tag: "bye" },
    { m: "잘 자|good night|자자", r: "잘 자십시오. 꿈에서도 단어가 스쳐 가면 좋겠습니다.", en: "Sleep well. May words pass even in dreams.", tag: "bye" },
    { m: "다음에|see you|또 봐", r: "다음에 또 봅시다. 그동안 복습을 잊지 맙시다.", en: "See you again. Do not forget review in the meantime.", tag: "bye" },
    { m: "그만 하|stop|마지막", r: "오늘 수고 많았습니다. 여기서 멈추어도 충분합니다.", en: "You worked hard today. Stopping here is enough.", tag: "bye" },

    /* ---------- work and profession ---------- */
    { m: "일|work|직업|직장", r: "일은 몸과 마음을 채웁니다. 하는 일에 자부심을 가지십시오.", en: "Work fills body and mind. Feel pride in what you do.", tag: "work" },
    { m: "교사|teacher|선생", r: "선생님은 불씨를 피우는 사람입니다. 존경하는 마음이 참입니다.", en: "A teacher kindles fire. Respect is the truth.", tag: "work" },
    { m: "학생|student", r: "학생은 미래의 주인입니다. 오늘의 공부가 내일의 활약입니다.", en: "A student is the future owner. Today study becomes tomorrow action.", tag: "work" },
    { m: "공장|factory|기술자", r: "공장에서는 기술이 자랍니다. 배운 말로 작업을 설명해 봅시다.", en: "Technology grows in factories. Describe tasks with learned words.", tag: "work" },
    { m: "농사|farmer|농민|농촌", r: "농사는 땅의 노래입니다. 수확의 계절에 기쁨이 큽니다.", en: "Farming is the land song. Harvest season joy is great.", tag: "work" },

    /* ---------- politeness and etiquette ---------- */
    { m: "예절|etiquette|모범|인사", r: "예절은 말의 옷입니다. 존대말을 쓰고 마음을 담으면 어울립니다.", en: "Etiquette clothes the speech. Honorifics with heart fit well.", tag: "etiquette" },
    { m: "존대|존칭|honorific", r: "존대말은 상대를 높이는 기쁨입니다. 동무의 존대말 연습을 칭찬합니다.", en: "Honorifics lift the other person. I praise your practice.", tag: "etiquette" },
    { m: "부탁|please|요청", r: "부탁은 낮은 소리로 정중히 합니다. 들어주는 마음도 있습니다.", en: "Make requests softly and politely. A helping heart listens.", tag: "etiquette" },
    { m: "사과|道歉|사죄", r: "사과는 용기의 말입니다. 빠를수록 마음이 가볍습니다.", en: "An apology is brave speech. The quicker, the lighter.", tag: "etiquette" }
  ],

  facts: [

    /* ---------- facts about the Munhwao standard ---------- */
    { m: "한글 낱자|낱자 이름|기윽", r: "Munhwao에서는 한글 낱자를 기윽, 디읃, 시읗이라 부릅니다. 쌍자음은 쌍기윽과 같습니다.", tag: "fact" },
    { m: "여섯|6", r: "따로 쓰는 여섯은 륙입니다. 같은 규범으로 륙십, 륙백이 붙습니다.", tag: "fact" },
    { m: "0|영|공", r: "Munhwao에서는 영 대신 령이라 합니다. 수열은 령에서 시작합니다.", tag: "fact" },
    { m: "유월 달|여섯째 달", r: "유월은 두 표준 모두에서 여섯째 달로 쓰입니다.", tag: "fact" },
    { m: "초성 리을|낱말 첫소리", r: "Munhwao는 낱말 첫머리의 ㄴ과 ㄹ 소리를 그대로 지킵니다. 려행, 로동, 력사가 그 예입니다.", tag: "fact" },
    { m: "녀자|계집|여자", r: "Munhwao에서는 녀자가 표준입니다. 남쪽의 여자는 비교표에 있습니다.", tag: "fact" },
    { m: "랭면|국수", r: "차가운 국수는 Munhwao에서 랭면입니다. 남쪽의 냉면과 대조됩니다.", tag: "fact" },
    { m: "려행|travel fact", r: "Munhwao 표기는 려행, 여행은 남쪽 표기입니다.", tag: "fact" },
    { m: "여권|passport", r: "Munhwao에서는 려권이라 합니다. 여권은 남쪽 표기입니다.", tag: "fact" },
    { m: "렬차|train fact", r: "Munhwao에서는 렬차가 표준입니다.", tag: "fact" },
    { m: "문화어|munhwao 뜻", r: "문화어는 곧 Munhwao입니다. 표준화된 우리말 규범을 뜻합니다.", tag: "fact" },
    { m: "규범|규범 해설", r: "규범은 말을 반듯이 하는 약속입니다. 이 응용은 문화어 규범을 따라 만듭니다.", tag: "fact" },
    { m: "두 표준|남북 차이", r: "남쪽과 북쪽은 같은 말을 조금 다르게 씁니다. 비교 도구가 그 차이를 가르칩니다.", tag: "fact" },
    { m: "된소리|된소리 규칙", r: "Munhwao는 된소리와 거친소리를 잘 가립니다. 두루뭉술이 없는 규범입니다.", tag: "fact" },
    { m: "받침|받침 법칙", r: "Munhwao에서는 대표 받침 법칙을 엄격히 씁니다.", tag: "fact" },
    { m: "휴전선|38선|분단", r: "두 나라는 같은 언어의 다른 규범을 씁니다. Munhwao는 북쪽 규범입니다.", tag: "fact" },
    { m: "수사|수를 세는", r: "Munhwao는 수를 두 가지로 셉니다. 일에서 구까지와 하나에서 아홉까지가 있습니다.", tag: "fact" },
    { m: "이름 자모|쌍기윽", r: "쌍자음은 쌍기윽, 쌍디읃, 쌍시읗으로 부릅니다.", tag: "fact" },
    { m: "조선글", r: "Munhwao 학습에서는 조선글도 한글의 다른 이름입니다.", tag: "fact" },
    { m: "냉면 아님", r: "냉면은 남쪽 읽기입니다. Munhwao는 랭면으로 씁니다.", tag: "fact" },

    /* ---------- facts about the course ---------- */
    { m: "몇 과|코스 수", r: "이 응용에는 140과가 20단계로 있습니다. 알파벳부터 문학까지 이어집니다.", tag: "fact" },
    { m: "그림책|읽기 도서관", r: "읽기 도서관에는 8권의 수준별 텍스트가 있습니다. 단어를 누르면 뜻이 열립니다.", tag: "fact" },
    { m: "신문|뉴스", r: "읽기 도서관에 신문 단어장 4편이 있습니다. 기사를 누르고 읽어 보십시오.", tag: "fact" },
    { m: "단어 세기|어휘 수", r: "핵심 어휘는 꾸준히 늘어납니다. 응용은 사전 항목을 대화에서 공유합니다.", tag: "fact" },
    { m: "리스닝|듣기", r: "듣기 랩은 받아쓰기와 따라 말하기로 구성됩니다.", tag: "fact" },
    { m: "말하기|발음 점수", r: "말하기 탭에서 음성 인식으로 발음을 점검할 수 있습니다.", tag: "fact" },
    { m: "필기|손글씨", r: "필기 도구에는 획순 예시가 12개 있습니다. 손가락으로 따라 그립니다.", tag: "fact" },
    { m: "사전|사전 정보", r: "사전은 500개 넘는 항목으로 늘어났습니다. 빠른 찾기와 한글 검색을 지원합니다.", tag: "fact" },
    { m: "플래시 카드|카드", r: "플래시 카드는 복습 주기로 단어를 기억시킵니다.", tag: "fact" },
    { m: "인증서|증명", r: "과업을 끝내면 인쇄용 인증서를 받습니다.", tag: "fact" },
    { m: "보관|동기화", r: "진행 상황은 기기에만 저장합니다. 동기화는 당신이 지정한 서버로만 나갑니다.", tag: "fact" }
  ],

  coach: [

    /* ---------- spelling corrections ---------- */
    { m: "여행", r: "려행으로 고칩니다. 낱말 첫머리 ㄹ은 Munhwao에서 지켜집니다.", en: "Use 려행. Munhwao keeps the initial r sound.", tag: "spelling" },
    { m: "여권", r: "려권으로 고칩니다. 여권은 남쪽 표기입니다.", en: "Use 려권. 여권 is the South form.", tag: "spelling" },
    { m: "렬차|기차", r: "렬차가 Munhwao 표준입니다. 열차는 남쪽 표기입니다.", en: "렬차 is the Munhwao form. 열차 is South.", tag: "spelling" },
    { m: "냉면|랭농", r: "랭면으로 고칩니다. 차가운 국수의 Munhwao는 랭면입니다.", en: "Use 랭면 for cold noodles in Munhwao.", tag: "spelling" },
    { m: "여자", r: "녀자가 Munhwao 표준입니다. 여자는 남쪽 표기입니다.", en: "녀자 is the Munhwao form. 여자 is South.", tag: "spelling" },
    { m: "로동 아닌|노동", r: "노동을 로동으로 고칩니다. 첫머리 ㄴ이 ㄹ로 바뀝니다.", en: "Write 로동. The initial n becomes r.", tag: "spelling" },
    { m: "북쪽 아님|남쪽 말", r: "이 단어는 남쪽 표기입니다. 사전에서 Munhwao 형태를 확인하십시오.", en: "This word is a South form. Check the Munhwao form in the dictionary.", tag: "spelling" },
    { m: "6|육", r: "따로 쓰는 육은 륙입니다. 륙, 륙십 규범을 기억하십시오.", en: "Six alone is 륙. Remember the 륙 rule.", tag: "spelling" },
    { m: "0|영|공", r: "Munhwao에서 영은 령입니다. 령은 남쪽과 다릅니다.", en: "Zero in Munhwao is 령.", tag: "spelling" },
    { m: "유월", r: "유월은 이미 Munhwao 표준 그대로입니다. 잘 썼습니다.", en: "유월 is correct Munhwao for June.", tag: "spelling" },
    { m: "컴퓨터|콤푸터", r: "Munhwao에서는 콤퓨터라고도 합니다. 남쪽 컴퓨터와 대조됩니다.", en: "Munhwao often uses 콤퓨터 for computer.", tag: "spelling" },
    { m: "오렌지|오랜지", r: "오랜지가 Munhwao 표기입니다. 오렌지는 남쪽 표기입니다.", en: "Use 오랜지 in Munhwao. 오렌지 is South.", tag: "spelling" },
    { m: "싫다 아닌|미워", r: "Munhwao는 감정 말도 규범을 따릅니다. 미워함은 미워함으로 씁니다.", en: "Munhwao follows the norm for feeling words too.", tag: "spelling" },

    /* ---------- grammar and endings ---------- */
    { m: "습니다|습니다 체", r: "존대 종결은 습니다, 습니까가 반듯합니다. 잘 쓰셨습니다.", en: "The 습니다 ending is correct polite Munhwao.", tag: "grammar" },
    { m: "은는|이/가", r: "주격 조사 이와 가는 명사의 끝소리에 맞춥니다. 짧은 문장으로 연습합시다.", en: "Match particles to the final sound of the noun.", tag: "grammar" },
    { m: "글을|글은|목적어", r: "목적어에는 을과 를이 붙습니다. 앞말의 받침으로 고릅니다.", en: "Use 을 or 를 for the object according to the final.", tag: "grammar" },
    { m: "잖니|않니", r: "부정은 아니와 않니류로 만듭니다. 규범에 있는 형태를 쓰십시오.", en: "Use declined negative forms per the norm.", tag: "grammar" },
    { m: "려고|하려", r: "하려고와 려고는 의도를 나타냅니다. 동사 끝에 맞춰 씁니다.", en: "Use 려고 for intention, matched to the verb.", tag: "grammar" },
    { m: "때|시간 절", r: "때 표현은 명사 뒤에 붙입니다. 문장이 늘면 짧게 끊읍시다.", en: "Time phrases follow the noun. Cut long sentences short.", tag: "grammar" },
    { m: "그리고|그래서|그러나", r: "접속사로 문장을 잇습니다. 그리고 더하고, 그래서 결과를, 그러나 반대를.", en: "Join sentences with 그리고, 그래서 and 그러나.", tag: "grammar" },
    { m: "왜냐하면|이유", r: "이유는 왜냐하면을 쓰고 까닭을 이어 말합니다.", en: "Give reasons with 왜냐하면.", tag: "grammar" },
    { m: "동사 어미|어간", r: "동사는 어간에 어미가 붙습니다. 습니다 앞에서 소리가 변할 수 있습니다.", en: "Verbs join endings to the stem. Sounds may shift before 습니다.", tag: "grammar" },
    { m: "형용사|어찌씨", r: "형용도 동사처럼 어미를 취합니다. 좋습니다가 반듯한 형태입니다.", en: "Adjectives take endings like verbs. 좋습니다 is correct.", tag: "grammar" },

    /* ---------- style and flow ---------- */
    { m: "문장이 짧|짧은 문장|단문", r: "짧은 문장이 읽기 좋습니다. 한 생각 한 문장으로 시작합시다.", en: "Short sentences read well. One thought, one sentence.", tag: "style" },
    { m: "긴 문장|장문", r: "긴 문장은 쉼표로 끊고 다시 이읍시다. 숨쉴 곳이 있어야 합니다.", en: "Cut long sentences with commas. Leave room to breathe.", tag: "style" },
    { m: "반말|낮춤", r: "반말은 아주 가까운 사이에만 씁니다. 존대가 무난합니다.", en: "Plain speech is only for the closest. Honorifics are safer.", tag: "style" },
    { m: "중복|같은 단어 반복", r: "같은 단어가 반복되면 다른 말로 바꾸어 봅시다. 사전에서 골라 씁니다.", en: "Replace repeated words with alternatives from the dictionary.", tag: "style" },
    { m: "숫자 표기", r: "글 속에서 숫자는 낱말로 풀어 쓰는 것이 Munhwao 습관입니다.", en: "Write numbers as words in Munhwao prose.", tag: "style" },
    { m: "주어 생략", r: "짧은 문장에서는 주어가 드러나는 편이 명확합니다.", en: "In short sentences a clear subject reads better.", tag: "style" },
    { m: "영어 단어|외래어", r: "외래어는 Munhwao 표기로 옮깁니다. 오랜지와 콤퓨터처럼 정해진 형태를 씁니다.", en: "Loanwords take Munhwao spellings such as 오랜지 and 콤퓨터.", tag: "style" },
    { m: "쉼표|마침표", r: "쉼표와 마침표로 흐름을 나눕니다. 덤벙쓰지 않은 글이 좋습니다.", en: "Use commas and full stops to pace the flow.", tag: "style" },
    { m: "못이 없는 글|완성", r: "글 전체가 반듯합니다. 좋은 문장을 되새기십시오.", en: "The piece reads cleanly through. Savour the good prose.", tag: "style" }
  ],

  fallbacks: {
    partner: [
      { r: "알겠습니다. 계속 말씀해 주십시오.", en: "Understood. Please keep talking." },
      { r: "그것을 사전에서 찾아보겠습니다. 문장으로 다시 써 보십시오.", en: "I will search the dictionary. Put it in a sentence again." },
      { r: "재미있는 이야기입니다. 그 단어로 새 문장을 지어 봅시다.", en: "That is interesting. Let us make a new sentence with that word." },
      { r: "저도 동무의 말을 곱씹고 있습니다. 조금 더 들려 주십시오.", en: "I am considering your words. Tell me a little more." },
      { r: "좋은 주제입니다. 우리의 학습 영역에 맞추어 봅시다.", en: "A good topic. Let us keep to our learning area." },
      { r: "무엇이든 물어 보십시오. 오프라인 지식 창고가 전부 대답합니다.", en: "Ask anything. The offline knowledge base answers it all." }
    ],
    coach: [
      { r: "문장이 잘 정돈되어 있습니다. 더 길게 이어 보고 싶습니다.", en: "The sentence is well ordered. I would like to see it grow." },
      { r: "한 가지 정리를 더 남깁니다. 문장 끝의 어미를 존대로 통일하십시오.", en: "One more note: keep the ending honorific consistently." },
      { r: "배경이 더 있으면 좋겠습니다. 언제, 어디, 누구와를 한 가지 넣어 보십시오.", en: "Add some context: when, where or with whom.", },
      { r: "이 정도면 흐름이 무난합니다. 다음 문장도 이어서 지어 봅시다.", en: "The flow is fine. Continue to the next sentence." }
    ]
  }
};