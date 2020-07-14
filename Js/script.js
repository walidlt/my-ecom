$(document).ready(function () {

    var screenHeight = $(window).height();
    var firstNav = $(".firstNav").innerHeight();
    var secondNav = $(".secondNav").innerHeight();
    var mainNav = $(".navbar").innerHeight();

    $(".carousel-item").height(screenHeight - firstNav - secondNav - mainNav);

    $(window).resize(function () {

        var screenHeight = $(window).height();
        var firstNav = $(".firstNav").innerHeight();
        var secondNav = $(".secondNav").innerHeight();
        var mainNav = $(".navbar").innerHeight();

        $(".carousel-item").height(screenHeight - firstNav - secondNav - mainNav);
    });


    // Nice scroll 

    $("body").niceScroll({
        cursorcolor: "#D11E24",
        cursorwidth: "7px",
        cursorborder: "none",
        cursoropacitymin: .5,
        cursoropacitymin: .6,
        zindex: "9999"
    });

    new WOW().init();

    $('#product-slider').carousel({

        interval: 4000

    }

    )

    $(".card-photo img").click(function () {

        $(".modal-photo img").attr("src", $(this).attr("src"));
        $(".modal-text").text($(this).parent().parent().find(".product-info").text());
        $(".modal-stars").html($(this).parent().parent().find(".product-stars").clone(true))
        $(".modal-price").text($(this).parent().parent().find(".card-price").text());
        $(".modal-title").text($(this).parent().parent().find(".card-title").text());
    });


});

var cardHeight = 0;
$(".first-product .row .card").each(function () {

    if ($(this).height() > cardHeight) {

        cardHeight = $(this).height();
    }

});

$(".first-product .row .card").each(function () {

    $(this).height(cardHeight)

});