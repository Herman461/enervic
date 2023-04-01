if (document.querySelector('.about-bottom__images')) {

    const aboutBottomImages = new Swiper('.about-bottom__images', {
        slidesPerView: 1.1,
        spaceBetween: 15,
        breakpoints: {
            767.98: {
                slidesPerView: 1.5
            }
        },
    })
}


if (document.querySelector('.about-production-block__images')) {

    const aboutProductionBlock = new Swiper('.about-production-block__images', {
        slidesPerView: 1.1,
        spaceBetween: 15,
        breakpoints: {
            767.98: {
                slidesPerView: 1.5
            }
        },
    })
}

