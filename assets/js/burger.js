const header = document.querySelector('[data-header]');
const main = document.querySelector('[data-main]');
const footer = document.querySelector('[data-footer]');
const header_logo = document.querySelector('[data-box-logo]');
const burger = document.querySelector('[data-burger]');
const header_language = document.querySelector('[data-header-language]');
const burger_language = document.querySelector('[data-burger-language]');
const burger_title = document.querySelector('[data-burger-title]');
const burger_nav = document.querySelector('[data-burger-nav]');
const only_burger = document.querySelector('[data-only-burger]');
const burger_social = document.querySelector('[data-burger-social]');

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('active');

    header.classList.toggle('active');
    header_logo.classList.toggle('header__burger-box_logo');
    header_language.classList.toggle('not-burger');
    burger_language.classList.toggle('header__burger-language');
    burger.classList.toggle('header__header-burger');
    burger_nav.classList.toggle('header__nav-burger');
    burger_nav.classList.toggle('active');
    burger_title.classList.toggle('not-burger');
    only_burger.classList.toggle('active');
    burger_social.classList.toggle('active');

    if (isActive) {
        main.style.display = 'none';
        footer.style.display = 'none';
    } else {
        main.style.display = '';
        footer.style.display = '';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1199 && burger.classList.contains('active')) {
        header.classList.remove('active');
        header_logo.classList.remove('header__burger-box_logo');
        header_language.classList.remove('not-burger');
        burger_language.classList.remove('header__burger-language');
        burger.classList.remove('active');
        burger.classList.remove('header__header-burger');
        burger_nav.classList.remove('header__nav-burger');
        burger_nav.classList.remove('active');
        burger_title.classList.remove('not-burger');
        only_burger.classList.remove('active');
        burger_social.classList.remove('active');

        // Показуємо main і footer при ресайзі
        main.style.display = '';
        footer.style.display = '';
    }
});
