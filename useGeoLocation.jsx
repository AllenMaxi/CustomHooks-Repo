import { useState, useEffect } from 'react';

// Custom hook to get the current geolocation
const useGeoLocation = () => {
  // State to store the current position
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    // Success callback to update the position state
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition({
        latitude,
        longitude,
        error: null,
      });
    };

    // Error callback to update the error state
    const handleError = (error) => {
      setPosition((prevState) => ({
        ...prevState,
        error: error.message,
      }));
    };

    // Check if geolocation is available
    if (navigator.geolocation) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      // Update the error state if geolocation is not available
      setPosition((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by this browser.',
      }));
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Return the current position state
  return position;
};

export default useGeoLocation;
