var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    freeMode: true,
    speed: 900,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    freeMode: true,
    speed: 900,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    freeMode: true,
    speed: 900,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

var swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    freeMode: true,
    speed: 900,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});


var loading = gsap.timeline({
    defaults: {
        duration: 0.8
    }
})

loading
    .from('.name', {
        opacity: 0
    })
    .from('.main_img', {
        y: 20,
        opacity: 0
    })
    .from('.skill_img', {
        y: -20,
        stagger: 0.3,
        opacity: 0
    })
    .from('.skill_txt', {
        y: -20,
        stagger: 0.3,
        opacity: 0
    })
    .from('.small_txt', {
        opacity: 0
    })
    .to('.name', {
        opacity: 0
    })
    .to('.small_txt', {
        opacity: 0
    })
    .to('.skill_txt', {
        opacity: 0
    })
    .to('.skill_img', {
        y: 20,
        stagger: 0.2,
        opacity: 0
    })
    .to('.main_img', {
        opacity: 0
    })
    .to('.loading_screen_holder', {
        opacity: 0,
        display: "none"
    })
    .from('.vert_center', {
        y: -40,
        opacity: 0
    })
    .from('.reload_holder', {
        y: -20,
        opacity: 0
    })