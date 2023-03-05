gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

var typingEffect = new Typed(".multiText",{
    strings:["coder","engineer","designer","creator"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay: 1500,
})



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

    let tmp = gsap.utils.toArray('.projects')

    tmp.forEach(item => {
        gsap.fromTo(item, { opacity: 0, y: -50 }, {
            opacity: 1, y: 0,
            scrollTrigger: {
                trigger: item,
                start: '-600',
                end: '-100',
                scrub: true
            }
        })
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







// var typingEffect2 = new Typed(".projects",{
//     strings:["My projects"],
//     loop:false,
//     typeSpeed:100,
//     backSpeed:80,
//     backDelay: 1500
// })