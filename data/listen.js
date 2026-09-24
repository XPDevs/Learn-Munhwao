/* =====================================================================
   LISTENING COMPREHENSION COURSES  (Munhwao Mastery)
   Structured courses from A1 to C2. Each lesson is a short spoken text
   with per-line tape scripts, a comprehension quiz and key vocabulary.
   Play the tape, then answer the questions. Dictation lines are paired
   into the listening lab so every course lesson can also be drilled.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.LISTEN_COURSES = [
  /* ---------------- A1 ---------------- */
  { level: "A1", title: "Hello and family", id: "l1a1", script: [
    { ko: "안녕하십니까?", en: "Hello." },
    { ko: "저는 리명수입니다.", en: "I am Ri Myong-su." },
    { ko: "우리 집은 평양에 있습니다.", en: "Our home is in Pyongyang." },
    { ko: "아버지, 어머니, 누나가 있습니다.", en: "There is father, mother and an older sister." },
    { ko: "우리는 함께 삽니다.", en: "We live together." }
  ], q: [
    { q: "What is the speaker's name?", opts: ["Ri Myong-su", "Kim Jong-nim", "Pak Chol-min"], a: 0 },
    { q: "Where is the home?", opts: ["Pyongyang", "Hamhung", "Nampo"], a: 0 },
    { q: "Who is in the family besides the parents?", opts: ["An older sister", "A younger brother", "A grandfather"], a: 0 }
  ]},
  { level: "A1", title: "My school day", id: "l2a1", script: [
    { ko: "매일 아침 일곱 시에 일어납니다.", en: "I get up at seven every morning." },
    { ko: "학교에 여덟 시에 갑니다.", en: "I go to school at eight." },
    { ko: "교실에는 친구들이 있습니다.", en: "There are friends in the classroom." },
    { ko: "선생님께서 글을 가르치십니다.", en: "The teacher teaches reading and writing." },
    { ko: "오후에는 집에서 숙제를 합니다.", en: "In the afternoon I do homework at home." }
  ], q: [
    { q: "When does the speaker get up?", opts: ["At seven", "At eight", "At six"], a: 0 },
    { q: "Where are the friends?", opts: ["In the classroom", "In the park", "In the shop"], a: 0 },
    { q: "What is done in the afternoon?", opts: ["Homework at home", "Shopping", "Meetings"], a: 0 }
  ]},
  { level: "A1", title: "The market", id: "l3a1", script: [
    { ko: "우리는 일요일에 시장에 갑니다.", en: "We go to the market on Sunday." },
    { ko: "시장에는 채소가 많습니다.", en: "There is a lot of vegetables in the market." },
    { ko: "사과와 수박을 삽니다.", en: "We buy apples and a watermelon." },
    { ko: "값이 참 쌉니다.", en: "The prices are really low." },
    { ko: "저녁에는 반찬을 만듭니다.", en: "In the evening we make side dishes." }
  ], q: [
    { q: "When do they go to the market?", opts: ["On Sunday", "On Monday", "On Friday"], a: 0 },
    { q: "What do they buy?", opts: ["Apples and a watermelon", "Clothes and shoes", "Books"], a: 0 },
    { q: "How are the prices?", opts: ["Really low", "Very high", "Unknown"], a: 0 }
  ]},
  { level: "A1", title: "The weather today", id: "l4a1", script: [
    { ko: "오늘 날씨는 좋습니다.", en: "The weather is good today." },
    { ko: "하늘이 맑습니다.", en: "The sky is clear." },
    { ko: "해가 밝게 납니다.", en: "The sun shines brightly." },
    { ko: "우리는 공원에 나갑니다.", en: "We go out to the park." },
    { ko: "산책을 하며 이야기합니다.", en: "We take a walk and talk." }
  ], q: [
    { q: "How is the weather today?", opts: ["Good", "Stormy", "Cold"], a: 0 },
    { q: "What is the sky like?", opts: ["Clear", "Grey", "Dark"], a: 0 },
    { q: "Where do they go?", opts: ["To the park", "To the market", "To the factory"], a: 0 }
  ]},
  { level: "A1", title: "Counting things", id: "l5a1", script: [
    { ko: "책상 위에 책이 있습니다.", en: "There is a book on the desk." },
    { ko: "연필이 세 자루 있습니다.", en: "There are three pencils." },
    { ko: "공책이 두 권 있습니다.", en: "There are two notebooks." },
    { ko: "그림이 한 점 있습니다.", en: "There is one picture." },
    { ko: "수를 세는 것은 쉽습니다.", en: "Counting is easy." }
  ], q: [
    { q: "How many pencils are there?", opts: ["Three", "Two", "One"], a: 0 },
    { q: "How many pictures are there?", opts: ["One", "Five", "Four"], a: 0 },
    { q: "What is on the desk?", opts: ["A book", "A phone", "A cup"], a: 0 }
  ]},
  { level: "A1", title: "Evening at home", id: "l6a1", script: [
    { ko: "저녁이 되면 우리는 집에 모입니다.", en: "In the evening we gather at home." },
    { ko: "밥을 함께 먹습니다.", en: "We eat rice together." },
    { ko: "그리고 이야기를 나눕니다.", en: "And we share stories." },
    { ko: "아버지께서 웃으십니다.", en: "Father laughs." },
    { ko: "우리 집은 따뜻합니다.", en: "Our home is warm." }
  ], q: [
    { q: "When does the family gather?", opts: ["In the evening", "In the morning", "At noon"], a: 0 },
    { q: "What do they do together?", opts: ["Eat and share stories", "Work and clean", "Sleep"], a: 0 },
    { q: "Who laughs?", opts: ["Father", "A stranger", "Nobody"], a: 0 }
  ]},

  /* ---------------- A2 ---------------- */
  { level: "A2", title: "A day trip", id: "l1a2", script: [
    { ko: "지난주에 우리는 산에 갔습니다.", en: "Last week we went to the mountain." },
    { ko: "아침 일찍 출발했습니다.", en: "We set off early in the morning." },
    { ko: "길에서 꽃을 보았습니다.", en: "We saw flowers on the way." },
    { ko: "점심에는 김밥을 먹었습니다.", en: "For lunch we ate kimbap." },
    { ko: "저녁에 피곤하게 돌아왔습니다.", en: "We returned tired in the evening." }
  ], q: [
    { q: "Where did they go last week?", opts: ["To the mountain", "To the sea", "To the city centre"], a: 0 },
    { q: "What did they see on the way?", opts: ["Flowers", "Deer", "Snow"], a: 0 },
    { q: "What did they eat for lunch?", opts: ["Kimbap", "Noodles", "Soup"], a: 0 }
  ]},
  { level: "A2", title: "At the hospital", id: "l2a2", script: [
    { ko: "동무가 아파서 병원에 갔습니다.", en: "My friend was ill, so we went to the hospital." },
    { ko: "의사 선생님께서 진찰하셨습니다.", en: "The doctor examined him." },
    { ko: "약을 타서 집으로 왔습니다.", en: "We got medicine and came home." },
    { ko: "이틀 후에 많이 좋아졌습니다.", en: "Two days later he got much better." },
    { ko: "건강이 제일 중요합니다.", en: "Health is the most important thing." }
  ], q: [
    { q: "Why did they go to the hospital?", opts: ["A friend was ill", "To buy food", "To visit"], a: 0 },
    { q: "Who examined the friend?", opts: ["The doctor", "The teacher", "The guard"], a: 0 },
    { q: "When did he get better?", opts: ["Two days later", "Two weeks later", "The same hour"], a: 0 }
  ]},
  { level: "A2", title: "Making kimchi", id: "l3a2", script: [
    { ko: "겨울이 오기 전에 김치를 담급니다.", en: "Before winter we make kimchi." },
    { ko: "배추를 소금에 절입니다.", en: "We salt the cabbages." },
    { ko: "고추와 마늘을 넣습니다.", en: "We put in chili and garlic." },
    { ko: "이웃들이 서로 도와줍니다.", en: "The neighbours help one another." },
    { ko: "겨울 내내 김치를 먹습니다.", en: "We eat kimchi all winter." }
  ], q: [
    { q: "When do they make kimchi?", opts: ["Before winter", "In summer", "After spring"], a: 0 },
    { q: "What is put into the kimchi?", opts: ["Chili and garlic", "Sugar and salt only", "Rice"], a: 0 },
    { q: "Who helps one another?", opts: ["The neighbours", "The visitors", "No one"], a: 0 }
  ]},
  { level: "A2", title: "The metro journey", id: "l4a2", script: [
    { ko: "지하철역 앞에서 만나기로 했습니다.", en: "We agreed to meet in front of the metro station." },
    { ko: "역은 참 넓습니다.", en: "The station is very wide." },
    { ko: "에스컬레이터를 타고 내려갑니다.", en: "We go down on the escalator." },
    { ko: "전차가 잠시 후에 옵니다.", en: "The train comes after a moment." },
    { ko: "우리는 택시 대신 지하철을 탔습니다.", en: "We took the metro instead of a taxi." }
  ], q: [
    { q: "Where did they agree to meet?", opts: ["In front of the metro station", "At the market", "By the river"], a: 0 },
    { q: "How do they go down?", opts: ["On the escalator", "By lift", "By stairs only"], a: 0 },
    { q: "What did they take instead of a taxi?", opts: ["The metro", "A bus", "A boat"], a: 0 }
  ]},
  { level: "A2", title: "Reading a letter", id: "l5a2", script: [
    { ko: "어제 시골에서 편지가 왔습니다.", en: "A letter came from the countryside yesterday." },
    { ko: "할머니께서 쓰셨습니다.", en: "Grandmother wrote it." },
    { ko: "편지에는 봄소식이 있었습니다.", en: "The letter carried the news of spring." },
    { ko: "꽃이 폈다고 적으셨습니다.", en: "She wrote that the flowers had bloomed." },
    { ko: "주말에 꼭 가겠습니다.", en: "I will surely go on the weekend." }
  ], q: [
    { q: "Who wrote the letter?", opts: ["Grandmother", "A colleague", "A cousin"], a: 0 },
    { q: "What news was in the letter?", opts: ["The news of spring", "The news of work", "The news of travel"], a: 0 },
    { q: "When will the speaker go?", opts: ["On the weekend", "Next year", "Never"], a: 0 }
  ]},
  { level: "A2", title: "At the shop", id: "l6a2", script: [
    { ko: "옷가게에 들어갔습니다.", en: "We went into the clothes shop." },
    { ko: "점원이 친절했습니다.", en: "The shop assistant was kind." },
    { ko: "색을 이것저것 보여줬습니다.", en: "She showed us different colours." },
    { ko: "한 벌을 골랐습니다.", en: "We chose one garment." },
    { ko: "값이 적당했습니다.", en: "The price was reasonable." }
  ], q: [
    { q: "What shop did they enter?", opts: ["A clothes shop", "A book shop", "A food shop"], a: 0 },
    { q: "Who showed the colours?", opts: ["The shop assistant", "A friend", "The owner's child"], a: 0 },
    { q: "How was the price?", opts: ["Reasonable", "Too high", "Free"], a: 0 }
  ]},

  /* ---------------- B1 ---------------- */
  { level: "B1", title: "News about the harvest", id: "l1b1", script: [
    { ko: "올해 농사가 예년보다 좋습니다.", en: "This year the harvest is better than usual." },
    { ko: "협동농장들에서 벼가 무르익었습니다.", en: "In the cooperative farms the rice has ripened." },
    { ko: "수확 기계와 사람들이 함께 일합니다.", en: "Harvest machines and people work together." },
    { ko: "탈곡한 곡식은 창고로 실어 갑니다.", en: "The threshed grain is carried to the storehouse." },
    { ko: "농민들은 자랑스럽게 웃습니다.", en: "The farmers smile with pride." }
  ], q: [
    { q: "How is the harvest this year?", opts: ["Better than usual", "Worse than usual", "The same"], a: 0 },
    { q: "Where is the grain carried?", opts: ["To the storehouse", "To the market", "To the coast"], a: 0 },
    { q: "What do the farmers do?", opts: ["Smile with pride", "Move to the city", "Stop working"], a: 0 }
  ]},
  { level: "B1", title: "The reading hall", id: "l2b1", script: [
    { ko: "저녁마다 도서관의 열람실에 갑니다.", en: "Every evening I go to the reading hall of the library." },
    { ko: "거기에는 조용한 자리가 많습니다.", en: "There are many quiet seats there." },
    { ko: "과학 잡지와 신문을 봅니다.", en: "I look at science magazines and newspapers." },
    { ko: "메모를 하며 읽는 것이 습관입니다.", en: "Reading while taking notes is my habit." },
    { ko: "시간이 참 빠르게 갑니다.", en: "Time really passes quickly." }
  ], q: [
    { q: "Where does the speaker go every evening?", opts: ["To the reading hall", "To the cinema", "To the stadium"], a: 0 },
    { q: "What is the reading habit?", opts: ["Taking notes while reading", "Reading aloud", "Reading only before meals"], a: 0 },
    { q: "How does time pass there?", opts: ["Quickly", "Very slowly", "It stops"], a: 0 }
  ]},
  { level: "B1", title: "A lecture on history", id: "l3b1", script: [
    { ko: "오늘 강연은 우리 력사에 관한 것입니다.", en: "Today's lecture is about our history." },
    { ko: "강사는 옛 개성의 도시를 설명했습니다.", en: "The speaker explained the old city of Kaesong." },
    { ko: "도시는 여러 번 발전의 계단을 밟았습니다.", en: "The city climbed the stairs of development many times." },
    { ko: "청중들은 질문을 많이 했습니다.", en: "The audience asked many questions." },
    { ko: "강연이 끝난 뒤에도 토론이 이어졌습니다.", en: "Even after the lecture, the discussion continued." }
  ], q: [
    { q: "What is the lecture about?", opts: ["Our history", "Modern machinery", "Foreign music"], a: 0 },
    { q: "Which old city was explained?", opts: ["Kaesong", "Wonsan", "Chongjin"], a: 0 },
    { q: "What happened after the lecture?", opts: ["The discussion continued", "Everyone left at once", "The hall was empty"], a: 0 }
  ]},
  { level: "B1", title: "Preparing the reports", id: "l4b1", script: [
    { ko: "분기 보고는 내일까지 끝내야 합니다.", en: "The quarterly report must be finished by tomorrow." },
    { ko: "자료를 모으고 수치를 확인했습니다.", en: "I gathered the material and checked the figures." },
    { ko: "동무들과 함께 초안을 보았습니다.", en: "I reviewed the draft with my workmates." },
    { ko: "몇 가지를 고쳤습니다.", en: "We corrected several points." },
    { ko: "이제 결론만 쓰면 됩니다.", en: "Now I only have to write the conclusion." }
  ], q: [
    { q: "When must the report be finished?", opts: ["By tomorrow", "Next month", "In the spring"], a: 0 },
    { q: "What is checked with the figures?", opts: ["The draft with workmates", "The weather", "The menu"], a: 0 },
    { q: "What remains to be written?", opts: ["The conclusion", "The cover", "The index"], a: 0 }
  ]},
  { level: "B1", title: "The evening class", id: "l5b1", script: [
    { ko: "직장에는 저녁 배움의 모임이 있습니다.", en: "The workplace has an evening study circle." },
    { ko: "우리는 새 기술을 함께 익힙니다.", en: "We learn new techniques together." },
    { ko: "한 분이 발표하면 다른 분들이 물어봅니다.", en: "One person presents, and the others ask questions." },
    { ko: "모르는 것은 다음 모임에서 다시 풉니다.", en: "What is unknown is solved again at the next meeting." },
    { ko: "모두가 시간을 아낍니다.", en: "Everyone treasures the time." }
  ], q: [
    { q: "What is learned in the circle?", opts: ["New techniques", "Old songs", "Cooking"], a: 0 },
    { q: "How do the meetings work?", opts: ["One presents, others ask", "Everyone reads alone", "No one talks"], a: 0 },
    { q: "When are unsolved things addressed?", opts: ["At the next meeting", "Never", "By post"], a: 0 }
  ]},
  { level: "B1", title: "Autumn in the capital", id: "l6b1", script: [
    { ko: "가을의 평양은 온통 금빛입니다.", en: "Autumn in Pyongyang is all gold." },
    { ko: "은행나무 잎이 노랗게 물듭니다.", en: "The ginkgo leaves turn yellow." },
    { ko: "길에는 시민들이 산책합니다.", en: "Citizens stroll on the streets." },
    { ko: "청소년 학생들이 시를 읽기도 합니다.", en: "Young students sometimes read poetry." },
    { ko: "이 계절에는 마음이 기쁩니다.", en: "In this season the heart is joyful." }
  ], q: [
    { q: "What is autumn in Pyongyang like?", opts: ["All gold", "All grey", "All dark"], a: 0 },
    { q: "What turns yellow?", opts: ["The ginkgo leaves", "The rivers", "The roofs"], a: 0 },
    { q: "What do young students sometimes do?", opts: ["Read poetry", "Cut trees", "Close the halls"], a: 0 }
  ]},

  /* ---------------- B2 ---------------- */
  { level: "B2", title: "The economic report", id: "l1b2", script: [
    { ko: "올해 경공업 생산이 크게 늘었습니다.", en: "Light industry production grew greatly this year." },
    { ko: "여러 공장이 새 제품을 내놓았습니다.", en: "Several factories put out new products." },
    { ko: "품질은 소비자들의 신뢰를 받고 있습니다.", en: "Quality is winning the consumers' trust." },
    { ko: "원료를 아끼는 방법도 널리 쓰입니다.", en: "Methods that save raw material are also widely used." },
    { ko: "보고는 다음 분기에도 이어질 것입니다.", en: "The report will continue into the next quarter." }
  ], q: [
    { q: "What grew greatly this year?", opts: ["Light industry production", "Imports", "Empty buildings"], a: 0 },
    { q: "What are the new products winning?", opts: ["The consumers' trust", "Foreign prizes", "Ancient records"], a: 0 },
    { q: "What else is widely used?", opts: ["Methods that save raw material", "Old machines only", "Imported fuel"], a: 0 }
  ]},
  { level: "B2", title: "The writer's visit", id: "l2b2", script: [
    { ko: "글쓰기 모임에 문학가가 초대되었습니다.", en: "A writer was invited to the writing circle." },
    { ko: "그분은 소설의 탄생 과정을 이야기했습니다.", en: "She talked about the birth of a novel." },
    { ko: "구상부터 퇴고까지의 긴 길을 설명했습니다.", en: "She explained the long road from conception to revision." },
    { ko: "초보자들은 기초 물음도 주저 없이 했습니다.", en: "The beginners also asked basic questions without hesitation." },
    { ko: "그 자리에서 여러 원고가 탄생했는지도 모릅니다.", en: "Who knows, perhaps several drafts were born in that room." }
  ], q: [
    { q: "Who was invited to the circle?", opts: ["A writer", "A pilot", "A chef"], a: 0 },
    { q: "What was explained?", opts: ["The birth of a novel", "The art of cooking", "The rules of sport"], a: 0 },
    { q: "What did the beginners do?", opts: ["Asked basic questions", "Left early", "Sang songs"], a: 0 }
  ]},
  { level: "B2", title: "Weather and the farm plan", id: "l3b2", script: [
    { ko: "기상대의 예보는 농사 계획의 기준입니다.", en: "The weather bureau's forecast is the basis of the farm plan." },
    { ko: "올봄 강수량은 평년과 비슷합니다.", en: "This spring's rainfall is similar to an average year." },
    { ko: "그래서 모내기를 제때 시작할 수 있습니다.", en: "So we can begin transplanting the rice on time." },
    { ko: "폭염이 오면 관개 시설을 점검합니다.", en: "If a heat wave comes, we check the irrigation facilities." },
    { ko: "농민들은 예보를 매일 아침 듣습니다.", en: "The farmers listen to the forecast every morning." }
  ], q: [
    { q: "What is the basis of the farm plan?", opts: ["The weather forecast", "The stock exchange", "The traffic report"], a: 0 },
    { q: "How is this spring's rainfall?", opts: ["Similar to an average year", "The highest ever", "Zero"], a: 0 },
    { q: "What is checked if a heat wave comes?", opts: ["The irrigation facilities", "The kitchens", "The theatres"], a: 0 }
  ]},
  { level: "B2", title: "Culture in the evening", id: "l4b2", script: [
    { ko: "저녁이면 문화 회관에서 공연이 있습니다.", en: "In the evening there are performances at the culture hall." },
    { ko: "이번 주에는 전통 무용이 상연됩니다.", en: "This week a traditional dance is staged." },
    { ko: "배우들은 여러 개월 연습했습니다.", en: "The performers practised for many months." },
    { ko: "표는 일찍 팔렸습니다.", en: "The tickets sold out early." },
    { ko: "예술은 우리 생활에 활기를 줍니다.", en: "Art gives our life vitality." }
  ], q: [
    { q: "What is staged this week?", opts: ["A traditional dance", "An opera about the sea", "A magic show"], a: 0 },
    { q: "How long did the performers practise?", opts: ["For many months", "For one morning", "Since yesterday"], a: 0 },
    { q: "What happened to the tickets?", opts: ["They sold out early", "They were free", "They were cancelled"], a: 0 }
  ]},
  { level: "B2", title: "The science round table", id: "l5b2", script: [
    { ko: "연구소에서 과학 좌담회가 열렸습니다.", en: "A science round table was held at the institute." },
    { ko: "국의 물음에서 출발했습니다.", en: "It began with a question of ultrasonics." },
    { ko: "각 부문의 연구자들이 의견을 냈습니다.", en: "Researchers from each sector gave their views." },
    { ko: "새 실험을 제안하는 소리가 있었습니다.", en: "Some voices proposed new experiments." },
    { ko: "다음 좌담회에서는 결과를 검토하기로 했습니다.", en: "At the next round table they will review the results." }
  ], q: [
    { q: "Where was the round table held?", opts: ["At the institute", "In the park", "At the station"], a: 0 },
    { q: "What was its starting question?", opts: ["A question of ultrasonics", "A question of cooking", "A question of traffic"], a: 0 },
    { q: "What will happen next time?", opts: ["Review the results", "Close the institute", "Cancel the research"], a: 0 }
  ]},
  { level: "B2", title: "The old neighbourhood", id: "l6b2", script: [
    { ko: "옛 거주지는 재개발되었지만 이름이 남았습니다.", en: "The old quarter was rebuilt, but its name remains." },
    { ko: "어른들은 옛 골목의 기억을 이야기합니다.", en: "The elders tell the memories of the old alley." },
    { ko: "지금 그 자리는 새 아파트가 섰습니다.", en: "New apartments now stand in that place." },
    { ko: "사람들은 여전히 이웃과 인사합니다.", en: "People still greet their neighbours." },
    { ko: "도시는 변해도 마음의 지도는 변하지 않습니다.", en: "Even when the city changes, the map of the heart does not." }
  ], q: [
    { q: "What happened to the old quarter?", opts: ["It was rebuilt", "It was flooded", "It became a forest"], a: 0 },
    { q: "What do the elders tell?", opts: ["Memories of the old alley", "Future plans", "Foreign tales"], a: 0 },
    { q: "What do people still do?", opts: ["Greet their neighbours", "Abandon the city", "Forget the names"], a: 0 }
  ]},

  /* ---------------- C1 ---------------- */
  { level: "C1", title: "The debate on innovation", id: "l1c1", script: [
    { ko: "오늘 토론의 주제는 기술혁신의 방향입니다.", en: "Today's debate topic is the direction of technical innovation." },
    { ko: "한 견해는 생산성을 최우선으로 합니다.", en: "One view puts productivity first." },
    { ko: "다른 견해는 노동 조건의 개선을 내세웁니다.", en: "Another view upholds the improvement of working conditions." },
    { ko: "의장은 두 입장을 조화할 방안을 물었습니다.", en: "The chair asked how the two positions could be reconciled." },
    { ko: "토론은 결론 없이 다음 모임에 넘어갔습니다.", en: "The debate passed without conclusion to the next meeting." }
  ], q: [
    { q: "What is the topic of today's debate?", opts: ["The direction of technical innovation", "The price of grain", "The schedule of holidays"], a: 0 },
    { q: "What does the second view uphold?", opts: ["Better working conditions", "Higher taxes", "Fewer meetings"], a: 0 },
    { q: "How did the debate end?", opts: ["Passed to the next meeting", "With a final vote", "With total agreement"], a: 0 }
  ]},
  { level: "C1", title: "Interview about the city plan", id: "l2c1", script: [
    { ko: "기자: 도시 계획의 원칙을 말씀해 주십시오.", en: "Reporter: Please tell us the principle of city planning." },
    { ko: "설계자: 사람의 생활 편리를 먼저 생각합니다.", en: "Designer: We first consider the convenience of people's lives." },
    { ko: "기자: 녹지 공간은 어떤 역할을 합니까?", en: "Reporter: What role does green space play?" },
    { ko: "설계자: 그것은 공기의 정화와 휴식의 자리입니다.", en: "Designer: It purifies the air and offers a place of rest." },
    { ko: "기자: 미래의 평양은 어떤 모습입니까?", en: "Reporter: What will future Pyongyang look like?" },
    { ko: "설계자: 기술과 자연이 어울린 산 도시입니다.", en: "Designer: A mountain city where technology and nature blend." }
  ], q: [
    { q: "What does the designer put first?", opts: ["The convenience of people's lives", "The height of buildings", "The speed of construction"], a: 0 },
    { q: "What role does green space have?", opts: ["Purifying the air and rest", "Hiding the roads", "Storing materials"], a: 0 },
    { q: "How is future Pyongyang described?", opts: ["A city where technology and nature blend", "A wholly concrete city", "A city without parks"], a: 0 }
  ]},
  { level: "C1", title: "Reflection after a film", id: "l3c1", script: [
    { ko: "어제 본 영화는 오래 생각하게 했습니다.", en: "The film I saw yesterday made me think for a long time." },
    { ko: "주인공은 어려운 선택 앞에 섰습니다.", en: "The hero stood before a difficult choice." },
    { ko: "그의 행동은 옳았는지 나는 확신하지 못합니다.", en: "Whether his action was right, I cannot be sure." },
    { ko: "작품은 해답을 주지 않고 물음만 남깁니다.", en: "The work gives no answers, only questions." },
    { ko: "그래서 좋은 영화는 다시 보고 싶어집니다.", en: "That is why a good film makes you want to see it again." }
  ], q: [
    { q: "What did the film make the speaker do?", opts: ["Think for a long time", "Cancel a trip", "Buy a ticket again"], a: 0 },
    { q: "What did the hero face?", opts: ["A difficult choice", "A simple road", "An empty room"], a: 0 },
    { q: "What does a good work leave behind?", opts: ["Questions, not answers", "Clear conclusions", "Long credits"], a: 0 }
  ]},
  { level: "C1", title: "The lecture on nutrition", id: "l4c1", script: [
    { ko: "영양학 강연은 식사의 균형을 강조했습니다.", en: "The nutrition lecture emphasised a balanced diet." },
    { ko: "곡물과 채소, 단백질의 배합이 중요합니다.", en: "The combination of grain, vegetables and protein is important." },
    { ko: "강사는 과식의 해로움을 지적했습니다.", en: "The lecturer pointed out the harm of overeating." },
    { ko: "규칙적인 운동이 식사와 대등하다고 했습니다.", en: "He said regular exercise equals eating well." },
    { ko: "청중들은 생활 습관을 바꾸려는 결심을 했습니다.", en: "The audience resolved to change their habits." }
  ], q: [
    { q: "What did the lecture emphasise?", opts: ["A balanced diet", "Rare fruits", "Fast food"], a: 0 },
    { q: "What is equal to eating well?", opts: ["Regular exercise", "Long sleep", "Hot baths"], a: 0 },
    { q: "What did the audience resolve to do?", opts: ["Change their habits", "Buy more food", "Skip breakfast"], a: 0 }
  ]},
  { level: "C1", title: "The riverside walk", id: "l5c1", script: [
    { ko: "대동강가를 따라 여름 저녁에 걷습니다.", en: "I walk along the Taedong River on summer evenings." },
    { ko: "물빛은 저녁노을로 물들어 있습니다.", en: "The water is tinted with the evening glow." },
    { ko: "낚시하는 어르신들과 이야기합니다.", en: "I talk with the elders who fish." },
    { ko: "그분들은 강의 옛이야기를 들려줍니다.", en: "They tell old stories of the river." },
    { ko: "도시의 마음은 강가에 모인다는 생각이 듭니다.", en: "I think the city's heart gathers by the riverside." }
  ], q: [
    { q: "When does the speaker walk along the river?", opts: ["On summer evenings", "On winter mornings", "At noon"], a: 0 },
    { q: "With whom does the speaker talk?", opts: ["Elders who fish", "Sailors", "Shopkeepers"], a: 0 },
    { q: "What do they tell?", opts: ["Old stories of the river", "New recipes", "Travel plans abroad"], a: 0 }
  ]},
  { level: "C1", title: "Examining the manuscript", id: "l6c1", script: [
    { ko: "편집자에게 원고가 도착했습니다.", en: "A manuscript arrived at the editor." },
    { ko: "첫 매력은 언어의 맛이었습니다.", en: "Its first charm was the taste of the language." },
    { ko: "그러나 구조에는 약점이 있었습니다.", en: "Yet there was a weakness in the structure." },
    { ko: "편집자는 결말의 처리를 제안했습니다.", en: "The editor suggested how to handle the ending." },
    { ko: "작가는 이를 고맙게 받아들였습니다.", en: "The author accepted it gratefully." },
    { ko: "이렇게 좋은 글이 조금씩 다듬어집니다.", en: "In this way good writing is slowly polished." }
  ], q: [
    { q: "What was the manuscript's first charm?", opts: ["The taste of the language", "The cover design", "The title"], a: 0 },
    { q: "Where was the weakness?", opts: ["In the structure", "In the fonts", "In the print"], a: 0 },
    { q: "How did the author accept the suggestion?", opts: ["Gratefully", "Angrily", "Silently"], a: 0 }
  ]},

  /* ---------------- C2 ---------------- */
  { level: "C2", title: "The philosophy lecture", id: "l1c2", script: [
    { ko: "강연은 자와 모순의 개념에서 시작했습니다.", en: "The lecture began with the concepts of measure and contradiction." },
    { ko: "양의 축적이 질의 변화로 넘어간다고 했습니다.", en: "It said an accumulation of quantity passes into a change of quality." },
    { ko: "예를 들어 물은 일백 도에서 상태를 바꿉니다.", en: "Water, for example, changes state at a hundred degrees." },
    { ko: "청중은 수식보다 비유를 더 잘 이해했습니다.", en: "The audience understood the metaphors better than the formulas." },
    { ko: "강연 후에는 다시 독서의 필요를 느꼈습니다.", en: "After the lecture I felt the need for reading again." }
  ], q: [
    { q: "Where did the lecture begin?", opts: ["With measure and contradiction", "With grammar", "With the weather"], a: 0 },
    { q: "What happens at a hundred degrees?", opts: ["Water changes state", "The lecture ends", "The lamp goes out"], a: 0 },
    { q: "What did the audience understand better?", opts: ["The metaphors", "The formulas", "The diagrams"], a: 0 }
  ]},
  { level: "C2", title: "The national orchestra", id: "l2c2", script: [
    { ko: "국립 교향악단의 연주회가 있었습니다.", en: "The national symphony orchestra gave a concert." },
    { ko: "연주는 규범을 지키면서 감동을 더했습니다.", en: "The performance kept the standard while adding feeling." },
    { ko: "특히 피아노 협주곡이 기억에 남습니다.", en: "The piano concerto especially remains in memory." },
    { ko: "청중은 박수로 연주자들을 다시 불렀습니다.", en: "The audience called the players back with applause." },
    { ko: "예술의 힘은 서로의 마음을 만나는 데 있습니다.", en: "The power of art lies in bringing hearts to meet." }
  ], q: [
    { q: "What was special about the performance?", opts: ["Kept the standard, added feeling", "Was completely free", "Used no instruments"], a: 0 },
    { q: "What remains in memory?", opts: ["The piano concerto", "The interval", "The hall lights"], a: 0 },
    { q: "What does the power of art lie in?", opts: ["Bringing hearts to meet", "The size of the hall", "The price of the tickets"], a: 0 }
  ]},
  { level: "C2", title: "The defence of the thesis", id: "l3c2", script: [
    { ko: "오늘 박사 학위 논문 심사가 열렸습니다.", en: "The defence of the doctoral thesis was held today." },
    { ko: "수여자는 연구 방법을 차분히 설명했습니다.", en: "The candidate calmly explained the research method." },
    { ko: "위원들은 예리한 물음을 던졌습니다.", en: "The committee members threw sharp questions." },
    { ko: "그는 대답에서 근거를 정확히 인용했습니다.", en: "In his answers he cited the evidence precisely." },
    { ko: "심사 결과는 긍정적이었습니다.", en: "The result of the defence was positive." },
    { ko: "학자는 자리를 지키며 다음 연구를 준비합니다.", en: "The scholar keeps his place and prepares the next research." }
  ], q: [
    { q: "What defence was held today?", opts: ["A doctoral thesis", "A sports match", "A singing contest"], a: 0 },
    { q: "How did the candidate explain the method?", opts: ["Calmly and precisely", "In a panic", "Without words"], a: 0 },
    { q: "What was the result?", opts: ["Positive", "Indefinite", "Cancelled"], a: 0 }
  ]},
  { level: "C2", title: "The historical sites", id: "l4c2", script: [
    { ko: "등산객들은 옛 성터에 올랐습니다.", en: "The hikers climbed to the old fortress ruins." },
    { ko: "돌담은 여러 세기를 견뎠습니다.", en: "The stone walls have endured several centuries." },
    { ko: "그 위에 이끼가 아름답게 깔렸습니다.", en: "Moss lies beautifully over them." },
    { ko: "전망대에서는 시가가 한눈에 들어옵니다.", en: "From the lookout the whole city appears at a glance." },
    { ko: "역사의 무게와 자연의 숨결이 함께 있습니다.", en: "The weight of history and the breath of nature meet." },
    { ko: "발길을 옮기기 어려운 자리였습니다.", en: "It was a spot hard to leave." }
  ], q: [
    { q: "What did the hikers climb to?", opts: ["Old fortress ruins", "A new tower", "A ski slope"], a: 0 },
    { q: "What lies beautifully over the walls?", opts: ["Moss", "Snow", "Paint"], a: 0 },
    { q: "What do the spot's weight and breath unite?", opts: ["History and nature", "Modern and past art", "Trade and travel"], a: 0 }
  ]},
  { level: "C2", title: "The reform of the library", id: "l5c2", script: [
    { ko: "시립 도서관의 개편이 시작되었습니다.", en: "The reorganisation of the city library has begun." },
    { ko: "종이와 디지털 자료가 한 지붕에 모입니다.", en: "Paper and digital materials gather under one roof." },
    { ko: "열람실은 기능별로 새롭게 나뉩니다.", en: "The reading halls are newly divided by function." },
    { ko: "이용자들의 의견이 설계에 반영되었습니다.", en: "The users' views were reflected in the design." },
    { ko: "도서관은 지식의 공장이라는 말이 있습니다.", en: "People say a library is a factory of knowledge." },
    { ko: "그 공장은 이제 더 넓은 문을 엽니다.", en: "That factory now opens an even wider door." }
  ], q: [
    { q: "What has begun at the city library?", opts: ["A reorganisation", "A demolition", "A move abroad"], a: 0 },
    { q: "Whose views were reflected?", opts: ["The users'", "The composers'", "The athletes'"], a: 0 },
    { q: "What is a library called in the text?", opts: ["A factory of knowledge", "A house of rest", "A hall of games"], a: 0 }
  ]},
  { level: "C2", title: "The last part of the journey", id: "l6c2", script: [
    { ko: "겨울 산행의 마지막 구간이었습니다.", en: "It was the final stretch of the winter mountain hike." },
    { ko: "눈길은 단단하고 소리 없이 깔려 있었습니다.", en: "The snow trail was firm and silently laid." },
    { ko: "숨소리만이 능선을 따라 이어졌습니다.", en: "Only our breathing continued along the ridge." },
    { ko: "정상에서는 너른 평야가 펼쳐졌습니다.", en: "From the peak the wide plain unfolded." },
    { ko: "지쳐 있는 마음이 곧 평온으로 바뀌었습니다.", en: "The weary heart at once turned to calm." },
    { ko: "내려가는 길은 더 가벼웠습니다.", en: "The way down was lighter." }
  ], q: [
    { q: "How was the snow trail?", opts: ["Firm and silent", "Deep and wet", "Overgrown"], a: 0 },
    { q: "What unfolded from the peak?", opts: ["A wide plain", "An ocean", "A forest"], a: 0 },
    { q: "How was the way down?", opts: ["Lighter", "Steeper", "Blocked"], a: 0 }
  ]}
];

MH.listenCourseCount = MH.LISTEN_COURSES.length;