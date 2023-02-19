window.$select = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);
const sleep = (miliSeconds) => new Promise((resolve) => setTimeout(resolve, miliSeconds));

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.onscroll = function () {};

// header animation
window.onload = async function () {
  $select("#loading").style.display = "none";
  $select("#header-name").classList.add("top-entrance-animation");
  $select("#header-hello").classList.add("top-entrance-animation");
  $select("#header-job").classList.add("top-entrance-animation");
  await sleep(500);
  $select("#header > .container > .right").classList.add("right-entrance-animation");
  await sleep(500);
  $select("#header-description").classList.add("bottom-entrance-animation");

  const lightBoxStyles = document.createElement('link');
  lightBoxStyles.href = 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css';
  lightBoxStyles.rel = 'stylesheet';
  document.head.appendChild(lightBoxStyles);
};

$$(".box").forEach((box) => {
  const [boxTitle, boxContent] = box.children;
  const boxTitleSpan = boxTitle.children[0];

  const titleHeight = parseInt(getComputedStyle(boxTitleSpan).height);

  boxTitle.style.right = `-${titleHeight}px`;
  boxContent.style.width = `calc(100% - ${titleHeight + 10}px)`;
});

const headerTitleHeight = parseInt(getComputedStyle($select("#header .title > span")).height);
$select("#header .title").style.right = `-${headerTitleHeight}px`;
$select("#header .content").style.width = `calc(100% - ${headerTitleHeight + 10}px)`;

$$(".square").forEach((el) => {
  el.style.height = getComputedStyle(el).width;
});
window.onresize = () =>
  $$(".square").forEach((el) => {
    el.style.height = getComputedStyle(el).width;
  });
