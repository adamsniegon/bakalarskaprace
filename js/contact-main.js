"use strict";

(() => {
    let navigation = document.querySelector('.nav');
    let navigationIcons = document.querySelectorAll('.navbar__icon');
    let myNavigation = new Navigation(navigation, navigationIcons);
    myNavigation.Events();
    AOS.init();
})();