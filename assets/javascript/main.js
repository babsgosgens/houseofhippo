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

    $('.hero-project').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $color = $('.hero-project .slick-active')
            .find('.hero-project__next')
            .first()
            .data('theme');
            $('.fx-theme').delay('800').css('background-color', $color);
            $('.fx-color').delay('800').css('color', $color);
    });

})(jQuery);
