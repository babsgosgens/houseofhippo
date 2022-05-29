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

    var setTheme = function(color){
        $('.fx-theme').css('background-color', color);
        $('.fx-color').css('color', color);
    };

    // $('.hero-project__next').on('click', function(){
    //     $('.hero-project').trigger('slickNext');
    // });
    $('.hero-project').on('setTheme', function(event){

        var slide = $('.hero-project').find('.slick-slide').first(),
            color = $(slide).data('theme');

        setTheme( color );

    }).trigger('setTheme');

    $(document).on('beforeChange', '.hero-project', function(event, slick, currentSlide, nextSlide){

        var slide = $('.hero-project').find('.slick-slide').eq(nextSlide),
            color = $(slide).data('theme');

            setTheme( color );

    });

})(jQuery);
