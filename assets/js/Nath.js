function irPagina(url) {
    window.location.href = url;
}

    if (localStorage.getItem("theme") === "dark") {
        $('body').addClass('dark-mode');
        $('nav').addClass('dark-mode');
        $('mi-navbar').addClass('dark-mode');
        $('.navbar.navbar-expand-lg').addClass('dark-mode');
        $('footer').addClass('dark-mode');
        $('header').addClass('dark-mode');
        $('#toggle-theme').text('🌒');
    } else {
        $('#toggle-theme').text('☀️');
    }

$(document).ready(function () {

    $('#toggle-theme').on('click', function () {

        $('body').toggleClass('dark-mode');
        $('nav').toggleClass('dark-mode');
        $('mi-navbar').toggleClass('dark-mode');
        $('navbar.navbar-expand-lg').toggleClass('dark-mode');
        $('navbar').toggleClass('dark-mode');
        $('footer').toggleClass('dark-mode');
        $('header').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $(this).text('🌒');
        } else {
            $(this).text('☀️');
        }

    });

});


$(document).ready(function () {
    
$(".instagram").click(function () {
    window.open("https://www.instagram.com/nathgamart/", "_blank");
});
});

$(".facebook").click(function () {
    window.open("https://www.facebook.com/NathArt1124", "_blank");
});

$(".twitch").click(function () {
    window.open("https://www.twitch.tv/nathgamart", "_blank");
});

$(".youtube").click(function () {
    window.open("https://www.youtube.com/@NathGamesArt", "_blank");
});