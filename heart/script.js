// Избор на елементите
const startHeart = document.querySelector('.js-heart-intro');
const fillHearts = document.querySelectorAll('.js-heart-grow');
const endHeart   = document.querySelector('.js-heart-end');

// Създаваме GSAP timeline с малко закъснение
const introTl = gsap.timeline({ delay: 0.35 });

// Задаваме начални стойности (скала 0)
gsap.set(startHeart, { scale: 0 });
gsap.set(fillHearts,  { scale: 0 });
gsap.set(endHeart,    { scale: 0 });

// Анимираме сърцата
introTl.to(startHeart, { scale: 1.5, duration: 0.6, ease: 'power3.out' });
introTl.to(fillHearts,  { scale: 12, stagger: 0.2, duration: 1.5, ease: 'power3.out' }, '+0.4');
introTl.to(startHeart, { scale: 1, duration: 0.4, ease: 'power3.out' }, '-=1.5');
introTl.to(endHeart,   { scale: 1.3, duration: 0.4, ease: 'power3.out' }, '<=');
