// Theme switcher script
const theme_toggle_button = document.querySelector('#theme-toggle-btn');
const navbar = document.querySelector("#navbar-toggle-btn");
const body = document.body;

// Updating theme
function set_theme(theme) {
    body.setAttribute('data-bs-theme', theme);
    // Saves theme in the local storage
    localStorage.setItem('bs-theme', theme);
}

// Checks the saved theme in the local storage while loading the page
// if there's no set theme, set the light mode as default
const saved_theme = localStorage.getItem('bs-theme') || 'light';
set_theme(saved_theme);


// Checks the current theme
let current_theme_check = () => {
    /*
    Checks the current theme of body,
    if it's dark, then the navbar-classes should set
    the 'bg-dark' for the toggler-icon background.
    */
    const current_theme = body.getAttribute('data-bs-theme');
    let navbar_classes = navbar.classList;
    if (current_theme === 'dark') {
        if (navbar_classes.contains("bg-white")) {
            navbar_classes.replace("bg-white", "bg-dark");
        }
    }
};
current_theme_check();

// Change the theme with the clickable button
theme_toggle_button.addEventListener(
    /*
    Checks the 'click' event for the 'theme-toggle-btn',
    whenever it clicks, the theme and the 'toggle-icon' background
    change to the new theme. If it's dark, it changes to light and opposite.
    */
    'click', () => {
        const current_theme = body.getAttribute('data-bs-theme');
        const new_theme = current_theme === 'light' ? 'dark' : 'light';
        set_theme(new_theme);

        let navbar_classes = navbar.classList;
        if (new_theme === 'dark') {
            if (navbar_classes.contains('bg-white')) {
                navbar_classes.replace('bg-white', 'bg-dark');
            }
        }
        else {
            if (navbar_classes.contains('bg-dark')) {
                navbar_classes.replace('bg-dark', 'bg-white');
            }
        }
    }
);
