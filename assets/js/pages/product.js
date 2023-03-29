if (document.querySelector('.gallery-product__images')) {

    const gallerySlider = new Swiper('.gallery-product__images', {
        slidesPerView: 1.05,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            991.98: {
                slidesPerView: 1,

            },
            767.98: {
                slidesPerView: 1.3,

            }
        },
        navigation: {
            prevEl: '.gallery-product__button_prev',
            nextEl: '.gallery-product__button_next',
        }
    })
}
