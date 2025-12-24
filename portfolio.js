document.addEventListener("DOMContentLoaded", function () {
  const portfolioGrid = document.getElementById("portfolio-grid");
  const filterButtons = document.querySelectorAll(".filter-list button");

  // Sample portfolio items (you can replace this with your own data)
  const portfolioItems = [
    {
      category: "web-app",
      image: "Images/workopia.png",
      title: "Workopia",
      link: '<a  class="link-projects" href="https://workopia.lovestoblog.com/" target= "_blank"><p>Visit My Project</p></a>',
      description:
        "Workopia is a job listing website. It includes a custom Laravel-like router, controller classes, views, a database layer and a project structure using namespaces and PSR-4 autoloading. It highlights how to structure a PHP project without using any frameworks or libraries.",
    },
    {
      category: "web-app",
      image: "Images/jobpost.png",
      title: "JOBOARD",
      link: '<a  class="link-projects" href="https://job-board-production-c632.up.railway.app/" target= "_blank"><p>Visit My Project</p></a>',
      description:
        "Full Job Board webapp with Laravel and mysql. A larger SaaS-style application with dashboards, filtering, file uploads, and advanced authentication.",
    },
    {
      category: "web-app",
      image: "Images/book-review.png",
      title: "BOOK REVIEW",
      link: '<a  class="link-projects"https://laravel-book-review-production-50ea.up.railway.app/" target= "_blank"><p>Visit My Project</p></a>',
      description:
        " A relational book review app with reviews, ratings, advanced queries, and caching.",
    },
    {
      category: "web-app",
      image: "Images/task-list.png",
      title: "TASK LIST",
      link: '<a class="link-projects"https://task-list-production-e0cf.up.railway.app/tasks" target= "_blank"><p>Visit My Project</p></a>',
      description:
        "A simple tasks list app to learn the MVC structure, CRUD, forms, and validation.",
    },
    {
      category: "wordPress-theme-website",
      image: "Images/fictional university.png",
      title: "Fictional-University",
      link: '<a  class="link-projects" href="http://miccio-uni.rf.gd" target= "_blank"><p>Visit My Project</p></a>',
      description:
        "I developed a custom WordPress site using PHP for dynamic fields and a unique theme, showcasing my skills in WordPress development.",
    },
    {
      category: "wordPress-theme-website",
      image: "Images/sito2.png",
      title: "Business Website",
      link: '<a  class="link-projects" href="http://sito-2.lovestoblog.com" target= "_blank">Visit My Project</a>',
      description:
        "I developed a custom WordPress site using PHP for a unique theme, showcasing my skills in WordPress development.",
    },
    {
      category: "landing page",
      image: "Images/landing-page-nike.png",
      title: "Nike Landing Page",
      link: '<a class="link-projects" href="https://miccius.github.io/Landing-page-Nike.io/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Step into style and performance with our Nike shoe collection! This sleek landing page, built with simple HTML and CSS, showcases the latest in footwear.",
    },
    {
      category: "landing page",
      image: "Images/tindog.png",
      title: "Tindog",
      link: '<a class="link-projects" href="https://miccius.github.io/Landing-page-Tindog.io/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Welcome to Tinog – a clean, simple landing page designed with pure HTML and CSS. Fast, responsive, and user-friendly. ",
    },

    {
      category: "websites",
      image: "Images/Yavin.png",
      title: "Yavin Office Space",
      link: '<a class="link-projects" href="https://yavin-office-space.netlify.app/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Website for a company that creates and customizes office spaces. It could be used for just about any kind of business. It is a very light business theme with a clean design.",
    },
    {
      category: "websites",
      image: "Images/Corso.png",
      title: "Corso Traning",
      link: '<a class="link-projects" href="https://corso-website-umber-ten.vercel.app/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Website for training courses, workshops, seminars, etc. It has a mixed design with both light and dark colors and a modern look.",
    },
    {
      category: "websites",
      image: "Images/Vera.png",
      title: "Vera Sofware",
      link: '<a class="link-projects" href="https://vera-website-app.netlify.app/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Business website for software solutions, but could easily be changed to fit any business. Dark-themed design with modals and other features.",
    },
    {
      category: "websites",
      image: "Images/E-book.png",
      title: "E-book Blogs",
      link: '<a class="link-projects" href="https://e-book-website-psi.vercel.app/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "Website for downloading a free E-book. This website has a light, business-oriented design.",
    },
    {
      category: "websites",
      image: "Images/Portfolio.png",
      title: "Portfolio",
      link: '<a class="link-projects" href="https://portfolio-website-tmp.netlify.app/" target= "_blank" ><p>Visit My Project</p></a>',
      description:
        "This is a dark-light contrast website for a portfolio. It is related to being a web developer",
    },

    {
      category: "e-shop",
      image: "Images/e-shop.jpg",
      title: "E-Shop",
      link: '<a class="link-projects"href="https://github.com/Miccius" target= "_blank" ><p>Coming Soon On-line</p></a>',
      description: "Branding project",
    },
    // { category: 'ui-ux', image: 'Images/3.png', title: 'UI/UX Project 1', link: '<a class="link-projects" href="https://www.linkedin.com/in/francesco-miccio-20a1109b/" target= "_blank" ><p>Visit My Project</p></a>', description: 'User interface design' },
    //{ category: 'photo', image: 'Images/3.png', title: 'Photo Project 1', link: '<a class="link-projects" href="https://www.linkedin.com/in/francesco-miccio-20a1109b/" target= "_blank" ><p>Visit My Project</p></a>', description: 'Photography project' },
    // Add more items as needed
  ];

  // Function to create portfolio items
  function createPortfolioItem(item) {
    const div = document.createElement("div");
    div.className = `portfolio-item ${item.category}`;
    div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style>
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <h4>${item.link}</h4>
                
            </div>
        `;
    return div;
  }

  // Initial load of all items
  portfolioItems.forEach((item) => {
    portfolioGrid.appendChild(createPortfolioItem(item));
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Force reflow before updating items
      void portfolioGrid.offsetHeight;

      portfolioGrid.innerHTML = "";
      portfolioItems.forEach((item) => {
        if (filter === "all" || item.category === filter) {
          const newItem = createPortfolioItem(item);
          portfolioGrid.appendChild(newItem);

          // Add slight delay for staggered animation
          setTimeout(() => {
            newItem.style.opacity = "1";
          }, 50);
        }
      });
    });
  });
});
