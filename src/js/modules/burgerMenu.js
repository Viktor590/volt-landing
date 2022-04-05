const burgerMenu = () => {
  const buttonBurger = document.querySelector('.header-burger');

  const menuBurger = document.querySelector('.header-burger__menu');

  const container = document.querySelector('.container');

  const navigationLinks = document.querySelectorAll('.header-top__nav--link')


  buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.contains('active') ?
      hiddenMenu() : showMenu()

  })

  navigationLinks.forEach(element => {
    element.addEventListener('click', () => {
      hiddenMenu()
    })
  });

  function showMenu() {
    buttonBurger.classList.add('active');
    menuBurger.style.display = 'flex';
    container.style.paddingRight = '0';
    document.body.style.overflow = 'hidden';

  }

  function hiddenMenu() {
    buttonBurger.classList.remove('active');
    menuBurger.style.display = '';
    container.style.paddingRight = '';
    document.body.style.overflow = '';
  }

}
export default burgerMenu;