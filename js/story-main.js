"use strict";

(() => {
    let navigation = document.querySelector('.nav');
    let navigationIcons = document.querySelectorAll('.navbar__icon');
    let myNavigation = new Navigation(navigation, navigationIcons);
    myNavigation.Events();
    AOS.init();
    let myTimelineOne = document.querySelectorAll('.story__timeline')[0];
    let myTimelineTwo = document.querySelectorAll('.story__timeline')[1];

    $('.story__timeline:eq(0)').viewportChecker({
        classToRemove: 'story__timeline--inactive',
        callbackFunction: function(elem, action){
            var timeline = anime.timeline();
            timeline.add({
                targets: myTimelineOne.querySelector('.story__line'),
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 600,
                delay: 1200,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: myTimelineOne.querySelector('.story__arrow'),
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 300,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: myTimelineOne.querySelectorAll('.story__circle'),
                scale: [0, 1],
                duration: 300,
                delay: anime.stagger(150),
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineOne.querySelector('.story__article-wrapper'),
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineOne.querySelectorAll('.story__article-headline'),
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineOne.querySelector('.story__article-text'),
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutCubic'
            });

            setTimeout(() => {
                let timelineElement = document.querySelectorAll('.story__timeline')[0];
                let timelineDots = timelineElement.querySelectorAll('.story__circle');
                let timelineArticles = timelineElement.querySelectorAll('.story__article');
                let myTimeline = new Timeline(timelineDots, timelineArticles);
                myTimeline.Events();
                myTimeline.Play();
            }, 2300);
        }
    });

    $('.story__timeline:eq(1)').viewportChecker({
        classToRemove: 'story__timeline--inactive',
        callbackFunction: function(elem, action){
            var timeline2 = anime.timeline();
        
            timeline2.add({
                targets: myTimelineTwo.querySelector('.story__line'),
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 600,
                delay: 1200,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: myTimelineTwo.querySelector('.story__arrow'),
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 300,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: myTimelineTwo.querySelectorAll('.story__circle'),
                scale: [0, 1],
                duration: 300,
                delay: anime.stagger(150),
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineTwo.querySelector('.story__article-wrapper'),
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineTwo.querySelectorAll('.story__article-headline'),
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutCubic'
            })
            .add({
                targets: myTimelineTwo.querySelector('.story__article-text'),
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutCubic'
            });

            setTimeout(() => {        
                let timelineElement = document.querySelectorAll('.story__timeline')[1];
                let timelineDots = timelineElement.querySelectorAll('.story__circle');
                let timelineArticles = timelineElement.querySelectorAll('.story__article');
                let myTimeline = new Timeline(timelineDots, timelineArticles);
                myTimeline.Events();
                myTimeline.Play();
            }, 2300);
        }
    });
})();