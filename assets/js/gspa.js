gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".home-screen",
    { scale: 1.3 },
    {
    scale: 1,
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
    start: "top 80%",
    toggleActions: "restart none none  none",
    markers: false
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    ease: "power3.out",
    stagger: 0.3
}
);

gsap.from([
    ".home-screen__social",
    ".home-screen__link"
    ],
    {
        scrollTrigger: {
        trigger: ".home-screen",
        start: "top 80%",
        toggleActions: "restart none none  none",
        markers: false
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.4,
        ease: "power3.out",
        stagger: 0.3
    }
);

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
    stagger: 0.1,
    ease: "back.out(1.7)"
});
