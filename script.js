document.querySelector("button").addEventListener("click", () => {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
})