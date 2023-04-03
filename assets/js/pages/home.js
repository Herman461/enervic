

if (document.querySelector('.products-page__slider')) {

    const productsPageSlider = new Swiper('.products-page__slider', {
        slidesPerView: 1.1,
        spaceBetween: 15,

        breakpoints: {
            1640.98: {
                slidesPerView: 3.1,
                spaceBetween: 20,

            },
            1160.98: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            767.98: {
                spaceBetween: 20,
                slidesPerView: 2
            },

        },

        navigation: {
            prevEl: '.products-page__button_prev',
            nextEl: '.products-page__button_next',
        }
    })
}

