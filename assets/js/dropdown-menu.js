const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');
const dropdownLists = document.querySelectorAll('[data-dropdown-menu]');
const dropdownItems = document.querySelectorAll('[data-dropdown]');

dropdownButtons.forEach((button, index) => {
    const list = dropdownLists[index];
    const icon = button.querySelector('[data-dropdown-icon]'); // ОНОВЛЕНИЙ селектор

    button.addEventListener('click', (e) => {
        e.stopPropagation();

        const isOpen = list.classList.toggle('submenu-show');

        button.classList.toggle('active', isOpen);
        if (icon) icon.classList.toggle('active', isOpen); // ДОДАЄ клас при відкритті
    });
});

// Закриття при кліку поза елементом
document.addEventListener('click', (e) => {
    dropdownItems.forEach((item, index) => {
        const button = dropdownButtons[index];
        const list = dropdownLists[index];
        const icon = button.querySelector('[data-dropdown-icon]'); // Теж оновлено

        if (!item.contains(e.target)) {
            list.classList.remove('submenu-show');
            button.classList.remove('active');
            if (icon) icon.classList.remove('active');
        }
    });
});

