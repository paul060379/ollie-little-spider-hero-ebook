const pages = [
  {
    label: "Cover",
    image: "./assets/panel_00.png",
    alt: "小歐力站在洗手台前舉著牙刷像浩克小英雄",
    cn: "小小浩克英雄歐力，刷牙出動！",
    en: "Little Hulk Hero Ollie, Brush Time!",
  },
  {
    label: "Page 1",
    image: "./assets/panel_01.png",
    alt: "小歐力準備當浩克小英雄",
    cn: "今天，\n歐力要當浩克小英雄！",
    en: "Today,\nOllie wanted to be a little Hulk hero!",
  },
  {
    label: "Page 2",
    image: "./assets/panel_02.png",
    alt: "小歐力站在鏡子前握緊拳頭",
    cn: "他站在鏡子前，\n握緊拳頭說：\n「我是浩克小英雄！」",
    en: 'He stood in front of the mirror,\nclenched his fists, and said,\n"I am a little Hulk hero!"',
  },
  {
    label: "Page 3",
    image: "./assets/panel_03.png",
    alt: "媽媽拿著牙刷和牙膏提醒先刷牙",
    cn: "可是媽媽拿著牙刷說：\n「超級英雄，\n先刷牙！」",
    en: 'But Mom held up his toothbrush and said,\n"Superheroes\nbrush their teeth first!"',
  },
  {
    label: "Page 4",
    image: "./assets/panel_04.png",
    alt: "小歐力皺著眉頭覺得刷牙麻煩",
    cn: "歐力皺起眉頭。\n「可是刷牙好麻煩喔。」",
    en: 'Ollie frowned.\n"But brushing feels like so much work."',
  },
  {
    label: "Page 5",
    image: "./assets/panel_05.png",
    alt: "鏡子裡出現鼓勵小歐力的綠色小英雄想像",
    cn: "這時候，\n鏡子裡的小英雄好像對他說：\n「真正厲害的英雄，\n會保護牙齒！」",
    en: 'Just then,\nthe little hero in the mirror seemed to say,\n"Real heroes\nprotect their teeth!"',
  },
  {
    label: "Page 6",
    image: "./assets/panel_06.png",
    alt: "小歐力拿起牙刷開始英雄任務",
    cn: "歐力把牙刷拿起來。\n「好吧，\n英雄任務開始！」",
    en: 'Ollie picked up his toothbrush.\n"Okay then,\nhero mission start!"',
  },
  {
    label: "Page 7",
    image: "./assets/panel_07.png",
    alt: "小歐力認真刷上面和下面的牙齒",
    cn: "上面刷一刷，\n下面刷一刷。",
    en: "Brush the top,\nthen brush the bottom.",
  },
  {
    label: "Page 8",
    image: "./assets/panel_08.png",
    alt: "小歐力刷左邊右邊和前面的牙齒",
    cn: "左邊刷一刷，\n右邊刷一刷，\n前面也刷一刷。",
    en: "Brush the left,\nbrush the right,\nand brush the front too.",
  },
  {
    label: "Page 9",
    image: "./assets/panel_09.png",
    alt: "小歐力輕輕刷到後面的牙齒",
    cn: "小小後面牙齒，\n也要輕輕刷到。",
    en: "The little teeth in the back\nneed gentle brushing too.",
  },
  {
    label: "Page 10",
    image: "./assets/panel_10.png",
    alt: "泡泡很多像超級任務",
    cn: "泡泡好多好多！\n歐力覺得自己\n像在完成超級任務。",
    en: "There were bubbles everywhere!\nOllie felt like\nhe was finishing a super mission.",
  },
  {
    label: "Page 11",
    image: "./assets/panel_11.png",
    alt: "小歐力停一下再繼續刷牙",
    cn: "刷刷刷，\n停一下，\n再刷刷刷。",
    en: "Brush, brush, brush,\npause for a moment,\nthen brush, brush, brush again.",
  },
  {
    label: "Page 12",
    image: "./assets/panel_12.png",
    alt: "小歐力漱口並把嘴巴擦乾淨",
    cn: "刷完以後，\n歐力咕嚕咕嚕漱口，\n再把嘴巴擦乾淨。",
    en: "When he finished,\nOllie swished the water around\nand wiped his mouth clean.",
  },
  {
    label: "Page 13",
    image: "./assets/panel_13.png",
    alt: "媽媽笑著稱讚小歐力用了真正的浩克力量",
    cn: "媽媽笑著說：\n「你剛剛用了\n真正的浩克力量。」",
    en: 'Mom smiled and said,\n"You just used\nreal Hulk power."',
  },
  {
    label: "Page 14",
    image: "./assets/panel_14.png",
    alt: "小歐力睜大眼睛問每天刷牙是不是浩克力量",
    cn: "歐力睜大眼睛問：\n「浩克力量，\n就是每天刷牙嗎？」",
    en: 'Ollie opened his eyes wide and asked,\n"Does Hulk power\nmean brushing every day?"',
  },
  {
    label: "Page 15",
    image: "./assets/panel_15.png",
    alt: "小歐力露出亮亮笑容像真正的小英雄",
    cn: "媽媽說：\n「會照顧自己的人，\n才是真正的小英雄。」",
    en: 'Mom said,\n"The heroes who take care of themselves\nare the real little heroes."',
  },
];

const pageCard = document.querySelector("#pageCard");
const pageImage = document.querySelector("#pageImage");
const cnText = document.querySelector("#cnText");
const enText = document.querySelector("#enText");
const pageLabel = document.querySelector("#pageLabel");
const pageCount = document.querySelector("#pageCount");
const progressBar = document.querySelector("#progressBar");
const prevButtons = [document.querySelector("#prevTop"), document.querySelector("#prevBtn")];
const nextButtons = [document.querySelector("#nextTop"), document.querySelector("#nextBtn")];

let currentPage = 0;

function renderPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  const page = pages[currentPage];

  pageCard.classList.remove("turning");
  window.requestAnimationFrame(() => pageCard.classList.add("turning"));

  pageImage.src = page.image;
  pageImage.alt = page.alt;
  cnText.textContent = page.cn;
  enText.textContent = page.en;
  pageLabel.textContent = page.label;
  pageCount.textContent = `${currentPage + 1} / ${pages.length}`;
  progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;

  prevButtons.forEach((button) => {
    button.disabled = currentPage === 0;
  });
  nextButtons.forEach((button) => {
    button.disabled = currentPage === pages.length - 1;
  });
}

prevButtons.forEach((button) => {
  button.addEventListener("click", () => renderPage(currentPage - 1));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => renderPage(currentPage + 1));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") renderPage(currentPage - 1);
  if (event.key === "ArrowRight") renderPage(currentPage + 1);
});

renderPage(0);
