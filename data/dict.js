/* =====================================================================
   MUNHWAE DICTIONARY, COMPARISON, FREQUENCY AND EXAMPLES  (Munhwao Mastery)
   Extends the pure Munhwao vocabulary from vocab.js with a growing
   reference dictionary, a North vs South comparison tool, frequency
   bands for the flashcard generator, a hand picked example bank and a
   searchable grammar encyclopedia. All taught spellings are Munhwao.
   Extend MH.DICT_EXTRA freely to grow the dictionary toward the
   ten thousand word goal. Existing course words always win on clash.
   ===================================================================== */
"use strict";
window.MH = window.MH || {};

/* ---------- Extra headwords beyond the course vocabulary ----------
   c fields reuse course categories or introduce new ones. The n field
   notes when a word is spelled the same in both standards. */
MH.DICT_EXTRA = {

  /* Everyday and home */
  d_home:    { h:"집", p:"jip", e:"house, home", c:"home", n:"Same in both standards.", s:"우리 집은 어디에 있습니까? = Where is our home?" },
  d_family:  { h:"가족", p:"ga-jok", e:"family", c:"family", n:"Same in both standards.", s:"가족이 몇 명입니까? = How many people are in your family?" },
  d_mother:  { h:"어머니", p:"eo-meo-ni", e:"mother", c:"family", n:"Same in both standards.", s:"어머니는 교원이십니다. = Mother is a teacher." },
  d_father:  { h:"아버지", p:"a-beo-ji", e:"father", c:"family", n:"Same in both standards.", s:"아버지는 로동자이십니다. = Father is a worker." },
  d_parents: { h:"부모", p:"bu-mo", e:"parents", c:"family", n:"Same in both standards.", s:"부모님을 존중해야 합니다. = One must respect one's parents." },
  d_wife:    { h:"안해", p:"an-hae", e:"wife", c:"family", n:"The Munhwao word for wife is 안해. The South form 아내 is not taught here.", s:"안해와 함께 시장에 갑니다. = I go to the market with my wife." },
  d_husband: { h:"남편", p:"nam-pyeon", e:"husband", c:"family", n:"Same in both standards.", s:"남편은 려행 중입니다. = My husband is travelling." },
  d_child:   { h:"아이", p:"a-i", e:"child", c:"family", n:"Same in both standards.", s:"아이는 공원에서 놉니다. = The child plays in the park." },

  /* Kitchen and food */
  d_rice:    { h:"밥", p:"bap", e:"cooked rice, meal", c:"food", n:"Same in both standards.", s:"오늘 밥은 맛있습니다. = Today's meal is tasty." },
  d_water:   { h:"물", p:"mul", e:"water", c:"food", n:"Same in both standards.", s:"찬물 한 잔 주십시오. = Please give me a glass of cold water." },
  d_meat:    { h:"고기", p:"go-gi", e:"meat", c:"food", n:"Same in both standards.", s:"고기와 채소를 삽니다. = I buy meat and vegetables." },
  d_fish:    { h:"생선", p:"saeng-seon", e:"fish (as food)", c:"food", n:"Same in both standards.", s:"생선찌개를 먹습니다. = I eat fish stew." },
  d_vegetable:{ h:"채소", p:"chae-so", e:"vegetables", c:"food", n:"Same in both standards.", s:"채소는 건강에 좋습니다. = Vegetables are good for health." },
  d_fruit:   { h:"과일", p:"gwa-il", e:"fruit", c:"food", n:"Same in both standards.", s:"과일을 사 먹습니다. = I buy and eat fruit." },
  d_apple:   { h:"사과", p:"sa-gwa", e:"apple", c:"food", n:"Same in both standards.", s:"사과 한 개를 삽니다. = I buy one apple." },
  d_grape:   { h:"포도", p:"po-do", e:"grape", c:"food", n:"Same in both standards.", s:"포도는 달콤합니다. = Grapes are sweet." },
  d_watermelon:{ h:"수박", p:"su-bak", e:"watermelon", c:"food", n:"Same in both standards.", s:"수박은 여름 과일입니다. = Watermelon is a summer fruit." },
  d_bread:   { h:"빵", p:"ppang", e:"bread", c:"food", n:"Same in both standards.", s:"아침에는 빵과 우유를 먹습니다. = In the morning I eat bread and milk." },
  d_milk:    { h:"우유", p:"u-yu", e:"milk", c:"food", n:"Same in both standards.", s:"우유를 마십니다. = I drink milk." },
  d_tea:     { h:"차", p:"cha", e:"tea", c:"food", n:"Same in both standards.", s:"녹차를 마십니까? = Do you drink green tea?" },
  d_coffee:  { h:"커피", p:"keo-pi", e:"coffee", c:"food", n:"Same in both standards.", s:"커피는 뜨겁습니다. = The coffee is hot." },
  d_salt:    { h:"소금", p:"so-geum", e:"salt", c:"food", n:"Same in both standards.", s:"소금을 조금 넣습니다. = I put in a little salt." },
  d_sugar:   { h:"설탕", p:"seol-tang", e:"sugar", c:"food", n:"Same in both standards.", s:"설탕 없이 마십니다. = I drink it without sugar." },
  d_spoon:   { h:"수저", p:"su-jeo", e:"spoon and chopsticks", c:"food", n:"Same in both standards.", s:"수저는 식탁 위에 있습니다. = The cutlery is on the table." },
  d_table:   { h:"식탁", p:"sik-tak", e:"table (for meals)", c:"home", n:"Same in both standards.", s:"식탁에 둘러앉습니다. = We sit around the table." },

  /* Study and classroom */
  d_note:    { h:"공책", p:"gong-chaek", e:"notebook", c:"study", n:"Same in both standards.", s:"공책에 적습니다. = I write it in the notebook." },
  d_bag:     { h:"가방", p:"ga-bang", e:"bag, backpack", c:"study", n:"Same in both standards.", s:"가방에 책이 많습니다. = There are many books in the bag." },
  d_classroom:{ h:"교실", p:"gyo-sil", e:"classroom", c:"study", n:"Same in both standards.", s:"교실에 학생들이 많습니다. = There are many students in the classroom." },
  d_teacher: { h:"교원", p:"gyo-won", e:"teacher", c:"study", n:"The Munhwao word for teacher is 교원. The South word 교사 is not taught here.", s:"교원 선생님께서 친절하십니다. = The teacher is kind." },
  d_student: { h:"학생", p:"hak-saeng", e:"student", c:"study", n:"Same in both standards.", s:"학생이 일어나서 대답합니다. = The student stands up and answers." },
  d_college: { h:"대학", p:"dae-hak", e:"university, college", c:"study", n:"Same in both standards.", s:"동생은 대학에 다닙니다. = My younger sibling attends university." },
  d_lesson:  { h:"수업", p:"su-eop", e:"lesson, class", c:"study", n:"Same in both standards.", s:"수업은 아침 8시에 시작합니다. = The class starts at eight in the morning." },
  d_exam:    { h:"시험", p:"si-heom", e:"test, examination", c:"study", n:"Same in both standards.", s:"시험을 잘 봅니다. = I do well in the test." },
  d_answer:  { h:"정답", p:"jeong-dap", e:"the correct answer", c:"study", n:"Same in both standards.", s:"정답은 무엇입니까? = What is the correct answer?" },
  d_word:    { h:"단어", p:"dan-eo", e:"word", c:"study", n:"Same in both standards.", s:"오늘 단어를 외웁니다. = Today I memorise vocabulary." },
  d_sentence:{ h:"문장", p:"mun-jang", e:"sentence", c:"study", n:"Same in both standards.", s:"이 문장은 쉽습니다. = This sentence is easy." },

  /* Media and communication */
  d_radio:   { h:"라지오", p:"ra-ji-o", e:"radio", c:"media", n:"The Munhwao loanword is 라지오, from the older English spelling.", s:"라지오로 뉴스를 듣습니다. = I listen to the news on the radio." },
  d_tv:      { h:"텔레비죤", p:"tel-le-bi-jon", e:"television", c:"media", n:"The Munhwao loanword is 텔레비죤.", s:"텔레비죤에서 영화를 봅니다. = I watch a film on television." },
  d_newspaper:{ h:"신문", p:"sin-mun", e:"newspaper", c:"media", n:"Same in both standards.", s:"아침에 신문을 읽습니다. = I read the newspaper in the morning." },
  d_magazine:{ h:"잡지", p:"jap-ji", e:"magazine", c:"media", n:"Same in both standards.", s:"과학 잡지를 구독합니다. = I subscribe to a science magazine." },
  d_film:    { h:"영화", p:"yeong-hwa", e:"film, movie", c:"media", n:"Same in both standards.", s:"새 영화를 보러 갑니다. = I go to see a new film." },
  d_song:    { h:"노래", p:"no-rae", e:"song", c:"media", n:"Same in both standards.", s:"노래를 부릅니다. = I sing a song." },
  d_music:   { h:"음악", p:"eum-ak", e:"music", c:"media", n:"Same in both standards.", s:"음악을 좋아합니다. = I like music." },

  /* Money, city and travel */
  d_money:   { h:"돈", p:"don", e:"money", c:"money", n:"Same in both standards.", s:"돈이 얼마나 있습니까? = How much money do you have?" },
  d_price:   { h:"값", p:"gap", e:"price", c:"money", n:"Same in both standards.", s:"이것의 값이 얼마입니까? = What is the price of this?" },
  d_bank:    { h:"은행", p:"eun-haeng", e:"bank", c:"money", n:"Same in both standards.", s:"은행에서 돈을 찾습니다. = I withdraw money at the bank." },
  d_deptstore:{ h:"백화점", p:"baek-hwa-jeom", e:"department store", c:"city", n:"Same in both standards.", s:"백화점은 크고 깨끗합니다. = The department store is big and clean." },
  d_market:  { h:"시장", p:"si-jang", e:"market", c:"city", n:"Same in both standards.", s:"시장에서 채소를 삽니다. = I buy vegetables at the market." },
  d_hospital:{ h:"병원", p:"byeong-won", e:"hospital", c:"city", n:"Same in both standards.", s:"병원에서 일합니다. = I work at the hospital." },
  d_doctor:  { h:"의사", p:"ui-sa", e:"doctor", c:"city", n:"Same in both standards.", s:"의사 선생님을 만납니다. = I meet the doctor." },
  d_train:   { h:"렬차", p:"ryeol-cha", e:"train", c:"travel", n:"Munhwao writes the initial r in 렬차. The South form is 열차.", s:"렬차는 정각에 떠납니다. = The train leaves on time." },
  d_trolley: { h:"트롤리버스", p:"teu-rol-li-beo-seu", e:"trolley bus", c:"travel", n:"Trolley buses serve many Munhwao cities.", s:"트롤리버스를 타고 갑니다. = I go by trolley bus." },
  d_subway:  { h:"지하철", p:"ji-ha-cheol", e:"underground railway, metro", c:"travel", n:"Same in both standards. The Pyongyang metro is called 지하철.", s:"지하철 역이 어디입니까? = Where is the metro station?" },
  d_bus:     { h:"버스", p:"beo-seu", e:"bus", c:"travel", n:"Same in both standards.", s:"버스가 10분 후에 옵니다. = The bus comes in ten minutes." },
  d_taxi:    { h:"택시", p:"taek-si", e:"taxi", c:"travel", n:"Same in both standards.", s:"택시를 타고 공항에 갑니다. = I go to the airport by taxi." },
  d_bike:    { h:"자전거", p:"ja-jeon-geo", e:"bicycle", c:"travel", n:"Same in both standards.", s:"자전거를 탑니다. = I ride a bicycle." },
  d_plane:   { h:"비행기", p:"bi-haeng-gi", e:"airplane", c:"travel", n:"Same in both standards.", s:"비행기로 려행합니다. = I travel by airplane." },
  d_airport: { h:"공항", p:"gong-hang", e:"airport", c:"travel", n:"Same in both standards.", s:"공항이 시 밖에 있습니다. = The airport is outside the city." },
  d_passenger:{ h:"려객", p:"ryeo-gaek", e:"passenger", c:"travel", n:"Munhwao writes 려객. The South form is 여객.", s:"렬차에 려객들이 많습니다. = There are many passengers on the train." },
  d_passport: { h:"려권", p:"ryeo-gwon", e:"passport", c:"travel", n:"Already met in the course. Munhwao writes 려권.", s:"려권을 잃어버렸습니다. = I lost my passport." },

  /* Nature */
  d_mountain:{ h:"산", p:"san", e:"mountain", c:"nature", n:"Same in both standards.", s:"산에 올라갑니다. = I climb the mountain." },
  d_river:   { h:"강", p:"gang", e:"river", c:"nature", n:"Same in both standards.", s:"강에서 물고기를 잡습니다. = I catch fish in the river." },
  d_sea:     { h:"바다", p:"ba-da", e:"sea", c:"nature", n:"Same in both standards.", s:"바다는 푸릅니다. = The sea is blue." },
  d_sky:     { h:"하늘", p:"ha-neul", e:"sky", c:"nature", n:"Same in both standards.", s:"하늘에 별이 많습니다. = There are many stars in the sky." },
  d_star:    { h:"별", p:"byeol", e:"star", c:"nature", n:"Same in both standards.", s:"볼별이 반짝입니다. = The planet shines." },
  d_moon:    { h:"달", p:"dal", e:"moon", c:"nature", n:"Same in both standards.", s:"달이 밝습니다. = The moon is bright." },
  d_sun:     { h:"해", p:"hae", e:"sun", c:"nature", n:"Same in both standards.", s:"해가 뜹니다. = The sun rises." },
  d_rain:    { h:"비", p:"bi", e:"rain", c:"nature", n:"Same in both standards.", s:"비가 옵니다. = It is raining." },
  d_wind:    { h:"바람", p:"ba-ram", e:"wind", c:"nature", n:"Same in both standards.", s:"바람이 셉니다. = The wind is strong." },
  d_flower:  { h:"꽃", p:"kkot", e:"flower", c:"nature", n:"Same in both standards.", s:"꽃이 활짝 피었습니다. = The flowers are in full bloom." },
  d_tree:    { h:"나무", p:"na-mu", e:"tree", c:"nature", n:"Same in both standards.", s:"나무가 높습니다. = The tree is tall." },
  d_dog:     { h:"개", p:"gae", e:"dog", c:"nature", n:"Same in both standards.", s:"개가 짖습니다. = The dog barks." },
  d_cat:     { h:"고양이", p:"go-yang-i", e:"cat", c:"nature", n:"Same in both standards.", s:"고양이가 잠을 잡니다. = The cat sleeps." },
  d_bird:    { h:"새", p:"sae", e:"bird", c:"nature", n:"Same in both standards.", s:"새가 노래합니다. = The bird sings." },

  /* Nation and people */
  d_nation:  { h:"나라", p:"na-ra", e:"country, nation", c:"nation", n:"Same in both standards.", s:"우리 나라는 아름답습니다. = Our country is beautiful." },
  d_kinsfolk:{ h:"겨레", p:"gyeo-re", e:"the Korean nation, our people", c:"nation", n:"Munhwao prose often uses 겨레 for the Korean nation.", s:"우리 겨레는 한 언어를 씁니다. = Our nation uses one language." },
  d_motherland:{ h:"조국", p:"jo-guk", e:"fatherland, motherland", c:"nation", n:"Same in both standards.", s:"조국을 위해 일합니다. = I work for the motherland." },
  d_village: { h:"시골", p:"si-gol", e:"countryside, village", c:"nation", n:"Same in both standards.", s:"시골에서 자랐습니다. = I grew up in the countryside." },
  d_city:    { h:"도시", p:"do-si", e:"city", c:"nation", n:"Same in both standards.", s:"도시의 밤은 밝습니다. = The city night is bright." },
  d_worker:  { h:"로동자", p:"ro-dong-ja", e:"worker, labourer", c:"nation", n:"Already met in the course. Munhwao writes 로동.", s:"로동자들의 생활은 좋아졌습니다. = The workers' life has improved." },

  /* Sports */
  d_football:{ h:"축구", p:"chuk-gu", e:"football", c:"sports", n:"Same in both standards.", s:"오후에 축구를 합니다. = I play football in the afternoon." },
  d_basket:  { h:"농구", p:"nong-gu", e:"basketball", c:"sports", n:"Same in both standards.", s:"농구 선수는 키가 큽니다. = The basketball player is tall." },
  d_volley:  { h:"배구", p:"bae-gu", e:"volleyball", c:"sports", n:"Same in both standards.", s:"배구 경기를 봅니다. = I watch a volleyball match." },
  d_swim:    { h:"수영", p:"su-yeong", e:"swimming", c:"sports", n:"Same in both standards.", s:"여름에 수영을 합니다. = I swim in summer." }
};

