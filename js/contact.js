function notif() {
    alert("Pesan Anda telah terkirim!");
    window.location.href = "index.html"; // Ganti beranda.html dengan URL beranda Anda
}

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggel input');
    const navbar = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('slide');
    });
});
