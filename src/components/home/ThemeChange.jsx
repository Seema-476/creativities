import React, { useState, useEffect } from 'react';

const ThemeChange = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold sm:block hidden">Dark/Light Mode Toggle</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-95 duration-700 text-black dark:text-white"
          >
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main className="p-6">
          <h2 className="text-xl mb-4">Welcome to the {isDarkMode ? 'Dark' : 'Light'} Mode!</h2>
          <p className="text-md">This is a simple theme toggling with React and Tailwind CSS.</p>
        </main>
      </div>
    </div>
  )
}

export default ThemeChange
