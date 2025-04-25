const tiltContainer = document.querySelector('.card-tilt');
const cardInner = document.querySelector('.card-inner');

// Tilt
tiltContainer.addEventListener('mousemove', (e) => {
    const rect = tiltContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    tiltContainer.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

tiltContainer.addEventListener('mouseleave', () => {
    tiltContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Flip
cardInner.addEventListener('click', () => {
    cardInner.classList.toggle('is-flipped');
});
