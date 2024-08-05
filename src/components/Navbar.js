import React, { useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <a href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">Home</a>
        <a href="/about" className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-100">About</a>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;
