import { useEffect } from 'react';

// Custom hook that sets up a timeout
const useTimeout = (callback, delay) => {
  // useEffect hook to handle side effects
  useEffect(() => {
    // If delay is null, do nothing
    if (delay === null) return;
    
    // Set up the timeout with the provided callback and delay
    const timeoutId = setTimeout(callback, delay);
    
    // Cleanup function to clear the timeout if the component unmounts or if delay/callback changes
    return () => clearTimeout(timeoutId);
  }, [callback, delay]); // Dependencies array, effect runs when callback or delay changes
};

export default useTimeout;