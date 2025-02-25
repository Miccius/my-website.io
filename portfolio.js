document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-list button');

    // Sample portfolio items (you can replace this with your own data)
    const portfolioItems = [
        {category: 'wordPress-theme-website', image: 'Images/workopia.png', title: 'Workopia', link: '<a  class="link-projects" href="https://workopia.lovestoblog.com/" target= "_blank"><p>Visit My Project</p></a>', description: 'Workopia is a job listing website. It includes a custom Laravel-like router, controller classes, views, a database layer and a project structure using namespaces and PSR-4 autoloading. It highlights how to structure a PHP project without using any frameworks or libraries.'},
        {category: 'wordPress-theme-website', image: 'Images/fictional university.png', title: 'Fictional-University', link: '<a  class="link-projects" href="http://miccio-uni.rf.gd" target= "_blank"><p>Visit My Project</p></a>', description: 'I developed a custom WordPress site using PHP for dynamic fields and a unique theme, showcasing my skills in WordPress development.'},
        {category: 'wordPress-theme-website', image: 'Images/sito2.png', title: 'Business Website', link: '<a  class="link-projects" href="http://sito-2.lovestoblog.com" target= "_blank">Visit My Project</a>', description: 'I developed a custom WordPress site using PHP for a unique theme, showcasing my skills in WordPress development.'},
        {category: 'landing page', image: 'Images/landing-page-nike.png', title: 'Nike Landing Page', link: '<a class="link-projects" href="https://miccius.github.io/Landing-page-Nike.io/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Step into style and performance with our Nike shoe collection! This sleek landing page, built with simple HTML and CSS, showcases the latest in footwear.' },
        {category: 'landing page', image: 'Images/tindog.png', title: 'Tindog', link: '<a class="link-projects" href="https://miccius.github.io/Landing-page-Tindog.io/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Welcome to Tinog – a clean, simple landing page designed with pure HTML and CSS. Fast, responsive, and user-friendly. ' },
        {category: 'landing page', image: 'Images/fly-fishing.png', title: 'Fly Fishing', link: '<a class="link-projects "href="https://miccius.github.io/fly-fishing.io/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Welcome to Fly Fishing – a clean, simple landing page designed with pure HTML, CSS and JavaScript. Fast, responsive, and user-friendly.' },
        {category: 'e-shop', image: 'Images/e-shop.jpg', title: 'E-Shop', link: '<a class="link-projects"href="https://github.com/Miccius" target= "_blank" ><p>Coming Soon On-line</p></a>', description: 'Branding project' },
       // { category: 'ui-ux', image: 'Images/3.png', title: 'UI/UX Project 1', link: '<a class="link-projects" href="https://www.linkedin.com/in/francesco-miccio-20a1109b/" target= "_blank" ><p>Visit My Project</p></a>', description: 'User interface design' },
        //{ category: 'photo', image: 'Images/3.png', title: 'Photo Project 1', link: '<a class="link-projects" href="https://www.linkedin.com/in/francesco-miccio-20a1109b/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Photography project' },
        // Add more items as needed
    ];

    // Function to create portfolio items
    function createPortfolioItem(item) {
        const div = document.createElement('div');
        div.className = `portfolio-item ${item.category}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <h4>${item.link}</h4>
                
            </div>
        `;
        return div;
    }

    // Initial load of all items
    portfolioItems.forEach(item => {
        portfolioGrid.appendChild(createPortfolioItem(item));
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

             // Force reflow before updating items
    void portfolioGrid.offsetHeight;
    
    portfolioGrid.innerHTML = '';
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.category === filter) {
        const newItem = createPortfolioItem(item);
        portfolioGrid.appendChild(newItem);
        
        // Add slight delay for staggered animation
        setTimeout(() => {
          newItem.style.opacity = '1';
        }, 50);
      }
            });
        });
    });
});