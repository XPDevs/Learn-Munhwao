/* =====================================================================
   DIALOGUE COURSES  (Munhwao Mastery)
   Leveled two-person dialogues for listening, reading and role play.
   Each dialogue gives the app a script, a comprehension quiz and a
   role-play mode where the app speaks one part and the learner speaks
   the other. All lines are Munhwao register.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.DIALOGUES = [
  /* ---------------- A1 ---------------- */
  { id: "d1a1", level: "A1", title: "First greetings", context: "Two people meet for the first time.",
    lines: [
      { who: "A", ko: "안녕하십니까, 동무!", en: "Hello, comrade!" },
      { who: "B", ko: "반갑습니다!", en: "Delighted to meet you!" },
      { who: "A", ko: "저는 리명수입니다.", en: "I am Ri Myong-su." },
      { who: "B", ko: "저는 김정님입니다.", en: "I am Kim Jong-nim." },
      { who: "A", ko: "어디에서 오셨습니까?", en: "Where do you come from?" },
      { who: "B", ko: "저는 평양에서 왔습니다.", en: "I come from Pyongyang." }
    ],
    q: [
      { q: "What is person B's name?", opts: ["Kim Jong-nim", "Ri Myong-su", "Han Chol-min"], a: 0 },
      { q: "Where does B come from?", opts: ["Pyongyang", "Nampo", "Kaesong"], a: 0 },
      { q: "How do they greet each other?", opts: ["As comrade", "As stranger", "With silence"], a: 0 } ] },
  { id: "d2a1", level: "A1", title: "Asking the way", context: "Asking how to reach the square.",
    lines: [
      { who: "A", ko: "실례합니다. 김일성 광장은 어디에 있습니까?", en: "Excuse me. Where is the Kim Il-sung Square?" },
      { who: "B", ko: "저쪽으로 가면 있습니다.", en: "Go that way and it is there." },
      { who: "A", ko: "멀니까?", en: "Is it far?" },
      { who: "B", ko: "아니요, 가깝습니다.", en: "No, it is close." },
      { who: "A", ko: "고맙습니다, 동무!", en: "Thank you, comrade!" },
      { who: "B", ko: "천만입니다.", en: "You are welcome." }
    ],
    q: [
      { q: "Where does A want to go?", opts: ["Kim Il-sung Square", "The station", "The market"], a: 0 },
      { q: "Is it far?", opts: ["No, it is close", "Yes, very far", "It is closed"], a: 0 },
      { q: "How does A thank B?", opts: ["Thank you, comrade", "Goodbye", "Please wait"], a: 0 } ] },
  { id: "d3a1", level: "A1", title: "At the table", context: "Inviting someone to eat.",
    lines: [
      { who: "A", ko: "많이 오십시오!", en: "Please, help yourself!" },
      { who: "B", ko: "감사합니다. 맛있습니다!", en: "Thank you. It is delicious!" },
      { who: "A", ko: "김치를 드십시오.", en: "Please have some kimchi." },
      { who: "B", ko: "잘 먹겠습니다.", en: "I will eat well." },
      { who: "A", ko: "물도 있습니다.", en: "There is water too." },
      { who: "B", ko: "정말 잘 먹었습니다.", en: "I really ate well." }
    ],
    q: [
      { q: "What does A offer first?", opts: ["Kimchi", "Tea", "Cake"], a: 0 },
      { q: "What does B say before eating?", opts: ["I will eat well", "I am leaving", "It is cold"], a: 0 },
      { q: "What else does A mention?", opts: ["Water", "Bread", "Juice"], a: 0 } ] },
  { id: "d4a1", level: "A1", title: "A simple phone call", context: "A short call between workmates.",
    lines: [
      { who: "A", ko: "여보세요?", en: "Hello?" },
      { who: "B", ko: "동무, 저입니다.", en: "Comrade, it is me." },
      { who: "A", ko: "지금 무엇을 합니까?", en: "What are you doing now?" },
      { who: "B", ko: "집에 있습니다.", en: "I am at home." },
      { who: "A", ko: "내일 만납시다.", en: "Let us meet tomorrow." },
      { who: "B", ko: "좋습니다. 안녕히 계십시오!", en: "All right. Goodbye!" }
    ],
    q: [
      { q: "Where is B?", opts: ["At home", "At work", "In the park"], a: 0 },
      { q: "When will they meet?", opts: ["Tomorrow", "Tonight", "Next week"], a: 0 },
      { q: "How does B say goodbye?", opts: ["Goodbye (stay well)", "Good night", "See you never"], a: 0 } ] },
  { id: "d5a1", level: "A1", title: "Talking about the weather", context: "Two friends chat about the day.",
    lines: [
      { who: "A", ko: "오늘 날씨가 좋습니다.", en: "The weather is good today." },
      { who: "B", ko: "정말 맑습니다.", en: "It is really clear." },
      { who: "A", ko: "산책을 합시다.", en: "Let us take a walk." },
      { who: "B", ko: "좋은 생각입니다!", en: "That is a good idea!" },
      { who: "A", ko: "공원으로 갑시다.", en: "Let us go to the park." },
      { who: "B", ko: "갑시다!", en: "Let us go!" }
    ],
    q: [
      { q: "How is the weather?", opts: ["Good and clear", "Stormy", "Foggy"], a: 0 },
      { q: "What do they decide to do?", opts: ["Take a walk", "Go home early", "Watch television"], a: 0 },
      { q: "Where will they go?", opts: ["To the park", "To the library", "To the shop"], a: 0 } ] },

  /* ---------------- A2 ---------------- */
  { id: "d1a2", level: "A2", title: "At the restaurant", context: "Ordering food in a small restaurant.",
    lines: [
      { who: "A", ko: "어서 오십시오. 무엇을 드시겠습니까?", en: "Welcome. What would you like?" },
      { who: "B", ko: "국수를 두 그릇 주십시오.", en: "Two bowls of noodles, please." },
      { who: "A", ko: "김치도 필요합니까?", en: "Do you need kimchi too?" },
      { who: "B", ko: "예, 한 사발 주십시오.", en: "Yes, one bowl, please." },
      { who: "A", ko: "지금 나오겠습니다.", en: "It will come out now." },
      { who: "B", ko: "맛있게 먹겠습니다.", en: "I will eat deliciously." }
    ],
    q: [
      { q: "How many bowls of noodles are ordered?", opts: ["Two", "One", "Four"], a: 0 },
      { q: "What else is ordered?", opts: ["Kimchi", "Beer", "Fruit"], a: 0 },
      { q: "How much kimchi is ordered?", opts: ["One bowl", "Three bowls", "None"], a: 0 } ] },
  { id: "d2a2", level: "A2", title: "After work", context: "Two colleagues discuss their evening.",
    lines: [
      { who: "A", ko: "오늘 일이 많았습니다.", en: "We had much work today." },
      { who: "B", ko: "저도 피곤합니다.", en: "I am tired too." },
      { who: "A", ko: "목욕탕에 갈까요?", en: "Shall we go to the bathhouse?" },
      { who: "B", ko: "좋은 생각입니다.", en: "That is a good idea." },
      { who: "A", ko: "그리고 저녁을 먹읍시다.", en: "And let us have dinner." },
      { who: "B", ko: "오늘은 제가 냅니다.", en: "Today I am treating you." }
    ],
    q: [
      { q: "What do they plan first?", opts: ["Go to the bathhouse", "Take a nap", "Watch a film"], a: 0 },
      { q: "Who is paying for dinner?", opts: ["B", "A", "Both pay half"], a: 0 },
      { q: "How do they describe the day?", opts: ["Much work", "An easy day", "A holiday"], a: 0 } ] },
  { id: "d3a2", level: "A2", title: "Asking about the family", context: "Meeting a friend's family.",
    lines: [
      { who: "A", ko: "동무의 가족은 어떻습니까?", en: "How is your family, comrade?" },
      { who: "B", ko: "우리 가족은 넷입니다.", en: "Our family has four people." },
      { who: "A", ko: "부모님께서는 무엇을 하십니까?", en: "What do your parents do?" },
      { who: "B", ko: "아버지는 교원이십니다.", en: "My father is a teacher." },
      { who: "A", ko: "어머니께서는요?", en: "And your mother?" },
      { who: "B", ko: "어머니는 의사이십니다.", en: "My mother is a doctor." }
    ],
    q: [
      { q: "How many people are in the family?", opts: ["Four", "Three", "Five"], a: 0 },
      { q: "What is the father's job?", opts: ["Teacher", "Doctor", "Worker"], a: 0 },
      { q: "What is the mother's job?", opts: ["Doctor", "Farmer", "Artist"], a: 0 } ] },
  { id: "d4a2", level: "A2", title: "Buying fruit", context: "Shopping at the market stand.",
    lines: [
      { who: "A", ko: "사과가 어떻게 팝니까?", en: "How are the apples sold?" },
      { who: "B", ko: "한 근에 일천 원입니다.", en: "One kin is a thousand won." },
      { who: "A", ko: "조금 싸게 주실 수 있습니까?", en: "Could you make it a little cheaper?" },
      { who: "B", ko: "그럼 발전에 드리겠습니다.", en: "Then I will give you slightly more." },
      { who: "A", ko: "두 근 주십시오.", en: "Give me two kin, please." },
      { who: "B", ko: "여기 있습니다.", en: "Here you are." }
    ],
    q: [
      { q: "What is one kin of apples?", opts: ["A thousand won", "Two thousand won", "Five hundred won"], a: 0 },
      { q: "What does B add when A bargains?", opts: ["A little more fruit", "A discount certificate", "Nothing"], a: 0 },
      { q: "How much does A buy?", opts: ["Two kin", "One kin", "Four kin"], a: 0 } ] },
  { id: "d5a2", level: "A2", title: "Planning Sunday", context: "Two friends decide what to do.",
    lines: [
      { who: "A", ko: "일요일에 무엇을 할까요?", en: "What shall we do on Sunday?" },
      { who: "B", ko: "전람회에 가면 좋겠습니다.", en: "It would be nice to go to the exhibition." },
      { who: "A", ko: "무슨 전람회입니까?", en: "What exhibition is it?" },
      { who: "B", ko: "그림 전람회입니다.", en: "A painting exhibition." },
      { who: "A", ko: "몇 시에 만날까요?", en: "What time shall we meet?" },
      { who: "B", ko: "아홉 시에 역 앞에서요.", en: "At nine, in front of the station." }
    ],
    q: [
      { q: "What will they do on Sunday?", opts: ["Visit an exhibition", "Go fishing", "Clean the house"], a: 0 },
      { q: "What kind of exhibition is it?", opts: ["A painting exhibition", "A car show", "A food fair"], a: 0 },
      { q: "Where will they meet?", opts: ["In front of the station", "At the park", "At home"], a: 0 } ] },

  /* ---------------- B1 ---------------- */
  { id: "d1b1", level: "B1", title: "Giving directions", context: "Explaining the way through the city.",
    lines: [
      { who: "A", ko: "실례합니다. 체육관까지 어떻게 갑니까?", en: "Excuse me. How do I reach the sports hall?" },
      { who: "B", ko: "여기서 직진하다가 사거리에서 좌회전하십시오.", en: "Go straight from here, then turn left at the crossroads." },
      { who: "A", ko: "그다음에는요?", en: "And after that?" },
      { who: "B", ko: "다리를 건너면 정문이 보입니다.", en: "Cross the bridge and you will see the main gate." },
      { who: "A", ko: "걸어서 얼마나 걸립니까?", en: "How long does it take on foot?" },
      { who: "B", ko: "이십 분쯤 걸립니다.", en: "About twenty minutes." }
    ],
    q: [
      { q: "Where does A want to go?", opts: ["The sports hall", "The theatre", "The station"], a: 0 },
      { q: "What does A do at the crossroads?", opts: ["Turns left", "Turns right", "Stops there"], a: 0 },
      { q: "How long does it take on foot?", opts: ["About twenty minutes", "An hour", "Five minutes"], a: 0 } ] },
  { id: "d2b1", level: "B1", title: "At the doctor", context: "Explaining symptoms to a doctor.",
    lines: [
      { who: "A", ko: "어디가 아프십니까?", en: "Where does it hurt?" },
      { who: "B", ko: "머리가 아프고 열이 있습니다.", en: "I have a headache and a fever." },
      { who: "A", ko: "언제부터입니까?", en: "Since when?" },
      { who: "B", ko: "어젯밤부터입니다.", en: "Since last night." },
      { who: "A", ko: "잠은 잘 잤습니까?", en: "Did you sleep well?" },
      { who: "B", ko: "아니요, 자주 깼습니다.", en: "No, I woke up often." }
    ],
    q: [
      { q: "What symptom does B have?", opts: ["Headache and fever", "A broken arm", "A sore throat only"], a: 0 },
      { q: "Since when?", opts: ["Last night", "A week ago", "This morning only"], a: 0 },
      { q: "How did B sleep?", opts: ["Badly, woke often", "Very well", "Did not try"], a: 0 } ] },
  { id: "d3b1", level: "B1", title: "Discussing a film", context: "Opinions after a film.",
    lines: [
      { who: "A", ko: "어제 영화를 보셨습니까?", en: "Did you see the film yesterday?" },
      { who: "B", ko: "예, 보았습니다.", en: "Yes, I saw it." },
      { who: "A", ko: "어떻습니까?", en: "What was it like?" },
      { who: "B", ko: "연기가 아주 뛰어났습니다.", en: "The acting was outstanding." },
      { who: "A", ko: "저는 결말이 아쉬웠습니다.", en: "I found the ending disappointing." },
      { who: "B", ko: "다음에 또 같이 보시죠.", en: "Let us watch another one together next time." }
    ],
    q: [
      { q: "What did B praise?", opts: ["The acting", "The music", "The tickets"], a: 0 },
      { q: "What did A find disappointing?", opts: ["The ending", "The length", "The light"], a: 0 },
      { q: "What does B suggest?", opts: ["Watch another film together", "Go home", "Read the book"], a: 0 } ] },
  { id: "d4b1", level: "B1", title: "The work meeting", context: "Planning work in a small team.",
    lines: [
      { who: "A", ko: "이번 주 임무를 확인합시다.", en: "Let us confirm this week's tasks." },
      { who: "B", ko: "저는 보고서 작성을 맡았습니다.", en: "I am in charge of writing the report." },
      { who: "A", ko: "자료는 충분합니까?", en: "Is the material sufficient?" },
      { who: "B", ko: "조금 더 모아야 합니다.", en: "I need to gather a little more." },
      { who: "A", ko: "금요일까지 합시다.", en: "Let us finish by Friday." },
      { who: "B", ko: "알겠습니다.", en: "Understood." }
    ],
    q: [
      { q: "What is B in charge of?", opts: ["Writing the report", "Cleaning the hall", "Buying supplies"], a: 0 },
      { q: "What does B need to do?", opts: ["Gather more material", "Cancel the plan", "Leave early"], a: 0 },
      { q: "When must it be done?", opts: ["By Friday", "Next month", "Tonight"], a: 0 } ] },
  { id: "d5b1", level: "B1", title: "About the studies", context: "A talk about learning Korean.",
    lines: [
      { who: "A", ko: "조선어 공부는 어렵습니까?", en: "Is studying Korean difficult?" },
      { who: "B", ko: "처음에는 어려웠습니다.", en: "It was difficult at first." },
      { who: "A", ko: "지금은 어떻습니까?", en: "How about now?" },
      { who: "B", ko: "날마다 조금씩 늘고 있습니다.", en: "I improve a little every day." },
      { who: "A", ko: "어떻게 공부합니까?", en: "How do you study?" },
      { who: "B", ko: "매일 글로 읽고 씁니다.", en: "I read and write every day." }
    ],
    q: [
      { q: "How was Korean at first?", opts: ["Difficult", "Easy", "Boring"], a: 0 },
      { q: "What happens every day?", opts: ["Improves a little", "Stays the same", "Gets worse"], a: 0 },
      { q: "How does B study?", opts: ["Reads and writes daily", "Only watches films", "Only memorises lists"], a: 0 } ] },

  /* ---------------- B2 ---------------- */
  { id: "d1b2", level: "B2", title: "A business call", context: "Arranging cooperation between two units.",
    lines: [
      { who: "A", ko: "다음 주 협의를 위한 일정을 정하고 싶습니다.", en: "I would like to fix a schedule for next week's consultation." },
      { who: "B", ko: "화요일 오전이 어떻습니까?", en: "How about Tuesday morning?" },
      { who: "A", ko: "저는 수요일이 낫습니다.", en: "Wednesday is better for me." },
      { who: "B", ko: "그럼 수요일 열 시로 하지요.", en: "Let us make it Wednesday at ten, then." },
      { who: "A", ko: "의제를 먼저 보내 드리겠습니다.", en: "I will send you the agenda beforehand." },
      { who: "B", ko: "확인하고 답하겠습니다.", en: "I will review it and reply." }
    ],
    q: [
      { q: "Which day is chosen?", opts: ["Wednesday", "Tuesday", "Monday"], a: 0 },
      { q: "What will A send first?", opts: ["The agenda", "The invoice", "The keys"], a: 0 },
      { q: "How will B respond?", opts: ["Review and reply", "Ignore it", "Cancel all meetings"], a: 0 } ] },
  { id: "d2b2", level: "B2", title: "Deliberating the proposal", context: "Two colleagues weigh a proposal.",
    lines: [
      { who: "A", ko: "새 기계의 도입을 검토해야 합니다.", en: "We must examine the introduction of a new machine." },
      { who: "B", ko: "생산은 늘겠지만 비용이 큽니다.", en: "Production would rise, but the cost is large." },
      { who: "A", ko: "전력 소비도 고려되어야 합니다.", en: "Electricity consumption must also be considered." },
      { who: "B", ko: "우선 시험 가동을 제안합니다.", en: "I propose a trial run first." },
      { who: "A", ko: "동의합니다. 한 달 후에 평가합시다.", en: "I agree. Let us evaluate it after a month." },
      { who: "B", ko: "좋습니다.", en: "Good." }
    ],
    q: [
      { q: "What effect does the new machine have on cost?", opts: ["The cost is large", "It is free", "It lowers everything"], a: 0 },
      { q: "What does B propose?", opts: ["A trial run", "An outright purchase", "A total rejection"], a: 0 },
      { q: "When will they evaluate it?", opts: ["After a month", "Today", "Next year"], a: 0 } ] },
  { id: "d3b2", level: "B2", title: "Interviewing a lecturer", context: "A student asks about research.",
    lines: [
      { who: "A", ko: "선생님, 연구 방향을 여쭤봐도 됩니까?", en: "Teacher, may I ask about your research direction?" },
      { who: "B", ko: "물론입니다. 주로 언어의 변천을 연구합니다.", en: "Of course. I mainly study language change." },
      { who: "A", ko: "왜 말의 변화가 중요합니까?", en: "Why is language change important?" },
      { who: "B", ko: "말에는 사회의 흔적이 남기 때문입니다.", en: "Because speech preserves the traces of society." },
      { who: "A", ko: "어떤 자료를 쓰십니까?", en: "What material do you use?" },
      { who: "B", ko: "옛 문서와 구술 기록을 함께 다룹니다.", en: "I handle old documents and oral records together." }
    ],
    q: [
      { q: "What does the teacher study?", opts: ["Language change", "Plant growth", "Railways"], a: 0 },
      { q: "Why is language change important?", opts: ["Speech keeps traces of society", "It is a hobby", "Everyone talks"], a: 0 },
      { q: "What material is used?", opts: ["Old documents and oral records", "Foreign maps", "Weather data"], a: 0 } ] },
  { id: "d4b2", level: "B2", title: "At the ticket office", context: "Buying tickets for the concert.",
    lines: [
      { who: "A", ko: "주말 공연 표가 남아 있습니까?", en: "Are there tickets left for the weekend concert?" },
      { who: "B", ko: "토요일에는 매진되었습니다.", en: "Saturday is sold out." },
      { who: "A", ko: "일요일은 어떻습니까?", en: "How about Sunday?" },
      { who: "B", ko: "일요일 표가 조금 있습니다.", en: "There are a few Sunday tickets." },
      { who: "A", ko: "두 장 주십시오.", en: "Two tickets, please." },
      { who: "B", ko: "좋은 좌석으로 안내하겠습니다.", en: "I will guide you to good seats." }
    ],
    q: [
      { q: "What is Saturday's status?", opts: ["Sold out", "Half empty", "Closed"], a: 0 },
      { q: "How many tickets are bought?", opts: ["Two", "Six", "One"], a: 0 },
      { q: "What will B guide A to?", opts: ["Good seats", "The exit", "Another hall"], a: 0 } ] },
  { id: "d5b2", level: "B2", title: "Comparing ideas", context: "Arguing two views of city parks.",
    lines: [
      { who: "A", ko: "공원을 줄이고 주차장을 늘세야 합니다.", en: "We should reduce parks and add parking." },
      { who: "B", ko: "저는 반대입니다. 녹지가 삶의 질을 만듭니다.", en: "I object. Green space makes quality of life." },
      { who: "A", ko: "그러나 차가 갈 곳이 없습니다.", en: "But cars have nowhere to go." },
      { who: "B", ko: "대중교통을 늘리는 것이 합리적입니다.", en: "Expanding public transport is the rational path." },
      { who: "A", ko: "그 것도 생각해 볼 문제입니다.", en: "That too is worth considering." },
      { who: "B", ko: "다음 회의에서 다시 토론합시다.", en: "Let us debate it again at the next meeting." }
    ],
    q: [
      { q: "What does A want to add?", opts: ["Parking", "Parks", "Hospitals"], a: 0 },
      { q: "What does B propose instead?", opts: ["More public transport", "Demolishing houses", "A highway"], a: 0 },
      { q: "When will they debate again?", opts: ["At the next meeting", "Right now", "Never"], a: 0 } ] },

  /* ---------------- C1 ---------------- */
  { id: "d1c1", level: "C1", title: "The review meeting", context: "A formal review of a project's progress.",
    lines: [
      { who: "A", ko: "우선 지난 분기의 성과를 개괄하겠습니다.", en: "First, I will outline last quarter's results." },
      { who: "B", ko: "지표가 목표를 초과했습니다.", en: "The indicators exceeded the targets." },
      { who: "A", ko: "그러나 일부 부문에서는 지연이 있었습니다.", en: "Yet there were delays in some sectors." },
      { who: "B", ko: "그 원인을 조사해야 합니다.", en: "We must investigate the causes." },
      { who: "A", ko: "회의록을 작성해 분배해 주십시오.", en: "Please prepare and distribute the minutes." },
      { who: "B", ko: "내일 오전에 완성하겠습니다.", en: "I will finish them tomorrow morning." }
    ],
    q: [
      { q: "What happened with the indicators?", opts: ["They exceeded the targets", "They were never measured", "They vanished"], a: 0 },
      { q: "What was reported in some sectors?", opts: ["Delays", "Bonuses", "Rain"], a: 0 },
      { q: "When will the minutes be ready?", opts: ["Tomorrow morning", "Tonight", "In a month"], a: 0 } ] },
  { id: "d2c1", level: "C1", title: "A critical dialogue about a book", context: "Discussing the merits of a novel.",
    lines: [
      { who: "A", ko: "그 소설의 주제는 우리 시대와 닿아 있습니다.", en: "That novel's theme touches our era." },
      { who: "B", ko: "그러나 인물의 입체감이 부족합니다.", en: "But the characters lack depth." },
      { who: "A", ko: "어쩌면 그것이 오히려 현실적이지요.", en: "Perhaps that is the more realistic side." },
      { who: "B", ko: "현실성과 예술성이 반드시 갈리지 않습니다.", en: "Realism and artistry are not necessarily divided." },
      { who: "A", ko: "공감대가 다른 것 같습니다.", en: "We seem to differ in what we respond to." },
      { who: "B", ko: "그 차이가 토론을 가치 있게 합니다.", en: "That difference makes the debate valuable." }
    ],
    q: [
      { q: "What does A say about the theme?", opts: ["It touches our era", "It is ancient", "It is irrelevant"], a: 0 },
      { q: "What does B find lacking?", opts: ["The depth of the characters", "The length", "The title"], a: 0 },
      { q: "What makes the debate valuable?", opts: ["The difference in views", "The silence", "The number of pages"], a: 0 } ] },
  { id: "d3c1", level: "C1", title: "Planning the annual festival", context: "Two organisers prepare a big event.",
    lines: [
      { who: "A", ko: "축제의 기본 방향을 정해야 합니다.", en: "We must set the basic direction of the festival." },
      { who: "B", ko: "전통과 현대를 함께 보여주어야 합니다.", en: "We should show tradition and modernity together." },
      { who: "A", ko: "행사장 배치는 시민 중심으로.", en: "The venue layout should be citizen-centred." },
      { who: "B", ko: "안전 대책도 우선입니다.", en: "Safety measures are also a priority." },
      { who: "A", ko: "예산안을 준비한 뒤 다시 모입시다.", en: "Let us prepare the budget draft and meet again." },
      { who: "B", ko: "동의합니다.", en: "I agree." }
    ],
    q: [
      { q: "What should the festival show together?", opts: ["Tradition and modernity", "Old and new roads", "Two sports"], a: 0 },
      { q: "What is also a priority?", opts: ["Safety measures", "Ticket prices", "Parking fees"], a: 0 },
      { q: "What will be prepared first?", opts: ["The budget draft", "The invitations", "The fireworks"], a: 0 } ] },
  { id: "d4c1", level: "C1", title: "The difficult choice", context: "A friend seeks advice about work.",
    lines: [
      { who: "A", ko: "새 직장으로 옮길까 고민하고 있습니다.", en: "I am considering whether to move to a new job." },
      { who: "B", ko: "무엇을 중요하게 보십니까?", en: "What do you value most?" },
      { who: "A", ko: "배움의 기회와 생활의 안정입니다.", en: "Chances to learn and the stability of life." },
      { who: "B", ko: "그렇다면 더 따져야 할 것이 있습니다.", en: "Then there are more things to weigh." },
      { who: "A", ko: "장단점을 적어 보겠습니다.", en: "I will write down the pros and cons." },
      { who: "B", ko: "결정은 언제나 스스로 하는 것입니다.", en: "The decision is always yours to make." }
    ],
    q: [
      { q: "What is A considering?", opts: ["Moving to a new job", "Quitting language study", "Traveling abroad"], a: 0 },
      { q: "What does A value most?", opts: ["Learning and stability", "Salary only", "The distance"], a: 0 },
      { q: "What will A write down?", opts: ["The pros and cons", "A resignation letter", "A shopping list"], a: 0 } ] },
  { id: "d5c1", level: "C1", title: "Explaining a research plan", context: "Presenting a study to an audience.",
    lines: [
      { who: "A", ko: "본 연구는 시민 생활의 만족도를 분석합니다.", en: "This study analyses the satisfaction of urban life." },
      { who: "B", ko: "표본은 어떻게 선정했습니까?", en: "How was the sample selected?" },
      { who: "A", ko: "각 구역에서 무작위로 선택했습니다.", en: "It was chosen at random from each district." },
      { who: "B", ko: "한계점도 말씀해 주십시오.", en: "Please also state the limitations." },
      { who: "A", ko: "표본 크기가 제한된 점입니다.", en: "The limited size of the sample." },
      { who: "B", ko: "후속 연구로 보완되기를 기대합니다.", en: "I hope follow-up research will supplement it." }
    ],
    q: [
      { q: "What does the study analyse?", opts: ["Satisfaction with city life", "The weather", "Sports records"], a: 0 },
      { q: "How was the sample chosen?", opts: ["Randomly from each district", "From one office", "By age only"], a: 0 },
      { q: "What is a limitation?", opts: ["The limited sample size", "The cost of paper", "The loud music"], a: 0 } ] },

  /* ---------------- C2 ---------------- */
  { id: "d1c2", level: "C2", title: "The negotiation", context: "Reaching agreement in a delicate negotiation.",
    lines: [
      { who: "A", ko: "우리 두 부문은 원칙에서 이미 합의했습니다.", en: "Our two sectors already agree on principles." },
      { who: "B", ko: "그러나 실행 세부에서 이견이 있습니다.", en: "Yet there are differences on the details of execution." },
      { who: "A", ko: "기간만 유연하게 하면 해결됩니다.", en: "Flexibility on the deadline would resolve it." },
      { who: "B", ko: "품질 기준은 양보할 수 없습니다.", en: "The quality standard cannot be yielded." },
      { who: "A", ko: "그렇다면 시한을 제안에 따라 조정하지요.", en: "Then let us adjust the deadline as you propose." },
      { who: "B", ko: "합의가 성립됩니다.", en: "Agreement is reached." }
    ],
    q: [
      { q: "Where do the sectors agree?", opts: ["On principles", "On nothing", "On penalties"], a: 0 },
      { q: "What cannot be yielded?", opts: ["The quality standard", "The lunch hour", "The uniforms"], a: 0 },
      { q: "What is the outcome?", opts: ["Agreement is reached", "The talks collapse", "Postponed forever"], a: 0 } ] },
  { id: "d2c2", level: "C2", title: "The scholarly debate", context: "A debate about theory in a seminar.",
    lines: [
      { who: "A", ko: "귀하의 전제에는 모순이 있다고 봅니다.", en: "I see a contradiction in your premise." },
      { who: "B", ko: "전제를 증명에 의존하게 만들었습니다.", en: "The premise rests on proof, I made it so." },
      { who: "A", ko: "증명의 출발은 경험의 과잉입니다.", en: "The start of your proof is an excess of experience." },
      { who: "B", ko: "경험 없이 범주는 공허합니다.", en: "Without experience, a category is empty." },
      { who: "A", ko: "그럼 범주와 경험의 관계를 다시 정의합시다.", en: "Then let us redefine the relation of category and experience." },
      { who: "B", ko: "학문이 살아 있는 순간입니다.", en: "This is the moment a discipline comes alive." }
    ],
    q: [
      { q: "What does A see in the premise?", opts: ["A contradiction", "A typo", "A joke"], a: 0 },
      { q: "What is empty without experience?", opts: ["A category", "A room", "A formula"], a: 0 },
      { q: "What will they redefine?", opts: ["The relation of category and experience", "The meeting time", "The seating"], a: 0 } ] },
  { id: "d3c2", level: "C2", title: "The diplomatic talk", context: "Exchange of views between two delegations.",
    lines: [
      { who: "A", ko: "우리는 상호 존중에서 출발해야 합니다.", en: "We must start from mutual respect." },
      { who: "B", ko: "그 원칙에 전적으로 동의합니다.", en: "I fully agree with that principle." },
      { who: "A", ko: "우선 신뢰의 조치부터 취합시다.", en: "Let us take measures of trust first." },
      { who: "B", ko: "구체적 안을 제시하면 면밀히 검토하겠습니다.", en: "If you present concrete proposals, we will examine them closely." },
      { who: "A", ko: "다음 회동에서 서류로 제출하겠습니다.", en: "At the next meeting we will submit them in writing." },
      { who: "B", ko: "기대하겠습니다.", en: "We look forward to it." }
    ],
    q: [
      { q: "What must the talks start from?", opts: ["Mutual respect", "Immediate action", "A public statement"], a: 0 },
      { q: "What will be taken first?", opts: ["Measures of trust", "Sanctions", "Photos"], a: 0 },
      { q: "When will proposals be submitted?", opts: ["At the next meeting", "Never", "By post only"], a: 0 } ] },
  { id: "d4c2", level: "C2", title: "The confession", context: "A personal talk between old friends.",
    lines: [
      { who: "A", ko: "그동안 말하지 못한 것이 있습니다.", en: "There is something I could not say until now." },
      { who: "B", ko: "무엇이든 편하게 말하십시오.", en: "Say whatever it is, comfortably." },
      { who: "A", ko: "당신의 조언이 없었다면 저는 지금 없었습니다.", en: "Without your advice, I would not be here now." },
      { who: "B", ko: "그때 단지 몇 마디였을 뿐입니다.", en: "Then it was only a few words." },
      { who: "A", ko: "몇 마디가 인생을 가르는 때가 있습니다.", en: "Sometimes a few words divide a life." },
      { who: "B", ko: "우리는 앞으로도 서로의 동무입니다.", en: "We will remain each other's comrades." }
    ],
    q: [
      { q: "What does A finally reveal?", opts: ["Gratitude for the advice", "A plan to move", "A lost item"], a: 0 },
      { q: "What does B say his words were?", opts: ["Only a few words", "A long lecture", "Written notes"], a: 0 },
      { q: "What can a few words sometimes do?", opts: ["Divide a life", "Fix a machine", "Change the weather"], a: 0 } ] },
  { id: "d5c2", level: "C2", title: "The heritage decision", context: "Deciding the fate of an old building.",
    lines: [
      { who: "A", ko: "그 건물은 철거 후 새 주택이 서게 됩니다.", en: "After demolition, new housing will rise there." },
      { who: "B", ko: "그러나 건축적 가치가 아직 평가되지 않았습니다.", en: "But its architectural value has not yet been assessed." },
      { who: "A", ko: "보존 비용이 재개발 예산을 압박합니다.", en: "Preservation costs press the redevelopment budget." },
      { who: "B", ko: "문화는 미래의 자산이기도 합니다.", en: "Culture is also an asset of the future." },
      { who: "A", ko: "전문 위원회의 의견을 들어봅시다.", en: "Let us hear the expert committee's opinion." },
      { who: "B", ko: "그것이 가장 합리적인 절차입니다.", en: "That is the most rational procedure." }
    ],
    q: [
      { q: "What will rise after the demolition?", opts: ["New housing", "A river", "A stadium"], a: 0 },
      { q: "What has not been assessed yet?", opts: ["The architectural value", "The weather", "The traffic"], a: 0 },
      { q: "Whose opinion will they hear?", opts: ["The expert committee", "The children", "The visitors"], a: 0 } ] }
];

MH.dialogueCount = MH.DIALOGUES.length;