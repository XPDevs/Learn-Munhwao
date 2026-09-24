/* =====================================================================
   ADVANCED CONVERSATION SCENARIOS  (Munhwao Mastery)
   Role-based scenarios for guided conversation practice. The app plays
   one role and the learner takes the other. Each step has a line to
   listen to, a scripted learner line with a hint, and an optional
   speech recognition score. Steps build toward a realistic exchange.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

MH.SCENARIOS = [
  {
    id: "sc1", level: "B1", title: "Meeting a colleague from another city",
    context: "A workmate visits your unit for the first time. Make it a warm welcome.",
    roles: ["Official", "You"],
    steps: [
      { who: 0, ko: "어서 오십시오, 동무!", en: "Welcome, comrade!" },
      { who: 1, ko: "반갑습니다. 먼 길에 잘 오셨습니다.", en: "Delighted. You made a long trip well.", hint: "Greet and acknowledge the long journey." },
      { who: 0, ko: "이번 협의를 위해 려행했습니다.", en: "I travelled here for this consultation." },
      { who: 1, ko: "수고 많으셨습니다. 먼저 차를 드시지요.", en: "You have worked hard. First, have some tea.", hint: "Offer tea after praising the effort." },
      { who: 0, ko: "고맙습니다. 이 도시가 참 아름답습니다.", en: "Thank you. This city is very beautiful." },
      { who: 1, ko: "그렇습니다. 내일 시내를 구경시켜 드리겠습니다.", en: "It is. Tomorrow I will show you around the city.", hint: "Agree and offer a tour." }
    ],
    end: "협의의 시작이 좋습니다. The consultation begins well."
  },
  {
    id: "sc2", level: "B1", title: "Asking about the neighbourhood",
    context: "New to a district, you ask a neighbour about daily life.",
    roles: ["Neighbour", "You"],
    steps: [
      { who: 0, ko: "이 동네는 처음이십니까?", en: "Are you new to this neighbourhood?" },
      { who: 1, ko: "예, 이곳에 이사를 왔습니다.", en: "Yes, I moved here recently.", hint: "Confirm and mention moving in." },
      { who: 0, ko: "여기 생활이 편리합니다.", en: "Life here is convenient." },
      { who: 1, ko: "시장과 병원은 가깝습니까?", en: "Are the market and hospital close?", hint: "Ask about the market and hospital." },
      { who: 0, ko: "둘 다 걸어서 오 분입니다.", en: "Both are five minutes on foot." },
      { who: 1, ko: "참 좋네요. 알려 주셔서 고맙습니다.", en: "That is good. Thank you for telling me.", hint: "Thank the neighbour for the help." }
    ],
    end: "새 동네를 알게 되었습니다. You got to know the new neighbourhood."
  },
  {
    id: "sc3", level: "B2", title: "Arranging the factory visit",
    context: "A delegation must be shown around the workshop under time pressure.",
    roles: ["Manager", "You"],
    steps: [
      { who: 0, ko: "오후에 대표단이 공장을 봅니다.", en: "In the afternoon a delegation will view the factory." },
      { who: 1, ko: "일정이 짧습니다. 무엇을 중심으로 보여드릴까요?", en: "The schedule is short. What should we show first?", hint: "Ask about the focus of the short visit." },
      { who: 0, ko: "새 공법이 적용된 조립 부문입니다.", en: "The assembly sector with the new method." },
      { who: 1, ko: "알겠습니다. 안전 대책과 자료를 준비하겠습니다.", en: "Understood. I will prepare safety measures and material.", hint: "Agree and mention safety and material." },
      { who: 0, ko: "통역도 확인했습니까?", en: "Have you confirmed the interpreter?" },
      { who: 1, ko: "아직입니다. 식전에 확인하겠습니다.", en: "Not yet. I will confirm before dinner.", hint: "Reply that you will confirm before dinner." }
    ],
    end: "방문 준비가 갖추어졌습니다. The visit is prepared."
  },
  {
    id: "sc4", level: "B2", title: "The neighbourly issue",
    context: "A neighbour asks you to stop the loud radio in the evening.",
    roles: ["Neighbour", "You"],
    steps: [
      { who: 0, ko: "실례합니다. 저녁에 소리가 참 크게 들립니다.", en: "Excuse me. The sound is quite loud in the evening." },
      { who: 1, ko: "미안합니다. 몰랐습니다.", en: "I am sorry. I did not realise.", hint: "Apologise and admit you were unaware." },
      { who: 0, ko: "아이들이 공부를 못 합니다.", en: "The children cannot study." },
      { who: 1, ko: "앞으로 늦은 시간에는 낮추겠습니다.", en: "From now on I will turn it down in the late hours.", hint: "Promise to lower it at night." },
      { who: 0, ko: "이해해 주셔서 고맙습니다.", en: "Thank you for understanding." },
      { who: 1, ko: "이웃끼리 서로 배려가 있어야 합니다.", en: "Neighbours must consider each other.", hint: "Say neighbours must look out for each other." }
    ],
    end: "이웃과 정리되었습니다. You settled the matter with the neighbour."
  },
  {
    id: "sc5", level: "B2", title: "At the hospital admission",
    context: "You must explain a course of treatment to the doctor.",
    roles: ["Doctor", "You"],
    steps: [
      { who: 0, ko: "언제부터 이 증상이 생겼습니까?", en: "Since when have you had these symptoms?" },
      { who: 1, ko: "사흘 전부터 기침과 열이 있습니다.", en: "For three days I have had a cough and fever.", hint: "State the duration and symptoms." },
      { who: 0, ko: "약에 알레르기가 있습니까?", en: "Are you allergic to any medicine?" },
      { who: 1, ko: "없습니다만, 예전에 페니실린을 맞은 적이 있습니다.", en: "None, but I once received penicillin.", hint: "Mention the past penicillin treatment." },
      { who: 0, ko: "그럼 이 약을 사흘 드십시오.", en: "Then take this medicine for three days." },
      { who: 1, ko: "알겠습니다. 노동에 복귀해도 됩니까?", en: "Understood. May I return to work?", hint: "Ask whether you may return to work." }
    ],
    end: "처방을 받았습니다. You received the prescription."
  },
  {
    id: "sc6", level: "C1", title: "Persuading at the round table",
    context: "In a meeting you argue for investing more in training.",
    roles: ["Chair", "You"],
    steps: [
      { who: 0, ko: "예산의 우선순위를 정하려 합니다.", en: "We must set the budget priorities." },
      { who: 1, ko: "저는 양성 교육에 우선 투자해야 한다고 봅니다.", en: "I believe training must be invested in first.", hint: "Argue that training comes first." },
      { who: 0, ko: "그러나 즉각적인 생산 효과가 없습니다.", en: "But there is no immediate effect on production." },
      { who: 1, ko: "인적 자원 없이는 장기 성장이 불가능합니다.", en: "Without human resources, long-term growth is impossible.", hint: "Counter that growth needs people." },
      { who: 0, ko: "타당한 논지입니다.", en: "That is a valid argument." },
      { who: 1, ko: "작은 투자가 내일의 큰 산출을 만듭니다.", en: "A small investment makes tomorrow's large output.", hint: "Close with the return on the investment." }
    ],
    end: "토론에서 목소리를 냈습니다. You made your voice heard."
  },
  {
    id: "sc7", level: "C1", title: "The sensitive goodbye",
    context: "A beloved colleague is being transferred; you speak at the send-off.",
    roles: ["Colleague", "You"],
    steps: [
      { who: 0, ko: "이제 작별의 인사를 나누어야 합니다.", en: "Now we must exchange farewells." },
      { who: 1, ko: "그동안 함께 일한 시간을 잊지 못하겠습니다.", en: "I will never forget the time we worked together.", hint: "Recall the shared work." },
      { who: 0, ko: "우리 일터가 비게 됩니다.", en: "Our workplace will feel empty." },
      { who: 1, ko: "새 자리에서도 굳세게 일하시기를 바랍니다.", en: "I hope you work with strength in your new post.", hint: "Wish them strength in the new post." },
      { who: 0, ko: "감사합니다.", en: "Thank you." },
      { who: 1, ko: "언제든 편지로 소식을 전하십시오.", en: "Do write to us with your news anytime.", hint: "Invite them to write." }
    ],
    end: "의미 있는 이별을 지켰습니다. You honoured a meaningful farewell."
  },
  {
    id: "sc8", level: "C1", title: "The negotiation on resources",
    context: "Two units compete for a limited supply of materials.",
    roles: ["Head of the other unit", "You"],
    steps: [
      { who: 0, ko: "원료는 우리 쪽이 먼저 요청했습니다.", en: "We requested the materials first." },
      { who: 1, ko: "요청 순서보다 필요의 시급성을 봐야 합니다.", en: "More urgent is the need, not the order of request.", hint: "Argue urgency over order." },
      { who: 0, ko: "그 논리는 우리에도 적용됩니다.", en: "That logic applies to us too." },
      { who: 1, ko: "그렇다면 반분하여 순차적으로 쓰는 것이 어렵습니까?", en: "Then could we not split it and use it in turn?", hint: "Propose sharing the supply." },
      { who: 0, ko: "합리적인 제안입니다.", en: "That is a reasonable proposal." },
      { who: 1, ko: "이렇게 협의하면 두 부문 다 손해가 없습니다.", en: "This way neither sector loses.", hint: "Close that both sides benefit." }
    ],
    end: "합리적 합의를 얻었습니다. You reached a reasonable agreement."
  },
  {
    id: "sc9", level: "C2", title: "The editorial phone call",
    context: "A newspaper editor calls to debate the theme of your article.",
    roles: ["Editor", "You"],
    steps: [
      { who: 0, ko: "원고의 결론이 논란을 부를 수 있습니다.", en: "The conclusion of the manuscript may stir controversy." },
      { who: 1, ko: "논란을 피하려고 약화시키기보다 근거를 밝히겠습니다.", en: "Rather than softening it to avoid debate, I will show the evidence.", hint: "Prefer evidence to softening." },
      { who: 0, ko: "독자들이 이해할 수 있겠습니까?", en: "Will the readers understand it?" },
      { who: 1, ko: "용어를 조금 풀면 오히려 대화가 열립니다.", en: "Loosening the terms a little opens the dialogue.", hint: "Explain how loosening helps." },
      { who: 0, ko: "수정안을 보내 주십시오.", en: "Please send a revised version." },
      { who: 1, ko: "내일 오전에 보내겠습니다.", en: "I will send it tomorrow morning.", hint: "Promise delivery tomorrow morning." }
    ],
    end: "원고의 앞길을 열었습니다. You opened the manuscript's path."
  },
  {
    id: "sc10", level: "C2", title: "The choice between jobs",
    context: "You must explain a difficult career decision to your mentor.",
    roles: ["Mentor", "You"],
    steps: [
      { who: 0, ko: "그동안 흔들림이 없을 것이라 믿었습니다.", en: "I believed there would be no wavering." },
      { who: 1, ko: "그 신뢰에 감사합니다. 그러나 제가 달라졌습니다.", en: "I am grateful for that trust. But I have changed.", hint: "Thank them, admit the change." },
      { who: 0, ko: "연구를 그만두려 합니까?", en: "Do you mean to give up research?" },
      { who: 1, ko: "아닙니다. 다른 방식으로 연구를 잇겠습니다.", en: "No. I will continue research in another way.", hint: "Deny, then say you continue differently." },
      { who: 0, ko: "그 길이 당신에게 맞기를 바랍니다.", en: "I hope that road suits you." },
      { who: 1, ko: "선생님의 가르침은 어디로 가든 함께입니다.", en: "Wherever I go, your teaching goes with me.", hint: "Say the teaching travels with you." }
    ],
    end: "정직하게 마음을 전했습니다. You spoke your heart honestly."
  },
  {
    id: "sc11", level: "C2", title: "The theme of the memorial speech",
    context: "At a ceremony you must keep a speech both formal and warm.",
    roles: ["Organiser", "You"],
    steps: [
      { who: 0, ko: "연설은 다섯 분이면 충분합니다.", en: "Five minutes is enough for the speech." },
      { who: 1, ko: "열쇠는 형식과 온정의 균형입니다.", en: "The key is the balance of form and warmth.", hint: "Name the balance you will strike." },
      { who: 0, ko: "교훈을 강조해야 합니다.", en: "The lesson must be emphasised." },
      { who: 1, ko: "고인의 발자취를 통해 교훈이 스미게 하겠습니다.", en: "I will let the lesson seep through the deceased's footsteps.", hint: "Say the lesson will come through their life." },
      { who: 0, ko: "말씀의 끝을 잊지 마십시오.", en: "Do not forget to close the speech." },
      { who: 1, ko: "합장으로 마치겠습니다.", en: "I will close with a bow.", hint: "Say you will end with a bow." }
    ],
    end: "기념 연설이 준비되었습니다. The memorial speech is ready."
  },
  {
    id: "sc12", level: "C2", title: "Reconciling long silence",
    context: "Two old friends speak again after many years of silence.",
    roles: ["Old friend", "You"],
    steps: [
      { who: 0, ko: "그동안 소식이 없어 걱정했습니다.", en: "I worried from your long silence." },
      { who: 1, ko: "미안합니다. 시간이 흐르는 줄 몰랐습니다.", en: "I am sorry. I did not notice the time pass.", hint: "Apologise gently." },
      { who: 0, ko: "사실 나는 섭섭하기도 했습니다.", en: "Truthfully, I also felt hurt." },
      { who: 1, ko: "그 섭섭함을 이제는 씻고 싶습니다.", en: "Now I want to wash that hurt away.", hint: "Offer to move past the hurt." },
      { who: 0, ko: "우리는 여전히 동무입니까?", en: "Are we still comrades?" },
      { who: 1, ko: "항상 그랬듯이, 그렇습니다.", en: "As it has always been, yes.", hint: "Affirm the bond." }
    ],
    end: "오랜 동무의 인연이 이어졌습니다. The old bond continues."
  }
];

MH.scenarioCount = MH.SCENARIOS.length;