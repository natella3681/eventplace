
if(document.querySelector('.slider-main__body')) {
    const swiper = new Swiper('.slider-main__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 5,
        preloadImages: false,
        // dots
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
        }
    });
}

if(document.querySelector('.slider-event__body')) {
    const swiper = new Swiper('.slider-event__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 3,
        preloadImages: false,
        // dots
        pagination: {
            el: '.controls-slider-event__dotts',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-arrow_next',
            prevEl: '.slider-arrow_prev',
        }
    });
}
