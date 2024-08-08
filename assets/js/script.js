
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.titulo1').click(function () {
        $('.texto1').toggle();
    });
    $('.titulo2').click(function () {
        $('.texto2').toggle();
    });
    $('.titulo3').click(function () {
        $('.texto3').toggle();
    });
    $('.titulo4').click(function () {
        $('.texto4').toggle();
    });

    $(".ocultar-mostrar").click(function () {
        $(".ocultar-mostrar").slideToggle(1500);
    });
    $(".ocultar-mostrar2").click(function () {
        $(".ocultar-mostrar2").slideToggle(1500);
    });
    $(".ocultar-mostrar3").click(function () {
        $(".ocultar-mostrar3").slideToggle(1500);
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    $("#quienesSomos").hover(function () {
        $(this).css('cursor', 'pointer').attr('title', 'Los mejores viajes están junto a nosotros');
    }, function () {
        $(this).css('cursor', 'auto');
    });
});
