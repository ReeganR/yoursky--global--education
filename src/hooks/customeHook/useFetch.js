import { useState, useEffect } from "react";

function useFetch(url) {
  // all states

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch the pokemon API
  useEffect(() => {
    // cleanup method for routing
    const abortCont = new AbortController();
    //   timeout just for loading purpose
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const fetchApi = await fetch(url, { signal: abortCont.signal });
          if (!fetchApi.ok) {
            throw Error("Could not fetch the data from that resource");
          }
          const data = await fetchApi.json();
          setData(data);
          setIsLoading(false);
          setError(null);
        } catch (err) {
          if (err.name === "AbortError") {
          } else {
            setIsLoading(false);
            setError(err.message);
            setData([]);
          }
        }
      };

      fetchData();
    }, 1000);

    // cleanup
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
