$(function () {

    //반응형 닫기 버튼 
    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    })

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })

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

