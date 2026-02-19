const elementos = document.querySelectorAll(".fade-in");

function mostrarElementos() {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();
