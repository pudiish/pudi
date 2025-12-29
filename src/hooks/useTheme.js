import { useState, useEffect } from "react";

/**
 * Custom hook for managing theme (light/dark mode)
 * @returns {Object} - Theme state and toggle function
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
};

