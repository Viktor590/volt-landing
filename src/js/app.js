import burgerMenu from "./modules/burgerMenu.js";
import sendForm from "./modules/form.js";
import resizeImg from "./modules/resizeImg.js";
import slider from "./modules/slider.js";
import tabs from "./modules/tabs.js";
import calculator from './modules/calculator.js';
import question from './modules/question.js';

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  resizeImg('.about-block__item--img', '.big-img__wrapper', '.big-img__arrows--left', '.big-img__arrows--right');
  resizeImg('.reviews-content__img', '.big-img__wrapper', '.big-img__arrows--left', '.big-img__arrows--right');
  resizeImg('.work-content__img', '.big-img__wrapper', '.big-img__arrows--left', '.big-img__arrows--right');
  resizeImg('.certificat-content__img', '.big-img__wrapper', '.big-img__arrows--left', '.big-img__arrows--right');
  slider('.reviews-top__arrows--left', '.reviews-top__arrows--right', '.reviews-content__img');
  slider('.work-top__arrows--left', '.work-top__arrows--right', '.work-content__img');
  slider('.certificat-top__arrows--left', '.certificat-top__arrows--right', '.certificat-content__img');
  tabs();
  sendForm('.consultation-content__form', '.consultation-content__input', '.consultation-content');
  calculator();
  question();
})

