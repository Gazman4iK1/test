let swiper = new Swiper(".main-slider", {

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
            delay: 300000,
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


let body = document.querySelector("body");
let cvNews = document.querySelector(".player");

document.querySelector(".pre-video").onclick = function () {

    body.classList.add('lock')
    cvNews.classList.add('active')
}

document.querySelector(".close").onclick = function () {

    body.classList.remove('lock')
    cvNews.classList.remove('active')
}


