$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.second-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        pauseOnHover:false
    });
    $('.third-slider').slick({
        dots: true,
        arrows: false,
    });

});