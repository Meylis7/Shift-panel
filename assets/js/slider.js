
// Slider =======================================
$(".web_box").slick({
    slidesToShow: 3,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,


    infinite: true,
    speed: 700,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});

$(".advert").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,


    infinite: true,
    speed: 1000,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});

// Detail slider ======================================
$('.detail_photo_box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    asNavFor: '.detail_for_navs',

});
$('.detail_for_navs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.detail_photo_box',
    dots: false,
    autoplay: false,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    arrows: false,
    prevArrow: false,
    nextArrow: false,

    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
});
