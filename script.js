// EUROSPAIN LOGISTICS VTC
// JavaScript inicial

document.addEventListener("DOMContentLoaded", () => {
    console.log("EUROSPAIN LOGISTICS VTC cargada correctamente.");
});

// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
