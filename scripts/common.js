var winHeight = $(window).height();
var winWidth = $(window).width();
var i = 1;
var nowTime = $.now();
var num = 1;
var tgt = 1;

$(window).resize(function() {
    setTimeout(function() {
        $(".swiper-pagination span:nth-child(1)").text("新奥生态").addClass("select");
        $(".swiper-pagination span:nth-child(2)").text("新奥能源");
        $(".swiper-pagination span:nth-child(3)").text("新奥股份");
        $(".swiper-pagination span:nth-child(4)").text("新奥环保");
        $(".swiper-pagination span:nth-child(5)").text("新绎文化");
        $(".swiper-pagination span:nth-child(6)").text("新绎健康");
        $(".swiper-pagination span:nth-child(7)").text("新绎旅游");
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
    preload([
        'images/bg_brand_01.jpg',
        'images/bg_brand_02.jpg',
        'images/bg_brand_03.jpg',
        'images/bg_brand_04.jpg',
        'images/bg_brand_05.jpg',
        'images/bg_brand_06.jpg',
        'images/bg_brand_07.jpg'
    ], function(total, loaded) {
        now_percent = Math.ceil(100 * loaded / total);
    });

    var cnt = 0,
        min = 0;

    $(".swiper-slide span").delay(2000).queue(function(next) {
        $(this).removeClass("firstBorderAnimation");
        next();
    });

});

$(window).load(function() {

    $(".pagenationLing").css({ opacity: 0 }).delay(1000).queue(function(next) {
        $(".pagenationLing").animate({ opacity: 1 }, 100);
        next();
    });

    $("#container").fadeIn(600);

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 650,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        direction: 'vertical',
        simulateTouch: false,
        mousewheelControl: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onSlideChangeStart: function(swiper) {

            var index = $(".swiper-pagination>span").index($(".swiper-pagination-bullet-active"));
            var selectCount = $(".selectBox").length;

            if (index == 0) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(25% - 12px)");
                    next();
                });
            } else if (index == 1) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(33% - 12px)");
                    next();
                });
            } else if (index == 2) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(41% - 12px)");
                    next();
                });
            } else if (index == 3) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(49% - 12px)");
                    next();
                });
            } else if (index == 4) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(57% - 12px)");
                    next();
                });
            } else if (index == 5) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(65% - 12px)");
                    next();
                });
            } else if (index == 6) {
                $(".pagenationLing span").removeClass("targetScale").delay(10).queue(function(next) {
                    $(".pagenationLing span").addClass("targetScale");
                    next();
                }).delay(1000).queue(function(next) {
                    $(".pagenationLing").css("top", "calc(73% - 12px)");
                    next();
                });
            }

            if ($(".slideImage01").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("1/7");
            } else if ($(".slideImage02").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("2/7");
            } else if ($(".slideImage03").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("3/7");
            } else if ($(".slideImage04").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("4/7");
            } else if ($(".slideImage05").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("5/7");
            } else if ($(".slideImage06").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("6/7");
            } else if ($(".slideImage07").hasClass("swiper-slide-active")) {
                $("#pageNumber").text("7/7");
            }

            if ($(".brandBorderAnimation").hasClass("active")) {
                $(".brandBorderAnimation").removeClass("active");
                $(".brandBorderAnimation").delay(600).queue(function(next) {
                    $(this).addClass("active");
                    next();
                });
            } else {
                $(".brandBorderAnimation").addClass("active");
                $(".brandBorderAnimation").delay(5000).queue(function(next) {
                    $(this).removeClass("firstBorderAnimation");
                    next();
                });
            }

            $(".brandContents h2").removeClass("noise02");
            $(".brandContents h2").delay(2000).queue(function(next) {
                $(this).addClass("noise02");
                next();
            });

            var $defer = new $.Deferred();

            $.when(
                $defer
            ).done(function() {
                $(".backBlack").delay(2500).queue(function(next) {
                    $(this).stop().fadeIn(500);
                    next();
                });
            });

            var func = function() {
                $(".backBlack").stop().fadeOut(500);
                return $defer.resolve();
            };
            func();

            if ($(".silideTimeContents").hasClass("timeFirstAnimation")) {
                $(".silideTimeContents").delay(5000).queue(function(next) {
                    $(this).removeClass("timeFirstAnimation");
                    next();
                });
            }

            if ($(".silideTimeContents").hasClass("timeAnimation")) {
                $(".silideTimeContents").removeClass("timeAnimation");
                $(".silideTimeContents").delay(100).queue(function(next) {
                    $(this).addClass("timeAnimation");
                    next();
                });
            } else {
                $(".silideTimeContents").addClass("timeAnimation");
            }

            $({ count: 0 }).animate({ count: 55000 }, {
                duration: 5650,
                easing: 'linear',
                progress: function() {
                    var num = 10000;
                    var count = Math.ceil(this.count) / num;
                    var count_num = Math.floor(count);
                    var count_decimal = Math.ceil((count - count_num) * num);
                    count_num = ('00' + count_num).slice(-2);
                    count_decimal = ('0000' + count_decimal).slice(-4);
                    count_decimal = (count_decimal).slice(0, 3);
                    $('#slideTimeSecond').text(count_num + ":" + count_decimal);
                }
            });
        }
    });

    $(".swiper-pagination span:nth-child(1)").text("新奥生态").addClass("select");
    $(".swiper-pagination span:nth-child(2)").text("新奥能源");
    $(".swiper-pagination span:nth-child(3)").text("新奥股份");
    $(".swiper-pagination span:nth-child(4)").text("新奥环保");
    $(".swiper-pagination span:nth-child(5)").text("新绎文化");
    $(".swiper-pagination span:nth-child(6)").text("新绎健康");
    $(".swiper-pagination span:nth-child(7)").text("新绎旅游");
});