// Script untuk menambahkan class 'scrolled' pada navbar saat scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const card = document.querySelector('.card');

    console.log('Navbar Z-Index:', window.getComputedStyle(navbar).zIndex);
    console.log('Card Z-Index:', window.getComputedStyle(card).zIndex);
});
