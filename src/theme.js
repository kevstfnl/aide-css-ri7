/*
 * ATTENTION CE SCRIPT JAVASRIPT DOIT ETRE CHARGÉ DANS LA PARTIE HEAD DU DOM,
 * SANS LE PARAMETRE "DEFER", IL EST IMPORTANT QUE SELUI-CI SOIT CHARGÉ AVANT LE CONTENUE DE LA PAGE
 * POUR EVITER UN EVENTUELLE CLIGNOTTEMENT LORS DU CHARGEMENT DE LA PAGE.
*/

const html = document.documentElement; // documentElement = <html> dans le dom

// J'ajoute le theme sauvegardé dans le localStorage dans une class du documentElement.
const themeSaved = localStorage.getItem("theme");
if (themeSaved) html.classList.add(themeSaved);

// Quand le contenue de la page est chargé je recupère le bouton pour changer de theme,
// et je lui ajoute l'evenement "click" pour pouvoir changer de theme.
document.addEventListener("DOMContentLoaded", themeInitialisation);
function themeInitialisation() {
    document.querySelector(".theme-button").addEventListener("click", toggleTheme);
}


function toggleTheme() {
    // Si les préférence (dans le navigateur) de l'utilisateur est le theme sombre,
    // je toggle (ajoute si non présent, enlève si présent) la class "light" dans documentElement,
    // et je le sauvegarde dans le localStorage.
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.toggle("light");
        localStorage.setItem("theme", html.classList.contains("light") ? "light" : null);
    } 
    // Sinon je toggle la class dark dans documentElement,
    // et je le sauvegarde dans le localStorage.
    else {
        html.classList.toggle("dark");
        localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : null);
    }
}
