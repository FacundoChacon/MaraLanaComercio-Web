// =========================
// ANIMACIÓN FADE-IN SCROLL
// =========================

// selecciona solo elementos fade-in DESDE productos en adelante
const seccionInicioAnimacion = document.querySelector("#acerca");
const elementos = document.querySelectorAll("#acerca, #acerca ~ section");

function mostrarElementos() {
    const trigger = window.innerHeight - 100;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = 0;
            el.style.transform = "translateY(20px)";
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();


// ================
// APARECER LATERAL
// ================
const elementosLaterales = document.querySelectorAll(".slide-left, .slide-right");

function mostrarLaterales() {
    elementosLaterales.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            el.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", mostrarLaterales);
mostrarLaterales();


// ==========================
// SCROLL SUAVE EN NAVEGACIÓN
// ==========================

const enlacesNav = document.querySelectorAll("nav a");

enlacesNav.forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// EFECTO FLOTAR EN IMÁGENES
// =========================

const imagenes = document.querySelectorAll(".gallery img");

imagenes.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "translateY(-8px) scale(1.02)";
        img.style.boxShadow = "0 12px 25px rgba(0,0,0,0.5)";
        img.style.transition = "0.3s ease";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "translateY(0) scale(1)";
        img.style.boxShadow = "none";
    });

});


// =========================
// TEXTAREA AUTO-EXPANDIBLE
// =========================

const textarea = document.querySelector("[name='mensaje']");
const contador = document.querySelector(".contador");

if (textarea && contador) {
    textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        contador.textContent = this.value.length + " / 200";
    });
}

// ===========================
// NAVBAR FIJA AL HACER SCROLL
// ===========================


const navbar = document.querySelector("nav");
const offsetNav = navbar.offsetTop;

function fijarNavbar() {
    if (window.scrollY >= offsetNav) {
        navbar.classList.add("nav-fija");
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("nav-fija");
        document.body.style.paddingTop = "0px";
    }
}

window.addEventListener("scroll", fijarNavbar);