var projectSwiper = new Swiper(".client-slider", {

    navigation: {
        nextEl: '.client-button-next',
        prevEl: '.client-button-prev'
    },
    simulateTouch: false,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction:false

    }

});