// Script untuk toggle menu di mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Variabel untuk slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;

// Fungsi untuk menampilkan slide
function showSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dot yang aktif
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Tombol next
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Tombol previous
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Kontrol dengan dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide setiap 5 detik
let slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Berhenti auto-slide saat kursor di atas slider
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});

// Scroll halus untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });

        // Tutup menu mobile jika terbuka
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Validasi form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Cek apakah semua field sudah diisi
    if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim.`);
        this.reset();
    } else {
        alert('Harap lengkapi semua field sebelum mengirim pesan.');
    }
});