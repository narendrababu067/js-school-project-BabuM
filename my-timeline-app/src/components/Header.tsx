import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="site-header">
      <div className="logo"><span>⌛</span> Social Media Timeline</div>
      <div className="theme-toggle-wrapper">
        <label>
          <span id="theme-label">{dark ? 'Dark Theme' : 'Light Theme'}</span>
          <input type="checkbox" checked={dark} onChange={toggleTheme} />
        </label>
      </div>
    </header>
  );
};

export default Header;
