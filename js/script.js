$(document).ready(function() {
    $(".menu-icon").click(function(event) {
        event.stopPropagation(); // Evita que el clic en el botón se propague al `document`
        $(".menu").toggleClass("active");

        let icon = $(this).find("i");
        if ($(".menu").hasClass("active")) {
            icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
        } else {
            icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    // Cerrar el menú si se hace clic fuera de las opciones
    $(document).click(function(event) {
        if ($(".menu").hasClass("active") && !$(event.target).closest(".menu a").length) {
            $(".menu").removeClass("active");
            $(".menu-icon i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });
});







$(document).ready(function() {
    let index = 0;
    const cards = $(".card");
    const totalCards = cards.length;

    // Crear indicadores
    const indicatorsContainer = $(".carousel-indicators");
    for (let i = 0; i < totalCards; i++) {
        indicatorsContainer.append(`<span data-index="${i}"></span>`);
    }
    const indicators = $(".carousel-indicators span");

    function updateCarousel(animated = true) {
        const carousel = $(".carousel");

        if (animated) {
            carousel.css("scroll-behavior", "smooth");
        } else {
            carousel.css("scroll-behavior", "auto");
        }

        carousel.scrollLeft(index * carousel.width());
        indicators.removeClass("active").eq(index).addClass("active");
    }

    $("#next").click(function() {
        if (index < totalCards - 1) {
            index++;
        } else {
            index = 0;  // Reinicia al primer servicio sin animación
            updateCarousel(false);
        }
        updateCarousel();
    });

    $("#prev").click(function() {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - 1; // Salta al último servicio sin animación
            updateCarousel(false);
        }
        updateCarousel();
    });

    // Swipe en dispositivos móviles
    let startX = 0;
    $(".carousel").on("touchstart", function(event) {
        startX = event.originalEvent.touches[0].clientX;
    });

    $(".carousel").on("touchend", function(event) {
        let endX = event.originalEvent.changedTouches[0].clientX;
        let diffX = startX - endX;  // Diferencia real del swipe
    
        if (Math.abs(diffX) > 80) {  // Aumenta el umbral para evitar movimientos dobles
            if (diffX > 0 && index < totalCards - 1) {
                index++;
            } else if (diffX < 0 && index > 0) {
                index--;
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




//script de la section two


