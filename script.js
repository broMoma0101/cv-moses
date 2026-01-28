document.addEventListener('DOMContentLoaded', () => {
    // Animasi sederhana saat scroll
    const sections = document.querySelectorAll('.resume-section');
    
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;
            
            if (sectionTop < triggerPoint) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Inisialisasi gaya awal untuk animasi
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
    });

    // Jalankan saat scroll
    window.addEventListener('scroll', revealSection);
    // Jalankan sekali saat load
    revealSection();
});