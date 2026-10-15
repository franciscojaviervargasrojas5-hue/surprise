// Movimiento aleatorio del botón "No"
function moverNo() {
    const btnNo = document.getElementById('btnNo');
    const maxX = window.innerWidth - btnNo.offsetWidth - 50;
    const maxY = window.innerHeight - btnNo.offsetHeight - 50;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Acción al hacer clic en "Sí"
function aceptar() {
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('successContainer').classList.remove('hidden');
}

// Pasar de la confirmación a la galería de fotos
function mostrarGaleria() {
    document.getElementById('successContainer').classList.add('hidden');
    document.getElementById('galleryContainer').classList.remove('hidden');
}

// Lógica del Carrusel de Fotos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('counter');

function cambiarSlide(direccion) {
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direccion;

    // Si llega al final o al inicio, da la vuelta o se detiene
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Vuelve a la primera foto
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Va a la última foto
    }

    slides[currentSlide].classList.add('active');
    counter.innerText = `${currentSlide + 1} / ${slides.length}`;
}
