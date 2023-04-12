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

        const scrollWidth = window.innerWidth - document.body.clientWidth
        toggleLock()

    })
}

const menuSearchItem = document.querySelector('.search-menu__item')

menuSearchItem.addEventListener('click', function(e) {
    menuSearchItem.classList.add('active')
    menuSearchItem.querySelector('input').focus()
})

function toggleLock() {
    const scrollWidth = window.innerWidth - document.body.clientWidth
    document.body.classList.toggle('lock')

    if (document.body.classList.contains('lock')) {
        document.body.style.paddingRight = scrollWidth + 'px'
    } else {
        document.body.style.paddingRight = 0
    }

}

window.addEventListener('click', function(e) {
    if (menu.classList.contains('active') && !e.target.closest('.menu')) {


        menu.classList.toggle('active')
        document.body.classList.toggle('lock')

        document.body.classList.add('lock')
        toggleLock()
    }

    if (!e.target.closest('.search-menu__item') && menuSearchItem.classList.contains('active')) {
        menuSearchItem.classList.remove('active')

        toggleLock()

    }

    if (!e.target.closest('.result-search-menu') && document.querySelector('.result-search-menu.active')) {
        document.querySelector('.result-search-menu').classList.remove('active')
    }
})

const searchHeaderInput = document.querySelector('.search-menu__input input')
const searchHeaderResult = document.querySelector('.search-menu__result')

searchHeaderInput.addEventListener('input', function(e) {
    const value = e.target.value

    if (value.length === 0) {
        if (searchHeaderResult.classList.contains('active')) {
            searchHeaderResult.classList.remove('active')
        }

    } else {
        if (!searchHeaderResult.classList.contains('active')) {
            searchHeaderResult.classList.add('active')
        }
    }
})



const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
