gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

var typingEffect = new Typed(".multiText",{
    strings:["coder","engineer","designer","creator"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay: 1500,
})



if(window.screen.width < 992){

    document.querySelector(".wrapper").style.width = "calc(var(--index) * 1)";
    document.querySelector(".container").style.width = "calc(var(--index) * 30)";

    document.querySelector(".navItems").style.visibility = "hidden";
    document.querySelector(".links").style.visibility = "hidden";

    document.querySelector(".logo").style.left = "calc(var(--index) * 40)";


    document.querySelector(".cols").style.top = "calc(var(--index) * 12)";
    document.querySelector(".cols").style.width = "calc(var(--index) * 15)";
    document.querySelector(".cols").style.left = "calc(var(--index) * 2)";

    document.querySelector(".cols1").style.left = "calc(var(--index) * 11)";
    document.querySelector(".cols1").style.top = "calc(var(--index) * 9)";
    document.querySelector(".container").style.overflow = "hidden";
    document.querySelector(".imgbox").style.overflow = "hidden";

    document.querySelector(".imgbox #hr").style.width = "calc(var(--index) * 21)";
    document.querySelector(".imgbox #hr").style.left = "calc(var(--index) * 9)";
    document.querySelector(".imgbox #hr").style.overflow = "hidden";
    document.querySelector(".imgbox #hr").style.animation = "animateUser_small 4s linear infinite";

    document.querySelector(".imgbox #splash").style.width = "calc(var(--index) * 20)";
    document.querySelector(".imgbox #splash").style.left = "calc(var(--index) * 15)";
    document.querySelector(".imgbox #splash").style.animation = "animate_small 4s linear infinite";

    document.querySelector(".wrapper").style.height = "calc(100vh - (calc(var(--index) * 48)))";


    var styleSr = document.head.appendChild(document.createElement("style"));
    styleSr.innerHTML = ".wrapper::before {width:calc(var(--index) * 15); height:calc(var(--index) * 15);}";


    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".cols1:after {width:calc(var(--index) * 10); height:calc(var(--index) * 10); left:calc(var(--index) * 10.5); animation: object3_small 6s linear infinite;}";


    document.querySelector(".gallery__left").style.width = "calc(var(--index) * 10)";
    document.querySelector(".gallery__right").style.width = "calc(var(--index) * 10)";


    var styleimg = document.head.appendChild(document.createElement("style"));
    styleimg.innerHTML = ".gallery__item {width:calc(var(--index) * 15); margin-top: calc(var(--index) * 1); z-index: -99;}";


    var styletxt = document.head.appendChild(document.createElement("style"));
    styletxt.innerHTML = ".text-block__h {font-size::calc(var(--index) * 1.5); line-height:calc(var(--index) * 0.75);}";
    var styletxt_a = document.head.appendChild(document.createElement("style"));
    styletxt_a.innerHTML = ".text-block__p {font-size::calc(var(--index) * 0.5); line-height:calc(var(--index) * 2); z-index: 99;}";




    document.querySelector("footer").style.width = "calc(var(--index) * 30)";

    document.querySelector(".projects").style.width = "calc(var(--index) * 30)";

    document.querySelector(".container2").style.width = "calc(var(--index) * 30)";
    document.querySelector("nav").style.width = "calc(var(--index) * 30)";
    document.querySelector("nav i").style.display = "block";
    document.querySelector("nav i").style.marginLeft = "calc(var(--index) * -5)";
    document.querySelector("nav i").style.marginTop = "calc(var(--index) * 0.5)";
    document.querySelector(".logo").style.marginLeft = "calc(var(--index) * 2)";

}


if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper__main',
        content: '.content__main',
        smooth: 1.5,
        effects: true
    })


    gsap.fromTo('.wrapper', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.wrapper',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: 'top',
                scrub: true
            }
        })
    })

}



const togglebtn = document.querySelector(".toggle_btn")
const togglebtnicon = document.querySelector("nav i")
const toggledropmenu = document.querySelector(".dropmenu")

togglebtnicon.onclick = function (){
    toggledropmenu.classList.toggle('open')

    // togglebtnicon.classList = isOpen
    //     ? 'fa-solid fa-xmark'
    //     : 'fa-solid fa-bars'

}
