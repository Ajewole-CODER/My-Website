/**
 * Toggle the visibility of the navigation menu on hamburger click
 */
const hamburger = document.getElementById('hamburger-menu');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    navUl.classList.toggle('show');
});

// Close the navigation menu when any link is clicked
navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

/**
 * Theme switching logic
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const links = dropdownMenu.querySelectorAll('a');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme or system preference
    if (currentTheme) {
        document.body.classList.add(currentTheme + '-mode');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dropdown menu visibility on button click
    themeToggleBtn.addEventListener('click', () => {
        const expanded = themeToggleBtn.getAttribute('aria-expanded') === 'true';
        themeToggleBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        dropdownMenu.style.display = expanded ? 'none' : 'block';
    });

    // Handle theme selection from dropdown
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.remove('light-mode', 'dark-mode');

            const theme = link.getAttribute('data-theme');

            if (theme === 'system') {
                localStorage.removeItem('theme');
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.body.classList.add('dark-mode');
                }
            } else {
                document.body.classList.add(theme + '-mode');
                localStorage.setItem('theme', theme);
            }

            // Close dropdown after selection
            dropdownMenu.style.display = 'none';
            themeToggleBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (event) => {
        if (!themeToggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            themeToggleBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Background slideshow logic
    const bgSlides = document.querySelectorAll('.background-slideshow .bg-slide');
    let currentBgSlide = 0;

    function showBgSlide(index) {
        bgSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextBgSlide() {
        currentBgSlide = (currentBgSlide + 1) % bgSlides.length;
        showBgSlide(currentBgSlide);
    }

    if (bgSlides.length > 1) {
        setInterval(nextBgSlide, 5000); // Change background slide every 5 seconds
    }
});
