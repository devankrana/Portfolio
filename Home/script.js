TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".content", 3, {
    delay: 8.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
TweenMax.from("#toogle", 3, {
    delay: 8.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.staggerFrom(".sci li", 2, {
    delay: 8.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

TweenMax.from("#photo", 3, {
    delay: 8.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#know", 3, {
    delay: 9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
TweenMax.from("#navigation", 3, {
    delay: 9,
    opacity: 0,
     y: 20,
     ease: Expo.easeInOut
 });



TweenMax.from("#know", 3, {
    delay: 9.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


var t1 = new TimelineMax();

t1.from(".ringone", 4, {
    delay: 0.4,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
}).from(".ringtwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5").to(".ringone", 4, {
    delay: 0.4,
    x: 40,
    ease: Expo.easeInOut
}).to(".ringtwo", 4, {
    delay: 0.9,
    x: 40,
    ease: Expo.easeInOut
},"-=5");
function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}