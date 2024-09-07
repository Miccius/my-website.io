document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-list button');

    // Sample portfolio items (you can replace this with your own data)
    const portfolioItems = [
        { category: 'web', image: 'Images/3.png', title: 'Web Project 1', description: 'Web design project' },
        { category: 'brand', image: 'Images/3.png', title: 'Brand Project 1', description: 'Branding project' },
        { category: 'ui-ux', image: 'Images/3.png', title: 'UI/UX Project 1', description: 'User interface design' },
        { category: 'photo', image: 'Images/3.png', title: 'Photo Project 1', description: 'Photography project' },
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