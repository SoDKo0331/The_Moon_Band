document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    setTimeout(function () {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function () {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 1000);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Dark Mode Toggle
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // On load, check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

