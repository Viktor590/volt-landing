const resizeImg = (block, wrapper, arrLeft, arrRight) => {
  const images = document.querySelectorAll(block);
  const arrowLeft = document.querySelector(arrLeft);
  const arrowRight = document.querySelector(arrRight);
  const wrapperImg = document.querySelector(wrapper);
  const showArrow = document.querySelector('.tab-arrows__top')

  let scrollSize = window.innerWidth - document.documentElement.clientWidth;
  const trigerClose = document.querySelector('.big-img__close');


  let srcArr = [];
  let currentIndex = 1;

  images.forEach((element, index) => {
    element.addEventListener('click', () => {
      wrapperImg.style.display = 'block';
      currentIndex = index;

      document.body.style.cssText = `
        overflow: hidden;
        margin-right: ${scrollSize}px;
      `;
      images.forEach(el => {
        srcArr.push(el.getAttribute('src'))
      })

      getBlock(srcArr, index);

    })

  });

  function getBlock(elements, index) {
    elements.forEach(el => {
      createImg(el)
    });

    showSlide(index)
  }

  function hideContent() {
    document.body.style.cssText = `
        overflow: '';
        margin-right: '';
      `;
    wrapperImg.style.display = 'none';
    const removeImg = document.querySelectorAll('.big-img');
    removeImg.forEach(el => {
      el.remove()
    })
    currentIndex = 1;
    srcArr = [];
    showArrow.style.display = 'block'
  }

  function createImg(img) {
    const bigImg = document.createElement('img');
    bigImg.classList.add('big-img');
    bigImg.src = img;

    const x = Math.round(wrapperImg.clientWidth / 2);
    const y = Math.round(wrapperImg.clientHeight / 2);

    bigImg.style.cssText = `
      position: absolute;
      width: ${x}px;
      height: ${y}px;
      top: ${y / 2}px;
      left: ${x / 2}px;
      border-radius: 10px;
      z-index: 100;
      object-fit: contain;
    `
    wrapperImg.appendChild(bigImg);
  }


  function showSlide(index) {
    const arrImg = document.querySelectorAll('.big-img');
    if (index < 0) {
      currentIndex = arrImg.length - 1
    } else if (index > arrImg.length - 1) {
      currentIndex = 0
    }

    arrImg.forEach(el => {
      el.style.display = 'none';
    })

    arrImg[currentIndex].style.display = 'block';
    showArrow.style.display = 'none'
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('big-img__arrows') && !e.target.classList.contains('big-img')) {
        hideContent()
      }
    })

  }

  function loga(e) {
    console.log(e.keyCode);
  }

  trigerClose.addEventListener('click', () => {
    hideContent()
  })

  function plusSlides(n) {
    showSlide(currentIndex += n)
  }

  arrowLeft.addEventListener('click', () => {
    plusSlides(-1)
  })

  arrowRight.addEventListener('click', () => {
    plusSlides(1)
  })

}
export default resizeImg;