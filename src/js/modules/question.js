const question = () => {
  const showButton = document.querySelector('.header-top__dscr--button')
  const calcBlock = document.querySelector('.calculator');
  const calcWrapper = document.querySelector('.calculator-wrapper')
  const checkbox = document.querySelectorAll('.input');
  const sendBtn = document.querySelector('.calculator-slider__button--next');
  const errorText = document.querySelector('.calculator-bottom__error--text');
  const contentProgres = document.querySelector('.calculator-progres__num');
  const slides = document.querySelectorAll('.calculator-slider__item--content');
  const progress = document.querySelector('progress');
  const closeButton = document.querySelector('.calculator-close');
  const finishBlock = document.querySelector('.finish-block')


  const currentNumSlides = 100 / slides.length;
  let scrollSize = window.innerWidth - document.documentElement.clientWidth;

  let startNum = 0;
  let slideNum = 0;
  let modalState = {};


  showButton.addEventListener('click', showQuestionBlock)
  closeButton.addEventListener('click', hiddenQuestionBlock)
  showSlides(slideNum)

  function showQuestionBlock() {
    calcBlock.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        `
    document.body.style.cssText = `
      overflow: hidden;
      margin-right:${scrollSize}px;
    `
  }

  function hiddenQuestionBlock() {

    if (finishBlock.style.display == 'flex') {
      location.reload();
    }

    calcBlock.style.display = ''
    document.body.style.cssText = `
      overflow: ;
      margin-right: ;
    `
  }

  function showSlides(num) {
    slides.forEach(el => {
      el.style.display = 'none';
    })
    slides[num].style.display = '';
  }

  checkbox.forEach((el, i) => {
    el.addEventListener('change', () => {
      checkbox.forEach((item, k) => {
        item.checked = false;
        if (i == k) {
          item.checked = true;
        }

      })
      console.log(slideNum);
      if (el.checked) {
        errorText.style.opacity = 0;
        sendBtn.removeAttribute('disabled');
      }
      modalState[i] = el.value;

    })
  });

  function correctProgress() {
    startNum += currentNumSlides;
    contentProgres.textContent = `${startNum.toFixed()}%`
    errorText.style.opacity = 1;
    sendBtn.setAttribute('disabled', 'true');
    progress.value = startNum;
  }

  function createFinishBlock() {
    finishBlock.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        `
  }

  sendBtn.addEventListener('click', () => {
    if (slideNum == slides.length - 1) {
      calcBlock.removeChild(calcWrapper);
      createFinishBlock();

      setTimeout(() => {
        location.reload();
      }, 3000)

      return
    }

    showSlides(slideNum += 1)
    correctProgress()
  })

}
export default question;
