import burgerMenu from "./modules/burgerMenu.js";
import resizeImg from "./modules/resizeImg.js";
import slider from "./modules/slider.js";

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  resizeImg('.about-block__item--img', '.big-img__wrapper');
  resizeImg('.reviews-content__img', '.big-img__wrapper');
  resizeImg('.work-content__img', '.big-img__wrapper');
  resizeImg('.certificat-content__img', '.big-img__wrapper');
  slider('.reviews-top__arrows--left', '.reviews-top__arrows--right', '.reviews-content__img');
  slider('.work-top__arrows--left', '.work-top__arrows--right', '.work-content__img');
  slider('.certificat-top__arrows--left', '.certificat-top__arrows--right', '.certificat-content__img');

})

