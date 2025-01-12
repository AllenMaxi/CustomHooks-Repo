import { useState, useEffect } from 'react';

// Custom hook to check the online status of the browser
const useOnlineStatus = () => {
  // State to store whether the browser is online
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Handler to set the state to true when online
  const handleOnline = () => setIsOnline(true);
  // Handler to set the state to false when offline
  const handleOffline = () => setIsOnline(false);

  useEffect(() => {
    // Add event listeners for online and offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Return whether the browser is online
  return isOnline;
};

export default useOnlineStatus;