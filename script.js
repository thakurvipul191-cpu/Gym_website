console.log("GymX Website Loaded Successfully!");

// Auto close navbar when clicking outside OR scrolling on mobile
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isNavbarOpen = navbarCollapse.classList.contains('show');
        const isClickOnNavbar = event.target.closest('.navbar') !== null;
        const isClickOnToggler = event.target.closest('.navbar-toggler') !== null;
        
        if (isNavbarOpen && !isClickOnNavbar && !isClickOnToggler) {
            navbarToggler.click();
        }
    });
    
    // Close navbar when scrolling (on mobile)
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function() {
                navbarToggler.click();
            }, 150); // Close after 150ms of scrolling
        }
    });
    
    // Also close navbar when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
