var swiper = new Swiper(".main-slider", {
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        autoHeight: false,

        breakpoints: {
            1240: {
                slidesPerView: 10
            },
            992: {
                slidesPerView: 8
            },
            767: {
                slidesPerView: 6
            }
        }

    })
;

var swiper2 = new Swiper(".main-slider2", {

        navigation: {
            nextEl: '.s-button-next',
            prevEl: '.s-button-prev'
        },
        simulateTouch: true,
        autoHeight: true,
        thumbs: {
            swiper: swiper,
        },

        breakpoints: {
            767: {
                simulateTouch: false,
                autoHeight: false,
            }
        }

    })
;