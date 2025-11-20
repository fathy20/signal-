```
// script.js
// Ultra-Modern Animation & Logic

// 1. Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px" // Removed negative margin to ensure early triggering
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('is-hidden');
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.classList.add('is-hidden'); // Hide initially via JS
    observer.observe(el);
});

// Safety Fallback: If animation fails to trigger (e.g. tab inactive), show all after 2s
setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll.is-hidden').forEach(el => {
        el.classList.remove('is-hidden');
        el.classList.add('is-visible');
    });
}, 2000);

// 2. Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(10, 35, 81, 0.1)";
        header.style.padding = "0.5rem 0";
    } else {
        header.style.boxShadow = "none";
        header.style.padding = "0";
    }
});

// 3. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 5. Animated Background Particles (DOM)
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning and delay
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'; // 10-20s
        particle.style.animationDelay = (Math.random() * 10) * -1 + 's';
        
        particlesContainer.appendChild(particle);
    }

    // Generate Stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positioning
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        // More stars are "shooting stars"
        if (Math.random() > 0.8) {
            star.classList.add('moving');
            star.style.animationDelay = Math.random() * 4 + 's';
        }
        
        particlesContainer.appendChild(star);
    }
}
// 6. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
```
