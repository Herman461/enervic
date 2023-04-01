const contactsSliders = document.querySelectorAll('.contacts__slider')

const contactsSwiperSliders = []
if (contactsSliders.length > 0) {
    for (let index = 0; index < contactsSliders.length; index++) {
        const contactsSlider = contactsSliders[index]

        const slider = new Swiper(contactsSlider, {
            speed: 800,

            spaceBetween: 20,
            slidesPerView: 1.15,
            breakpoints: {
                1340.98: {
                    spaceBetween: 0
                },
                1100.98: {
                    spaceBetween: 20,
                    slidesPerView: 3.2,
                },
                991.98: {
                    spaceBetween: 20,
                    slidesPerView: 2.7,
                },
                767.98: {
                    spaceBetween: 20,
                    slidesPerView: 2.5,
                },
                576.98: {
                    spaceBetween: 20,
                    slidesPerView: 1.5,
                }
                // 767.98: {
                //     slidesPerView: 1,
                //     loop: false,
                // }
            }

        })
        contactsSwiperSliders.push(slider)
    }

}

window.addEventListener('click', function(e) {
    if (
        e.target.closest('.contacts__title')
        && e.target.closest('.contacts__title').classList.contains('active')
    ) {
        setTimeout(function() {
            for (let index = 0; index < contactsSwiperSliders.length; index++) {
                const slider = contactsSwiperSliders[index]

                slider.update()
            }
        }, 500)

    }
})
