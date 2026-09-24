/* =====================================================================
   ADVANCED COMPOSITION COURSE  (Munhwao Mastery)
   A writing course from A2 to C2. Each lesson states the goal, gives a
   prompt, a structure guide, useful phrases with recordings and a model
   answer. The learner writes in the app, saves their entry and unlocks
   the next lesson. Model answers are Munhwao register.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.COMPOSITION = [
  /* ---------------- A2 ---------------- */
  { id: "cp1", level: "A2", title: "My day", goal: "Describe your daily routine in order.",
    prompt: "Write five sentences about your day, from waking up to the evening.",
    guide: ["Start with the time you get up.", "Say where you go.", "Mention one meal.", "End with the evening at home."],
    phrases: [
      { ko: "아침에 일찍 일어납니다.", en: "I get up early in the morning." },
      { ko: "그다음에 학교에 갑니다.", en: "Then I go to school." },
      { ko: "저녁에는 집에서 쉽니다.", en: "In the evening I rest at home." }
    ],
    model: { ko: "저는 아침 여섯 시에 일어납니다. 세수를 하고 밥을 먹습니다. 여덟 시에 학교에 갑니다. 오후에는 운동을 합니다. 저녁에는 집에서 먹고 잡니다.", en: "I get up at six in the morning. I wash and eat rice. I go to school at eight. In the afternoon I exercise. In the evening I eat at home and sleep." } },
  { id: "cp2", level: "A2", title: "My home", goal: "Describe your home and the people in it.",
    prompt: "Describe your home, what is in it, and two people who live with you.",
    guide: ["Say where the home is.", "Describe one room.", "Introduce two people."],
    phrases: [
      { ko: "우리 집은 평양에 있습니다.", en: "Our home is in Pyongyang." },
      { ko: "방에는 침대와 책상이 있습니다.", en: "There is a bed and a desk in the room." },
      { ko: "우리는 함께 삽니다.", en: "We live together." }
    ],
    model: { ko: "우리 집은 평양에 있습니다. 집은 작고 깨끗합니다. 방에는 침대와 책상이 있습니다. 우리 가족은 넷입니다. 아버지와 어머니, 저와 누나입니다. 우리는 함께 재미있게 삽니다.", en: "Our home is in Pyongyang. The home is small and clean. There is a bed and a desk in the room. Our family is four. Father, mother, me and my older sister. We live pleasantly together." } },
  { id: "cp3", level: "A2", title: "A market trip", goal: "Write about shopping at the market.",
    prompt: "Describe going to the market, what you buy and how you feel.",
    guide: ["Say when you go.", "List what you buy.", "Comment on the price."],
    phrases: [
      { ko: "일요일에 시장에 갑니다.", en: "We go to the market on Sunday." },
      { ko: "사과와 수박을 삽니다.", en: "We buy apples and a watermelon." },
      { ko: "값이 참 쌉니다.", en: "The prices are really low." }
    ],
    model: { ko: "일요일에 우리는 시장에 갑니다. 시장에는 채소와 과일이 많습니다. 우리는 사과와 수박을 삽니다. 값이 참 쌉니다. 저녁에 맛있는 반찬을 만들어 먹습니다. 참 기쁩니다.", en: "On Sunday we go to the market. The market has many vegetables and fruit. We buy apples and a watermelon. The prices are really low. In the evening we make tasty side dishes and eat. It is very joyful." } },
  { id: "cp4", level: "A2", title: "The weather today", goal: "Write about the weather and your plans.",
    prompt: "Describe today's weather and what you do because of it.",
    guide: ["Describe the sky.", "Say what you wear or take.", "Say where you go."],
    phrases: [
      { ko: "오늘 날씨가 좋습니다.", en: "The weather is good today." },
      { ko: "하늘이 맑습니다.", en: "The sky is clear." },
      { ko: "공원에 나갑니다.", en: "We go out to the park." }
    ],
    model: { ko: "오늘 날씨가 참 좋습니다. 하늘이 맑고 해가 밝습니다. 우리는 공원에 나갑니다. 따뜻한 옷은 필요 없습니다. 산책을 하며 이야기합니다. 즐거운 하루입니다.", en: "The weather is really good today. The sky is clear and the sun is bright. We go out to the park. Warm clothes are not needed. We take a walk and talk. It is a pleasant day." } },
  { id: "cp5", level: "A2", title: "A friend", goal: "Introduce a friend.",
    prompt: "Write about who your friend is, where they live and what they do.",
    guide: ["Give the name.", "Say where the friend lives.", "Say what the friend likes."],
    phrases: [
      { ko: "우리 동무는 리명수입니다.", en: "Our comrade is Ri Myong-su." },
      { ko: "동무는 평양에 삽니다.", en: "The friend lives in Pyongyang." },
      { ko: "동무는 글을 좋아합니다.", en: "The friend likes reading." }
    ],
    model: { ko: "우리 동무는 리명수입니다. 동무는 평양에 삽니다. 동무는 글을 좋아하고 매일 읽습니다. 우리는 함께 공부합니다. 동무는 참 좋은 사람입니다.", en: "Our comrade is Ri Myong-su. The friend lives in Pyongyang. The friend likes reading and reads every day. We study together. He is a really good person." } },
  { id: "cp6", level: "A2", title: "What I learned today", goal: "Retell one thing you learned.",
    prompt: "Write about one new thing you learned today in two or three sentences.",
    guide: ["Say what you learned.", "Say how you learned it.", "Say how you feel."],
    phrases: [
      { ko: "오늘 나는 새로운 글자를 배웠습니다.", en: "Today I learned new letters." },
      { ko: "선생님께서 가르치셨습니다.", en: "The teacher taught us." },
      { ko: "정말 재미있습니다.", en: "It is really interesting." }
    ],
    model: { ko: "오늘 나는 새로운 글자를 배웠습니다. 선생님께서 차분히 가르치셨습니다. 나는 오늘 배운 것을 공책에 적었습니다. 정말 재미있습니다. 내일도 계속 배우고 싶습니다.", en: "Today I learned new letters. The teacher taught calmly. I wrote what I learned in my notebook. It is really interesting. I want to keep learning tomorrow." } },

  /* ---------------- B1 ---------------- */
  { id: "cp7", level: "B1", title: "My weekend", goal: "Retell a past weekend with details.",
    prompt: "Write about last weekend: where you went, who you met, what was special.",
    guide: ["Use the past tense consistently.", "Mention a place.", "Add a personal feeling."],
    phrases: [
      { ko: "지난주말에 산에 갔습니다.", en: "Last weekend I went to the mountain." },
      { ko: "친구들을 만났습니다.", en: "I met my friends." },
      { ko: "정말 즐거운 시간이었습니다.", en: "It was a really enjoyable time." }
    ],
    model: { ko: "지난주말에 우리는 산에 갔습니다. 아침 일찍 출발했습니다. 길에서 아름다운 꽃을 보았습니다. 점심에는 김밥을 먹었습니다. 친구들과 이야기를 많이 했습니다. 정말 즐거운 시간이었습니다.", en: "Last weekend we went to the mountain. We set off early in the morning. We saw beautiful flowers on the way. For lunch we ate kimbap. We talked a lot with friends. It was a really enjoyable time." } },
  { id: "cp8", level: "B1", title: "A film I saw", goal: "Give an opinion with a reason.",
    prompt: "Describe a film you saw and explain what you thought of it.",
    guide: ["Summarise the story briefly.", "Give your opinion.", "Support it with one reason."],
    phrases: [
      { ko: "어제 영화를 보았습니다.", en: "I saw a film yesterday." },
      { ko: "그 영화는 참 감동적이었습니다.", en: "The film was very moving." },
      { ko: "왜냐하면 연기가 훌륭했기 때문입니다.", en: "Because the acting was excellent." }
    ],
    model: { ko: "어제 나는 영화를 보았습니다. 그 영화는 한 가족의 이야기를 다룹니다. 나는 그 영화가 참 감동적이라고 생각합니다. 왜냐하면 인물들의 연기가 훌륭했고 이야기가 현실적이었기 때문입니다.", en: "Yesterday I saw a film. The film deals with the story of a family. I think the film was very moving. Because the acting was excellent and the story was realistic." } },
  { id: "cp9", level: "B1", title: "My study plan", goal: "Write a plan with goals.",
    prompt: "Describe your learning plan and how you will keep it.",
    guide: ["State a goal.", "Say how often you study.", "Say how you will keep going."],
    phrases: [
      { ko: "나의 목표는 한 달에 열 개의 단어를 배우는 것입니다.", en: "My goal is to learn ten words a month." },
      { ko: "매일 저녁 공부합니다.", en: "I study every evening." },
      { ko: "꾸준히 하려고 합니다.", en: "I intend to keep at it steadily." }
    ],
    model: { ko: "나의 목표는 한 달에 열 개의 단어를 배우는 것입니다. 나는 매일 저녁 삼십 분 공부합니다. 공책에 새 단어를 적고 소리내어 읽습니다. 중도에 그치지 않도록 계획을 만들었습니다. 꾸준함이 성공의 비결이라고 생각합니다.", en: "My goal is to learn ten words a month. I study thirty minutes every evening. I write new words in my notebook and read them aloud. I made a plan so I will not stop midway. I believe steadiness is the secret of success." } },
  { id: "cp10", level: "B1", title: "The season I like", goal: "Describe a season with feeling.",
    prompt: "Write which season you like and why.",
    guide: ["Name the season.", "Describe the weather.", "Explain why it pleases you."],
    phrases: [
      { ko: "나는 봄을 제일 좋아합니다.", en: "I like spring the most." },
      { ko: "봄에는 꽃이 핍니다.", en: "In spring the flowers bloom." },
      { ko: "기분이 상쾌합니다.", en: "I feel refreshed." }
    ],
    model: { ko: "나는 봄을 제일 좋아합니다. 봄에는 날씨가 따뜻하고 꽃이 핍니다. 거리를 걷기만 해도 기분이 상쾌합니다. 사람들도 더 활기를 띱니다. 그래서 나는 봄이 오기를 기다립니다.", en: "I like spring the most. In spring the weather is warm and the flowers bloom. Just walking the street makes me feel refreshed. People also become livelier. That is why I wait for spring to come." } },
  { id: "cp11", level: "B1", title: "Advice to a new learner", goal: "Give advice clearly.",
    prompt: "Write three pieces of advice for a beginner learning Munhwao.",
    guide: ["Start with the alphabet.", "Advise daily practice.", "Suggest speaking aloud."],
    phrases: [
      { ko: "첫째, 조선글부터 배우십시오.", en: "First, learn the Korean script." },
      { ko: "둘째, 매일 조금씩 하십시오.", en: "Second, do a little every day." },
      { ko: "셋째, 소리내어 읽으십시오.", en: "Third, read out loud." }
    ],
    model: { ko: "새로 배우는 동무에게 세 가지 조언을 하겠습니다. 첫째, 조선글부터 차분히 배우십시오. 둘째, 매일 조금씩 계속하십시오. 셋째, 글을 소리내어 읽어 입과 귀를 함께 익히십시오. 이렇게 하면 어렵지 않게 늘 것입니다.", en: "I will give three pieces of advice to a comrade who is new. First, learn the Korean script calmly. Second, continue a little every day. Third, read aloud so that mouth and ear learn together. In this way you will improve without difficulty." } },
  { id: "cp12", level: "B1", title: "A letter to a friend", goal: "Write a short letter.",
    prompt: "Write a letter to a friend about your recent life.",
    guide: ["Greet the friend.", "Share one piece of news.", "End with a wish or a question."],
    phrases: [
      { ko: "반가운 동무에게 편지를 씁니다.", en: "I write a letter to my dear friend." },
      { ko: "요즘 나는 열심히 공부하고 있습니다.", en: "These days I am studying hard." },
      { ko: "동무의 소식도 궁금합니다.", en: "I am curious about your news too." }
    ],
    model: { ko: "반가운 동무에게. 그동안 잘 지냈습니까? 요즘 나는 열심히 공부하고 있습니다. 도서관에서 매일 책을 읽습니다. 동무도 건강하기를 바랍니다. 곧 편지를 보내 주십시오. 동무 김정님으로부터.", en: "To my dear comrade. Have you been well? These days I am studying hard. I read books in the library every day. I hope you are healthy too. Please send me a letter soon. From your friend, Kim Jong-nim." } },

  /* ---------------- B2 ---------------- */
  { id: "cp13", level: "B2", title: "Graphs and life", goal: "Interpret a trend in writing.",
    prompt: "Write about how city parks have grown and why it matters.",
    guide: ["Describe the trend.", "Give one cause.", "Conclude with your view."],
    phrases: [
      { ko: "최근 넓적했다가 늘고 있습니다.", en: "Recently the number has grown after a period of steadiness." },
      { ko: "이 원인은 주민들의 요구입니다.", en: "The cause is the demand of the residents." },
      { ko: "나는 이 방향을 지지합니다.", en: "I support this direction." }
    ],
    model: { ko: "도표는 지난 십 년 동안 공원 면적이 꾸준히 늘었음을 보여 줍니다. 특히 최근 사 년의 증가가 두드러집니다. 이 원인은 주민들의 여가 요구와 도시 기후에 대한 관심입니다. 나는 이 방향을 지지합니다. 녹지는 생활의 질이기 때문입니다.", en: "The chart shows the park area has grown steadily over the last ten years. The increase of the latest four years is especially notable. The cause is the residents' demand for leisure and concern for the urban climate. I support this direction. Because green space is the quality of life." } },
  { id: "cp14", level: "B2", title: "Comparing two cities", goal: "Compare with balance.",
    prompt: "Compare life in the capital and in the countryside.",
    guide: ["Compare one respect.", "Give an advantage of each.", "State your own preference."],
    phrases: [
      { ko: "수도는 교통이 편리합니다.", en: "The capital has convenient transport." },
      { ko: "시골은 공기가 깨끗합니다.", en: "The countryside has clean air." },
      { ko: "나는 두 곳 모두의 좋은 점을 봅니다.", en: "I see the good in both places." }
    ],
    model: { ko: "생활에서 수도와 시골은 서로 다른 매력을 가집니다. 수도는 교통과 문화 시설이 편리합니다. 그러나 시골은 공기가 깨끗하고 마음이 잔잔해집니다. 나는 두 곳 모두의 좋은 점을 봅니다. 그래서 나는 계절에 따라 바꾸어 사는 것도 생각합니다.", en: "In life, the capital and the countryside each have their own charm. The capital has convenient transport and cultural facilities. But in the countryside the air is clean and the heart becomes calm. I see the good in both places. So I even consider living in each by season." } },
  { id: "cp15", level: "B2", title: "The solution proposal", goal: "Propose a solution with steps.",
    prompt: "Propose how to reduce traffic in the city centre.",
    guide: ["Name the problem.", "Propose two steps.", "Say what the result would be."],
    phrases: [
      { ko: "시내의 교통 체증이 심각합니다.", en: "Traffic congestion in the centre is serious." },
      { ko: "먼저 지하철 배차를 늘려야 합니다.", en: "First the metro frequency must be raised." },
      { ko: "그다음에는 출퇴근 시간을 나누는 것입니다.", en: "Then the commuter hours should be staggered." }
    ],
    model: { ko: "시내의 교통 체증은 날이 갈수록 심해집니다. 나는 두 가지 대책을 제안합니다. 먼저 지하철 배차를 늘려 대중교통을 끌어올립니다. 그다음에는 기관마다 출퇴근 시간을 나누어 한쪽에 몰리지 않게 합니다. 이렇게 하면 체증이 크게 줄어들 것입니다.", en: "Traffic congestion in the centre grows worse by the day. I propose two measures. First, raise metro frequency to draw people to public transport. Then stagger commuter hours across institutions so traffic does not pile up. In this way congestion will fall greatly." } },
  { id: "cp16", level: "B2", title: "My view of reading", goal: "Develop a thesis with support.",
    prompt: "Write why reading is worth keeping as a daily habit.",
    guide: ["State your thesis.", "Give two supports.", "Respond to one counterpoint."],
    phrases: [
      { ko: "독서는 마음의 영양입니다.", en: "Reading is the nourishment of the mind." },
      { ko: "어떤 사람은 시간이 없다고 말합니다.", en: "Some people say they have no time." },
      { ko: "그러나 십 분의 독서도 얼마든지 가능합니다.", en: "But even ten minutes of reading is always possible." }
    ],
    model: { ko: "나는 독서가 마음의 영양이라고 생각합니다. 첫째, 책은 다른 시대와 자리의 목소리를 들려줍니다. 둘째, 읽는 동안 스스로 생각하는 힘이 자랍니다. 어떤 사람은 시간이 없다고 말합니다. 그러나 하루 십 분의 독서도 얼마든지 가능합니다. 시간이 아니라 선택의 문제입니다.", en: "I think reading is the nourishment of the mind. First, books give voice to other eras and places. Second, the power of thinking grows while one reads. Some people say they have no time. But even ten minutes of reading a day is always possible. It is not a matter of time but of choice." } },
  { id: "cp17", level: "B2", title: "The report", goal: "Write a short formal report.",
    prompt: "Report on a week of visits to the reading hall.",
    guide: ["State the period.", "Give the figures.", "Add an observation."],
    phrases: [
      { ko: "지난 주 동안 열람실 이용이 증가했습니다.", en: "Over the past week the use of the reading hall increased." },
      { ko: "일 평균 사십 명이 방문했습니다.", en: "On average forty people visited a day." },
      { ko: "저녁 시간의 이용이 가장 많았습니다.", en: "Evening use was the highest." }
    ],
    model: { ko: "보고: 지난 주 동안 열람실 이용이 증가했습니다. 일 평균 사십 명이 방문했으며 저녁 시간이 가장 붐볐습니다. 새 기술 서적이 인기를 끌고 있습니다. 이용자들은 더 편리한 좌석 배치를 원했습니다. 다음 주 실태를 다시 보고하겠습니다.", en: "Report: Over the past week the use of the reading hall increased. On average forty people visited a day, and the evening hours were the busiest. The new technical books are popular. Users wanted a more convenient seating layout. I will report the situation again next week." } },
  { id: "cp18", level: "B2", title: "The lesson learned", goal: "Reflect with structure.",
    prompt: "Write about a mistake that taught you something.",
    guide: ["Describe the mistake.", "Explain the cause.", "State what you changed."],
    phrases: [
      { ko: "나는 준비를 소홀히 했습니다.", en: "I was careless in my preparation." },
      { ko: "그 경험이 나를 바꾸었습니다.", en: "That experience changed me." },
      { ko: "지금은 이중으로 확인합니다.", en: "Now I check twice." }
    ],
    model: { ko: "작년에 나는 보고 준비를 소홀히 했습니다. 그 결과 발표에서 수치를 잘못 설명했습니다. 그 경험은 나를 크게 바꾸었습니다. 지금은 자료를 이중으로 확인하고 미리 원고를 연습합니다. 실수는 부끄럽지만 그것이 나를 더 성실하게 만들었습니다.", en: "Last year I was careless preparing a report. As a result I explained the figures wrongly in the presentation. That experience changed me greatly. Now I check the material twice and rehearse the speech in advance. The mistake was embarrassing, but it made me more diligent." } },

  /* ---------------- C1 ---------------- */
  { id: "cp19", level: "C1", title: "The argument", goal: "Write a persuasive argument.",
    prompt: "Argue that study circles should continue into the evening.",
    guide: ["Counter the main objection.", "Give a social benefit.", "Propose a condition."],
    phrases: [
      { ko: "피곤하다는 우려가 있을 수 있습니다.", en: "There may be a worry about fatigue." },
      { ko: "그러나 공동 학습은 서로의 부담을 나눕니다.", en: "But joint study shares the burden." },
      { ko: "모임은 한 시간으로 제한하자는 것입니다.", en: "Let us limit the circle to one hour." }
    ],
    model: { ko: "저는 저녁 학습 모임의 지속을 찬성합니다. 피곤하다는 우려가 있을 수 있습니다. 그러나 공동 학습은 각자의 부담을 나누어 오히려 가볍게 만듭니다. 무엇보다 모인 사람들이 서로의 추진력이 되어 줍니다. 단, 모임은 한 시간으로 제한하고 시간을 엄수하자는 조건이 붙습니다. 이 조건이면 중단될 이유가 없습니다.", en: "I support continuing the evening study circle. There may be a worry about fatigue. But joint study shares each person's burden and makes it lighter. Above all, the people gathered become one another's driving force. If only, a condition is added: limit the circle to one hour and keep the time strictly. With this condition there is no reason to stop." } },
  { id: "cp20", level: "C1", title: "The portrait", goal: "Write a portrait with contrast.",
    prompt: "Write about a person who is simple in habit but great in work.",
    guide: ["Describe the outer simplicity.", "Show the inner quality.", "End with what they taught you."],
    phrases: [
      { ko: "그분의 생활은 소박했습니다.", en: "His way of life was simple." },
      { ko: "그러나 일에 대한 자세는 장엄했습니다.", en: "But his attitude to work was grand." },
      { ko: "그에게 나는 인내를 배웠습니다.", en: "From him I learned patience." }
    ],
    model: { ko: "그분의 생활은 소박했습니다. 옷은 늘 같고 모이는 자리에서도 말이 적었습니다. 그러나 일에 대한 자세는 장엄했습니다. 마지막 한 장까지 꼼꼼함을 놓지 않았습니다. 그에게 나는 인내와 정성이라는 말의 실제를 배웠습니다. 그분은 말로가 아니라 몸으로 가르치셨습니다.", en: "His way of life was simple. His clothes were always the same and he said little even at gatherings. But his attitude to work was grand. He never let go of carefulness, down to the last sheet. From him I learned the real meaning of patience and devotion. He taught not with words but with his life." } },
  { id: "cp21", level: "C1", title: "The commentary", goal: "Write a critical commentary.",
    prompt: "Comment on the saying: A ten-year tree, a hundred-year man.",
    guide: ["Interpret the saying.", "Apply it to education.", "Draw a conclusion."],
    phrases: [
      { ko: "이 말은 교육의 장기적 성격을 가리킵니다.", en: "This saying points to the long-term nature of education." },
      { ko: "사람을 기르는 데는 세월이 걸립니다.", en: "Raising a person takes years." },
      { ko: "성급함은 뿌리를 뽑는 일입니다.", en: "Haste tears out the roots." }
    ],
    model: { ko: "«십 년 나무, 백 년 사람»이라는 말은 교육의 장기적 성격을 정확히 가리킵니다. 나무를 기르는 것도 십 년이 걸리는데, 사람의 마음을 기르는 일은 더 큰 세월을 필요로 합니다. 이 말은 곧 성급한 평가에 대한 경고입니다. 교육자는 씨를 뿌리고 오래 기다리는 농부입니다. 우리는 그 기다림을 존중해야 합니다.", en: "The saying 'a ten-year tree, a hundred-year man' points precisely to the long-term nature of education. Growing a tree takes ten years, yet raising the human heart needs even more years. This saying is a warning against hasty judgement. The educator is a farmer who sows seeds and waits long. We must respect that waiting." } },
  { id: "cp22", level: "C1", title: "The proposal memo", goal: "Write an internal memo.",
    prompt: "Propose moving the department's meeting to a new weekly time.",
    guide: ["State the current problem.", "Give the proposal.", "Ask for a decision by a date."],
    phrases: [
      { ko: "현재 금요일 회의는 시간이 부족합니다.", en: "The current Friday meeting lacks time." },
      { ko: "나는 화요일 오후로 옮기기를 제안합니다.", en: "I propose moving it to Tuesday afternoon." },
      { ko: "오월 십오일까지 답변을 부탁드립니다.", en: "Please reply by the fifteenth of May." }
    ],
    model: { ko: "건의: 현재 금요일 회의는 진행할 내용이 많아 시간이 부족합니다. 나는 회의를 화요일 오후로 옮기기를 제안합니다. 보고 자료는 화요일 아침에 미리 분배하면 논의가 효율적일 것입니다. 회의록은 금요일까지 배부하겠습니다. 오월 십오일까지 의견을 주시면 다음 주부터 적용하겠습니다.", en: "Proposal: The current Friday meeting has more content than time. I propose moving the meeting to Tuesday afternoon. If the report material is distributed on Tuesday morning, the discussion will be efficient. The minutes will be distributed by Friday. Please give your views by the fifteenth of May and we will apply it from next week." } },
  { id: "cp23", level: "C1", title: "The interview essay", goal: "Convert an interview into prose.",
    prompt: "Write a short essay from an imagined interview with an old technician.",
    guide: ["Open with a scene.", "Retell a key sentence.", "Reflect on its meaning."],
    phrases: [
      { ko: "그는 서른 해를 한 공장에 바쳤습니다.", en: "He gave thirty years to one factory." },
      { ko: "손으로 만지면 기계의 병이 보인다고 했습니다.", en: "He said that by touch the machine's illness is seen." },
      { ko: "그 말은 겸손한 노동의 철학입니다.", en: "That saying is the philosophy of humble labour." }
    ],
    model: { ko: "공장 구석 텃실에서 그를 만났습니다. 그는 서른 해를 한 공장에 바친 기술자입니다. «손으로 만지면 기계의 병이 보입니다.» 그의 말은 도구를 몸처럼 아는 오랜 손의 지혜였습니다. 문서화하기 어려운 지식은 이렇게 손에서 손으로 전해집니다. 나는 그 말 속에서 성실한 노동의 철학을 읽었습니다.", en: "I met him in the small room in the corner of the factory. He is a technician who gave thirty years to one factory. 'By touch the machine's illness is seen.' His words were the wisdom of an old hand that knows its tool as its body. Knowledge hard to document is passed from hand to hand this way. In that saying I read the philosophy of diligent labour." } },
  { id: "cp24", level: "C1", title: "The reflection", goal: "Write a reflective essay.",
    prompt: "Write about what landmarks mean to a city and its people.",
    guide: ["Describe one landmark.", "Explain its double life.", "Conclude on belonging."],
    phrases: [
      { ko: "대동강은 평양의 상징입니다.", en: "The Taedong River is a symbol of Pyongyang." },
      { ko: "그것은 물리적 존재와 정신적 존재를 함께 가집니다.", en: "It has both a physical and a spiritual existence." },
      { ko: "사람들은 강가에서 자신의 뿌리를 느낍니다.", en: "By the river people feel their roots." }
    ],
    model: { ko: "대동강은 평양이라는 이름의 앞에 서는 존재입니다. 그것은 물리적으로 도시를 가르지르면서, 동시에 주민들의 기억 속에 흐릅니다. 강은 축제의 자리이자 낚시터이자 산책길입니다. 사람들은 그 물가에 서서 자신의 뿌리를 느낍니다. 상징은 거리로 재는 것이 아니라 마음으로 재는 것입니다.", en: "The Taedong River stands before the name of Pyongyang. Physically it cuts across the city while flowing in the memory of its residents. The river is a place of festivals, of fishing and of walks. Standing on its bank, people feel their roots. A symbol is measured not in distance but in the heart." } },

  /* ---------------- C2 ---------------- */
  { id: "cp25", level: "C2", title: "The critical essay", goal: "Write a critical essay on a text.",
    prompt: "Write about why a classic remains relevant.",
    guide: ["State the classic's core.", "Connect it to today.", "Defend the connection."],
    phrases: [
      { ko: "그 고전의 중심은 인간의 선택입니다.", en: "The centre of the classic is human choice." },
      { ko: "선택의 무게는 오늘도 같습니다.", en: "The weight of choice is the same today." },
      { ko: "고전은 과거의 문이 아니라 거울입니다.", en: "A classic is not a door to the past but a mirror." }
    ],
    model: { ko: "그 고전의 중심은 주인공의 선택에 있습니다. 겉으로는 원시 시대의 이야기이지만, 선택의 무게는 오늘날 우리의 결정과 다르지 않습니다. 우리는 매일 작은 고전을 읽지 못하면서 큰 물음 앞에 섭니다. 그렇기에 고전은 과거의 문이 아니라 현재의 거울입니다. 시대가 바뀌어도 참된 물음은 낡지 않습니다.", en: "The centre of the classic lies in the hero's choice. On the surface it is a story of a primitive age, but the weight of choice is no different from our decisions today. Each day we stand before great questions without reading the small classics. Thus a classic is not a door to the past but a mirror of the present. However much the era changes, true questions do not grow old." } },
  { id: "cp26", level: "C2", title: "The concept note", goal: "Write a concept note for a project.",
    prompt: "Sketch a concept for a neighbourhood reading garden.",
    guide: ["Name the need.", "Describe the garden.", "State its first year measure."],
    phrases: [
      { ko: "이웃에는 조용한 독서 공간이 부족합니다.", en: "The neighbourhood lacks a quiet reading space." },
      { ko: "정원은 책과 식물이 어울린 자리입니다.", en: "The garden is a place where books and plants meet." },
      { ko: "첫 해는 나무와 책장을 함께 심습니다.", en: "In the first year we plant trees and bookshelves together." }
    ],
    model: { ko: "개념: 이웃에는 어린이와 어른이 함께 앉을 조용한 독서 공간이 부족합니다. 여기에 작은 독서 정원을 조성할 것을 제안합니다. 정원은 나무 그늘과 옥외 책장이 어울린 열린 열람실로 설계합니다. 첫 해에는 나무와 책장을 함께 심고 주말에는 이야기 모임을 엽니다. 오 년 뒤 정원은 이웃의 보물이 될 것입니다.", en: "Concept: The neighbourhood lacks a quiet reading space where children and adults sit together. I propose creating a small reading garden here. The garden is designed as an open reading hall where tree shade and an outdoor bookcase meet. In the first year we plant trees and bookshelves together and hold weekend story gatherings. After five years the garden will be the treasure of the neighbourhood." } },
  { id: "cp27", level: "C2", title: "The preface", goal: "Write a preface for a collection.",
    prompt: "Write a preface to a collection of short essays about daily life.",
    guide: ["Explain the collection's origin.", "Name its method.", "Address the reader."],
    phrases: [
      { ko: "이 모음은 사소한 날들의 기록입니다.", en: "This collection is a record of small days." },
      { ko: "나는 큰 사건보다 한 그릇의 이야기를 썼습니다.", en: "I wrote of a single bowl rather than great events." },
      { ko: "이 글들이 당신의 하루에 머물기를 바랍니다.", en: "I hope these words stay in your day." }
    ],
    model: { ko: "머리말. 이 모음은 사소한 날들의 기록입니다. 나는 큰 사건보다 한 그릇의 밥과 한 번의 웃음이 지닌 무게를 쓰고 싶었습니다. 방법은 단순합니다. 곁에 있는 것들을 말로 담았습니다. 이 글들이 당신의 하루에 잠시 머물기를 바랍니다. 삶의 큰 이야기는 결국 작은 날들의 합이기 때문입니다.", en: "Preface. This collection is a record of small days. I wanted to write the weight held by a single bowl of rice and a single laugh, rather than great events. The method is simple: I put the things at hand into words. I hope these words stay in your day for a moment. Because the great story of life is finally the sum of small days." } },
  { id: "cp28", level: "C2", title: "The balanced verdict", goal: "Write a balanced critical verdict.",
    prompt: "Verdict on whether technology unites or divides people.",
    guide: ["Present both forces.", "Weigh the evidence.", "Give a conditional conclusion."],
    phrases: [
      { ko: "기술은 두 얼굴을 가집니다.", en: "Technology has two faces." },
      { ko: "이어 주기도 하고 갈라 놓기도 합니다.", en: "It connects and it divides." },
      { ko: "결정하는 것은 기술이 아니라 쓰임입니다.", en: "What decides is not technology but its use." }
    ],
    model: { ko: "기술은 두 얼굴을 가집니다. 먼 곳의 사람을 하루 아침에 이어 주는가 하면, 한 방 안의 가족을 서로 다른 화면으로 갈라 놓습니다. 증거는 양쪽에 있습니다. 그러나 평가의 초점은 기술 자체보다 쓰임에 두어야 합니다. 도구는 목적을 만들지 않고 따라옵니다. 결론은 조건적입니다. 기술이 사람을 이을지 가를지는 우리의 선택에 달렸습니다.", en: "Technology has two faces. It connects distant people overnight, while dividing a family in one room into separate screens. The evidence is on both sides. But the focus of judgement must be on use rather than the technology itself. A tool does not create the purpose; it follows it. The conclusion is conditional. Whether technology unites or divides people rests on our choice." } },
  { id: "cp29", level: "C2", title: "The obituary", goal: "Write a dignified memorial piece.",
    prompt: "Write a memorial about a scholar who served in the shadows.",
    guide: ["Recall the work.", "Name the quality.", "Close with a line for the next generation."],
    phrases: [
      { ko: "그는 이름보다 일을 남겼습니다.", en: "He left his work rather than his name." },
      { ko: "밤늦은 등불 아래에서 자료를 다듬었습니다.", en: "Late at night under the lamp he refined his material." },
      { ko: "그의 자리는 곧 비지만 그 빈자리가 가르칩니다.", en: "His place is now empty, but the emptiness teaches." }
    ],
    model: { ko: "그는 이름보다 일을 남긴 학자였습니다. 한 평생을 자료의 바다에 묻혀 결실 없이 보낸 듯 보였지만, 그의 주석 하나하나가 뒤의 연구의 뿌리가 되었습니다. 밤늦은 등불 아래에서 그는 늘 곁의 일을 다듬었습니다. 이제 그의 자리는 비었습니다. 그러나 그 빈자리가 우리에게 남긴 교훈은 큽니다. 참된 학문은 빛이 아니라 씨를 뿌리는 일입니다.", en: "He was a scholar who left his work rather than his name. Buried his whole life in oceans of material, he seemed to leave nothing, yet each of his notes became the root of later research. Late at night under the lamp he always refined the work at hand. Now his place is empty. But the lesson the emptiness leaves us is great. True scholarship plants seeds rather than light." } },
  { id: "cp30", level: "C2", title: "The final page", goal: "Write a concluding essay.",
    prompt: "Write what fluency finally means in a language.",
    guide: ["Reject the easy definition.", "Offer a better one.", "End with a personal line."],
    phrases: [
      { ko: "유창함은 빠름이 아닙니다.", en: "Fluency is not speed." },
      { ko: "그것은 상대의 마음을 읽는 힘입니다.", en: "It is the power to read the other's heart." },
      { ko: "우리는 말을 끝까지 들을 때 소통합니다.", en: "We communicate when we listen to the end." }
    ],
    model: { ko: "유창함을 단어 수나 말의 속도로 재는 것은 착각입니다. 진정한 유창함은 상대의 마음을 읽고, 그 자리에서 가장 적절한 한 마디를 고르는 힘입니다. 사전은 단어를 주지만 삶은 어조를 가르칩니다. 우리는 말을 끝까지 들을 때 비로소 소통합니다. 나의 유창함의 최종 목표는 완벽한 문장이 아니라 완전한 듣기입니다.", en: "Measuring fluency by word count or speed of speech is a mistake. True fluency is the power to read the other's heart and choose the most fitting word in that place. A dictionary gives words, but life teaches tone. We communicate only when we listen to the end. My final goal of fluency is not the perfect sentence but complete listening." } }
];

MH.compositionCount = MH.COMPOSITION.length;