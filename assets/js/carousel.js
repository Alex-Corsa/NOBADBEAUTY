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
    track.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

updateTransform(false);

// 🔘 Кнопки
nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateTransform();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateTransform();
});

// 🔁 Циклічність
track.addEventListener('transitionend', () => {
    if (currentIndex >= cards.length - visibleCount) {
        track.style.transition = 'none';
        currentIndex = visibleCount;
        updateTransform(false);
    }

    if (currentIndex < visibleCount) {
        track.style.transition = 'none';
        currentIndex = cards.length - visibleCount * 2;
        updateTransform(false);
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
    
    const movedBy = currentTranslate - prevTranslate;
    const movedCards = Math.round(Math.abs(movedBy) / cardWidth);

    if (movedCards === 0) {
        updateTransform(); // малий рух — повертаємо назад
        return;
    }

    if (movedBy < 0) {
        currentIndex += movedCards; // свайп вліво (вперед)
    } else {
        currentIndex -= movedCards; // свайп вправо (назад)
    }

    updateTransform();
}


function getX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// 🔁 Resize
window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 20;
    visibleCount = Math.floor(container.offsetWidth / cardWidth);
    updateTransform(false);
});


document.querySelectorAll('.carousel__card-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.carousel__card');
        const text = card.querySelector('.carousel__card-text');

        if (text.style.overflow === 'auto') {
        text.style.overflow = 'hidden';
        } else {
        text.style.overflow = 'auto';
        }
    });
});