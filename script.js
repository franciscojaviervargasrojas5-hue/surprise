// Función para que el botón "No" se mueva de manera aleatoria al intentar presionarlo
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

// Función cuando hacen clic en "Sí"
function aceptar() {
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('successContainer').classList.remove('hidden');
}
