import React, { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  console.log(`🔍 Fetching "${key}" from localStorage`);

  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    console.log(`📦 Stored "${key}" in localStorage:`, jsonValue);

    if (jsonValue == null) {
      const initValue = typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
      console.log(`⚠️ No existing value. Using initial value for "${key}":`, initValue);
      return initValue;
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    console.log(`💾 Saving "${key}" to localStorage:`, value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
