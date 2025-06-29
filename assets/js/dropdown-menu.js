// Отримуємо всі основні елементи-контейнери випадаючих списків
const dropdownItems = document.querySelectorAll('[data-dropdown]');

// --- Логіка для відкриття/закриття випадаючих списків при кліку на кнопку ---
dropdownItems.forEach(item => {
    // Знаходимо кнопку, список та іконку ВЖЕ ВСЕРЕДИНІ цього конкретного елемента випадаючого списку
    const button = item.querySelector('[data-dropdown-toggle]');
    const list = item.querySelector('[data-dropdown-menu]');
    const icon = button ? button.querySelector('[data-dropdown-icon]') : null; // Шукаємо іконку всередині кнопки

    // Перевіряємо, чи існують усі необхідні частини для цього випадаючого списку
    if (!button || !list) {
        console.warn('Пропускаємо елемент випадаючого списку через відсутність кнопки перемикання або списку меню:', item);
        return; // Пропускаємо цей елемент, якщо основні частини відсутні
    }

    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Запобігаємо негайному закриттю випадаючого списку через обробник кліків на документі

        const isOpen = list.classList.toggle('submenu-show');
        button.classList.toggle('active', isOpen);
        if (icon) icon.classList.toggle('active', isOpen);

        // Додатково: Закриваємо інші відкриті випадаючі списки, коли відкривається один
        dropdownItems.forEach(otherItem => {
            if (otherItem !== item) { // Якщо це не поточний елемент
                const otherList = otherItem.querySelector('[data-dropdown-menu]');
                const otherButton = otherItem.querySelector('[data-dropdown-toggle]');
                const otherIcon = otherButton ? otherButton.querySelector('[data-dropdown-icon]') : null;

                if (otherList && otherList.classList.contains('submenu-show')) {
                    otherList.classList.remove('submenu-show');
                    if (otherButton) otherButton.classList.remove('active');
                    if (otherIcon) otherIcon.classList.remove('active');
                }
            }
        });
    });
});

// --- Логіка для закриття випадаючих списків при кліку поза їх межами ---
document.addEventListener('click', (e) => {
    dropdownItems.forEach(item => {
        // Якщо ціль кліку НЕ знаходиться всередині поточного елемента випадаючого списку ('item')
        if (!item.contains(e.target)) {
            const list = item.querySelector('[data-dropdown-menu]');
            const button = item.querySelector('[data-dropdown-toggle]');
            const icon = button ? button.querySelector('[data-dropdown-icon]') : null; // Перевіряємо кнопку перед запитом іконки

            // Намагаємося видалити класи лише якщо елементи існують і випадаючий список відкритий
            if (list && list.classList.contains('submenu-show')) {
                list.classList.remove('submenu-show');
                if (button) button.classList.remove('active');
                if (icon) icon.classList.remove('active');
            }
        }
    });
});