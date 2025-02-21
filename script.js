
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('.html', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            window.open(this.getAttribute('href'), '_blank'); // Open in new tab
        }
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

   
    showSlide(currentSlide);
}