console.log("GymX Website Loaded Successfully!");

// Simpler version - NO HTML CHANGES
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close navbar on page load
    closeNavbar();
    
    // Close navbar when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
    
    // Close navbar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992 && 
            navbarCollapse.classList.contains('show') && 
            !e.target.closest('.navbar')) {
            closeNavbar();
        }
    });
    
    // Close navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            closeNavbar();
        }
    });
    
    // Function to close navbar
    function closeNavbar() {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Manually trigger click on toggler to close
            if (navbarToggler) {
                navbarToggler.click();
            } else {
                // Fallback: just remove the show class
                navbarCollapse.classList.remove('show');
            }
        }
    }
});
