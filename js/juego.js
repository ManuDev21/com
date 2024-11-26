const cube = document.querySelector('.cube');
const container = document.querySelector('.container');

// Manejar el seguimiento del mouse
container.addEventListener('mousemove', (e) => {
    const { offsetWidth, offsetHeight } = container;
    const x = (e.clientX / offsetWidth - 0.5) * 2; // Normalizar entre -1 y 1
    const y = (e.clientY / offsetHeight - 0.5) * -2; // Normalizar entre -1 y 1
    
    cube.style.animation = 'none'; // Detener animación infinita
    cube.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
});

// Restaurar animación al salir del área
container.addEventListener('mouseleave', () => {
    cube.style.animation = 'rotate 5s linear infinite';
});
