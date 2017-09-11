function setViewportAnimation() {
    let start_x = 1175 / 1920 * $(document).width(),
        end_x = 719 / 1920 * $(document).width(),
        winHeight = $(window).height(),
        winWidth = $(window).width(),
        i = 1,
        nowTime = $.now(),
        num = 1,
        tgt = 1;

    $('.f-energy').css(
        'clip-path',
        'polygon(0 0, ' + start_x + 'px 0, ' + end_x + 'px 100%, 0 100%)'
    );
    $('.e-city').css(
        'clip-path',
        'polygon(' + start_x + 'px 0, 100% 0, 100% 100%, ' + end_x + 'px 100%)'
    );
    $('.f-energy-half').css(
        'clip-path',
        'polygon(' + start_x + 'px 0, 100% 0, 100% 100%, ' + end_x + 'px 100%)'
    );

    $('.f-energy')
        .bind('mouseenter', function() {})
        .bind('click', function(e) {
            $('.f-energy')
                .addClass('--unfolded')
                .css({
                    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    'z-index': '1'
                });
            $('.f-energy-logo').addClass('-top');
            $('.f-energy-nav').hide();
            $('.pagenationLing')
                .css({
                    opacity: 0
                })
                .delay(1000)
                .queue(function(next) {
                    $('.pagenationLing').animate(
                        {
                            opacity: 1
                        },
                        100
                    );
                    next();
                });

            $('#container').fadeIn(600);
            $(this)
                .children()
                .bind('click', function(e) {
                    e.stopPropagation();
                });

            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 650,
                autoplay: false,
                autoplayDisableOnInteraction: false,
                direction: 'vertical',
                simulateTouch: false,
                mousewheelControl: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                onSlideChangeStart: function(swiper) {
                    var index = $('.swiper-pagination>span').index(
                        $('.swiper-pagination-bullet-active')
                    );
                    var selectCount = $('.selectBox').length;

                    if (index == 0) {
                        $('.pagenationLing span')
                            .removeClass('targetScale')
                            .delay(10)
                            .queue(function(next) {
                                $('.pagenationLing span').addClass(
                                    'targetScale'
                                );
                                next();
                            })
                            .delay(1000)
                            .queue(function(next) {
                                $('.pagenationLing').css('top', '35%');
                                next();
                            });
                    } else if (index == 1) {
                        $('.pagenationLing span')
                            .removeClass('targetScale')
                            .delay(10)
                            .queue(function(next) {
                                $('.pagenationLing span').addClass(
                                    'targetScale'
                                );
                                next();
                            })
                            .delay(1000)
                            .queue(function(next) {
                                $('.pagenationLing').css('top', '43%');
                                next();
                            });
                    } else if (index == 2) {
                        $('.pagenationLing span')
                            .removeClass('targetScale')
                            .delay(10)
                            .queue(function(next) {
                                $('.pagenationLing span').addClass(
                                    'targetScale'
                                );
                                next();
                            })
                            .delay(1000)
                            .queue(function(next) {
                                $('.pagenationLing').css('top', '51%');
                                next();
                            });
                    } else if (index == 3) {
                        $('.pagenationLing span')
                            .removeClass('targetScale')
                            .delay(10)
                            .queue(function(next) {
                                $('.pagenationLing span').addClass(
                                    'targetScale'
                                );
                                next();
                            })
                            .delay(1000)
                            .queue(function(next) {
                                $('.pagenationLing').css('top', '59%');
                                next();
                            });
                    }

                    if ($('.brandBorderAnimation').hasClass('active')) {
                        $('.brandBorderAnimation').removeClass('active');
                        $('.brandBorderAnimation')
                            .delay(600)
                            .queue(function(next) {
                                $(this).addClass('active');
                                next();
                            });
                    } else {
                        $('.brandBorderAnimation').addClass('active');
                        $('.brandBorderAnimation')
                            .delay(5000)
                            .queue(function(next) {
                                $(this).removeClass('firstBorderAnimation');
                                next();
                            });
                    }

                    $('.brandContents h2').removeClass('noise02');
                    $('.brandContents h2')
                        .delay(2000)
                        .queue(function(next) {
                            $(this).addClass('noise02');
                            next();
                        });

                    var $defer = new $.Deferred();

                    $.when($defer).done(function() {
                        $('.backBlack')
                            .delay(2500)
                            .queue(function(next) {
                                $(this)
                                    .stop()
                                    .fadeIn(500);
                                next();
                            });
                    });

                    var func = function() {
                        $('.backBlack')
                            .stop()
                            .fadeOut(500);
                        return $defer.resolve();
                    };
                    func();

                    if (
                        $('.silideTimeContents').hasClass('timeFirstAnimation')
                    ) {
                        $('.silideTimeContents')
                            .delay(5000)
                            .queue(function(next) {
                                $(this).removeClass('timeFirstAnimation');
                                next();
                            });
                    }

                    if ($('.silideTimeContents').hasClass('timeAnimation')) {
                        $('.silideTimeContents').removeClass('timeAnimation');
                        $('.silideTimeContents')
                            .delay(100)
                            .queue(function(next) {
                                $(this).addClass('timeAnimation');
                                next();
                            });
                    } else {
                        $('.silideTimeContents').addClass('timeAnimation');
                    }

                    $({
                        count: 0
                    }).animate(
                        {
                            count: 55000
                        },
                        {
                            duration: 5650,
                            easing: 'linear',
                            progress: function() {
                                var num = 10000;
                                var count = Math.ceil(this.count) / num;
                                var count_num = Math.floor(count);
                                var count_decimal = Math.ceil(
                                    (count - count_num) * num
                                );
                                count_num = ('00' + count_num).slice(-2);
                                count_decimal = ('0000' + count_decimal).slice(
                                    -4
                                );
                                count_decimal = count_decimal.slice(0, 3);
                                $('#slideTimeSecond').text(
                                    count_num + ':' + count_decimal
                                );
                            }
                        }
                    );
                }
            });

            $('.swiper-pagination span:nth-child(1)')
                .text('新奥能源')
                .addClass('select');
            $('.swiper-pagination span:nth-child(2)').text('LNG交易');
            $('.swiper-pagination span:nth-child(3)').text('新奥股份');
            $('.swiper-pagination span:nth-child(4)').text('新奥环保');
        });
    $('.f-energy-back').bind('click', function() {
        $('#container').fadeOut(600);
        $('.f-energy')
            .removeClass('--unfolded')
            .css(
                'clip-path',
                'polygon(0 0, ' +
            start_x +
            'px 0, ' +
            end_x +
            'px 100%, 0 100%)'
            );
        $('.f-energy-logo').removeClass('-top');
        $('.f-energy-nav').show();
        setTimeout(function() {
            $('.f-energy').css('z-index', '0');
        }, 600);
    });
    $('.e-city')
        .bind('mouseenter', function() {})
        .bind('click', function() {
            $('.e-city')
                .addClass('--unfolded')
                .css({
                    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    'z-index': '1'
                });
            $(this)
                .children()
                .bind('click', function(e) {
                    e.stopPropagation();
                });
            $('.e-city-nav').addClass('--unfolded');
            $('.e-city-logo').addClass('--active');
        });

    $('.e-city-back').bind('click', function() {
        $('.e-city')
            .removeClass('--unfolded')
            .css(
                'clip-path',
                'polygon(' +
            start_x +
            'px 0, 100% 0, 100% 100%, ' +
            end_x +
            'px 100%)'
            );
        $('.e-city-nav').removeClass('--unfolded');
        $('.e-city-logo').removeClass('--active');
        setTimeout(function() {
            $('.e-city').css('z-index', '0');
        }, 600);
    });
}
setViewportAnimation();

