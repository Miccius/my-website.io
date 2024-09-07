const toggleIcon = document.querySelector('.toggle-icon');
const contactSection = document.querySelector('.contact-section');

toggleIcon.addEventListener('click',() => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode-contact');
   
})


document.addEventListener('DOMContentLoaded', function() {
    const professions = document.querySelectorAll('.profession');
    
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const profession = entry.target;
                const index = Array.from(professions).indexOf(profession);

                setTimeout(() => {
                    profession.classList.add('show');
                }, index * 800); // Delay based on index
                
                observer.unobserve(profession); // Stop observing once the animation has started
            }
        });
    }, observerOptions);

    professions.forEach(profession => {
        observer.observe(profession); // Start observing each profession element
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.9 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const feature = entry.target;
                const index = Array.from(features).indexOf(feature);

                setTimeout(() => {
                    feature.classList.add('show');
                }, index * 500); // Delay based on index
                
                observer.unobserve(feature); // Stop observing once the animation has started
            }
        });
    }, observerOptions);

    features.forEach(feature => {
        observer.observe(feature); // Start observing each feature element
    });
});

// #################### burger menu ###################################
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Reset animations when closing the menu
        if (!nav.classList.contains('active')) {
            navLinks.forEach(link => {
                link.style.animation = 'none';
                link.offsetHeight; // Trigger reflow
                link.style.animation = null;
            });
        }
    });

    navLinks.forEach((link, index) => {
        link.style.setProperty('--i', index + 1);
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});
