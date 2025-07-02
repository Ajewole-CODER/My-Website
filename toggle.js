document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const links = dropdownMenu.querySelectorAll('a');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme + '-mode');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

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
        });
    });
});
