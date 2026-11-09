"use strict";

const questions = [
  { axis: "EI", text: "갑자기 주말 하루가 비었다! 너의 선택은?", answers: ["친구에게 연락해서 함께할 일을 찾는다", "혼자 즐길 거리를 찾으며 여유를 만끽한다"] },
  { axis: "SN", text: "새로운 취미를 시작하려고 해. 먼저 끌리는 건?", answers: ["준비물과 방법이 구체적인 실용적인 취미", "새로운 상상을 펼칠 수 있는 창의적인 취미"] },
  { axis: "TF", text: "친구가 실수해서 속상하다고 말한다면?", answers: ["상황을 살펴보고 해결 방법을 함께 찾는다", "속상한 마음을 먼저 알아주고 위로한다"] },
  { axis: "JP", text: "기다리던 여행! 너의 준비 방식은?", answers: ["동선과 일정을 미리 정리해둔다", "가고 싶은 곳만 정하고 자유롭게 움직인다"] },
  { axis: "EI", text: "처음 보는 사람들이 모인 자리에서 너는?", answers: ["먼저 인사하며 대화를 시작하는 편이다", "분위기를 살피다가 자연스럽게 대화한다"] },
  { axis: "SN", text: "친구가 멋진 아이디어를 이야기하면?", answers: ["실제로 어떻게 실행할 수 있을지 생각한다", "거기서 더 확장할 가능성이 떠오른다"] },
  { axis: "TF", text: "함께할 활동을 정할 때 의견이 갈렸어!", answers: ["기준을 세워 가장 합리적인 선택을 찾는다", "각자 원하는 이유를 듣고 마음을 조율한다"] },
  { axis: "JP", text: "해야 할 일이 여러 개 생겼을 때는?", answers: ["순서와 마감 시간을 정하고 시작한다", "그때그때 상황에 맞춰 일을 골라 한다"] },
  { axis: "EI", text: "즐거운 모임이 끝난 뒤, 에너지를 채우는 법은?", answers: ["아쉬워서 누군가와 대화를 조금 더 한다", "혼자 조용히 쉬면서 시간을 보낸다"] },
  { axis: "SN", text: "재미있는 영화를 보고 더 오래 이야기하는 건?", answers: ["인상적인 장면과 배우의 구체적인 연기", "이야기에 숨은 의미와 다른 결말의 가능성"] },
  { axis: "TF", text: "친구가 네 의견을 솔직하게 말해달라고 해!", answers: ["개선할 점을 명확하고 구체적으로 말한다", "친구의 기분을 고려해 부드럽게 전달한다"] },
  { axis: "JP", text: "주말 약속이 갑자기 바뀌었을 때는?", answers: ["새로운 계획을 정해야 마음이 편하다", "바뀐 김에 다른 재미를 찾아본다"] },
  { axis: "EI", text: "재미있는 생각이 떠올랐을 때 너는?", answers: ["누군가에게 말하면서 생각을 발전시킨다", "혼자 충분히 정리한 뒤 이야기한다"] },
  { axis: "SN", text: "새로운 일을 배우는 데 더 편한 방법은?", answers: ["구체적인 예시를 보고 직접 따라 해보기", "전체 원리와 개념을 먼저 이해하기"] },
  { axis: "TF", text: "어려운 선택 앞에서 더 중요하게 보는 것은?", answers: ["일관된 기준과 객관적으로 예상되는 결과", "내가 중요하게 여기는 가치와 사람에게 미칠 영향"] },
  { axis: "JP", text: "자유롭게 쓸 수 있는 하루가 주어진다면?", answers: ["하고 싶은 일을 정해두고 하나씩 즐긴다", "그 순간의 마음이 이끄는 대로 즐긴다"] }
];

