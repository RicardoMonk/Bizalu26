$(document).ready(function() {
    // MENÚ DESPLEGABLE
    $(".menu-icon").click(function(event) {
        event.stopPropagation(); // Evita que el clic en el botón se propague al `document`
        $(".menu").toggleClass("active");

        let icon = $(this).find("i");
        icon.toggleClass("fa-chevron-down fa-chevron-up");
    });

    // Cerrar el menú si se hace clic fuera de las opciones
    $(document).click(function(event) {
        if ($(".menu").hasClass("active") && !$(event.target).closest(".menu a").length) {
            $(".menu").removeClass("active");
            $(".menu-icon i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    // CARRUSEL
    let index = 0;
    const cards = $(".card");
    const totalCards = cards.length;
    const carousel = $(".carousel");
    const indicatorsContainer = $(".carousel-indicators");

    // Crear indicadores
    for (let i = 0; i < totalCards; i++) {
        indicatorsContainer.append(`<span data-index="${i}"></span>`);
    }
    const indicators = $(".carousel-indicators span");

    function updateCarousel(animated = true) {
        carousel.css("scroll-behavior", animated ? "smooth" : "auto");
        carousel.scrollLeft(index * carousel.width());
        indicators.removeClass("active").eq(index).addClass("active");
    }

    $("#next").click(function() {
        index = (index + 1) % totalCards; // Movimiento circular
        updateCarousel();
    });

    $("#prev").click(function() {
        index = (index - 1 + totalCards) % totalCards; // Movimiento circular
        updateCarousel();
    });

    // Swipe en dispositivos móviles
    let startX = 0;
    $(".carousel").on("touchstart", function(event) {
        startX = event.originalEvent.touches[0].clientX;
    });

    $(".carousel").on("touchend", function(event) {
        let endX = event.originalEvent.changedTouches[0].clientX;
        let diffX = startX - endX; // Diferencia real del swipe

        if (Math.abs(diffX) > 80) { // Ajuste del umbral para evitar saltos
            if (diffX > 0) {
                index = (index + 1) % totalCards;
            } else {
                index = (index - 1 + totalCards) % totalCards;
            }
            updateCarousel();
        }
    });

    // Click en indicadores
    indicators.click(function() {
        index = $(this).data("index");
        updateCarousel();
    });

    // Activar primer indicador
    indicators.eq(0).addClass("active");
});
