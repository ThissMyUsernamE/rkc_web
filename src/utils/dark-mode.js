const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const desktopMoonIcon = document.querySelector('.header__moon');
    const desktopSunIcon = document.querySelector('.header__sun');
    const mobileMoonIcon = document.querySelector('.mobile-nav__moon');
    const mobileSunIcon = document.querySelector('.mobile-nav__sun');

    // State
    const theme = localStorage.getItem('theme');
  
    // Helper function to update icon visibility
    const updateIconsVisibility = () => {
        if (document.body.classList.contains('light-mode')) {
            // Show moon, hide sun in light mode (both desktop and mobile)
            desktopMoonIcon.style.display = 'block';
            desktopSunIcon.style.display = 'none';
            mobileMoonIcon.style.display = 'block';
            mobileSunIcon.style.display = 'none';
        } else {
            // Show sun, hide moon in dark mode (both desktop and mobile)
            desktopMoonIcon.style.display = 'none';
            desktopSunIcon.style.display = 'block';
            mobileMoonIcon.style.display = 'none';
            mobileSunIcon.style.display = 'block';
        }
    };

    // On mount: Set the correct mode and icons visibility
    if (theme) {
        document.body.classList.add(theme);
    }
    updateIconsVisibility(); // Update icons based on initial theme

    // Handlers for toggling theme
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.classList.remove('light-mode'); // Removes only the light-mode class
        }
        updateIconsVisibility(); // Update icons based on new theme
    };

    // Add event listener to all toggle buttons (desktop and mobile)
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', handleThemeToggle);
    });
};
export default darkMode;