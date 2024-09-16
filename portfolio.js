document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-list button');

    // Sample portfolio items (you can replace this with your own data)
    const portfolioItems = [
        { category: 'wordPress-theme', image: 'Images/3.png', title: 'Fictional-University', link: '<a  class="link-projects" href="https://github.com/Miccius" target= "_blank">Visit My Project</a>', description: 'I developed a custom WordPress site using PHP for dynamic fields and a unique theme, showcasing my skills in WordPress development and creating user-friendly solutions.' },
        { category: 'landing page', image: 'Images/nike landing page.png', title: 'Brand Project 1', link: '<a class="link-projects" href="https://miccius.github.io/Landing-page-Nike.io/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Branding project' },
        { category: 'e-shop', image: 'Images/3.png', title: 'Brand Project 1', link: '<a class="link-projects" href="https://www.linkedin.com/in/francesco-miccio-20a1109b/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Branding project' },
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

            portfolioGrid.innerHTML = '';
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.category === filter) {
                    portfolioGrid.appendChild(createPortfolioItem(item));
                }
            });
        });
    });
});