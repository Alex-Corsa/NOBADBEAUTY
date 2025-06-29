document.addEventListener('DOMContentLoaded', function () {
    // border-radius для div > img
    document.querySelectorAll('div').forEach(div => {
        const children = div.children;
        if (
            children.length === 1 &&
            children[0].tagName.toLowerCase() === 'img'
        ) {
            div.style.borderRadius = '5px';
        }
    });

    // адаптивний лінк
    const linkElement = document.querySelector('[data-link]'); // виправлено

    function isMobileView() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    function updateLinkHref() {
        if (!linkElement) return;

        if (isMobileView()) {
            linkElement.href = "tel:+48570790975";
        } else {
            linkElement.href = "https://t.me/+380988900260";
        }
    }

    updateLinkHref();
    window.addEventListener('resize', updateLinkHref);
});

// console.log('moving to index', currentIndex, 'cardWidth:', cardWidth);