import { useEffect, useState } from "react";
import { Moon } from "./react-icons/Moon";
import { Sun } from "./react-icons/Sun";

export function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof localStorage !== "undefined"
      ? (localStorage.getItem("theme") ?? "light")
      : "light",
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-theme-toggle-bg border border-electric-blue p-1 transition-colors "
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggleTheme();
      }}
    >
      <div
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-electric-blue shadow-md transition-transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      />

      <div className="absolute left-1.5 z-10 flex items-center justify-center pointer-events-none">
        <Sun
          className={`h-4 w-4 transition-colors duration-300 ${theme === "light" ? "text-white" : "text-gray-400"}`}
        />
      </div>

      <div className="absolute right-1.5 z-10 flex items-center justify-center pointer-events-none">
        <Moon
          className={`h-4 w-4 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-400"}`}
        />
      </div>
    </div>
  );
}
