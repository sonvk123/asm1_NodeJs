import { useEffect, useState } from "react";

export const useTrailer = (isShow, id) => {
  const [data, setData] = useState(null);
  const [Trailer, setTrailer] = useState(false);
  const [key_Trailer, setKey_Trailer] = useState(null);
  useEffect(() => {
    if (isShow) {
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:5000/api/movies/video?token=8qlOkxz4wq`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ film_id: id }),
          }
        );
        if (response.status === 400) {
          setData(null);
          setKey_Trailer(null);
          setTrailer(false);
        }
        if (response.status === 404) {
          setData(null);
          setKey_Trailer(null);
          setTrailer(false);
        }
        if (response.ok) {
          const data = await response.json();

          setData(data);
          const key = data.key;
          setKey_Trailer(key);
          setTrailer(true);
        }
      };

      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    data,
    key_Trailer,
    Trailer,
  };
};
