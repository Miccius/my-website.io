const toggleIcon = document.querySelector('.toggle-icon');
const contactSection = document.querySelector('.contact-section');

toggleIcon.addEventListener('click',() => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode-contact');
   
})

///////////////////////navbar fadeing/////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header');
    const logoClass = document.querySelector('.logo');
    const arrowsUp = document.querySelector('.arrows-up');
    const scrolledClass = 'navbar-scrolled';
    const scrollThreshold = 50;
    const logoScrolled = 'logo-scroll';
    const arrowsHide = 'arrows-scroll';
    
    function updateNavbar() {
        if (window.scrollY > scrollThreshold) {
            // When scrolled down
            navbar.classList.add(scrolledClass);
            logoClass.classList.add(logoScrolled);
            arrowsUp.classList.remove(arrowsHide); // Show arrow when scrolled
        } else {
            // When at top of page
            navbar.classList.remove(scrolledClass);
            logoClass.classList.remove(logoScrolled);
            arrowsUp.classList.add(arrowsHide); // Hide arrow at top
        }
    }
    
    
    // Initial check in case page loads with scroll
    updateNavbar();
    
    // Listen for scroll events (with debounce for performance)
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(updateNavbar, 50);
    }, false);
});

//////////////////////Nav-Links////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    navbar.addEventListener('click', function(e) {
      if (e.target.classList.contains('nav-link')) {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to clicked link
        e.target.classList.add('active');
      }
    });
  });
//


///////////////////////scroll link lighter////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Options for Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Get the ID of the visible section
                const id = entry.target.getAttribute('id');
                
                // Find corresponding link and add active class
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Remove the manual smooth scrolling implementation
    // (Let CSS handle smooth scrolling and scroll-padding-top)
});



/////////////////////////Profession/////////////////////

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
                }, index * 300); // Delay based on index
                
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
        threshold: 0.5 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const feature = entry.target;
                const index = Array.from(features).indexOf(feature);

                setTimeout(() => {
                    feature.classList.add('show');
                }, index * 150); // Delay based on index
                
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


//########################### contact form ######################################

function sendEmail() {
    var templateParams = {
        from_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_mv1unno', 'template_pmnr8mj', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Email sent successfully!");
        }, function(error) {
           console.log('FAILED...', error);
           alert("Failed to send email. Please try again.");
        });
}

function resetForm() {
    document.getElementById('contact-form').reset();
}





