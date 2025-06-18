 // Реєстрація ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".home-screen",
    { scale: 1.3 },     // початковий стан: збільшене
    {
    scale: 1,         // повернення до нормального
    duration: 1,
    delay: 1.2,
    ease: "power3.out"
    }
);

gsap.from([
    ".home-screen__slogan",
    ".home-screen__slogan-small",
    ".home-screen__btn-link"
],
{
    scrollTrigger: {
    trigger: ".home-screen",
    start: "top 80%", // коли секція на 80% в viewport
    toggleActions: "restart none none  none", // ключовий момент
    markers: false // включи true для налагодження
    },
    x: -100,           // рух зліва направо
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "power3.out",
    stagger: 0.3       // плавна по черзі поява
}
);

gsap.from([
    ".home-screen__social",
    ".home-screen__link"
    ],
{
    scrollTrigger: {
    trigger: ".home-screen",
    start: "top 80%", // коли секція на 80% в viewport
    toggleActions: "restart none none  none", // ключовий момент
    markers: false // включи true для налагодження
    },
    y: 100,           // рух зліва направо
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "power3.out",
    stagger: 0.3       // плавна по черзі поява
}
);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".home-screen__hero span", {
    scrollTrigger: {
        trigger: ".home-screen",
        start: "top 80%",
        toggleActions: "restart none none none"
    },
    y: -100,             // падіння зверху
    opacity: 0,
    duration: 0.8,
    delay: 3.5,
    // ease: "bounce.out",  // ефект "відскоку"
    stagger: 0.1         // з’являються одна за одною
});