import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="site-header">
      <div className="logo">
        <span>⌛</span> Social Media Timeline
      </div>
      <div className="theme-toggle-wrapper">
        <label>
          <span id="theme-label">{isDarkMode ? 'Dark Theme' : 'Light Theme'}</span>
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        </label>
      </div>
    </header>
  );
};

export default Header;