const results = {
  ISTJ: { title: "든든한 돌담 몬스터", emoji: "🪨", description: "한 번 맡은 일은 끝까지! 조용하지만 단단한 너의 책임감이 주변에 든든한 울타리가 되어줘.", strengths: ["꾸준함: 작은 약속도 잊지 않고 차근차근 지켜요.", "정리력: 복잡한 일도 순서를 세우면 명확해져요.", "신뢰감: 함께하는 사람들이 안심하고 일을 맡겨요."], mission: "오늘은 계획에 없던 작은 즐거움을 하나 허락해봐!" },
  ISFJ: { title: "포근한 솜솜 몬스터", emoji: "☁️", description: "작은 필요도 놓치지 않는 따뜻한 관찰자! 네가 건네는 세심한 배려가 누군가의 하루를 포근하게 만들어.", strengths: ["세심함: 친구의 취향과 작은 변화를 잘 기억해요.", "돌봄: 필요한 순간에 실질적인 도움을 건네요.", "끈기: 눈에 띄지 않는 일도 성실하게 완성해요."], mission: "오늘은 다른 사람만큼 네가 원하는 것도 하나 챙겨봐!" },
  INFJ: { title: "마음숲 몬스터", emoji: "🌿", description: "말 너머의 마음을 들여다보는 너! 깊은 생각과 따뜻한 시선으로 더 나은 방향을 발견하는 힘이 있어.", strengths: ["통찰력: 서로 다른 이야기에서 숨은 연결을 찾아요.", "공감력: 쉽게 꺼내지 못한 마음도 귀 기울여 들어요.", "방향 감각: 의미 있는 목표를 향해 꾸준히 움직여요."], mission: "머릿속에 담아둔 생각 하나를 편한 사람에게 들려줘!" },
  INTJ: { title: "별지도 몬스터", emoji: "🔮", description: "남들이 놓친 길을 찾아내는 전략가! 멀리 바라보는 상상력과 치밀한 생각으로 너만의 지도를 그려.", strengths: ["전략: 목표까지 가는 효율적인 경로를 찾아요.", "독립성: 혼자서도 깊이 생각하고 판단해요.", "개선력: 익숙한 방식에도 더 좋은 방법을 제안해요."], mission: "완벽한 계획이 되기 전에 작은 첫걸음을 시도해봐!" },
  ISTP: { title: "뚝딱 공구 몬스터", emoji: "🛠️", description: "직접 만지고 풀어볼 때 반짝이는 너! 예상 밖의 문제 앞에서도 침착하게 작동하는 방법을 찾아내.", strengths: ["문제 해결: 막힌 상황에서 실용적인 해법을 찾아요.", "침착함: 갑작스러운 변화에도 차분하게 대응해요.", "손끝 감각: 직접 해보며 빠르게 원리를 익혀요."], mission: "오늘 해결한 일과 그때의 기분을 한 문장으로 남겨봐!" },
  ISFP: { title: "물감방울 몬스터", emoji: "🎨", description: "평범한 순간에도 너만의 색을 발견하는 감각가! 말보다 행동과 표현으로 따뜻한 마음을 전해.", strengths: ["감각: 일상의 작은 아름다움을 잘 발견해요.", "진정성: 내가 소중하게 여기는 가치를 지켜요.", "유연함: 주변의 흐름을 느끼며 자연스럽게 적응해요."], mission: "오늘 마음에 든 장면을 사진이나 낙서로 남겨봐!" },
  INFP: { title: "꿈씨앗 몬스터", emoji: "🌱", description: "마음속에 작은 우주를 품은 너! 풍부한 상상력과 소중한 가치로 세상에 새로운 이야기를 심어.", strengths: ["상상력: 사소한 단서에서도 이야기를 떠올려요.", "이해심: 서로 다른 사람의 마음을 존중해요.", "가치 발견: 내가 진짜 좋아하는 것의 의미를 찾아요."], mission: "꿈꾸던 일에 딱 5분만 써봐. 작은 시작도 자라나니까!" },
  INTP: { title: "물음표 몬스터", emoji: "🧩", description: "‘왜 그럴까?’에서 모험이 시작되는 너! 호기심과 논리로 복잡한 퍼즐을 새로운 시선에서 풀어내.", strengths: ["분석력: 복잡한 정보를 차근차근 나눠 살펴요.", "호기심: 익숙한 것에도 새로운 질문을 던져요.", "발상 전환: 당연한 규칙 밖의 가능성을 찾아요."], mission: "궁금했던 것 하나를 찾아보고, 알게 된 내용을 공유해봐!" },
  ESTP: { title: "번개발 몬스터", emoji: "⚡", description: "생각이 기회가 되는 순간, 바로 움직이는 너! 생생한 감각과 순발력으로 오늘의 가능성을 붙잡아.", strengths: ["실행력: 망설이는 순간에도 먼저 시도해봐요.", "순발력: 현장의 변화를 빠르게 알아차려요.", "현실 감각: 지금 쓸 수 있는 자원을 잘 활용해요."], mission: "시작하기 전, 이번 선택의 내일 모습도 잠깐 떠올려봐!" },
  ESFP: { title: "햇살팡 몬스터", emoji: "🌞", description: "네가 있는 곳에 즐거움이 피어나! 생생한 표현과 따뜻한 관심으로 평범한 하루를 특별하게 바꿔.", strengths: ["활력: 함께하는 사람에게 즐거운 에너지를 전해요.", "친화력: 새로운 사람과도 자연스럽게 가까워져요.", "순간 감각: 지금 함께 즐길 거리를 잘 찾아요."], mission: "오늘의 즐거움 하나와 내일 챙길 일 하나를 적어봐!" },
  ENFP: { title: "반짝뿔 몬스터", emoji: "🦄", description: "새로운 가능성 앞에서 눈이 반짝이는 너! 넘치는 아이디어와 따뜻한 호기심이 사람과 기회를 연결해.", strengths: ["아이디어: 하나의 생각에서 여러 가능성을 펼쳐요.", "응원력: 다른 사람의 숨은 장점을 발견해요.", "연결력: 서로 다른 사람과 생각 사이에 다리를 놓아요."], mission: "떠오른 아이디어 중 하나만 골라 작은 행동으로 옮겨봐!" },
  ENTP: { title: "상상불꽃 몬스터", emoji: "🔥", description: "‘이렇게 해보면 어때?’를 외치는 발명가! 재치 있는 질문과 대담한 생각으로 새로운 길을 열어.", strengths: ["발상력: 기존의 틀을 넘어서는 방법을 떠올려요.", "토론력: 생각을 주고받으며 아이디어를 다듬어요.", "적응력: 새로운 문제를 도전 기회로 바라봐요."], mission: "오늘은 아이디어 하나를 끝까지 마무리하는 재미를 찾아봐!" },
  ESTJ: { title: "대장뿔 몬스터", emoji: "🦏", description: "흩어진 일을 모아 앞으로 나아가는 너! 명확한 기준과 추진력으로 모두가 움직일 발판을 만들어.", strengths: ["추진력: 정한 목표를 실제 행동으로 연결해요.", "조직력: 역할과 순서를 정리해 함께 움직여요.", "책임감: 필요한 일을 외면하지 않고 챙겨요."], mission: "함께하는 사람에게 어떤 방식이 편한지 먼저 물어봐!" },
  ESFJ: { title: "온기방울 몬스터", emoji: "🧡", description: "모두가 편안한 자리를 만드는 너! 사람들을 기억하고 챙기는 다정한 힘으로 관계에 온기를 더해.", strengths: ["배려: 누가 소외되지 않았는지 살펴요.", "협동: 서로 도울 수 있는 분위기를 만들어요.", "실천: 마음을 구체적인 도움으로 표현해요."], mission: "오늘 부탁 하나를 받으면 네 여유도 먼저 확인해봐!" },
  ENFJ: { title: "별빛날개 몬스터", emoji: "🦋", description: "사람의 가능성을 발견하고 함께 날아오르는 너! 따뜻한 말과 방향 감각으로 서로의 성장을 도와.", strengths: ["격려: 상대가 자신감을 찾을 말을 건네요.", "소통: 서로 다른 마음 사이의 공통점을 찾아요.", "리더십: 함께 꿈꾸는 방향으로 사람들을 모아요."], mission: "다른 사람의 목표 옆에 너 자신의 목표도 하나 적어봐!" },
  ENTJ: { title: "용감한 꼬마용", emoji: "🐲", description: "큰 그림을 그리고 현실로 만드는 너! 도전을 두려워하지 않는 추진력으로 새로운 가능성을 열어.", strengths: ["결단력: 여러 선택지에서 방향을 정해요.", "설계력: 큰 목표를 실행 단계로 나눠요.", "도전 정신: 어려운 일에서도 기회를 발견해요."], mission: "결과를 향해 달리기 전, 함께하는 사람의 생각을 들어봐!" }
};

