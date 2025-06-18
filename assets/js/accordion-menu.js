const accordionButtons = document.querySelectorAll('[data-btn-accordion]');
const accordionIcons = document.querySelectorAll('[data-icon-accordion]');
const accordionLists = document.querySelectorAll('[data-list-accordion]');

// for page price

accordionButtons.forEach((button, index) => {
    const icon = accordionIcons[index];
    const list = accordionLists[index];

    button.addEventListener('click', () => {
        const isOpen = list.classList.toggle('active');

        icon.classList.toggle('active', isOpen);
        button.classList.toggle('active', isOpen);
    });
});

// for page training

// ===================== DOM-збірники =====================
const trainingHeader      = document.querySelectorAll('[data-training-header]');
const trainingBtnClose    = document.querySelectorAll('[data-training-btn-closing]');
const trainingBtnOpen     = document.querySelectorAll('[data-training-btn-open]');
const trainingBodyClosed  = document.querySelectorAll('[data-training-body-closet]');
const trainingBodyOpen    = document.querySelectorAll('[data-training-body-open]');
const trainingBoxImg      = document.querySelectorAll('[data-training-box-img]');
const trainingImg         = document.querySelectorAll('[data-training-img]');

// ===================== початковий розрахунок масштабу =====================
window.addEventListener('load', () => {
    trainingImg.forEach((_, i) => {
        setScaleVars(i);

      // Додаємо клас transition-enabled пізніше — після стартового стилю
        requestAnimationFrame(() => {
            trainingImg[i].classList.add('transition-enabled');
        });
    });

    window.addEventListener('resize', throttle(() => {
        trainingImg.forEach((_, i) => setScaleVars(i, true));
    }, 150));
});

// ===================== логіка відкриття / закриття =====================
trainingBtnOpen.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        trainingBodyClosed[i].classList.remove('active');
        trainingBoxImg[i].classList.remove('active');
        trainingImg[i].classList.remove('active'); // показуємо повне фото
        trainingHeader[i].classList.add('active');
        trainingBodyOpen[i].classList.add('active');
    });
});

trainingBtnClose.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        trainingHeader[i].classList.remove('active');
        trainingBodyOpen[i].classList.remove('active');
        trainingImg[i].classList.add('active'); // додаємо  клас active
        trainingBodyClosed[i].classList.add('active');
        trainingBoxImg[i].classList.add('active');
        /* тут вже не треба нічого рахувати – scale-змінні задані */
    });
});

// ===================== встановлення CSS-змінних =====================
function setScaleVars(index, force = false) {
    const img = trainingImg[index];
    if (!force && img.dataset.scaleReady === 'true') return;

    const ready = () => {
        const boxRect = trainingBoxImg[index].getBoundingClientRect();
        const nW = img.naturalWidth;
        const nH = img.naturalHeight;

        const scaleX = boxRect.width / nH;
        const scaleY = boxRect.height / nW;

        // Візьмемо максимальне, щоб покрити контейнер повністю
        const scale = Math.max(scaleX, scaleY);

        img.style.setProperty('--scale-x', scale);
        img.style.setProperty('--scale-y', scale);
        img.dataset.scaleReady = 'true';
    };

    if (img.complete) {
        ready();
    } else {
        img.addEventListener('load', ready, { once: true });
    }
}