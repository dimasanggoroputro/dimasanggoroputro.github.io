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


// Submit Form to Google Sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzPiJim6Xy8myyKoHhKMOsCJyT1hRn7_7OuoJ0D813u_1aUHVwm61jxX88gikPlJu2-/exec'
  const form = document.forms['contact-form']
  const kirim = document.querySelector('.btn-kirim')
  const loding = document.querySelector('.btn-loding')
  const myAlert = document.querySelector('.alert')

  form.addEventListener('submit', e => {
    e.preventDefault()
    loding.classList.toggle('d-none')
    kirim.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        loding.classList.toggle('d-none')
        kirim.classList.toggle('d-none')
        myAlert.classList.toggle('d-none')
        form.reset()
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })
  