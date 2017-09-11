/**
 * 背景滚动
 */
function scrollBackground() {
    let speed = 300,
        winHeight = $(window).height();

    $('html').animate({
        scrollTop: winHeight
    }, 300);

    $('.main-logo').bind('click', function() {
        $('.scroll-home').show().siblings().hide();
        $('html').animate({
            scrollTop: 0
        }, speed);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('.scroll-home').show().siblings().hide();
        }
    });
}
scrollBackground();

function rotateCircle() {
    let winHeight = $(window).height();

    $('.circle-outside').each(function(i) {
        $(this)
            .bind('mouseenter', function() {
                $(this)
                    .addClass('--stop')
                    .siblings('.circle-outside')
                    .addClass('--stop')
                    .end()
                    .parent()
                    .addClass('--stop');
                $('.circle-outside')
                    .eq(i)
                    .addClass('outside' + (i + 1) + '--hover');
                $('.circle-logo').addClass('--children' + (i + 1));
                $('.main-back-pic').addClass('--toggle' + (i + 1));
                $('.circle-solgan').addClass('circle-solgan' + (i + 1));
            })
            .bind('mouseleave', function() {
                $(this)
                    .removeClass('--stop')
                    .siblings('.circle-outside')
                    .removeClass('--stop')
                    .end()
                    .parent()
                    .removeClass('--stop');
                $('.circle-outside')
                    .eq(i)
                    .removeClass('outside' + (i + 1) + '--hover');
                $('.circle-logo').removeClass('--children' + (i + 1));
                $('.main-back-pic').removeClass('--toggle' + (i + 1));
                $('.circle-solgan').removeClass('circle-solgan' + (i + 1));
            })
            .bind('click', function() {
                $('.main-nav').addClass('--scroll');
                $('.scroll-block' + (i + 1)).show().siblings().hide();
                $('html').animate({
                    scrollTop: winHeight
                }, 300);
            });
    });
}
rotateCircle();