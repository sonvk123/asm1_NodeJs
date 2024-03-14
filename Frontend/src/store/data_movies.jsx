import React, { createContext } from "react";

// Tạo một context mới
const ApiContext = createContext();

// Tạo một provider cho context
const ApiProvider = ({ children }) => {
  const API_KEY = "6500f56c320884f1c02f02de944113e2";

  const requests = {
    fetchTrending: `/api/movies/trending`,
    fetchNetflixOriginals: `/api/movies/trending`,
    fetchTopRated: `/api/movies/top-rate`,
    fetchActionMovies: `/api/movies/discover/28`,
    fetchComedyMovies: `/api/movies/discover/35`,
    fetchHorrorMovies: `/api/movies/discover/27`,
    fetchRomanceMovies: `/api/movies/discover/10749`,
    fetchDocumentaries: `/api/movies/discover/99`,
    fetchSearch: `/api/movies/search`,
  };

  return (
    <ApiContext.Provider value={{ API_KEY, requests }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
