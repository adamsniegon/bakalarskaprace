"use strict";

(() => {
    let navigation = document.querySelector('.nav');
    let navigationIcons = document.querySelectorAll('.navbar__icon');
    let myNavigation = new Navigation(navigation, navigationIcons);
    myNavigation.Events();
    let card = document.querySelectorAll('.tools__card');
    let leftArrow = document.querySelector('.tools__arrow-left');
    let rightArrow = document.querySelector('.tools__arrow-right');
    let myCard = new Card(card, leftArrow, rightArrow);
    myCard.Events();
    AOS.init();
    
    
    const tween = gsap.timeline()
    .to('.hero__image-screen', {
        opacity: 1,
        duration: 3
    })
    .to('.hero__image-code', {
        y: 0,
        duration: 3,
        ease: SteppedEase.config(12)
    })
    .to('.hero__image-success', {
        opacity: 1,
        duration: 1
    });

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: '.header-wrapper',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(tween)
    .setPin('.header-wrapper')
    .addTo(controller);
})();