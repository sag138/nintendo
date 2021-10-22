$(function(){
    var nav = $('nav .image');
    var cnt02Top = $('.cnt02').offset().top;
    // var cnt04Top = $('.cnt04').offset().top;


    nav.first().click(function(){
        $('body, html').animate({
            scrollTop: cnt02Top
        },500);
    });

    // nav.last().click(function(){
    //     $('body, html').animate({
    //         scrollTop: cnt04Top
    //     },500);
    // });

});