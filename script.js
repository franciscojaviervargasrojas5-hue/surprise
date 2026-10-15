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

function aceptar() {
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('successContainer').classList.remove('hidden');
}

function mostrarGaleria() {
    document.getElementById('successContainer').classList.add('hidden');
    document.getElementById('galleryContainer').classList.remove('hidden');
}

let currentSlide = 0;

function cambiarSlide(direccion) {
    const slides = document.querySelectorAll('.slide');
    const counter = document.getElementById('counter');

    slides[currentSlide].classList.remove('active');
    
    currentSlide += direccion;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active');
    counter.innerText = `${currentSlide + 1} / ${slides.length}`;
}
