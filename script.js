// JavaScript pour les fonctionnalités interactives

document.addEventListener('DOMContentLoaded', function() {
    console.log("Site pour l'Église Saint-Michel chargé.");

    // Navigation toggle pour mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Scroll vers les sections
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            // Ferme le menu après le clic (mobile)
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Compteur d'animation pour les statistiques
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Vitesse de l'animation

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });

    // Animation lors du scroll
    const scrollElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message. Nous vous répondrons dès que possible.');
        contactForm.reset();
    });

    // Ouvrir et fermer le modal
    const modal = document.getElementById('contact-modal');

    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Fonction globale pour le scroll vers les sections
    window.scrollToSection = function(sectionId) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Effet de navbar au scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animation des cartes de service au survol
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animation des cartes d'événements
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });

    // Initialiser les animations de scroll
    handleScrollAnimation();
});
