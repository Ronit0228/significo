
function bodycolorChange(){
    document.querySelectorAll(".section")
    .forEach(function(sec){
        ScrollTrigger.create({
            trigger: sec,
            start:  "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme", sec.dataset.color);
            },
    
            onEnterBack: function(){
                document.body.setAttribute("theme", sec.dataset.color);
            }
        })
    })  
}
bodycolorChange();

function locomotiveScroll(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
locomotiveScroll();

function homePageAnimation(){
    gsap.set(".homerows",{scale: 5})

    var timeLines = gsap.timeline({
        scrollTrigger: {
            trigger : ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    })

    timeLines
    .to(".vediodiv", {
        '--clip' : "0%",
        ease: Power2 
    }, 'a')
    .to(".homerows", {
        scale: 1,
        ease: Power2 
    }, 'a')
    .to(".lftm", {
        xPercent: -10,
        stagger : .03,
        ease: Power4
    }, 'b')
    .to(".rgtm", {
        xPercent: 10,
        stagger : .03,
        ease: Power4
    }, 'b')
}
homePageAnimation();

function cardsMove(){
    const cards = document.querySelectorAll('.cards_item');

    function toggleCardStyles() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const middleOfViewport = windowHeight / 2;

    cards.forEach(cards_item => {
        const rect = cards_item.getBoundingClientRect();
        const cardMiddle = (rect.top + rect.bottom) / 2;

        if (cardMiddle < middleOfViewport) {
            cards_item.classList.add('active');
        } else {
            cards_item.classList.remove('active');
        }
    });
    }

    window.addEventListener('scroll', toggleCardStyles);
    toggleCardStyles();
}
cardsMove();

function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    });    
}
realPageAnimation();

function teamPageAnimation(){
    document.querySelectorAll(".listelem")
    .forEach(function(elem){
        elem.addEventListener("mouseenter",function (dets){
            gsap.to(
                this.querySelector(".picture"),{
                    opacity: 1, 
                    x: gsap.utils.mapRange(0, innerWidth, -300, 300, dets.clientX), 
                    ease: Power4, 
                    duration: .4
                }
            )
            gsap.to(
                this.querySelector(".bluelayer"),{
                    opacity: 1, 
                    ease: Power4, 
                    duration: .4
                }
            )
        })

        elem.addEventListener("mouseleave",function (dets){
            gsap.to
                (this.querySelector(".picture"),{
                    opacity: 0, 
                    ease: Power4, 
                    duration: .4
                }
            )
            gsap.to
                (this.querySelector(".bluelayer"),{
                    opacity: 0, 
                    ease: Power4, 
                    duration: .4
                }
            )
        })
    })
}
teamPageAnimation();

function paraAnimation(){
    var clutter = "";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter +=`<span>&nbsp;</span>`;
        clutter +=`<span>${e}</span>`;
    })
    document.querySelector(".textpara").innerHTML = clutter;

    gsap.set(".textpara span", {opacity: .1})
    gsap.to(".textpara span",{
        scrollTrigger: {
            trigger: ".para",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 2,
        },
        color: "var(--blue)",
        opacity: 1,
        stagger: .05,
        ease: Power4
    })

    var clutter = "";
    document.querySelector(".textpara1")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter +=`<span>&nbsp;</span>`;
        clutter +=`<span>${e}</span>`;
    })
    document.querySelector(".textpara1").innerHTML = clutter;

    gsap.set(".textpara1 span", {opacity: .1})
    gsap.to(".textpara1 span",{
        scrollTrigger: {
            trigger: ".para",
            start: "top top",
            end: "bottom 90%",
            scrub: 2,
        },
        color: "var(--purple)",
        opacity: 1,
        stagger: .05,
        ease: Power4
    })
}
paraAnimation();

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

capsuleAnimation();

