 // Реєстрація ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".home-screen",
    { scale: 1.3 },     // початковий стан: збільшене
    {
    scale: 1,         // повернення до нормального
    duration: 1.5,
    delay: 0.4,
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
    duration: 1.5,
    delay: 0.4,
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
    duration: 1.5,
    delay: 0.4,
    ease: "power3.out",
    stagger: 0.3       // плавна по черзі поява
}
);

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".home-screen__hero span", {
//     scrollTrigger: {
//         trigger: ".home-screen",
//         start: "top 80%",
//         toggleActions: "restart none none none"
//     },
//     y: -100, // падіння зверху
//     opacity: 0,
//     duration: 1.5,
//     delay: 0.8,
//     // ease: "bounce.out",  // ефект "відскоку"
//     // stagger: 0.1         // з’являються одна за одною
//     stagger: (index, target, list) => {
//     const middle = (list.length - 1) / 2;
//     return Math.abs(index - middle) * 0.1;
//     }
// });

gsap.from(".home-screen__hero span", {
  scrollTrigger: {
    trigger: ".home-screen",
    start: "top 80%",
    toggleActions: "restart none none none"
  },
  rotationX: -90,
  opacity: 0,
  transformOrigin: "top center",
  duration: 1.5,
  delay: 0.8,
  stagger: 0.1, // 🔄 звичайна послідовність зліва направо
  ease: "back.out(1.7)"
});
