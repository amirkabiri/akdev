window.$ = (selector) => document.querySelector(selector);
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
  const lightBoxStyles = document.createElement('link');
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css';
  link.rel = 'stylesheet';
  document.head.appendChild(lightBoxStyles);

  $("#loading").style.display = "none";
  $("#header-name").classList.add("top-entrance-animation");
  $("#header-hello").classList.add("top-entrance-animation");
  $("#header-job").classList.add("top-entrance-animation");
  await sleep(500);
  $("#header > .container > .right").classList.add("right-entrance-animation");
  await sleep(500);
  $("#header-description").classList.add("bottom-entrance-animation");
};

$$(".box").forEach((box) => {
  const [boxTitle, boxContent] = box.children;
  const boxTitleSpan = boxTitle.children[0];

  const titleHeight = parseInt(getComputedStyle(boxTitleSpan).height);

  boxTitle.style.right = `-${titleHeight}px`;
  boxContent.style.width = `calc(100% - ${titleHeight + 10}px)`;
});

const headerTitleHeight = parseInt(getComputedStyle($("#header .title > span")).height);
$("#header .title").style.right = `-${headerTitleHeight}px`;
$("#header .content").style.width = `calc(100% - ${headerTitleHeight + 10}px)`;

$$(".square").forEach((el) => {
  el.style.height = getComputedStyle(el).width;
});
window.onresize = () =>
  $$(".square").forEach((el) => {
    el.style.height = getComputedStyle(el).width;
  });
