var swiper = new Swiper(".main-slider", {

        navigation: {
            nextEl: '.s-button-next',
            prevEl: '.s-button-prev'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        },
        simulateTouch: true,
        autoHeight: true,

        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false

        },

        breakpoints: {
            767: {
                simulateTouch: false,
                autoHeight: false,
            }
        }


    })
;


