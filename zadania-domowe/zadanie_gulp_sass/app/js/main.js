$(window).scroll(function () {

    scrolled();

});

function scrolled() {

    var windowPosition = $(window).scrollTop();

    var navHeight = $('#main-nav').height();

    if (windowPosition > navHeight) {
        $('#main-nav').addClass('nav-bg');
        $('#main-nav').removeClass('nav-bg-remove');
    } else {
        $('#main-nav').addClass('nav-bg-remove');
        $('#main-nav').removeClass('nav-bg');
    }
}
