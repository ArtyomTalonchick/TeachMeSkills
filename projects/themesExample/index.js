
let theme = "light";

const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
}

const handleToggleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    setTheme(theme);
}

document.getElementById("toggle-theme").addEventListener("click", handleToggleTheme);