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

    $('.project-slider--parent').slick({
        dots: true,
        lazyLoad: 'ondemand',
        arrows: false,
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        customPaging: function(slider, i) {
            var button = $('<button class="project-slider--nav" type="button" />'),
                label = $(slider).data('slide-set');
            return $('<button class="project-slider__nav" type="button"><i class="icn icn-controller-record" /><span class="is-narrative">Project ' + (i + 1) + '</span></button>');
        }
    });

    $('.project-slider--child').slick({
        respondTo: 'project-slider--parent',
        lazyLoad: 'ondemand',
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

    $('.project-slider--parent').on('init', function(slick) { // <-- Your code here was malformed
        console.log('Init');
    });

    $(document).on('init', '.project-slider--parent', function(event, slick, currentSlide, nextSlide){

        console.log('Init');


    });

    $(document).on('beforeChange', '.project-slider--parent', function(event, slick, currentSlide, nextSlide){

        if (event.target !== this)
            return;

        $('.project-slider--child.is-active').slick('slickPause');
        $('.project-slider--child:not(.is-active)').slick('slickGoTo', 0);

    });

    $(document).on('afterChange', '.project-slider--parent', function(event, slick, currentSlide, nextSlide){

        if (event.target !== this)
            return;

        $('.project-slider--child.slick-active').slick('slickPlay');

    });

})(jQuery);
