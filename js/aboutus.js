var swiper2 = new Swiper(".main-slider2", {
        slidesPerView: 1,
        simulateTouch: false,
        autoHeight: true,
        breakpoints: {

            767: {
                slidesPerView: 9,
                direction: "vertical",
                simulateTouch: true,
            }
        }


    })
;

var swiper = new Swiper(".main-slider", {

        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev'
        },

        thumbs: {
            swiper: swiper2,
        },
        slidesPerView: 1,
        autoHeight: false,


    })
;

var clSwiper = new Swiper(".tm-slider", {

    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction:false

    },
    spaceBetween: 20,

});