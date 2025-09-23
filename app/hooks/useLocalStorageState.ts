'use client';

import { useState, useEffect } from 'react';

export function useLocalStorageState<T>(initialState: T, key: string) {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          setValue(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error('Error reading localStorage key “' + key + '”: ', error);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing localStorage key "${key}":`, error);
      }
    }
  }, [key, value]);

  return [value, setValue];
}
