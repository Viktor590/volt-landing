const question = () => {

  const checkbox = document.querySelectorAll('.calculator-content__checkbox');
  const sendBtn = document.querySelector('.calculator-slider__button--next');

  const errorText = document.querySelector('.calculator-bottom__error--text');
  const contentProgres = document.querySelector('.calculator-progres__num');
  const slides = document.querySelectorAll('.calculator-slider__item--content');


  const currentNumSlides = 100 / slides.length;

  const startNum = 0;




  checkbox.forEach((el, i) => {
    el.addEventListener('change', () => {
      checkbox.forEach((item, k) => {
        item.checked = false;
        if (i == k) {
          item.checked = true;
        }

      })
      if (el.checked) {
        errorText.style.display = 'none';
        sendBtn.removeAttribute('disabled');
      }
    })
  })

  sendBtn.addEventListener('click', () => {
    console.log('hello');
  })

}
export default question;
