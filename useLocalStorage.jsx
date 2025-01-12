import { useState } from 'react';

// Custom hook to manage state with localStorage
const useLocalStorage = (key, initialValue) => {
  // State to store the current value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get the item from localStorage by key
      const item = window.localStorage.getItem(key);
      // Parse and return the stored JSON or return the initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Function to set a new value
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Return the current value and the setter function
  return [storedValue, setValue];
};

export default useLocalStorage;
