import { useEffect, useState } from "react";


export const useApiSearch = (url, name, genre, type, language, year) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000${url}?token=8qlOkxz4wq`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data_send: {
              keyword: name,
              genre: genre,
              type: type,
              language: language,
              year: year,
            },
          }),
        }
      );

      if (response.ok) {
        setLoading(false);
        const responseData = await response.json();
        setData([]);
        if (responseData.length === 0) {
          setError(true);
        } else {
          for (const element of responseData.results) {
            if (element.backdrop_path && element.id) {
              const image = element.backdrop_path;
              const id = element.id;
              const data_movies = { ...element };
              setData((prevImages) => [
                ...prevImages,
                { image, id, data_movies },
              ]);
              setError(null);
            }
          }
        }
      }
    };
    fetchData();
  }, [url, name, genre, type, language, year]);
  return {
    data,
    error,
    loading,
  };
};
