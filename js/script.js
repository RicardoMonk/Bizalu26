$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".menu").toggleClass("active");

        let icon = $(this).find("i"); // Encuentra el <i> dentro del .menu-icon

        if ($(".menu").hasClass("active")) {
            icon.removeClass("fa-circle-chevron-down").addClass("fa-circle-chevron-up"); // Cambia a chevron arriba
        } else {
            icon.removeClass("fa-circle-chevron-up").addClass("fa-circle-chevron-down"); // Regresa a chevron abajo
        }
    });
});
