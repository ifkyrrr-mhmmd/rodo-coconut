// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// jika klik di luar sidebar untuk menghilangkan hamburger menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (r) {
  if (!hamburger.contains(r.target) && !navbarNav.contains(r.target)) {
    navbarNav.classList.remove("active");
  }
});

// untuk langsung ke menghubungi ke whatsapp
const send = document.querySelector(".btn");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const pesananInput = document.getElementById("pesanan");

send.addEventListener("click", function () {
  send.href = `https://api.whatsapp.com/send?phone=6289516643936&text=Nama: ${namaInput.value}%0AEmail: ${emailInput.value}%0AMembeli: ${pesananInput.value}`;
});
