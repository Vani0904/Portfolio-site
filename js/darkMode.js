let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.theme-toggle-btn');

const gitIconToggle = document.querySelector('.git-icon');
//Enable dark mode function
const enableDarkMode = () => {
    document.body.classList.add('dark-mode'); //adding darkmode class to body
    console.log('Dark Mode Enabled');
    localStorage.setItem("darkMode", "enabled"); //Updating state of darkmode to enabled
    updateThemeIcon();
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); // removing darkmode class from body
    console.log('Dark Mode Disabled');
    localStorage.setItem("darkMode", null); //Updating state of dark mode to null
    updateThemeIcon();
}

const updateThemeIcon = () => {
    if (darkMode !== 'enabled') {
        darkModeToggle.innerHTML = "<img src='assets/moon-icon.png'>";
        gitIconToggle.innerHTML = "<img src='assets/github-icon-white.png'>";
    } else {
        darkModeToggle.innerHTML = "<img src='assets/sun-icon.png'>";
        gitIconToggle.innerHTML = "<img src='assets/github-icon.png'>";
    }
}

//check dark mode is enabled
if (darkMode ==="enabled"){
    enableDarkMode();
    darkModeToggle.innerHTML = "<img src='assets/moon-icon.png'>";
    gitIconToggle.innerHTML = "<img src='assets/github-icon-white.png'>";
} else {
    disableDarkMode();
    gitIconToggle.innerHTML = "<img src='assets/github-icon.png'>";
    darkModeToggle.innerHTML = "<img src='assets/sun-icon.png'>";
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})