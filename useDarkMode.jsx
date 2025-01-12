import { useState, useEffect } from 'react';

// Custom hook to manage dark mode state
const useDarkMode = () => {
  // State to store whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // Set the state based on the saved theme
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // Save the new theme to localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]); // Re-run the effect when isDarkMode changes

  // Return the current dark mode state and the toggle function
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;