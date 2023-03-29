// function lockBody() {
//     const scrollWidth = window.innerWidth - document.body.clientWidth
//
//     document.body.classList.toggle('lock')
//
//     document.body.style.paddingRight = scrollWidth + 'px'
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const slider = new Swiper('.products-slider__body', {
//         slidesPerView: 4,
//
//     })
// })

const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')
if (burger) {
    burger.addEventListener('click', function(e) {
        menu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
}


window.addEventListener('click', function(e) {
    if (menu.classList.contains('active') && !e.target.closest('.menu')) {
        menu.classList.toggle('active')
        document.body.classList.toggle('lock')
    }
})

// $(window).on("scroll", () => {
//     const position = $(this).scrollTop();
//
//     section.each(function () {
//         const top = $(this).offset().top - navHeight - 5,
//             bottom = top + $(this).outerHeight();
//
//         if (position >= top && position <= bottom) {
//             nav.find("a").removeClass("active");
//             section.removeClass("active");
//
//             $(this).addClass("active");
//             nav.find("a[href='#' + $(this).attr('id') + ']'").addClass("active");
//         }
//     });
// });
const sections = document.querySelectorAll('.section')
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
            break
        }
    }
})