const $ = (id) => document.getElementById(id);
let current = 0;
let answers = Array(questions.length).fill(null);
let currentType = "";
const axes = ["EI", "SN", "TF", "JP"];

function showScreen(name) {
  ["start", "quiz", "result"].forEach((screen) => { $(screen + "-screen").hidden = screen !== name; });
}

function renderQuestion() {
  const question = questions[current];
  $("question-counter").textContent = `${String(current + 1).padStart(2, "0")} / 16`;
  const completed = answers.filter((answer) => answer !== null).length;
  $("progress").setAttribute("aria-valuenow", completed);
  $("progress").setAttribute("aria-valuetext", `16개 중 ${completed}개 응답`);
  $("progress-fill").style.width = `${completed / questions.length * 100}%`;
  $("question-category").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  $("question-title").textContent = question.text;
  $("answers").replaceChildren();
  question.answers.forEach((label, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.setAttribute("aria-pressed", answers[current] === index);
    const badge = document.createElement("span");
    badge.className = "answer-label";
    badge.textContent = index === 0 ? "A" : "B";
    const text = document.createElement("span");
    text.textContent = label;
    button.append(badge, text);
    button.addEventListener("click", () => {
      answers[current] = index;
      renderQuestion();
      $("answers").children[index].focus();
    });
    $("answers").append(button);
  });
  $("previous-button").disabled = current === 0;
  $("next-button").disabled = answers[current] === null;
  $("next-button").textContent = current === questions.length - 1 ? "내 몬스터 만나기 ✦" : "다음 질문 →";
}