/* ---------- Merge: course words always win ---------- */
MH.DICT = {};
MH.DICT_BANDS = {};
MH.VOCAB_KEYS.concat(Object.keys(MH.DICT_EXTRA)).forEach(function (key) {
  const cur = MH.VOCAB[key];
  const ex = MH.DICT_EXTRA[key];
  const entry = cur || ex;
  if (!entry) return;
  MH.DICT[key] = entry;
  MH.DICT_BANDS[key] = (cur ? "course" : "extra");
});

MH.dictAll = function () {
  return Object.keys(MH.DICT).map(function (k) { return MH.DICT[k]; });
};
MH.dictLookup = function (q) {
  q = (q || "").trim().toLowerCase();
  if (!q) return [];
  const hits = [];
  Object.keys(MH.DICT).forEach(function (k) {
    const d = MH.DICT[k];
    if (!d) return;
    if (d.h.indexOf(q) >= 0 || (d.p || "").toLowerCase().indexOf(q) >= 0
        || (d.e || "").toLowerCase().indexOf(q) >= 0
        || (d.n || "").toLowerCase().indexOf(q) >= 0) hits.push(d);
  });
  return hits;
};
MH.lookupHangul = function (h) {
  if (!h) return null;
  const key = Object.keys(MH.DICT).find(function (k) {
    return MH.DICT[k].h === h;
  });
  return key ? MH.DICT[key] : null;
};
MH.freqBands = function () { return MH.FREQ_BANDS.slice(); };

