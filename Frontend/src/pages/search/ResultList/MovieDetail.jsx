import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import styles from "./MovieDetail.module.css";

const MovieDetail = (props) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [vote, setVote] = useState(null);
  const [overview, setOverview] = useState('');
  const [image, setImage] = useState(null);
  const [Trailer, setTrailer] = useState(null);


  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };


  useEffect(() => {
    setId(props.id);
    setOverview(props.overview);
    if (props.value?.data_movies) {
      const {
        original_title,
        original_name,
        name,
        release_date,
        first_air_date,
        vote_average,
      } = props.value.data_movies;

      const movieName = original_title || original_name || name;
      setName(movieName);

      const releaseDate = release_date || first_air_date;
      setDate(releaseDate);

      setVote(vote_average);

      setImage(props.value.data_movies.backdrop_path);

      setTrailer(props.Trailer);
    }

  }, [props]);

  return (
    <div className={styles.MovieDetail}>
      <div className={styles.info}>
        <h1>{name}</h1>
        <hr className={styles.line} />
        <h3>Release Date: {date}</h3>
        <h3>Vote: {vote}/10</h3>
        <p>{overview}</p>
      </div>
      <div className={styles.video}>
      {id && Trailer && <YouTube videoId={id} opts={opts} />}
        {!Trailer && (
          <img
          className={styles.image}
            src={`https://image.tmdb.org/t/p/original/${image}`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
