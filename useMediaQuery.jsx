import { useState, useEffect } from 'react';

// Custom hook to check if a media query matches
const useMediaQuery = (query) => {
  // State to store whether the media query matches
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const mediaQueryList = window.matchMedia(query);
    
    // Define a handler function to update the state
    const handleChange = () => setMatches(mediaQueryList.matches);

    // Add the handler as a listener for changes
    mediaQueryList.addListener(handleChange);
    
    // Call the handler once to set the initial state
    handleChange();

    // Cleanup function to remove the listener
    return () => mediaQueryList.removeListener(handleChange);
  }, [query]); // Re-run the effect only if the query changes

  // Return whether the media query matches
  return matches;
};

export default useMediaQuery;