/* ---------- Frequency bands (for the flashcard generator) ---------- */
MH.FREQ_BANDS = [
  { name: "Everyday basics", desc: "Greetings, particles and the words you meet on day one.", keys: ["vb_yes", "vb_no", "vb_what", "vb_who", "vb_where", "vb_today", "vb_here", "vb_name", "vb_people_p", "g_hello", "g_hello2", "g_nice", "g_goodbye2", "pr_we"] },
  { name: "Numbers", desc: "Native and Sino readings, dates and times.", keys: ["n_0", "n_1", "n_2", "n_3", "n_5", "n_10", "n_20", "n_100", "s_6", "s_10", "s_100", "s_1000", "s_10000", "tm_year_sino", "tm_month_sino", "tm_week", "s_won"] },
  { name: "Time", desc: "Hours, days, weeks and the calendar.", keys: ["vb_now", "vb_today", "vb_yesterday", "vb_tomorrow", "tm_hour", "tm_minute", "tm_half", "tm_early_morning", "tm_night", "tm_daytime", "tm_wkend", "tm_after", "tm_ago", "tm_year"] },
  { name: "Food", desc: "Meals, dishes and the market.", keys: ["f_rice", "f_kimchi", "f_soup", "f_side", "f_meat", "f_noodles", "f_fish", "f_veg", "f_apple", "f_fruit", "f_watermelon", "f_restaurant", "d_water", "d_tea", "d_milk", "d_coffee"] },
  { name: "People", desc: "Family, workers and how to address others.", keys: ["vb_people_p", "fam_dad", "fam_mom", "fam_family", "fam_big_bro", "fam_big_sis", "pr_we", "pr_you", "p_worker", "p_teacher", "p_doctor", "d_teacher", "d_student", "d_worker", "d_wife", "d_husband"] },
  { name: "City life", desc: "Streets, shops and transport.", keys: ["city_street", "city_shop", "city_dept", "city_market", "city_hospital", "city_bank", "city_post", "city_museum", "city_park", "d_subway", "d_bus", "d_taxi", "d_train", "d_trolley", "d_market", "d_deptstore", "d_money"] },
  { name: "Travel", desc: "Getting around and documents.", keys: ["t_metro", "t_train", "t_plane", "t_ship", "t_bike", "t_taxi", "t_ticket", "t_station", "t_airport", "t_travel", "d_passenger", "d_passport", "d_plane", "d_airport"] },
  { name: "Study", desc: "Classroom words for learners.", keys: ["w_book", "w_notebook", "w_lesson", "w_classroom", "w_homework", "w_exam", "w_pencil", "v_study", "v_learn", "v_read", "v_write", "v_ask", "v_answer", "d_exam", "d_lesson", "d_word", "d_sentence", "d_college"] },
  { name: "Nature", desc: "The world around you.", keys: ["nat_sky", "nat_sun", "nat_moon", "nat_star", "nat_rain", "nat_snow", "nat_wind", "nat_mountain", "nat_sea", "nat_river", "nat_tree", "nat_flower", "d_mountain", "d_sea", "d_sky", "d_rain", "d_flower"] },
  { name: "Feelings", desc: "Emotions and states.", keys: ["a_happy", "a_sad", "a_tired", "a_sick", "a_delicious", "a_fun", "a_hard", "a_easy", "a_beautiful", "a_pretty", "a_diligent", "a_busy", "a_good", "a_bad"] },
  { name: "Media", desc: "News, radio and the screen.", keys: ["nk_radio", "nk_tv", "nk_news", "nk_newspaper", "d_radio", "d_tv", "d_newspaper", "d_film", "d_song", "d_music", "v_listen", "v_see", "v_read"] },
  { name: "Nation", desc: "Words of country and community.", keys: ["nk_people", "nk_state", "nk_capital", "nk_welfare", "nk_flag", "p_nk_people", "w_workplace", "d_nation", "d_kinsfolk", "d_motherland", "d_village", "d_city", "d_worker"] }
];

