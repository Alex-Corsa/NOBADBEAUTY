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

const trainingHeader = document.querySelectorAll('[data-training-header]');
const trainingButtonClosing = document.querySelectorAll('[data-training-btn-closing]');
const trainingButtonOpen = document.querySelectorAll('[data-training-btn-open]');
const trainingBodyCloset = document.querySelectorAll('[data-training-body-closet]');
const trainingBodyOpen = document.querySelectorAll('[data-training-body-open]');
const trainingBoxImg = document.querySelectorAll('[data-training-box-img]');
const trainingImg = document.querySelectorAll('[data-training-img]');


// Відкриття
trainingButtonOpen.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        trainingBodyCloset[index].classList.remove('active');
        trainingBoxImg[index].classList.remove('active');
        trainingImg[index].classList.remove('active'); // зображення повне
        resetImageTransform(index); // Скинути transform
        trainingHeader[index].classList.add('active');
        trainingBodyOpen[index].classList.add('active');
    });
});

// Закриття
trainingButtonClosing.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        trainingHeader[index].classList.remove('active');
        trainingBodyOpen[index].classList.remove('active');
        trainingImg[index].classList.add('active'); // додали клас -> буде згорнуте
        trainingBodyCloset[index].classList.add('active');
        trainingBoxImg[index].classList.add('active');

        adjustImageTransform(index); // застосовуємо transform
    });
});



function adjustImageTransform(index) {
    const container = trainingBoxImg[index];
    const image = trainingImg[index];

    // Якщо вже обчислено — використовуємо кеш
    if (image.dataset.transformed === 'true') {
        image.style.transform = image.dataset.transform;
        return;
    }

    image.style.transform = 'none';

    requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();

        const scaleX = containerRect.height / imageRect.width;
        const scaleY = containerRect.width / imageRect.height;
        const translateY = -imageRect.height;

        const transformString = `rotate(90deg) scale(${scaleX}, ${scaleY}) translate(0px, ${translateY}px)`;

        image.style.transformOrigin = 'left top';
        image.style.transform = transformString;

        image.dataset.transformed = 'true';
        image.dataset.transform = transformString;
    });
}


function resetImageTransform(index) {
    const image = trainingImg[index];
    image.style.transform = 'none';

    // Скидаємо кешовані значення, щоб при наступному відкритті обчислювалось заново
    delete image.dataset.transformed;
    delete image.dataset.transform;
}

