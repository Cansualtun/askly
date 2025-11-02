import * as React from "react";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    React.useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