function calculateResult(values) {
  return axes.map((axis) => {
    const indices = questions.map((q, i) => q.axis === axis ? i : -1).filter((i) => i >= 0);
    const firstCount = indices.filter((i) => values[i] === 0).length;
    const letter = firstCount === 2 ? axis[values[indices[0]]] : axis[firstCount > 2 ? 0 : 1];
    return { axis, firstPercent: firstCount * 25, letter };
  });
}

function showResult(type, traits = null) {
  currentType = type;
  const result = results[type];
  $("result-emoji").textContent = result.emoji;
  $("result-type").textContent = type;
  $("result-title").textContent = result.title;
  $("result-description").textContent = result.description;
  $("strengths").replaceChildren(...result.strengths.map((strength) => {
    const item = document.createElement("li"); item.textContent = strength; return item;
  }));
  $("mission").textContent = result.mission;
  $("traits").replaceChildren();
  const names = { E: "외향", I: "내향", S: "현실", N: "직관", T: "사고", F: "감정", J: "계획", P: "탐색" };
  if (traits) traits.forEach(({ axis, firstPercent }) => {
    const row = document.createElement("div"); row.className = "trait";
    const labels = document.createElement("div"); labels.className = "trait-labels";
    for (let i = 0; i < 2; i++) {
      const label = document.createElement("span");
      label.textContent = `${axis[i]} ${names[axis[i]]} ${i === 0 ? firstPercent : 100 - firstPercent}%`;
      labels.append(label);
    }
    const bar = document.createElement("div"); bar.className = "trait-bar";
    const fill = document.createElement("span"); fill.style.width = `${firstPercent}%`;
    bar.append(fill); row.append(labels, bar); $("traits").append(row);
  });
  $("traits").previousElementSibling.hidden = !traits;
  document.querySelector(".ratio-note").hidden = !traits;
  $("share-status").textContent = "";
  $("share-fallback").hidden = true;
  showScreen("result");
  $("result-title").focus();
}

$("start-button").addEventListener("click", () => { showScreen("quiz"); renderQuestion(); $("question-title").focus(); });
$("previous-button").addEventListener("click", () => { if (current > 0) { current--; renderQuestion(); $("question-title").focus(); } });
$("next-button").addEventListener("click", () => {
  if (answers[current] === null) return;
  if (current < questions.length - 1) { current++; renderQuestion(); $("question-title").focus(); }
  else { const traits = calculateResult(answers); showResult(traits.map((trait) => trait.letter).join(""), traits); }
});
$("restart-button").addEventListener("click", () => {
  current = 0; answers = Array(questions.length).fill(null); currentType = "";
  showScreen("start"); $("start-button").focus();
});
$("share-button").addEventListener("click", async () => {
  const result = results[currentType];
  const text = `내 안의 숨은 몬스터는 ${result.emoji} ${result.title} (${currentType})!\n${result.description}`;
  const isWeb = /^https?:$/.test(location.protocol);
  const url = new URL(location.href); url.hash = currentType;
  const shareText = text + (isWeb ? `\n${url.href}` : "");
  if (navigator.share && isWeb) {
    try { await navigator.share({ title: "내 안의 숨은 몬스터", text, url: url.href }); $("share-status").textContent = "공유했어! 친구의 몬스터도 만나봐."; return; }
    catch (error) { if (error.name === "AbortError") return; }
  }
  try {
    if (!navigator.clipboard) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(shareText);
    $("share-status").textContent = isWeb ? "결과와 링크를 복사했어! 원하는 곳에 붙여넣어줘." : "결과를 복사했어! 원하는 곳에 붙여넣어줘.";
  } catch {
    $("share-fallback").hidden = false; $("share-text").value = shareText; $("share-text").focus(); $("share-text").select();
    $("share-status").textContent = "선택된 결과를 직접 복사해줘.";
  }
});

const sharedType = location.hash.slice(1).toUpperCase();
if (Object.hasOwn(results, sharedType)) showResult(sharedType);
