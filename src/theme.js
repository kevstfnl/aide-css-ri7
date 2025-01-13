const themeButtonSelector = ".theme-button";
const html = document.documentElement;

// Apply current theme saved in localStorage
const themeSaved = localStorage.getItem("theme");
if (themeSaved) html.classList.add(themeSaved);

// Add event listener to toggle-theme button when DOM are loaded.
document.addEventListener("DOMContentLoaded", themeInitialisation);

/** 
 * Event listener to toggling theme.
*/
function themeInitialisation() {
    document.querySelector(themeButtonSelector).addEventListener("click", toggleTheme);
}

/** 
 * Toggle theme and save current selected theme to localStorage.
*/
function toggleTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.toggle("light");
        localStorage.setItem("theme", html.classList.contains("light") ? "light" : null);
    } 
    else {
        html.classList.toggle("dark");
        localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : null);
    }
}
