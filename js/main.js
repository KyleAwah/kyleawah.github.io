var loading = gsap.timeline({
    defaults: {
        duration: 0.7
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
    .from('.reload_holder', {
        opacity: 0,
    })


var main_ani = gsap.timeline({
    scrollTrigger: {
        trigger: '#left_content',
        start: "-100px top",
        end: "11890px bottom",
        //markers: true,
        scrub: true,
        pin: true,
        toggleActions: "restart pause reverse reverse"
    }
})



gsap.registerPlugin(ScrollTrigger);

const titles = [
    { title: "#title_1", index: "#index_1" },
    { title: "#title_2", index: "#index_2" },
    { title: "#title_3", index: "#index_3" },
    { title: "#title_4", index: "#index_4" },
    { title: "#title_5", index: "#index_5" },
    { title: "#title_6", index: "#index_6" },
    { title: "#title_7", index: "#index_7" },
    { title: "#title_8", index: "#index_8" },
];

let activeIndex = null;

titles.forEach(({ title, index }, i) => {
    ScrollTrigger.create({
        trigger: title,
        start: "top 80%",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
        onLeave: () => resetActiveIndex(i),
        onLeaveBack: () => resetActiveIndex(i)
    });
});

function setActiveIndex(index) {
    if (activeIndex !== null && activeIndex !== index) {
        gsap.to(titles[activeIndex].index, { fontSize:"20px", fontWeight: "normal", duration: 0.2 });
    }
    activeIndex = index;
    gsap.to(titles[activeIndex].index, { fontSize:"30px", fontWeight: "bold",  duration: 0.2 });
}

function resetActiveIndex(index) {
    if (activeIndex === index) {
        gsap.to(titles[activeIndex].index, { fontSize:"20px",fontWeight: "normal", duration: 0.2 });
        activeIndex = null;
    }
}
