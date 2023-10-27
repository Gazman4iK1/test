var projectSwiper = new Swiper(".project-slider", {

    navigation: {
        nextEl: '.project-button-next',
        prevEl: '.project-button-prev'
    },
    slidesPerView:1,
    watchOverflow:true,
    spaceBetween:30,

    simulateTouch: false,
    autoHeight: false,
    slidesPerGroup:1,

    breakpoints:{
        767:{
            slidesPerGroup:3,
            slidesPerView:3
        }
    }

});