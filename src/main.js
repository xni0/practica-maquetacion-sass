import './styles/main.scss';
// src/main.js

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    if (!track || !nextButton) return;

    let currentIndex = 0; 
    // Con 4 proyectos y 2 por vista, tenemos 2 "páginas" (índice 0 y 1)
    const maxIndex = 1; 

    const updateCarousel = () => {
        // Desplazar el 100% del ancho del visor por cada página
        const offset = -currentIndex * 100; 
        track.style.transform = `translateX(${offset}%)`;

        // Actualizar estado de botones
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevButton.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
        nextButton.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
        nextButton.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';

        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});