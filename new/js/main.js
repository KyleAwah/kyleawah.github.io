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
        y: 20,
        stagger: 0.2,
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
    .from('.reload_holder', {
        y: -20,
        opacity: 0
    })