// Translation data
const translations = {
    fr: {
        'nav.brand': 'WebDev Pro',
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.testimonials': 'Avis',
        'nav.contact': 'Contact',
        'hero.title': 'Sites Web Modernes qui Convertissent',
        'hero.subtitle': 'Freelance spécialisé dans la création de sites web professionnels, responsives et performants',
        'hero.description': 'Transformez votre présence en ligne avec des solutions web sur mesure. Design moderne, code optimisé, résultats garantis.',
        'hero.cta': 'Contactez-moi',
        'hero.portfolio': 'Voir le Portfolio',
        'about.title': 'À Propos',
        'about.lead': 'Développeur web freelance passionné, je crée des sites web qui allient esthétique moderne et performance technique.',
        'about.text1': 'Avec plusieurs années d\'expérience dans le développement web, j\'accompagne les entreprises et entrepreneurs dans leur transformation digitale. Mon approche combine créativité, expertise technique et écoute client.',
        'about.text2': 'Chaque projet est unique. Je m\'engage à comprendre vos besoins, vos objectifs et votre vision pour créer une solution web sur mesure qui vous démarque de la concurrence.',
        'about.experience.title': 'Expérience',
        'about.experience.text': '5+ ans dans le développement web, projets variés pour clients internationaux',
        'about.skills.title': 'Compétences',
        'about.skills.text': 'HTML5, CSS3, JavaScript, WordPress, Responsive Design, SEO, Performance',
        'about.languages.title': 'Langues',
        'about.languages.text': 'Français (natif) & Anglais (courant) - Communication fluide avec clients internationaux',
        'about.approach.title': 'Approche Client',
        'about.approach.text': 'Écoute active, communication transparente, livraisons dans les délais, support continu',
        'services.title': 'Services',
        'services.description': 'Des solutions web complètes adaptées à vos besoins et à votre budget',
        'services.website.title': 'Sites Web Vitrines',
        'services.website.description': 'Sites professionnels pour présenter votre activité. Design moderne, responsive, optimisé SEO.',
        'services.website.feature1': 'Design sur mesure',
        'services.website.feature2': '100% Responsive',
        'services.website.feature3': 'Optimisation SEO',
        'services.website.feature4': 'Formation incluse',
        'services.landing.title': 'Landing Pages',
        'services.landing.description': 'Pages de conversion optimisées pour maximiser vos ventes et générer des leads qualifiés.',
        'services.landing.feature1': 'Optimisé conversion',
        'services.landing.feature2': 'A/B Testing',
        'services.landing.feature3': 'Intégration analytics',
        'services.landing.feature4': 'Temps de chargement rapide',
        'services.wordpress.title': 'Sites WordPress',
        'services.wordpress.description': 'Création et personnalisation de sites WordPress. Thèmes sur mesure, plugins optimisés.',
        'services.wordpress.feature1': 'Thème personnalisé',
        'services.wordpress.feature2': 'Gestion de contenu facile',
        'services.wordpress.feature3': 'Sécurité renforcée',
        'services.wordpress.feature4': 'Maintenance incluse',
        'services.redesign.title': 'Refonte & Personnalisation',
        'services.redesign.description': 'Modernisez votre site existant. Amélioration du design, performance et expérience utilisateur.',
        'services.redesign.feature1': 'Audit complet',
        'services.redesign.feature2': 'Design moderne',
        'services.redesign.feature3': 'Amélioration performance',
        'services.redesign.feature4': 'Migration sécurisée',
        'portfolio.title': 'Portfolio',
        'portfolio.description': 'Découvrez quelques-uns de mes projets récents',
        'portfolio.item1.title': 'Site Vitrine - Agence Marketing',
        'portfolio.item1.description': 'Site moderne et élégant pour une agence de marketing digital. Design épuré, animations fluides, 100% responsive.',
        'portfolio.item2.title': 'E-commerce WordPress',
        'portfolio.item2.description': 'Boutique en ligne complète avec WooCommerce. Thème personnalisé, paiements sécurisés, gestion des stocks.',
        'portfolio.item3.title': 'Landing Page - SaaS Startup',
        'portfolio.item3.description': 'Page de conversion optimisée pour une startup SaaS. Taux de conversion amélioré de 40%.',
        'portfolio.item4.title': 'Site Médical - Cabinet Dentaire',
        'portfolio.item4.description': 'Site professionnel pour cabinet dentaire. Prise de rendez-vous en ligne, galerie photos, informations pratiques.',
        'portfolio.item5.title': 'Site Restaurant Premium',
        'portfolio.item5.description': 'Site élégant pour restaurant haut de gamme. Menu interactif, réservations en ligne, galerie photos haute qualité.',
        'portfolio.item6.title': 'Plateforme E-learning',
        'portfolio.item6.description': 'Plateforme de formation en ligne avec système de cours, quiz et certificats. Interface intuitive et moderne.',
        'testimonials.title': 'Avis Clients',
        'testimonials.item1.text': '"Excellent travail ! Mon nouveau site web dépasse toutes mes attentes. Professionnel, réactif et très à l\'écoute. Je recommande vivement !"',
        'testimonials.item1.name': 'Sophie Martin',
        'testimonials.item1.role': 'Directrice Marketing',
        'testimonials.item2.text': '"Un développeur talentueux et professionnel. Le site WordPress créé est exactement ce que je voulais. Formation incluse, support excellent. Parfait !"',
        'testimonials.item2.name': 'Jean Dubois',
        'testimonials.item2.role': 'Entrepreneur',
        'testimonials.item3.text': '"Landing page créée en un temps record. Le taux de conversion a augmenté de 35% ! Communication parfaite, livraison dans les délais. Top !"',
        'testimonials.item3.name': 'Marie Leclerc',
        'testimonials.item3.role': 'Fondatrice Startup',
        'testimonials.item4.text': '"Refonte complète de mon site. Résultat : design moderne, chargement ultra-rapide, meilleur référencement. Très satisfait du travail réalisé."',
        'testimonials.item4.name': 'Pierre Bernard',
        'testimonials.item4.role': 'Directeur Commercial',
        'contact.title': 'Contactez-moi',
        'contact.description': 'Discutons de votre projet et trouvons ensemble la solution idéale',
        'contact.form.name': 'Nom',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Sujet',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Envoyer le message',
        'contact.info.email.title': 'Email',
        'contact.info.fiverr.title': 'Fiverr',
        'contact.info.fiverr.link': 'Voir mon profil Fiverr',
        'contact.info.response.title': 'Temps de réponse',
        'contact.info.response.text': 'Réponse sous 24h, du lundi au vendredi',
        'contact.info.languages.title': 'Langues',
        'contact.info.languages.text': 'Français & Anglais - Communication fluide garantie',
        'footer.brand': 'WebDev Pro',
        'footer.tagline': 'Création de sites web professionnels et modernes',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.rights': 'Tous droits réservés.'
    },
    en: {
        'nav.brand': 'WebDev Pro',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'hero.title': 'Modern Websites That Convert',
        'hero.subtitle': 'Freelance specialized in creating professional, responsive and high-performing websites',
        'hero.description': 'Transform your online presence with custom web solutions. Modern design, optimized code, guaranteed results.',
        'hero.cta': 'Contact Me',
        'hero.portfolio': 'View Portfolio',
        'about.title': 'About',
        'about.lead': 'Passionate freelance web developer, I create websites that combine modern aesthetics and technical performance.',
        'about.text1': 'With several years of experience in web development, I help businesses and entrepreneurs in their digital transformation. My approach combines creativity, technical expertise and client listening.',
        'about.text2': 'Every project is unique. I commit to understanding your needs, goals and vision to create a custom web solution that sets you apart from the competition.',
        'about.experience.title': 'Experience',
        'about.experience.text': '5+ years in web development, varied projects for international clients',
        'about.skills.title': 'Skills',
        'about.skills.text': 'HTML5, CSS3, JavaScript, WordPress, Responsive Design, SEO, Performance',
        'about.languages.title': 'Languages',
        'about.languages.text': 'French (native) & English (fluent) - Smooth communication with international clients',
        'about.approach.title': 'Client Approach',
        'about.approach.text': 'Active listening, transparent communication, on-time delivery, continuous support',
        'services.title': 'Services',
        'services.description': 'Complete web solutions adapted to your needs and budget',
        'services.website.title': 'Showcase Websites',
        'services.website.description': 'Professional websites to present your business. Modern design, responsive, SEO optimized.',
        'services.website.feature1': 'Custom design',
        'services.website.feature2': '100% Responsive',
        'services.website.feature3': 'SEO optimization',
        'services.website.feature4': 'Training included',
        'services.landing.title': 'Landing Pages',
        'services.landing.description': 'Conversion-optimized pages to maximize your sales and generate qualified leads.',
        'services.landing.feature1': 'Conversion optimized',
        'services.landing.feature2': 'A/B Testing',
        'services.landing.feature3': 'Analytics integration',
        'services.landing.feature4': 'Fast loading time',
        'services.wordpress.title': 'WordPress Sites',
        'services.wordpress.description': 'WordPress site creation and customization. Custom themes, optimized plugins.',
        'services.wordpress.feature1': 'Custom theme',
        'services.wordpress.feature2': 'Easy content management',
        'services.wordpress.feature3': 'Enhanced security',
        'services.wordpress.feature4': 'Maintenance included',
        'services.redesign.title': 'Redesign & Customization',
        'services.redesign.description': 'Modernize your existing site. Design improvement, performance and user experience.',
        'services.redesign.feature1': 'Complete audit',
        'services.redesign.feature2': 'Modern design',
        'services.redesign.feature3': 'Performance improvement',
        'services.redesign.feature4': 'Secure migration',
        'portfolio.title': 'Portfolio',
        'portfolio.description': 'Discover some of my recent projects',
        'portfolio.item1.title': 'Showcase Site - Marketing Agency',
        'portfolio.item1.description': 'Modern and elegant website for a digital marketing agency. Clean design, smooth animations, 100% responsive.',
        'portfolio.item2.title': 'WordPress E-commerce',
        'portfolio.item2.description': 'Complete online store with WooCommerce. Custom theme, secure payments, stock management.',
        'portfolio.item3.title': 'Landing Page - SaaS Startup',
        'portfolio.item3.description': 'Conversion-optimized page for a SaaS startup. Conversion rate improved by 40%.',
        'portfolio.item4.title': 'Medical Site - Dental Practice',
        'portfolio.item4.description': 'Professional website for dental practice. Online appointment booking, photo gallery, practical information.',
        'portfolio.item5.title': 'Premium Restaurant Site',
        'portfolio.item5.description': 'Elegant website for upscale restaurant. Interactive menu, online reservations, high-quality photo gallery.',
        'portfolio.item6.title': 'E-learning Platform',
        'portfolio.item6.description': 'Online training platform with course system, quizzes and certificates. Intuitive and modern interface.',
        'testimonials.title': 'Client Testimonials',
        'testimonials.item1.text': '"Excellent work! My new website exceeds all my expectations. Professional, responsive and very attentive. Highly recommended!"',
        'testimonials.item1.name': 'Sophie Martin',
        'testimonials.item1.role': 'Marketing Director',
        'testimonials.item2.text': '"A talented and professional developer. The WordPress site created is exactly what I wanted. Training included, excellent support. Perfect!"',
        'testimonials.item2.name': 'Jean Dubois',
        'testimonials.item2.role': 'Entrepreneur',
        'testimonials.item3.text': '"Landing page created in record time. Conversion rate increased by 35%! Perfect communication, on-time delivery. Top!"',
        'testimonials.item3.name': 'Marie Leclerc',
        'testimonials.item3.role': 'Startup Founder',
        'testimonials.item4.text': '"Complete redesign of my site. Result: modern design, ultra-fast loading, better SEO. Very satisfied with the work done."',
        'testimonials.item4.name': 'Pierre Bernard',
        'testimonials.item4.role': 'Sales Director',
        'contact.title': 'Contact Me',
        'contact.description': 'Let\'s discuss your project and find the ideal solution together',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.info.email.title': 'Email',
        'contact.info.fiverr.title': 'Fiverr',
        'contact.info.fiverr.link': 'View my Fiverr profile',
        'contact.info.response.title': 'Response Time',
        'contact.info.response.text': 'Response within 24h, Monday to Friday',
        'contact.info.languages.title': 'Languages',
        'contact.info.languages.text': 'French & English - Smooth communication guaranteed',
        'footer.brand': 'WebDev Pro',
        'footer.tagline': 'Professional and modern website creation',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.'
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'fr';

// Translation function
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        translatePage(lang);
    });
});

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
});

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to a server
    // For now, we'll use mailto as a fallback
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:mawussijacques07@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message (you can customize this)
    alert(currentLang === 'fr' 
        ? 'Merci pour votre message ! Vous allez être redirigé vers votre client email.' 
        : 'Thank you for your message! You will be redirected to your email client.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.detail-card, .service-card, .portfolio-item, .testimonial-card, .info-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});