'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context must be used within a ThemeContextProvider scope');
  }
  return context;
}