/* sanity: only keep keys that exist */
MH.FREQ_BANDS.forEach(function (band) {
  band.keys = band.keys.filter(function (k) { return MH.DICT[k]; });
});

/* ---------- North Korean vs South Korean comparison tool ---------- */
MH.COMPARE = [
  { nk: "반갑습니다", sk: "안녕하세요", e: "hello (first greeting)", n: "Munhwao greets with 반갑습니다, literally a delighted meeting. The South greeting 안녕하세요 is heard in the North only in films and South media." },
  { nk: "녀자", sk: "여자", e: "woman", n: "Munhwao keeps the n sound where a word began with n in older Korean. 여자 becomes 녀자." },
  { nk: "려행", sk: "여행", e: "travel", n: "The initial r is kept in Munhwao. You see the same rule in 려객, 려권 and 려관." },
  { nk: "녀학생", sk: "여학생", e: "female student", n: "The n rule applies inside titles too. 녀학생 is the Munhwao form of female student." },
  { nk: "녀성", sk: "여성", e: "woman, female", n: "녀성 is the Munhwao form of the South 여성." },
  { nk: "력사", sk: "역사", e: "history", n: "Munhwao keeps the initial r: 력사. Same rule as 려행." },
  { nk: "로동", sk: "노동", e: "labour, work", n: "The initial r returns in North prose: 로동 where the South says 노동. 로동자 means worker." },
  { nk: "로동자", sk: "노동자", e: "worker", n: "The Munhwao word for worker keeps the initial r." },
  { nk: "로인", sk: "노인", e: "elder, old person", n: "Munhwao writes 로인, keeping the r that the South drops." },
  { nk: "랭면", sk: "냉면", e: "cold noodles", n: "The dish is 랭면 in the North and 냉면 in the South. The word kept its older r spelling." },
  { nk: "련습", sk: "연습", e: "practice, drill", n: "Munhwao keeps the initial r in 련습." },
  { nk: "련결", sk: "연결", e: "connection, link", n: "Munhwao writes 련결. The r rule again." },
  { nk: "연필", sk: "연필", e: "pencil", n: "This word is spelled the same in both standards. The r rule does not apply to every 여 or 연." },
  { nk: "셰계", sk: "세계", e: "world", n: "Munhwao keeps a faint glide in 셰계, closer to the older pronunciation, where the South has simplified 세계." },
  { nk: "류월", sk: "유월", e: "June (writing)", n: "In books the North may write 류월 and the South 유월, but both are spoken as 유월. In this course we teach the spoken form 유월." },
  { nk: "륙", sk: "육", e: "six (Sino)", n: "Munhwao pronounces and writes six as 륙. The South form 육 is not used here." },
  { nk: "령", sk: "영", e: "zero", n: "Munhwao says 령 for zero. The South says 영." },
  { nk: "콤퓨터", sk: "컴퓨터", e: "computer", n: "Munhwao loanwords tend to keep older pronunciations. 콤퓨터 is the form taught here." },
  { nk: "휴대전화", sk: "휴대폰", e: "mobile phone", n: "The North uses 휴대전화 or 손전화 for the mobile phone. 휴대폰 is the South form." },
  { nk: "손전화", sk: "휴대폰", e: "mobile phone (plain)", n: "손전화 is the everyday Munhwao word for the mobile phone." },
  { nk: "위생실", sk: "화장실", e: "toilet, bathroom", n: "Munhwao says 위생실 for the toilet. 화장실 is the South word." },
  { nk: "약방", sk: "약국", e: "pharmacy", n: "The North word for the pharmacy is 약방." },
  { nk: "체신소", sk: "우체국", e: "post office", n: "Munhwao calls the post office 체신소." },
  { nk: "간호원", sk: "간호사", e: "nurse", n: "The North word for nurse is 간호원." },
  { nk: "안해", sk: "아내", e: "wife", n: "Munhwao uses 안해 for wife. 아내 is the South form." },
  { nk: "교원", sk: "교사", e: "teacher", n: "Munhwao uses 교원 for teacher." },
  { nk: "렬차", sk: "열차", e: "train", n: "Munhwao keeps the initial r: 렬차." },
  { nk: "려객", sk: "여객", e: "passenger", n: "Munhwao writes 려객 for passenger." },
  { nk: "려권", sk: "여권", e: "passport", n: "Munhwao writes 려권 for the passport." },
  { nk: "라지오", sk: "라디오", e: "radio", n: "Munhwao loanwords keep older spellings. 라지오 is the North form." },
  { nk: "텔레비죤", sk: "텔레비전", e: "television", n: "Munhwao writes 텔레비죤, close to the older international spelling." },
  { nk: "동무", sk: "친구", e: "friend", n: "Munhwao uses 동무 for friend and comrade. The course teaches 동무." },
  { nk: "탁아소", sk: "어린이집", e: "nursery", n: "Munhwao calls the nursery 탁아소." },
  { nk: "국수", sk: "국수", e: "noodles", n: "This word is the same in both standards." },
  { nk: "룡", sk: "용", e: "dragon", n: "Munhwao keeps the r in 룡, where the South has simplified 용." }
];

