import { useContext } from "react";

import { ApiContext } from "../../../store/data_movies";

import { useApiSearch } from "../../../store/use-Api-Search";

import styles from "./ResultList.module.css";

const ResultList = (props) => {
  const { dataInput } = props;
  const { onChange } = props;

  const { requests } = useContext(ApiContext);
  const { fetchSearch } = requests;

  const { data, error, loading } = useApiSearch(
    fetchSearch,
    dataInput.name,
    dataInput.genre,
    dataInput.type,
    dataInput.language,
    dataInput.year
  );
  const click = (value, data_movies, id) => {
    onChange(value, data_movies, id);
  };

  return (
    <div>
      {error === null && loading === false && (
        <div className={styles.ResultList}>
          <h1>Danh sách phim tìm được</h1>
          <div className={styles.image}>
            {data.map((value, index) => (
              <img
                onClick={() => click(value, value.data_movies, value.id)}
                key={index}
                src={`https://image.tmdb.org/t/p/original/${value.image}`}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>
            Không có phim phù hợp với yêu cầu của bạn
          </h1>
        </div>
      )}
    </div>
  );
};
export default ResultList;
