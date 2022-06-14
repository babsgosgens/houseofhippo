(function ($) {

    $('.project-hero').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 1200,
        fade: true,
        cssEase: 'linear',
        prevArrow: '',
        nextArrow: '<button class="project-hero__next btn-shortcut fx-theme"><i class="icn icn-chevron-thin-right"></i></button>'
    });


    $('.project-slider--child').slick({
        respondTo: 'slider',
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        cssEase: 'ease-out',
        easing: 'swing',
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        customPaging: '<span />',
        prevArrow: '<div class="project-slider__prev"><button><i class="icn icn-chevron-thin-left"></i><span class="is-narrative">Vorige</span></button></div>',
        nextArrow: '<div class="project-slider__next"><button><i class="icn icn-chevron-thin-right"></i><span class="is-narrative">Volgende</span></button></div>'
    });

    // $('.project-slider').slick({
    //     dots: true,
    //     arrows: false,
    //     draggable: false,
    //     swipe: false,
    //     swipeToSlide: false,
    //     infinite: true,
    //     autoplay: false,
    //     cssEase: 'ease-out',
    //     easing: 'swing',
    //     slidesToShow: 1,
    //     centerMode: false,
    //     variableWidth: true
    //     // ,
    //     // customPaging: function(slider, i) {
    //     //     return $('<button class="whatsthis" type="button" />').text(i + 1);
    //     // }
    // });


    $('.lazy').Lazy();

    var setTheme = function(color){
        $('.fx-theme').css('background-color', color);
        $('.fx-color').css('color', color);
    };

    $('.project-hero').on('setTheme', function(event){

        var slide = $('.project-hero').find('.slick-slide').first(),
            color = $(slide).data('theme');

        setTheme( color );

    }).trigger('setTheme');

    $(document).on('beforeChange', '.project-hero', function(event, slick, currentSlide, nextSlide){

        var slide = $('.project-hero').find('.slick-slide').eq(nextSlide),
            color = $(slide).data('theme');

            setTheme( color );

    });

    $(document).on('click', '.project-hero__next', function(event, slick, currentSlide, nextSlide){

        $('.project-hero').slick('slickNext');

    });

})(jQuery);
