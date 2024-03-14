// hiển thị danh sách phim trong từng loại phim

import React from "react";

import { useApi } from "../../../store/use-Api";

import styles from "./MovieListItems.module.css";
const MovieListItems = (props) => {
  const name = props.fetch;
  // lấy data từ list phim
  const { data, error } = useApi(props.data, name, props.mode);

  // khi click vào ảnh

  const click = (value, data_movies, fetch) => {
    props.onChange(value, fetch, data_movies.overview, value.id, data, error);
  };

  return (
    <div className={styles.MovieListItems}>
      {data.map((value, index) => (
        <img
          onClick={() => click(value, value.data_movies, props.fetch)}
          key={index}
          src={`https://image.tmdb.org/t/p/original/${value.image}`}
          alt=""
          className={`${
            name === "fetchNetflixOriginals"
              ? styles.image_Originals
              : styles.image
          }`}
        />
      ))}
    </div>
  );
};

export default MovieListItems;
