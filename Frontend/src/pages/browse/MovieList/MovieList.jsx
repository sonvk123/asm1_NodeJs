// hiển thị danh sách tất cả trang phim

import React, { useContext, useState } from "react";

import { ApiContext } from "../../../store/data_movies";
import { useTrailer } from "../../../store/data_movies_trailer";

import MovieDetail from "./MovieDetail";

import MovieListItems from "./MovieListItems";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [data_movies, setData_movies] = useState(null);
  const [overview, setOverview] = useState(null);
  const [fetch_name, setFetch_name] = useState(null);
  const [Id, setId] = useState(null);

  const [isShow, setIsShow] = useState(false);

  // lấy dữ liệu trailer từ api

  const { key_Trailer, Trailer } = useTrailer(isShow, Id);

  const { requests } = useContext(ApiContext);

  const list_movide = {
    Original: "fetchNetflixOriginals",
    "Xu hướng": "fetchTrending",
    "Xếp hạng cao": "fetchTopRated",
    "Hành động": "fetchActionMovies",
    Hài: "fetchComedyMovies",
    "Kinh dị": "fetchHorrorMovies",
    "Lãng mạn": "fetchRomanceMovies",
    "Tài liệu": "fetchDocumentaries",
  };
  const khi_nhan_vao_anh = (value, fetch, overview, id) => {
    if (Id === null) {
      // Click vào ảnh lần đầu
      setData_movies(value);
      setId(id);
      setFetch_name(fetch);
      setOverview(overview);
      setIsShow(true);
    } else if (Id === id) {
      // Click lại vào ảnh của cùng một bộ phim
      setIsShow(!isShow); // Ẩn/hiển thị thông tin bộ phim
    } else if (Id !== id) {
      // Click vào ảnh một bộ phim khác
      setData_movies(value);
      setId(id);
      setFetch_name(fetch);
      setOverview(overview);
      setIsShow(true);
    }
  };

  const Content = () => {
    return Object.keys(list_movide).map((key) => {
      var key_requests = list_movide[key];
      return (
        <div key={key_requests}>
          <h1>{key}</h1>
          <div className={styles.list}>
            <MovieListItems
              onChange={khi_nhan_vao_anh}
              data={requests[key_requests]}
              fetch={key_requests}
              mode={"all"}
            />
          </div>
          {isShow === true && fetch_name === key_requests && (
            <MovieDetail
              value={data_movies}
              overview={overview}
              id={key_Trailer}
              Trailer={Trailer}
            />
          )}
        </div>
      );
    });
  };

  return <div className={styles.MovieList}>{Content()}</div>;
};

export default MovieList;
