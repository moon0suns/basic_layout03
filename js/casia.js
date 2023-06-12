$(function () {



    // 스크롤내려가면 헤더색바꾸기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        dots: true,
    })

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });

})

