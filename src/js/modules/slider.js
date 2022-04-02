const slider = (leftArrow, rightArrow, img) => {
  const arrowLeft = document.querySelectorAll(leftArrow);
  const arrowRight = document.querySelectorAll(rightArrow);
  const container = document.querySelector('.container').offsetWidth;

  const images = document.querySelectorAll(img);

  let currentNum = 0;

  const scrollSize = images[0].clientWidth + 20;

  const maxScrollSize = images.length * scrollSize - container;


  function scrollSlide(num) {

    if (num > 0) {
      currentNum = 0
    } else if (Math.abs(num) > maxScrollSize) {
      currentNum = -maxScrollSize
    }

    images.forEach(element => {
      element.style.left = `${currentNum
        }px`
    });
  }

  arrowLeft.forEach(elem => {
    elem.addEventListener('click', () => {
      scrollSlide(currentNum += scrollSize)
    })
  })

  arrowRight.forEach(elem => {
    elem.addEventListener('click', () => {
      scrollSlide(currentNum += -scrollSize)
    })
  })




}
export default slider;