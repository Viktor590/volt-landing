import burgerMenu from "./modules/burgerMenu.js";
import resizeImg from "./modules/resizeImg.js";


window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  resizeImg('.about-block__item--img', '.big-img__wrapper');
  resizeImg('.reviews-content__img', '.big-img__wrapper');
  resizeImg('.work-content__img', '.big-img__wrapper');
  resizeImg('.certificat-content__img', '.big-img__wrapper');

})

