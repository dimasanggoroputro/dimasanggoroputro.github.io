// Script untuk menambahkan class 'scrolled' pada navbar saat scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Sesuaikan 80 dengan tinggi navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const heroButton = document.getElementById('hero-btn');
heroButton.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Sesuaikan dengan tinggi navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    }
});
