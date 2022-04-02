const resizeImg = (block, wrapper) => {
  const images = document.querySelectorAll(block);

  const wrapperImg = document.querySelector(wrapper);

  let scrollSize = window.innerWidth - document.documentElement.clientWidth;

  images.forEach((element, index) => {
    element.addEventListener('click', () => {
      wrapperImg.style.display = 'block';

      document.body.style.cssText = `
        overflow: hidden;
        margin-right: ${scrollSize}px;
      `;

      showBigImages(index);
    })
  });

  function hideContent() {
    document.body.style.cssText = `
        overflow: ;
        margin-right: ;
      `;
    wrapperImg.style.display = 'none';
  }

  function showBigImages(index) {

    const x = Math.round(wrapperImg.clientWidth / 2);
    const y = Math.round(wrapperImg.clientHeight / 2);

    const src = images[index].getAttribute('src');

    const bigImg = document.createElement('img');
    bigImg.classList.add('big-img');
    bigImg.src = `${src}`;

    bigImg.style.cssText = `
      position: absolute;
      transition: all .3s;
      width: ${x}px;
      height: ${y}px;
      top: ${y / 2}px;
      left: ${x / 2}px;
      border-radius: 10px;
      z-index: 100;
    `
    wrapperImg.appendChild(bigImg);

    document.addEventListener('click', (e) => {
      e.target.classList.contains('big-img__wrapper') ? hideContent() : null;
    })

  }

}
export default resizeImg;