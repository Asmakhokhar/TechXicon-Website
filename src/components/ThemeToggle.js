'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="  bg-gray-200 dark:bg-[#0f172a] text-black dark:text-white rounded"
    >
       {theme === 'dark' ? 'Light' : 'Dark'} 
    </button>
  );
}
