$(function() {
    $(".first").css({"background-color": "blue"});
    $("#second").css({"background-color": "red"});

    $("#btn-hide").click(function() {
        $("#second").hide();
    });
    $("#btn-show").click(function() {
        $("#second").show();
    });

    $(".first").mouseenter(function() {
        $("#second").fadeOut();
    });
    $(".first").mouseleave(function() {
        $("#second").fadeIn();
    })

    $(".third").mouseenter(function() {
        $("#second").slideDown();
    });
    $(".third").mouseleave(function() {
        $("#second").slideUp();
    })

    $("#btn-change").click(function() {
        $(".fourth").html("Hello <strong>World</strong>");
    });

    $("#btn-add").click(function() {
        $(".fourth").append(" <strong>Added text</strong> ");
    });
    $("#btn-preAdd").click(function() {
        $(".fourth").prepend(" <strong>Pre added text</strong> ");
    });

    $("#btn-addP").click(function() {
        $(".fourth").after("<p><strong>Added P</strong></p>");
    });
    $("#btn-preAddP").click(function() {
        $(".fourth").before("<p><strong>Pre added P</strong></p>");
    });

    $("#btn-remove").click(function() {
        $(".fourth").remove();
    });

    $("#btn-empty").click(function() {
        $(".fourth").empty();
    });

    $("#btn-addClass").click(function() {
        $(".third").toggleClass("green");
    });

});