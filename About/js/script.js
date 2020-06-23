const htmlBar=document.querySelector('.bar-html');
const cssBar=document.querySelector('.bar-css');
const jsBar=document.querySelector('.bar-js');
const cBar=document.querySelector('.bar-c');

var t1=new TimelineLite()

t1.fromTo(htmlBar, .75,{width:`0%`},{width:`80%`, ease: Power4.easeOut})
    .fromTo(cssBar, .75,{width:`0%`},{width:`75%`, ease: Power4.easeOut})
    .fromTo(jsBar, .75,{width:`0%`},{width:`60%`, ease: Power4.easeOut})
    .fromTo(cBar, .75,{width:`0%`},{width:`75%`, ease: Power4.easeOut})

 const controller= new ScrollMagic.Controller()
 const scene= new ScrollMagic.Scene(
        {
         triggerElement: '.skills',
         triggerHook: 0
     }
 )
 .setTween(t1)
 .addTo(controller)

 function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}