/* ---------- Hand picked example sentence bank ---------- */
MH.EXAMPLE_SENTENCES = [
  { ko: "반갑습니다, 동무!", en: "Delighted to meet you, comrade!", g: "greetings", tier: 1 },
  { ko: "저는 학생입니다.", en: "I am a student.", g: "statements", tier: 1 },
  { ko: "이것은 무엇입니까?", en: "What is this?", g: "questions", tier: 1 },
  { ko: "그것은 책이 아닙니다.", en: "That is not a book.", g: "negation", tier: 2 },
  { ko: "녀자가 신문을 읽습니다.", en: "The woman reads the newspaper.", g: "subject object", tier: 2 },
  { ko: "교원 선생님께서 친절하십니다.", en: "The teacher is kind.", g: "honorifics", tier: 3 },
  { ko: "우리 가족은 다섯 명입니다.", en: "Our family has five people.", g: "numbers", tier: 3 },
  { ko: "렬차가 정각에 떠납니다.", en: "The train leaves on time.", g: "travel", tier: 4 },
  { ko: "지하철 역이 어디에 있습니까?", en: "Where is the metro station?", g: "location", tier: 4 },
  { ko: "날씨가 좋아서 공원에 갑니다.", en: "The weather is fine, so I go to the park.", g: "reason", tier: 5 },
  { ko: "시험을 잘 보려고 열심히 공부합니다.", en: "I study hard in order to do well in the test.", g: "purpose", tier: 6 },
  { ko: "아침에 일찍 일어나서 운동을 합니다.", en: "I wake up early in the morning and exercise.", g: "sequence", tier: 6 },
  { ko: "겨울에는 눈이 많이 옵니다.", en: "In winter a lot of snow falls.", g: "weather", tier: 7 },
  { ko: "어제보다 오늘이 더 춥습니다.", en: "Today is colder than yesterday.", g: "comparison", tier: 8 },
  { ko: "라지오로 아침 뉴스를 듣습니다.", en: "I hear the morning news on the radio.", g: "media", tier: 8 },
  { ko: "리동무는 려행에서 돌아왔습니다.", en: "Comrade Ri has returned from the trip.", g: "arrivals", tier: 9 },
  { ko: "이 문장은 쉽기도 하고 재미있기도 합니다.", en: "This sentence is both easy and interesting.", g: "both and", tier: 10 },
  { ko: "조국을 위해 일하는 것이 자랑스럽습니다.", en: "Working for the motherland is a pride.", g: "nominalisation", tier: 11 },
  { ko: "내일 눈이 오겠습니다.", en: "It will snow tomorrow.", g: "future", tier: 12 },
  { ko: "몸을 건강하게 하려면 운동해야 합니다.", en: "To make the body healthy you must exercise.", g: "must", tier: 13 },
  { ko: "이 책은 읽으면 읽을수록 재미있습니다.", en: "The more I read this book, the more interesting it becomes.", g: "the more", tier: 14 },
  { ko: "지하철을 타면 천리까지 갈 수 있습니다.", en: "If you take the metro you can go as far as Chollima.", g: "condition", tier: 15 },
  { ko: "우리 겨레의 말을 사랑합니다.", en: "I love the language of our nation.", g: "feelings", tier: 16 }
];

