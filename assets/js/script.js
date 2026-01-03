/* ============================================
   EVOLUTION OF VIDEO GAMES - JAVASCRIPT
   IB MYP Personal Project
   ============================================ */

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initBackToTop();
    initTimeline();
    initScrollAnimations();
    initGalleryHover();
});

// ========== HAMBURGER MENU TOGGLE ==========
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ========== BACK TO TOP BUTTON ==========
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========== TIMELINE EXPAND/COLLAPSE ==========
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-content');

    timelineItems.forEach(item => {
        const header = item.querySelector('.timeline-header');
        const details = item.querySelector('.timeline-details');
        const toggle = item.querySelector('.timeline-toggle');

        if (header && details && toggle) {
            header.addEventListener('click', function() {
                details.classList.toggle('active');
                
                // Rotate toggle icon
                if (details.classList.contains('active')) {
                    toggle.textContent = '−';
                } else {
                    toggle.textContent = '+';
                }
            });
        }
    });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.card, .section, .timeline-item, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ========== GALLERY HOVER EFFECTS ==========
function initGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

