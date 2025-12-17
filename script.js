console.log("GymX Website Loaded Successfully!");

// Simple version - close navbar when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close navbar when clicking anywhere outside
    document.addEventListener('click', function(event) {
        const isNavbarOpen = navbarCollapse.classList.contains('show');
        const isClickOnNavbar = event.target.closest('.navbar') !== null;
        
        if (isNavbarOpen && !isClickOnNavbar) {
            navbarToggler.click();
        }
    });
});
