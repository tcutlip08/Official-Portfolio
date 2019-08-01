$(document).ready(function () {
    $(".bio").attr("style", "display: none");
    $(".myWork").attr("style", "display: none");
    var collageHeight = $("#Code").height();
    var setMarginForContact = collageHeight + 150;

    $("#contact").css({ "margin-top": setMarginForContact + "px" });
});

$("#home").on("click", function(){
    $(".home").attr("style", "display: block");
    $(".bio").attr("style", "display: none");
    $(".myWork").attr("style", "display: none");
});
$("#bio").on("click", function(){
    $(".home").attr("style", "display: none");
    $(".bio").attr("style", "display: block");
    $(".myWork").attr("style", "display: none");
});
$("#myWork").on("click", function(){
    $(".home").attr("style", "display: none");
    $(".bio").attr("style", "display: none");
    $(".myWork").attr("style", "display: block");
});

$(window).resize(function () {
    $("#log").append("<div>Handler for .resize() called.</div>");
    var collageHeight = $("#Code").height();
    var setMarginForContact = collageHeight + 150;

    $("#contact").css({ "margin-top": setMarginForContact + "px" });
});