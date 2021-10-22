$(function () {
    var aco = $('.aco>li');
    var wd = $(window).width();
    
    aco.first().css('background-color', 'black');
    aco.even().click(function () {
        aco.removeClass('show');
        $(this).next().addClass('show');
        aco.even().css('background-color', 'black');
        $(this).css('background-color', '#ccc');
    });

    $('.mnName>li').mouseenter(function () {
        var ind = $(this).index();
        $('.circle').css('left', ind * 25 + '%');
    });

    var artG = $('.artGroup');

    // 무한루프 기본세팅
    if (wd > 780) {
        artG.children('.article:last').prependTo(artG);
        artG.css('margin-left', '-25%');

        $('.btns>.left').click(function () {
            artG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                artG.children('.article:last').prependTo(artG);
                artG.css('margin-left', '-25%');
            });
        });

        $('.btns>.right').click(function () {
            artG.stop().animate({
                marginLeft: '-50%'
            }, 500, function () {
                artG.children('.article:first').appendTo(artG);
                artG.css('margin-left', '-25%');
            });
        });

    } else if (wd > 420 && wd <= 780) {
        artG.children('.article:last').prependTo(artG);
        artG.css('margin-left', '-50%');

        $('.btns>.left').click(function () {
            artG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                artG.children('.article:last').prependTo(artG);
                artG.css('margin-left', '-50%');
            });
        });

        $('.btns>.right').click(function () {
            artG.stop().animate({
                marginLeft: '-100%'
            }, 500, function () {
                artG.children('.article:first').appendTo(artG);
                artG.css('margin-left', '-50%');
            });
        });
    
    } else {
        artG.children('.article:last').prependTo(artG);
        artG.css('margin-left', '-100%');

        $('.btns>.left').click(function () {
            artG.stop().animate({
                marginLeft: '0%'
            }, 500, function () {
                artG.children('.article:last').prependTo(artG);
                artG.css('margin-left', '-100%');
            });
        });

        $('.btns>.right').click(function () {
            artG.stop().animate({
                marginLeft: '-200%'
            }, 500, function () {
                artG.children('.article:first').appendTo(artG);
                artG.css('margin-left', '-100%');
            });
        });
    
    }

    //자동 실행
    var mnGr = -720;

    if (wd > 780) {
        mnGr = -720;
    } else if (wd > 420 && wd <= 780) {
        mnGr = -480;
    } else {
        mnGr = -280;
    }

    var j = 0;
    var autoRolling = setInterval(function () {
        j++;
        j = j % 3;

        $('.paging>li').removeClass('show');
        $('.paging>li').eq(j).addClass('show');

        $('.mnGroup').css('margin-top', j * mnGr + 'px');
        $('.mnTitleGroup').css('margin-top', j * -40 + 'px');
        $('.mnNoteGroup').css('margin-top', j * -80 + 'px');
    }, 2000);
    

    $('.paging>li').click(function () {
        var ind = $(this).index();
        
        $('.paging>li').removeClass('show');
        $(this).addClass('show');

        $('.mnGroup').css('margin-top', ind * mnGr + 'px');
        $('.mnTitleGroup').css('margin-top', ind * -40 + 'px');
        $('.mnNoteGroup').css('margin-top', ind * -80 + 'px');

        clearInterval(autoRolling);
    });
});