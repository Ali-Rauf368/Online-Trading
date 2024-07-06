let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransformValue = -currentSlide * 100;
    slides.style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev').addEventListener('click', () => {
        moveSlide(-1);
        stopSlideShow(); // Stop slideshow on manual control
        startSlideShow(); // Restart slideshow after manual control
    });
    document.getElementById('next').addEventListener('click', () => {
        moveSlide(1);
        stopSlideShow(); // Stop slideshow on manual control
        startSlideShow(); // Restart slideshow after manual control
    });

    showSlide(currentSlide);
    startSlideShow(); // Start the automatic slideshow
});
