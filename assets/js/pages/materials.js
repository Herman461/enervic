
const materialsSliders = document.querySelectorAll('.block-materials__slider')

if (materialsSliders.length > 0) {
    for (let index = 0; index < materialsSliders.length; index++) {
        const materialsSlider = materialsSliders[index]
        const materialsBlock = materialsSlider.closest('.materials__block')

        const slider = new Swiper(materialsSlider, {
            slidesPerView: 1.1,
            watchOverflow: true,
            spaceBetween: 15,
            breakpoints: {
                1640.98: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1160.98: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                767.98: {
                    spaceBetween: 20,
                    slidesPerView: 2.5
                },
                360.98: {
                    slidesPerView: 2.1
                }
            },
            navigation: {
                prevEl: materialsBlock.querySelector('.block-materials__button_prev'),
                nextEl: materialsBlock.querySelector('.block-materials__button_next'),
            }
        })
    }
}
