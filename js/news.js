let buttons = document.querySelectorAll('.categoria');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});


var swiper = new Swiper(".new-slider", {

        navigation: {
            nextEl: '.s-button-next',
            prevEl: '.s-button-prev'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">'  + (index + 1) + "</span>";
            },
            dynamicBullets: true,
            dynamicMainBullets: 4,
        },
        simulateTouch: false,
        autoHeight: false,

        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false

        },


    })
;


