import { useState, useEffect } from 'react';

// Custom hook to fetch data from a given URL
const useFetch = (url, options = {}) => {
  // State to store the fetched data
  const [data, setData] = useState(null); 
  // State to indicate loading status
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during the fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      // Set loading to true before starting the fetch
      setLoading(true);
      // Clear any previous errors
      setError(null);

      try {
        // Fetch data from the given URL with the provided options
        const response = await fetch(url, options);
        
        // Check if the response is not ok (status code is not in the range 200-299)
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red'); // Throw an error if response is not ok
        }
        
        // Parse the response data as JSON
        const result = await response.json();
        // Update the data state with the fetched result
        setData(result);
      } catch (err) {
        // If an error occurs, update the error state with the error message
        setError(err.message);
      } finally {
        // Set loading to false after the fetch is complete
        setLoading(false);
      }
    };

    // Call the fetchData function to start fetching data
    fetchData();
  }, [url, options]); // Re-run the effect if the URL or options change

  // Return the data, loading status, and error state
  return { data, loading, error };
};

export default useFetch;