const header = document.querySelector('[data-header-main]')
const header_burger = document.querySelector('[data-header]');
const header_logo = document.querySelector('[data-box-logo]');
const burger = document.querySelector('[data-burger]');
const header_language= document.querySelector('[data-header-language]')
const burger_language= document.querySelector('[data-burger-language]')
const burger_title = document.querySelector('[data-burger-title]');
const burger_nav = document.querySelector('[data-burger-nav]');
const only_burger = document.querySelector('[data-only-burger]');
const burger_social = document.querySelector('[data-burger-social]');

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  header_burger.classList.toggle('header__header-burger');
  header_logo.classList.toggle('header__burger-box_logo')
  header_language.classList.toggle('not-burger')
  burger_language.classList.toggle('header__burger-language')
  burger.classList.toggle('active');
  burger_nav.classList.toggle('header__nav-burger');
  burger_nav.classList.toggle('active');
  burger_title.classList.toggle('not-burger');
  only_burger.classList.toggle('active');
  burger_social.classList.toggle('active');
});

// const toggleClasses = [
//   [header_burger, 'header__header-burger'],
//   [header_logo, 'header__burger-box_logo'],
//   [burger_language, 'header__burger-language'],
//   [burger, 'active'],
//   [burger_nav, 'header__nav-burger'],
//   [burger_nav, 'active'],
//   [burger_title, 'active'],
// ];

// burger.addEventListener('click', () => {
//   toggleClasses.forEach(([element, className]) => {
//     if (element) {
//       element.classList.toggle(className);
//     }
//   });

//   // accessibility — оновити aria-expanded
//   const expanded = burger.classList.contains('active');
//   burger.setAttribute('aria-expanded', expanded);
// });