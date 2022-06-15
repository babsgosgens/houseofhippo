(function ($) {

    var showSlides = function( elementID, slider = "#featured-project" ) {

        var slide = $('.project-slider--child[data-slide-set="'+elementID+'"]');
        return $("#featured-project").slick('slickGoTo', slide);
    };

    $('.project-hero').slick({
        dots: false,
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: false,
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
        pauseOnHover: false,
        cssEase: 'ease-out',
        easing: 'swing',
        slidesToShow: 1,
        centerMode: false,
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

    $(document).on('click', 'a[href*="/#"]', function(event){

        event.preventDefault();

        var anchor = $(this).attr("href").substring(1).split("?"),
            hash   = anchor.shift();

            $('html, body').animate({
                scrollTop: $( hash ).offset().top
            }, 1400);

            for (var i = 0; i < anchor.length; i++) {
                var fragment = anchor[i].split("="),
                    key = fragment[0],
                    val = fragment[1];

                if(key == "name" && val != undefined ) {
                    showSlides( val );
                }
            }

        window.location.hash = anchor;
    });

})(jQuery);
