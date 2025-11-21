// 1. إعدادات Tailwind (توضع عادة قبل تحميل Tailwind إذا كنت تستخدم CDN)
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#0A0E1A',     // خلفية كحلية داكنة
                    card: '#111625',     // لون الكروت
                    accent: '#FFD700',   // أصفر ذهبي
                    blue: '#3B82F6',     // أزرق كهربائي
                }
            }
        }
    }
};

// 2. تشغيل المكتبات (يوضع هذا الجزء في نهاية ملف HTML أو داخل event listener)
document.addEventListener('DOMContentLoaded', () => {
    // تفعيل الأنيميشن عند التمرير
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    // الخلفية التفاعلية
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();
        });
    }

    function updateParticles() {
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
    }

    function animateParticles() {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    createParticles();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);
});