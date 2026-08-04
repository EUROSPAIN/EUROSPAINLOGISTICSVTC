/* ==========================================
   EUROSPAIN LOGISTICS VTC
   MAIN.JS
========================================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

// Header al hacer scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// Menú móvil
const menu = document.getElementById("menu");
const mobile = document.querySelector(".menu-mobile");

mobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// Botón subir arriba
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Contadores
const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const update = () => {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        update();

    });

};

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector("#estadisticas");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !started) {

        started = true;

        startCounters();

    }

});
