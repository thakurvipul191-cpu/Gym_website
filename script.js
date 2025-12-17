console.log("GymX Website Loaded Successfully!");

// Complete navbar auto-close solution
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Function to close navbar
    function closeNavbar() {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickOnNavbar = event.target.closest('.navbar') !== null;
        const isClickOnToggler = event.target.closest('.navbar-toggler') !== null;
        
        if (!isClickOnNavbar && !isClickOnToggler) {
            closeNavbar();
        }
    });
    
    // Close navbar on touch outside (for mobile)
    document.addEventListener('touchstart', function(event) {
        const isTouchOnNavbar = event.target.closest('.navbar') !== null;
        const isTouchOnToggler = event.target.closest('.navbar-toggler') !== null;
        
        if (!isTouchOnNavbar && !isTouchOnToggler) {
            closeNavbar();
        }
    });
    
    // Close navbar when scrolling starts
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if user started scrolling (more than 5px)
        if (Math.abs(scrollTop - lastScrollTop) > 5) {
            closeNavbar();
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Also close navbar when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
        link.addEventListener('touchstart', closeNavbar);
    });
    
    // Close navbar on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});
