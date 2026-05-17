const pages = [
  {
    label: "Cover",
    image: "./assets/panel_00.png",
    alt: "小歐力站在沙發上擺出蜘蛛小英雄姿勢",
    cn: "小小蜘蛛英雄歐力，不用打人",
    en: "Little Spider Hero Ollie, No Hitting Needed",
  },
  {
    label: "Page 1",
    image: "./assets/panel_01.png",
    alt: "小歐力準備當蜘蛛小英雄",
    cn: "今天，歐力要當蜘蛛小英雄！",
    en: "Today, Ollie wanted to be a little spider hero!",
  },
  {
    label: "Page 2",
    image: "./assets/panel_02.png",
    alt: "小歐力在客廳跑來跑去",
    cn: "他跑來跑去，大聲說：\n「我是蜘蛛小英雄！」",
    en: 'He ran all around and shouted,\n"I am a little spider hero!"',
  },
  {
    label: "Page 3",
    image: "./assets/panel_03.png",
    alt: "小歐力在沙發上比出發射蜘蛛絲姿勢",
    cn: "歐力跳上沙發，\n比出發射蜘蛛絲的姿勢。",
    en: "Ollie jumped onto the sofa\nand struck his web-shooting pose.",
  },
  {
    label: "Page 4",
    image: "./assets/panel_04.png",
    alt: "弟弟碰到小歐力的玩具",
    cn: "可是這時候，\n弟弟碰到了他的玩具。",
    en: "But then,\nhis little brother touched his toy.",
  },
  {
    label: "Page 5",
    image: "./assets/panel_05.png",
    alt: "小歐力覺得很生氣",
    cn: "歐力的臉皺起來，\n手也握得緊緊的。\n他好生氣。",
    en: "Ollie's face scrunched up,\nand his hands squeezed tight.\nHe felt very angry.",
  },
  {
    label: "Page 6",
    image: "./assets/panel_06.png",
    alt: "小歐力差一點推人但停住了",
    cn: "他差一點就要推人了。",
    en: "He almost pushed someone.",
  },
  {
    label: "Page 7",
    image: "./assets/panel_07.png",
    alt: "小歐力聽見心裡的英雄聲音",
    cn: "這時候，\n歐力心裡有個小小的英雄聲音說：\n「真正的英雄，先停一下。」",
    en: 'Just then,\na little hero voice inside Ollie said,\n"A real hero pauses first."',
  },
  {
    label: "Page 8",
    image: "./assets/panel_08.png",
    alt: "小歐力閉上眼睛深呼吸",
    cn: "歐力吸一口氣，\n吐一口氣，\n再慢慢吸一口氣。",
    en: "Ollie breathed in,\nbreathed out,\nand took one more slow breath.",
  },
  {
    label: "Page 9",
    image: "./assets/panel_09.png",
    alt: "小歐力用話說出自己的感受",
    cn: "然後他說：\n「我很生氣，\n因為那是我最喜歡的玩具。」",
    en: 'Then he said,\n"I feel angry\nbecause that is my favorite toy."',
  },
  {
    label: "Page 10",
    image: "./assets/panel_10.png",
    alt: "媽媽微笑稱讚小歐力用了真正的超能力",
    cn: "媽媽笑著說：\n「你剛剛用了真正的超能力。」",
    en: 'Mom smiled and said,\n"You just used a real superpower."',
  },
  {
    label: "Page 11",
    image: "./assets/panel_11.png",
    alt: "小歐力低頭看自己的手腕",
    cn: "歐力低頭看看手腕。\n「咦？我有發射蜘蛛絲嗎？」",
    en: 'Ollie looked down at his wrists.\n"Huh? Did I shoot any spider webs?"',
  },
  {
    label: "Page 12",
    image: "./assets/panel_12.png",
    alt: "媽媽和小歐力坐在一起說話",
    cn: "媽媽說：\n「會控制自己的人，\n才是真正厲害的英雄。」",
    en: 'Mom said,\n"The heroes who can control themselves\nare the strongest of all."',
  },
  {
    label: "Page 13",
    image: "./assets/panel_13.png",
    alt: "小歐力把玩具分給弟弟一起玩",
    cn: "歐力想了想，\n把玩具分給弟弟一起玩。",
    en: "Ollie thought for a moment\nand shared the toy with his little brother.",
  },
  {
    label: "Page 14",
    image: "./assets/panel_14.png",
    alt: "兄弟兩人開心一起玩",
    cn: "弟弟笑了，\n歐力也笑了。",
    en: "His little brother smiled,\nand Ollie smiled too.",
  },
  {
    label: "Page 15",
    image: "./assets/panel_15.png",
    alt: "小歐力像真正的小英雄一樣站著",
    cn: "今天，\n歐力沒有打人。\n今天，\n他成了真正的小英雄。",
    en: "Today,\nOllie did not hit.\nToday,\nhe became a real little hero.",
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
