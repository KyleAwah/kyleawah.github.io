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
            breakpoints: {
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            },
        });

        var swiper3 = new Swiper('.swiper3', {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
            loopFillGroupWithBlank: true,
            freeMode: true,
            speed: 900,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1300: {
                    slidesPerView: 9,
                    spaceBetween: 30
                },
            },
        });

        var section_1_ani = gsap.timeline({
            defaults: {
                duration: 0.3,
                opacity: 0
            }
        })

        section_1_ani
            .from('.skill_card', {
                x: -40,
                stagger: 0.5,
                opacity: 0
            })
            .from('.circle', {
                y: -40,
                opacity: 0
            })
            .from('.img', {
                y: 40,
                opacity: 0
            })
            .from('#cert_header', {
                y: -40,
                opacity: 0
            })
            .from('.company_logos', {
                x: -40,
                stagger: 0.4,
                opacity: 0
            })
            .from('#copyright', {
                y: -40,
                opacity: 0
            })
            .from('.flex_container_nav', {
                y: -40,
                opacity: 0
            })
            .from('.scroll_down', {
                y: -40,
                ease: Bounce.easeOut,
                opacity: 0
            })

        var section_3_ani = gsap.timeline({
            scrollTrigger: {
                trigger: '#section_3',
                start: "bottom bottom",
                end: "500% bottom",
                scrub: true,
                pin: true,
                toggleActions: "restart pause reverse reverse"
            },
            defaults: {
                duration: 0.3,
            }
        })

        section_3_ani
            .to('#blank', {
                opacity: 0,
                onComplete: () => masterTl_3.play()
            })
            .from('.lines', {
                x: -40,
                stagger: 0.1,
                opacity: 0
            })
            .to('#fancy_txt_3', {
                opacity: 0
            })
            .to('#edu_txt_holder', {
                y: -40,
                opacity: 0
            })
            .from('#b_degree_obj', {
                x: -40,
                opacity: 0
            })
            .from('#b_degree_title', {
                y: 40,
                opacity: 0
            })
            .from('#b_degree_sub', {
                y: -40,
                opacity: 0
            })
            .from('#b_degree_lbl', {
                y: -40,
                opacity: 0
            })
            .from('#b_degree_hon', {
                opacity: 0
            })
            .to('#b_degree_obj', {
                y: 40,
                opacity: 0
            })
            .to('#b_degree_title', {
                x: -40,
                opacity: 0
            })
            .to('#b_degree_sub', {
                x: -40,
                opacity: 0
            })
            .to('#b_degree_lbl', {
                y: 40,
                opacity: 0
            })
            .to('#b_degree_hon', {
                opacity: 0
            })
            .from('#fc_cape_obj', {
                x: -40,
                opacity: 0
            })
            .from('#fc_cape_title', {
                y: 40,
                opacity: 0
            })
            .from('#fc_cape_sub', {
                y: -40,
                opacity: 0
            })
            .from('#fc_cape_lbl', {
                y: -40,
                opacity: 0
            })
            .to('#fc_cape_obj', {
                y: 40,
                opacity: 0
            })
            .to('#fc_cape_title', {
                x: -40,
                opacity: 0
            })
            .to('#fc_cape_sub', {
                x: -40,
                opacity: 0
            })
            .to('#fc_cape_lbl', {
                y: 40,
                opacity: 0
            })
            .from('#fc_cxc_obj', {
                x: -40,
                opacity: 0
            })
            .from('#fc_cxc_title', {
                y: 40,
                opacity: 0
            })
            .from('#fc_cxc_sub', {
                y: -40,
                opacity: 0
            })
            .from('#fc_cxc_lbl', {
                y: -40,
                opacity: 0
            })
            .from('#fc_cxc_hon', {
                opacity: 0
            })
            .to('#fc_cxc_obj', {
                y: 40,
                opacity: 0
            })
            .to('#fc_cxc_title', {
                x: -40,
                opacity: 0
            })
            .to('#fc_cxc_sub', {
                x: -40,
                opacity: 0
            })
            .to('#fc_cxc_lbl', {
                y: 40,
                opacity: 0
            })
            .to('#fc_cxc_hon', {
                opacity: 0
            })
            .to('.lines', {
                y: -40,
                stagger: 0.1,
                opacity: 0
            })
            .from('#edu_txt_holder_2', {
                y: -40,
                opacity: 0
            })
            .to('#edu_txt_holder_2', {
                y: -40,
                opacity: 0
            })
            .from('#en_card_holder', {
                x: -80,
                opacity: 0
            })
            .from('#en_card_lbl', {
                y: 40,
                opacity: 0
            })
            .from('#en_card_emo', {
                y: 40,
                opacity: 0
            })
            .from('#fr_card_holder', {
                x: 80,
                opacity: 0
            })
            .from('#fr_card_lbl', {
                y: 40,
                opacity: 0
            })
            .from('#fr_card_emo', {
                y: 40,
                opacity: 0
            })
            .to('#en_card_holder', {
                x: -80,
                opacity: 0
            })
            .to('#fr_card_holder', {
                x: 80,
                opacity: 0
            })
            .from('#joke_txt', {
                y: -40,
                opacity: 0
            })
            .from('#resume_btn', {
                y: 40,
                opacity: 0
            })
            .from('#swiper2', {
                y: -40,
                opacity: 0
            })
            .from('#swiper1', {
                y: 40,
                opacity: 0
            })



        var project_ani = gsap.timeline({
            scrollTrigger: {
                trigger: '#section_8',
                start: "bottom bottom",
                end: "600% bottom",
                scrub: true,
                pin: true,
                toggleActions: "restart pause reverse reverse"
            },
            defaults: {
                duration: 1,
                opacity: 0
            }
        })



        project_ani
            .to('#blank_2', {
                opacity: 0,
                onComplete: () => masterTl_4.play()
            })
            .from('.project_back', {
                x: 40,
                stagger: 0.2,
                opacity: 0
            })
            .from('.project_back_2', {
                x: -40,
                stagger: 0.2,
                opacity: 0
            })
            .to('#fancy_txt_5', {
                opacity: 0
            })
            .to('#project_txt_holder', {
                y: -40,
                opacity: 0
            })
            .from('#pro_1_title', {
                y: -40,
                opacity: 0
            })
            .from('#pro_1_lang_1', {
                x: 40,
                opacity: 0
            })
            .from('#pro_1_lang_2', {
                x: 40,
                opacity: 0
            })
            .from('#pro_1_img', {
                y: 40,
                opacity: 0
            })
            .from('#pro_1_desc', {
                y: -40,
                opacity: 0
            })
            .from('#pro_1_btn', {
                y: -40,
                opacity: 0
            })
            .to('#pro_1_title', {
                y: -40,
                opacity: 0
            })
            .to('#pro_1_lang_1', {
                x: -40,
                opacity: 0
            })
            .to('#pro_1_lang_2', {
                x: -40,
                opacity: 0
            })
            .to('#pro_1_desc', {
                y: 40,
                opacity: 0
            })
            .to('#pro_1_btn', {
                y: 40,
                opacity: 0
            })
            .to('#pro_1_img', {
                y: -40,
                opacity: 0
            })
            .from('#pro_2_title', {
                y: -40,
                opacity: 0
            })
            .from('#pro_2_lang_1', {
                x: 40,
                opacity: 0
            })
            .from('#pro_2_lang_2', {
                x: 40,
                opacity: 0
            })
            .from('#pro_2_lang_3', {
                x: 40,
                opacity: 0
            })
            .from('#pro_2_img', {
                y: 40,
                opacity: 0
            })
            .from('#pro_2_desc', {
                y: -40,
                opacity: 0
            })
            .from('#pro_2_btn', {
                y: -40,
                opacity: 0
            })
            .to('#pro_2_title', {
                y: -40,
                opacity: 0
            })
            .to('#pro_2_lang_1', {
                x: -40,
                opacity: 0
            })
            .to('#pro_2_lang_2', {
                x: -40,
                opacity: 0
            })
            .to('#pro_2_lang_3', {
                x: -40,
                opacity: 0
            })
            .to('#pro_2_desc', {
                y: 40,
                opacity: 0
            })
            .to('#pro_2_btn', {
                y: 40,
                opacity: 0
            })
            .to('#pro_2_img', {
                y: -40,
                opacity: 0
            })
            .from('#pro_3_title', {
                y: -40,
                opacity: 0
            })
            .from('#pro_3_lang_1', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_2', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_3', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_4', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_5', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_6', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_7', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_8', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_9', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_10', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_lang_11', {
                x: 40,
                opacity: 0
            })
            .from('#pro_3_img', {
                y: 40,
                opacity: 0
            })
            .from('#pro_3_desc', {
                y: -40,
                opacity: 0
            })
            .from('#pro_3_btn', {
                y: -40,
                opacity: 0
            })
            .to('#pro_3_title', {
                y: -40,
                opacity: 0
            })
            .to('#pro_3_lang_1', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_2', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_3', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_4', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_5', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_6', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_7', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_8', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_9', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_10', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_lang_11', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_desc', {
                x: -40,
                opacity: 0
            })
            .to('#pro_3_btn', {
                y: 40,
                opacity: 0
            })
            .to('#pro_3_img', {
                y: -40,
                opacity: 0
            })
            .from('#pro_4_title', {
                y: -40,
                opacity: 0
            })
            .from('#pro_4_lang_1', {
                x: 40,
                opacity: 0
            })
            .from('#pro_4_lang_2', {
                x: 40,
                opacity: 0
            })
            .from('#pro_4_img', {
                y: 40,
                opacity: 0
            })
            .from('#pro_4_desc', {
                y: -40,
                opacity: 0
            })
            .from('#pro_4_btn', {
                y: -40,
                opacity: 0
            })
            .to('#pro_4_title', {
                y: -40,
                opacity: 0
            })
            .to('#pro_4_lang_1', {
                x: -40,
                opacity: 0
            })
            .to('#pro_4_lang_2', {
                x: -40,
                opacity: 0
            })
            .to('#pro_4_desc', {
                y: 40,
                opacity: 0
            })
            .to('#pro_4_btn', {
                y: 40,
                opacity: 0
            })
            .to('#pro_4_img', {
                y: -40,
                opacity: 0
            })
            .from('#pro_5_title', {
                y: -40,
                opacity: 0
            })
            .from('#pro_5_lang_1', {
                x: 40,
                opacity: 0
            })
            .from('#pro_5_lang_2', {
                x: 40,
                opacity: 0
            })
            .from('#pro_5_img', {
                y: 40,
                opacity: 0
            })
            .from('#pro_5_desc', {
                y: -40,
                opacity: 0
            })
            .from('#pro_5_btn', {
                y: -40,
                opacity: 0
            })
            .to('#pro_5_title', {
                y: -40,
                opacity: 0
            })
            .to('#pro_5_lang_1', {
                x: -40,
                opacity: 0
            })
            .to('#pro_5_lang_2', {
                x: -40,
                opacity: 0
            })
            .to('#pro_5_desc', {
                y: 40,
                opacity: 0
            })
            .to('#pro_5_btn', {
                y: 40,
                opacity: 0
            })
            .to('#pro_5_img', {
                y: -40,
                opacity: 0
            })
            .to('.project_back', {
                y: 40,
                stagger: 0.2,
                opacity: 0
            })
            .to('.project_back_2', {
                y: -40,
                stagger: 0.2,
                opacity: 0
            })

        var planet_ani = gsap.timeline({
            scrollTrigger: {
                trigger: '#section_2',
                start: "40% 80%",
                end: "70% 80%",
                scrub: true,
                toggleActions: "restart pause reverse reverse"
            },
            defaults: {
                duration: 1,
                opacity: 0
            }
        })

        planet_ani
            .from('#rocket', {
                y: 40,
                opacity: 0
            })
            .from('#qoute', {
                y: 40,
                opacity: 0
            })
            .from('#earth', {
                y: 40,
                opacity: 0
            })
            .from('#rocket_desc', {
                y: -40,
                opacity: 0
            })

        var planet_ani = gsap.timeline({
            scrollTrigger: {
                trigger: '#section_4',
                start: "40% 80%",
                end: "70% 80%",
                scrub: true,
                toggleActions: "restart pause reverse reverse"
            },
            defaults: {
                duration: 1,
                opacity: 0
            }
        })

        planet_ani
            .from('#header_4', {
                y: 40,
                opacity: 0
            })
            .from('#para_4', {
                y: -40,
                opacity: 0
            })
            .from('#last_btn', {
                y: 40,
                opacity: 0
            })

        var section_2_ani = gsap.timeline({
            scrollTrigger: {
                trigger: '#section_6',
                start: "50% 80%",
                end: "90% 80%",
                scrub: true,
                toggleActions: "restart pause reverse reverse"
            },
            defaults: {
                duration: 0.3,
                opacity: 0
            }
        })

        section_2_ani
            .from('#island_view', {
                y: 40,
                opacity: 0,
                onComplete: () => masterTl_2.play()
            })
            .from('.card_txt', {
                y: -40,
                opacity: 0
            })
            .from('.custom-shape-divider-bottom-1653745842', {
                y: 40,
                opacity: 0
            })

        function func_stop() {
            cursor.pause();
            boxTl.pause();
            document.getElementById("cursor").style.display = "none";
        }

        function func_stop_2() {
            cursor_2.pause();
            boxTl_2.pause();
            document.getElementById("cursor_2").style.display = "none";
        }

        function func_stop_3() {
            cursor_3.pause();
            boxTl_3.pause();
            document.getElementById("cursor_3").style.display = "none";
        }

        function func_stop_4() {
            cursor_4.pause();
            boxTl_4.pause();
            document.getElementById("cursor_4").style.display = "none";
        }

        const words = ["a web developer 💻", "an iOS developer 📱", "a puppy dad 🐶", "a gamer 🎮", "Kyle! 🇹🇹"];
        let cursor = gsap.to('.cursor', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })
        let masterTl = gsap.timeline({
            repeat: 0,
            onComplete: func_stop
        }).pause()
        let boxTl = gsap.timeline()

        boxTl.to('.box', {
                duration: 1,
                //width: "18vw",
                width: "10vw",
                delay: 0.5,
                ease: "power4.inOut"
            })
            .from('.hi', {
                duration: 1,
                y: "7vw",
                ease: "power3.out"
            })
            .to('.box', {
                duration: 1,
                height: "5vw",
                ease: "elastic.out",
                onComplete: () => masterTl.play()
            })
            .to('.box', {
                duration: 2,
                autoAlpha: 0.7,
                yoyo: true,
                repeat: -1,
                ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"
            })

        words.forEach((word, key) => {
            let repeatAmount = Object.is(words.length - 1, key) ? 0 : 1
            let tl = gsap.timeline({
                repeat: repeatAmount,
                yoyo: true,
                repeatDelay: 1
            })
            tl.to('.text', {
                duration: 1,
                text: word,
            })
            masterTl.add(tl)
        })



        const words_2 = ["var Kyle = new Human;", "Kyle.Age = 24", "Kyle.Life_Story = "];
        let cursor_2 = gsap.to('.cursor_2', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })
        let masterTl_2 = gsap.timeline({
            repeat: 0,
            onComplete: func_stop_2
        }).pause()
        let boxTl_2 = gsap.timeline({
            paused: true
        })

        boxTl_2.to('.box_2', {
                duration: 1,
                width: "10vw",
                delay: 0.5,
                ease: "power4.inOut"
            })
            .from('.hi_2', {
                duration: 1,
                y: "7vw",
                ease: "power3.out"
            })
            .to('.box_2', {
                duration: 1,
                height: "5vw",
                ease: "elastic.out",
                onComplete: () => masterTl_2.play()
            })
            .to('.box_2', {
                duration: 2,
                autoAlpha: 0.7,
                yoyo: true,
                repeat: -1,
                ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"
            })

        words_2.forEach((word_2, key) => {
            let repeatAmount = Object.is(words_2.length - 1, key) ? 0 : 1
            let tl_2 = gsap.timeline({
                repeat: repeatAmount,
                yoyo: true,
                repeatDelay: 1
            })
            tl_2.to('.text_2', {
                duration: 1,
                text: word_2,
            })
            masterTl_2.add(tl_2)
        })







        const words_3 = ["Kyle.Education = "];
        let cursor_3 = gsap.to('.cursor_3', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })
        let masterTl_3 = gsap.timeline({
            repeat: 0,
            onComplete: func_stop_3
        }).pause()
        let boxTl_3 = gsap.timeline({
            paused: true
        })

        boxTl_3.to('.box_3', {
                duration: 1,
                width: "10vw",
                delay: 0.5,
                ease: "power4.inOut"
            })
            .from('.hi_3', {
                duration: 1,
                y: "7vw",
                ease: "power3.out"
            })
            .to('.box_3', {
                duration: 1,
                height: "5vw",
                ease: "elastic.out",
                onComplete: () => masterTl_3.play()
            })
            .to('.box_2', {
                duration: 2,
                autoAlpha: 0.7,
                yoyo: true,
                repeat: -1,
                ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"
            })

        words_3.forEach((word_3, key) => {
            let repeatAmount = Object.is(words_3.length - 1, key) ? 0 : 1
            let tl_3 = gsap.timeline({
                repeat: repeatAmount,
                yoyo: true,
                repeatDelay: 1
            })
            tl_3.to('.text_3', {
                duration: 1,
                text: word_3,
            })
            masterTl_3.add(tl_3)
        })







        const words_4 = ["Kyle.Projects = "];
        let cursor_4 = gsap.to('.cursor_4', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })
        let masterTl_4 = gsap.timeline({
            repeat: 0,
            onComplete: func_stop_4
        }).pause()
        let boxTl_4 = gsap.timeline({
            paused: true
        })

        boxTl_4.to('.box_4', {
                duration: 1,
                width: "10vw",
                delay: 0.5,
                ease: "power4.inOut"
            })
            .from('.hi_4', {
                duration: 1,
                y: "7vw",
                ease: "power3.out"
            })
            .to('.box_4', {
                duration: 1,
                height: "5vw",
                ease: "elastic.out",
                onComplete: () => masterTl_4.play()
            })
            .to('.box_4', {
                duration: 2,
                autoAlpha: 0.7,
                yoyo: true,
                repeat: -1,
                ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"
            })

        words_4.forEach((word_4, key) => {
            let repeatAmount = Object.is(words_4.length - 1, key) ? 0 : 1
            let tl_4 = gsap.timeline({
                repeat: repeatAmount,
                yoyo: true,
                repeatDelay: 1
            })
            tl_4.to('.text_4', {
                duration: 1,
                text: word_4,
            })
            masterTl_4.add(tl_4)
        })
