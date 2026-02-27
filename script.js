// =========================
// ANIMACIÓN FADE-IN SCROLL
// =========================

// selecciona solo elementos fade-in DESDE productos en adelante
const seccionInicioAnimacion = document.querySelector("#acerca");
const elementos = document.querySelectorAll(".fade-in");

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
// COMENTARIOS ALEATORIOS
// =========================


document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("listaComentarios");
    if (!contenedor) return;

    const comentarios = [
        { nombre: "Carolina M.", texto: "Excelente atención y asesoramiento.", estrellas: 5 },
        { nombre: "Juan P.", texto: "Muy buenos precios y variedad.", estrellas: 5 },
        { nombre: "Marcelo R.", texto: "Compré una cocina industrial y funciona perfecto.", estrellas: 5 },
        { nombre: "Cintia A.", texto: "Cumplieron con un pedido por encargo.", estrellas: 5 },
        { nombre: "Luis F.", texto: "Equipamiento de calidad.", estrellas: 5 },
        { nombre: "Andrea G.", texto: "Excelente relación precio-calidad.", estrellas: 5 },
        { nombre: "Diego S.", texto: "Muy confiables.", estrellas: 4 },
        { nombre: "Rocío B.", texto: "Asesoramiento claro.", estrellas: 5 },
        { nombre: "Pablo M.", texto: "Ideal para gastronomía.", estrellas: 5 },
        { nombre: "María L.", texto: "Productos duraderos.", estrellas: 4 },
        { nombre: "Gustavo T.", texto: "Gran predisposición.", estrellas: 5 },
        { nombre: "Silvia N.", texto: "Pude probar el equipo antes.", estrellas: 5 }
    ];

    const mejores = comentarios.filter(c => c.estrellas >= 4);
    const seleccion = mejores.sort(() => Math.random() - 0.5).slice(0, 4);

    seleccion.forEach(c => {
        const card = document.createElement("div");
        card.className = "comentario";
        card.innerHTML = `
            <h4>${c.nombre}</h4>
            <div class="estrellas">${"★".repeat(c.estrellas)}</div>
            <p>${c.texto}</p>
        `;
        contenedor.appendChild(card);
        setTimeout(() => card.classList.add("aparecer"), 100);

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


// ===========================
// SECCION VISIBLE DE LA NAVBAR
// ============================

const secciones = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function activarSeccion() {
    let scrollPos = window.scrollY + 150; 
    // offset para compensar navbar fija

    secciones.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {

            navLinks.forEach(link => {
                link.classList.remove("activo");

                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("activo");
                }
            });
        }
    });
}

window.addEventListener("scroll", activarSeccion);
activarSeccion();