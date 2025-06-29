const track = document.querySelector('.carousel__track');
const container = document.querySelector('.carousel__track-container');
const nextBtn = document.querySelector('.carousel__btn--next');
const prevBtn = document.querySelector('.carousel__btn--prev');

let cards = Array.from(track.children);
let cardWidth = cards[0].offsetWidth + 20;
let visibleCount = Math.floor(container.offsetWidth / cardWidth);
let isDragging = false;
let startX, currentTranslate, prevTranslate, animationID;
let currentIndex = visibleCount;

// 🔁 Клонуємо для циклічності
for (let i = 0; i < visibleCount; i++) {
    const firstClone = cards[i].cloneNode(true);
    const lastClone = cards[cards.length - 1 - i].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, track.firstChild);
}
cards = Array.from(track.children);

function updateTransform(animate = true) {
    cards = Array.from(track.children);
    cardWidth = cards[0].offsetWidth + 20;
    track.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

updateTransform(false);

// 🔘 Кнопки
nextBtn.addEventListener('click', () => {
    currentIndex++;
    console.log('currentIndex++:', currentIndex);
    console.log('clicked movedCards вправо');
    updateTransform();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateTransform();
    console.log('currentIndex++:', currentIndex);
    console.log('clicked movedCards вліво');
});

// 🔁 Циклічність
track.addEventListener('transitionend', () => {
    if (currentIndex >= cards.length - visibleCount) {
        track.style.transition = 'none';
        currentIndex = visibleCount;
        updateTransform(false);
        console.log('Перехід з кінця до початку. Новий currentIndex:', currentIndex);
    }

    if (currentIndex < visibleCount) {
        track.style.transition = 'none';
        currentIndex = cards.length - visibleCount -1;
        updateTransform(false);
        console.log('Перехід з початку до кінця. Новий currentIndex:', currentIndex);
    }
});

// 🐭 Drag/swipe логіка
container.addEventListener('mousedown', dragStart);
container.addEventListener('touchstart', dragStart);

container.addEventListener('mousemove', dragMove);
container.addEventListener('touchmove', dragMove);

container.addEventListener('mouseup', dragEnd);
container.addEventListener('mouseleave', dragEnd);
container.addEventListener('touchend', dragEnd);

function dragStart(e) {
    isDragging = true;
    startX = getX(e);
    prevTranslate = -cardWidth * currentIndex;
    track.style.transition = 'none';
}

function dragMove(e) {
    if (!isDragging) return;
    const currentX = getX(e);
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;

    if (isNaN(currentTranslate) || currentTranslate === undefined) {
        updateTransform();
        return;
    }

    const movedBy = currentTranslate - prevTranslate;

    if (isNaN(movedBy)) {
        updateTransform();
        return;
    }

    // Розраховуємо кількість карток, на яку відбувся зсув
    const movedCards = Math.round(Math.abs(movedBy) / cardWidth);

    // Якщо зсув був менше половини картки, повертаємося на поточну картку
    if (movedCards === 0) {
        updateTransform();
        return;
    }

    // Оновлюємо currentIndex залежно від напрямку перетягування
    if (movedBy < 0) {
        currentIndex += movedCards;
        console.log('Moved cards to the left (currentIndex increased)');
    } else {
        currentIndex -= movedCards;
        console.log('Moved cards to the right (currentIndex decreased)');
    }

    // Застосовуємо нове перетворення для відображення
    updateTransform();
}

function getX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// 🔁 Resize
window.addEventListener('resize', () => {
    cards = Array.from(track.children);
    cardWidth = cards[0].offsetWidth + 20;
    visibleCount = Math.floor(container.offsetWidth / cardWidth);
    updateTransform(false);
});

// 📌 Розгортання "Читати далі"
document.querySelectorAll('.carousel__card-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.carousel__card');
        const text = card.querySelector('.carousel__card-text');
        if (!text) return;

        text.classList.toggle('expanded');

        if (text.classList.contains('expanded')) {
            text.style.maxHeight = '300px';
            text.style.overflow = 'auto';
        } else {
            text.style.maxHeight = '120px';
            text.style.overflow = 'hidden';
        }

        // Перерахунок після зміни контенту
        updateTransform(false);
    });
});
