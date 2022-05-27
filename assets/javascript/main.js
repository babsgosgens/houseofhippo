(function ($) {

    $('.hero-project').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 1200,
        fade: true,
        cssEase: 'linear'
    });

    $('.lazy').Lazy();

})(jQuery);
