document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. DESPLAZAMIENTO SUAVE (Menú de navegación)
    // ==========================================
    const enlacesMenu = document.querySelectorAll("nav ul li a");
    
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault(); 
            const idSeccion = this.getAttribute("href");
            const seccionDestino = document.querySelector(idSeccion);
            
            if (seccionDestino) {
                seccionDestino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ==========================================
    // 2. EFECTO ACORDEÓN (Desplegables)
    // ==========================================
    const detalles = document.querySelectorAll("details.info-extra");
    
    detalles.forEach((detalle) => {
        detalle.addEventListener("toggle", function() {
            if (detalle.open) {
                detalles.forEach((otroDetalle) => {
                    if (otroDetalle !== detalle && otroDetalle.open) {
                        otroDetalle.open = false; 
                    }
                });
            }
        });
    });

    // ==========================================
    // 3. BOTÓN DE VOLVER AL INICIO Y ALERTA
    // ==========================================
    const btnVolver = document.getElementById("btnVolverArriba");
    
    if(btnVolver) {
        btnVolver.addEventListener("click", function() {
            alert("¡Gracias por visitar nuestra página!");
            
            // Sube la pantalla suavemente
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});