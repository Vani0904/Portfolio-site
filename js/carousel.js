
function showSlide(carouselId,index){
    const carousel = document.querySelector(`#${carouselId}`);
    const slides = carousel.querySelectorAll('.carousel-image');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const slides = carousel.querySelectorAll('.carousel-image');
    let currentSlide = parseInt(carousel.getAttribute('data-current-slide')) || 0;
    currentSlide = (currentSlide + 1) % slides.length;
    carousel.setAttribute('data-current-slide', currentSlide);
    showSlide(carouselId, currentSlide);
}

function prevSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const slides = carousel.querySelectorAll('.carousel-image');
    let currentSlide = parseInt(carousel.getAttribute('data-current-slide')) || 0;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    carousel.setAttribute('data-current-slide', currentSlide);
    showSlide(carouselId, currentSlide);
}

showSlide('project1-carousel', 0);
showSlide('project2-carousel', 0);

document.querySelector('#nextButton1').addEventListener('click', () => nextSlide('project1-carousel'));
document.querySelector('#prevButton1').addEventListener('click', () => prevSlide('project1-carousel'));

document.querySelector('#nextButton2').addEventListener('click', () => nextSlide('project2-carousel'));
document.querySelector('#prevButton2').addEventListener('click', () => prevSlide('project2-carousel'));
