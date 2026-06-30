import { useEffect, useState } from "react";

const useFetch = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Request failed: ${response.status} ${response.statusText}`,
          );
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Ignore abort errors when component unmounts
        if (err.name !== "AbortError") {
          setError(err.message);
          console.error(err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
