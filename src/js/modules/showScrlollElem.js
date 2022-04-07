const showScrlollElem = () => {
  const arrow = document.querySelector('.tab-arrows__top')

  let height = window.innerHeight;

  document.addEventListener('scroll', (e) => {

    if (e.target.scrollingElement.scrollTop > height) {
      arrow.style.display = 'block'
    } else {
      arrow.style.display = 'none'
    }

  })
}
export default showScrlollElem;