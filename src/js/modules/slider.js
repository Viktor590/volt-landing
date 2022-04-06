const slider = (leftArrow, rightArrow, img, block) => {
  const arrowLeft = document.querySelectorAll(leftArrow);
  const arrowRight = document.querySelectorAll(rightArrow);
  const container = document.querySelector('.container').offsetWidth;
  const images = document.querySelectorAll(img);
  const wrapper = document.querySelector(block);

  wrapper.addEventListener('touchstart', handleTouchStart)
  wrapper.addEventListener('touchmove', handleTouchMove)
  wrapper.addEventListener('touchend', handleTouchEnd)

  let currentNum = 0;
  let x1 = null;
  let x2 = null;

  const scrollSize = images[0].clientWidth + 20;

  const maxScrollSize = (images.length * scrollSize - container) + scrollSize;

  function scrollSlide(num) {

    if (num > 0) {
      currentNum = 0;
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
  function handleTouchStart(e) {
    x1 = e.touches[0].clientX
  }
  function handleTouchMove(e) {
    x2 = e.touches[0].clientX;
  }
  function handleTouchEnd() {
    let finishSwipe = x1 - x2;
    console.log(finishSwipe);
    if (finishSwipe > 0) {
      scrollSlide(currentNum += -scrollSize)
    } else {
      scrollSlide(currentNum += scrollSize)
    }
  }

}
export default slider;