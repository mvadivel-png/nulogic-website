document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownLinks = document.querySelectorAll('.nav-item-with-dropdown > a');

    if (!navToggle || !navLinks) return;

    // Toggle main menu
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        navToggle.classList.toggle('active', isOpen);
        document.body.classList.toggle('nav-open', isOpen); // 👈 lock scroll
    });

    // Dropdown toggle
    dropdownLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                e.stopPropagation();
                link.parentElement.classList.toggle('open');
            }
        });
    });

    // Close menu on real links
    document.querySelectorAll(
        '.dropdown-menu a, .nav-links > li:not(.nav-item-with-dropdown) > a'
    ).forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open'); // 👈 unlock scroll
            }
        });
    });

    // Optional: close on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
});
