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
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        cssEase: 'ease-out',
        easing: 'swing',
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.project-slider--parent').slick({
        dots: true,
        arrows: false,
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        easing: 'none',
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        customPaging: function(slider, i) {
            var button = $('<button class="project-slider--nav" type="button" />'),
                label = $(slider).data('slide-set');
            return $('<button class="project-slider__nav" type="button"><i class="icn icn-controller-record" /><span class="is-narrative">Project ' + (i + 1) + '</span></button>');
        }
    });


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

    $(document).on('click', '.project-slider__next', function(event, slick, currentSlide, nextSlide){

        $('.project-slider--child').slick('slickNext');

    });

    $(document).on('click', '.project-slider__prev', function(event, slick, currentSlide, nextSlide){

        $('.project-slider--child').slick('slickPrev');

    });

})(jQuery);
