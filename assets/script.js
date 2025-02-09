// Script untuk menambahkan class 'scrolled' pada navbar saat scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Sesuaikan 80 dengan tinggi navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const heroButton = document.getElementById("hero-btn");
heroButton.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.getAttribute("data-target").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 80; // Sesuaikan dengan tinggi navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});

// Theme
function changeTheme(theme) {
  const root = document.documentElement; // Mengakses :root

  if (theme === "aurora") {
    root.style.setProperty("--mainColor1", "rgb(13, 59, 102)");
    root.style.setProperty("--mainColor2", "rgb(250, 121, 33)");
    root.style.setProperty("--mainColor3", "rgb(142, 68, 173)");
    root.style.setProperty("--mainColor4", "rgba(97, 61, 193, 0.8)");
    root.style.setProperty("--mainColor5", "rgb(255, 197, 37)");
  } else if (theme === "galaksi") {
    root.style.setProperty("--mainColor3", "rgb(10, 10, 30)");
    root.style.setProperty("--mainColor2", "rgb(153, 9, 112)");
    root.style.setProperty("--mainColor1", "rgb(54, 0, 61)");
    root.style.setProperty("--mainColor6", "rgb(19, 105, 194)");
    root.style.setProperty("--mainColor4 ", "rgb(250, 121, 33)");
    root.style.setProperty("--mainColor5", "rgb(5, 37, 125)");
  } else if (theme === "galaksiBiru") {
    root.style.setProperty("--mainColor3", "rgb(33, 33, 86)");
    root.style.setProperty("--mainColor6", "rgb(20, 29, 101)");
    root.style.setProperty("--mainColor1", "rgb(54, 94, 135)");
    root.style.setProperty("--mainColor5", "rgb(46, 78, 104)");
    root.style.setProperty("--mainColor2", "rgb(7, 85, 169)");
    root.style.setProperty("--mainColor4", "rgb(255, 255, 255)");
  }
}

// Submit Form to Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzPiJim6Xy8myyKoHhKMOsCJyT1hRn7_7OuoJ0D813u_1aUHVwm61jxX88gikPlJu2-/exec";
const form = document.forms["contact-form"];
const kirim = document.querySelector(".btn-kirim");
const loding = document.querySelector(".btn-loding");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loding.classList.toggle("d-none");
  kirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loding.classList.toggle("d-none");
      kirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
