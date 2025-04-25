const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Position X de la souris relative à la carte
    const y = e.clientY - rect.top;  // Position Y de la souris relative à la carte

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Ajuste le facteur pour contrôler l'intensité
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
