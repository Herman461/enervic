document.addEventListener('DOMContentLoaded', function() {
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

    const sections = document.querySelectorAll('.section')
    const navigationItem = document.querySelector('.navigation-page__item_other')

    if (sections.length > 0) {
        window.addEventListener('scroll', function() {
            const position = window.scrollY

            for (let index = 0; index < sections.length; index++) {
                const section = sections[index]

                const top = section.offsetTop
                const bottom = section.offsetHeight + top

                if (position >= top && position <= bottom) {
                    if (document.querySelector('.section.active')) {
                        document.querySelector('.section.active').classList.remove('active')
                    }
                    section.classList.add('active')
                    navigationItem.textContent = section.dataset.sectionNavigation
                    break
                }
            }

        })
    }


})



