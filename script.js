document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.7)';
            header.style.boxShadow = 'none';
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        desktopNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (desktopNav.classList.contains('active')) {
                desktopNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Active navigation link highlighting on scroll
    const navLinks = document.querySelectorAll('.desktop-nav a');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
