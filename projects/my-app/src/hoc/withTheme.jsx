let theme;

export const withTheme = (Component) => (props) => {

    const setThemeFromStore = () => {
        theme = localStorage.getItem("theme") || "dark";
        document.body.setAttribute("data-theme", theme);
    }

    const toggleTheme = () => {
        let newTheme = theme === "dark" ? "light" : "dark";
        console.log(newTheme);
        document.body.setAttribute("data-theme", newTheme);
        theme = newTheme;
        localStorage.setItem("theme", theme);
    }

    return (
        <Component setThemeFromStore={setThemeFromStore} toggleTheme={toggleTheme} {...props}/>
    )
}