/* ---------- Searchable grammar encyclopedia ---------- */
MH.GRAMMAR_ENCYCLOPEDIA = [
  { title: "The polite present", pattern: "합니다 / 합니다", body: "Action verbs and adjectives end in 습니다 in polite statements, and 습니까 in questions. The stem loses its final 다 first.", example: "가다 gives 갑니다 and 갑니까. 읽다 gives 읽습니다 and 읽습니까.", tags: ["정중", "present", "basics"] },
  { title: "The particle 은 and 는", pattern: "은 / 는", body: "Mark the topic with 은 after a consonant and 는 after a vowel. The topic sets the frame of the sentence.", example: "선생님은 교원이십니다. 나는 학생입니다.", tags: ["particle", "topic", "basics"] },
  { title: "The particle 이 and 가", pattern: "이 / 가", body: "Mark the subject with 이 after a consonant and 가 after a vowel. 이 follows a final consonant or the letter ㄹ.", example: "사람이 옵니다. 물이 차갑습니다.", tags: ["particle", "subject", "basics"] },
  { title: "The particle 을 and 를", pattern: "을 / 를", body: "Mark the direct object with 을 after a consonant and 를 after a vowel.", example: "책을 읽습니다. 신문을 봅니다.", tags: ["particle", "object", "basics"] },
  { title: "The formal and the polite", pattern: "합니다 vs 해요", body: "Munhwao speech has two main polite levels. 합니다 is the formal level for public speech, news and respect. 해요 is the everyday polite level between equals.", example: "알겠습니다 and 알겠어요 both mean understood.", tags: ["level", "politeness", "basics"] },
  { title: "The honorific 시", pattern: "-시-", body: "Insert 시 before the ending to raise the subject. Use it for elders, guests and respected people.", example: "오십니다 (comes), 읽으십니다 (reads), 계십니다 (is at home).", tags: ["honorific", "시", "reserved"] },
  { title: "The initial r and n rule", pattern: "ㄹ rule", body: "Munhwao keeps the initial r and n sounds that older Korean had. The South drops them. This is the single clearest marker of the Northern standard.", example: "려행, 력사, 로동, 랭면, 녀자, 녀학생, 륙, 령.", tags: ["rule", "Munhwao", "core"] },
  { title: "Numbers native and Sino", pattern: "하나 vs 일", body: "Count things with native words up to ninety nine. Use the Sino readings for dates, money, minutes and numbers above ninety nine, and for zero use 령.", example: "사과 하나, 사과 다섯 개. 12월 25일, 오십 분, 100원.", tags: ["number", "counting", "core"] },
  { title: "Date order", pattern: "year month day", body: "Dates run from the largest to the smallest unit. Months carry the Sino reading and the spoken June is 유월 in both standards.", example: "2024년 6월 5일. 령이 이 일.", tags: ["date", "calendar", "core"] },
  { title: "The particle 을 and 를 in place", pattern: "에 vs 에서", body: "에 marks a place or a time. 에서 marks where an action happens.", example: "8시에 학교에 갑니다. 학교에서 공부합니다.", tags: ["particle", "place", "medium"] },
  { title: "Making questions", pattern: "습니까", body: "The polite question ends in 습니까. The spoken answer uses 네 for yes and 아니요 for no.", example: "학생입니까? 네, 학생입니다.", tags: ["question", "basics"] },
  { title: "Past and future", pattern: "었 and 겠", body: "The past is 았 or 었 before the polite ending. The future uses 겠, and its question form ends in 겠습니까.", example: "갔습니다, 읽었습니다, 가겠습니다, 무엇을 먹겠습니까?", tags: ["tense", "medium"] }
];

/* keep the reference list in sync */
MH.GRAMMAR_ENCYCLOPEDIA = MH.GRAMMAR_ENCYCLOPEDIA.concat((window.MH && MH.GRAMMAR_REF) || []);