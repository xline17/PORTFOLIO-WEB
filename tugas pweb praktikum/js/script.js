// Menunggu seluruh DOM dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Toggle Hamburger Menu (Mobile Navigation)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu saat link navigasi diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Toggle Dark / Light Theme (Manipulasi DOM Class & Text)
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggleBtn.textContent = '☀️ Dark Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Light Mode';
        }
    });

    // 3. Form Interactivity & Validation (DOM Event Handling)
    const contactForm = document.getElementById('contactForm');
    const notification = document.getElementById('formNotification');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah reload halaman

        const name = document.getElementById('name').value;
        
        // Menampilkan notifikasi sukses secara dinamis
        notification.textContent = `Terima kasih ${name}, pesan Anda berhasil dikirim!`;
        notification.classList.remove('hidden');

        // Reset form
        contactForm.reset();

        // Sembunyikan notifikasi setelah 4 detik
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 4000);
    });
});