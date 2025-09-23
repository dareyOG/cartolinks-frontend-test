'use client';

import React, { createContext, useEffect, useState } from 'react';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: ThemeType;
  handleToggleTheme: () => void;
};

const initialState = { theme: ThemeType.LIGHT, handleToggleTheme: () => {} };

export const ThemeContext = createContext<ThemeContextType>(initialState);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(() => {
    const storedTheme =
      typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return storedTheme === ThemeType.DARK ? ThemeType.DARK : ThemeType.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === ThemeType.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
