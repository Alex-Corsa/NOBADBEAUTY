document.querySelectorAll('div').forEach(div => {
    const children = div.children;
    if (
        children.length === 1 &&
        children[0].tagName.toLowerCase() === 'img'
    ) {
        div.style.borderRadius = '5px';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const linkElements = document.querySelector('data-link');

    function isMobileView() {
        return window.matchMedia("(max-width: 768px)").matches;

    }

    function updateLinkHref() {
        if (isMobileView()) {
            linkElements.href = "tel:+48570790975";
        } else {
            linkElements.href = "https://t.me/+380988900260";
        }
    }

    updateLinkHref();

    window.addEventListener('resize', updateLinkHref);
});
