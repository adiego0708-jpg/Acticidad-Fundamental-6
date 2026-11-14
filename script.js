document.addEventListener("DOMContentLoaded", function() {
    
    const enlacesMenu = document.querySelectorAll("nav ul li a");
    
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault(); // Evita el salto brusco normal de HTML
            
            // Busca la sección a la que apunta el enlace (ej. #google)
            const idSeccion = this.getAttribute("href");
            const seccionDestino = document.querySelector(idSeccion);
            
            // Si la sección existe, desliza la pantalla suavemente hacia ella
            if (seccionDestino) {
                seccionDestino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});