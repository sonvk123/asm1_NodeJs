import React, { useContext } from "react";

import { ApiContext } from "../../store/data_movies";
import { useApi } from "../../store/use-Api";

import NavBar from "./Navbar/NavBar";
import Banner from "./Banner/Banner";
import MovieList from "../browse/MovieList/MovieList";

import styles from "./Browse.module.css";

function Browse() {
  const { requests } = useContext(ApiContext);
  const { fetchTrending } = requests;

  const { data, data_movies_randum, urlImage } = useApi(
    fetchTrending,
    "fetchTrending",
    "random"
  );

  return (
    <div className={styles.Browse}>
      <NavBar />
      <Banner data_movies_randum={data_movies_randum} urlImage={urlImage} />
      <MovieList data={data} />
    </div>
  );
}

export default Browse;