$(window).resize(function() {
    setTimeout(function() {
        $('.swiper-pagination span:nth-child(1)')
            .text('新奥能源')
            .addClass('select');
        $('.swiper-pagination span:nth-child(2)').text('LNG交易');
        $('.swiper-pagination span:nth-child(3)').text('新奥股份');
        $('.swiper-pagination span:nth-child(4)').text('新奥环保');
    }, 10);
});

$(function() {
    Array.prototype.remove = function(element) {
        for (var i = 0; i < this.length; i++)
            if (this[i] == element) this.splice(i, 1);
    };

    function preload(images, progress) {
        var total = images.length;
        $(images).each(function() {
            var src = this;
            $('<img/>')
                .attr('src', src)
                .load(function() {
                    images.remove(src);
                    progress(total, total - images.length);
                });
        });
    }

    var now_percent = 0;
    var displaying_percent = 0;
    preload(
        [
            'images/bg_brand_02.jpg',
            'images/bg_brand_02.jpg',
            'images/bg_brand_03.jpg',
            'images/bg_brand_04.jpg'
        ],
        function(total, loaded) {
            now_percent = Math.ceil(100 * loaded / total);
        }
    );

    var cnt = 0,
        min = 0;

    $('.swiper-slide span')
        .delay(2000)
        .queue(function(next) {
            $(this).removeClass('firstBorderAnimation');
            next();
        });
});
