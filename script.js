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


const comentarios = [
    { nombre: "Luis. P", texto: "Buenos precios y buena mercadería", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Cintia. A", texto: "Excelente atención. Muy buenos precios.", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Graciela. A", texto: "Excelente atención y cordialidad. Asesoramiento personalizado y precios acordes. Recomendable.", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Jose. L", texto: "Excelente atención. Muy buenos precios.\nAmabilidad.seriedad y respeto.\n", estrellas: 4, foto: "img/perfiles/perfil.png" },
    { nombre: "Renzo. I", texto: "Excelentes precios variedades y calidad de productos como la atención recibida gracias por los equipamientos adquiridos! Súper recomendado", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Sergio. A", texto: "Excelente atención! Buenos productos. Recomendable.", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Mauro. A", texto: "Muy buena atención, precios accesibles y buena calidad de productos, garantía y facturación en el instante", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Leandro. L", texto: "Muy buenos productos. Y excelente Calidad en productos, gracias por la buena atención", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Ezequiel. F", texto: "Muy buena calidad de los productos. Excelente relación precio calidad.", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Ali. N", texto: "Muy buena calidad de los equipos, y buenos precios. Muy amable la atención", estrellas: 5, foto: "img/perfiles/perfil.png" },
    { nombre: "Esteban. G", texto: "Muy buenos hornos industriales. Buena atención y servicio post venta.", estrellas: 4, foto: "img/perfiles/perfil.png" },
    { nombre: "Ismael", texto: "Muy buena atención y calidad de las maquinarias lo recomiendo", estrellas: 4, foto: "img/perfiles/perfil.png" }
];

const contenedor = document.getElementById("listaComentarios");

const mejores = comentarios.filter(c => c.estrellas >= 4);
const seleccion = mejores.sort(() => Math.random() - 0.5).slice(0, 4);

seleccion.forEach(c => {
    const wrapper = document.createElement("div");
    wrapper.className = "contenedor-comentario";

    const card = document.createElement("div");
    card.className = "tarjeta-comentario";

    card.innerHTML = `
        <div class="cara frente">
            <img src="${c.foto}" class="foto-perfil">
            <h4>${c.nombre}</h4>
            <div class="estrellas">${"★".repeat(c.estrellas)}</div>
        </div>

        <div class="cara reverso">
            <p>${c.texto}</p>
        </div>
    `;

    wrapper.appendChild(card);
    contenedor.appendChild(wrapper);
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