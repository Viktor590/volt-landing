const tabs = () => {
  const trigerTabs = document.querySelectorAll('.question-tabs__block');

  const hiddenContent = document.querySelectorAll('.question-tabs__block--hidden');

  const tabsArrow = document.querySelectorAll('.question-tabs__block--img');
  let showIndex = null;

  function showContent(index) {
    hiddenContent[index].style.display = 'block';
    tabsArrow[index].style.transform = 'rotate(180deg)';
  }

  trigerTabs.forEach((el, index) => {

    el.addEventListener('click', () => {

      hiddenContent.forEach(el => {
        el.style.display = 'none';
      });

      tabsArrow.forEach(el => {
        el.style.transform = 'rotate(0deg)';
      })
      if (index === showIndex) {
        showIndex = null;
        return
      }
      showIndex = index;

      showContent(index);

    })
  })


}
export default tabs;