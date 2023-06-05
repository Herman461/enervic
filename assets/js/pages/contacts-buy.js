// document.addEventListener('DOMContentLoaded', function() {
//     const contactsBuySliders = document.querySelectorAll('.block-contacts-buy__slider')
//
//     if (contactsBuySliders.length > 0) {
//         for (let index = 0; index < contactsBuySliders.length; index++) {
//             const contactsBuySlider = contactsBuySliders[index]
//             const contactsBuyBlock = contactsBuySlider.closest('.contacts-buy__block')
//
//             const slider = new Swiper(contactsBuySlider, {
//                 slidesPerView: 1.1,
//                 watchOverflow: true,
//                 spaceBetween: 15,
//                 breakpoints: {
//                     1640.98: {
//                         slidesPerView: 4,
//                         spaceBetween: 20,
//                     },
//                     1160.98: {
//                         slidesPerView: 3,
//                         spaceBetween: 20,
//                     },
//                     767.98: {
//                         spaceBetween: 20,
//                         slidesPerView: 2.5
//                     },
//                     360.98: {
//                         slidesPerView: 2.1
//                     }
//                 },
//                 navigation: {
//                     prevEl: contactsBuyBlock.querySelector('.block-contacts-buy__button_prev'),
//                     nextEl: contactsBuyBlock.querySelector('.block-contacts-buy__button_next'),
//                 }
//             })
//         }
//     }
//
// })
