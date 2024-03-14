import React from "react";

import styles from "./Banner.module.css";
const Banner = (props) => {
  // lấy các dữ liệu từ Component cha
  const { data_movies_randum, urlImage } = props;
  return (
    // tạo ảnh nền
    <header
      className={styles.Banner}
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* các thông tin phim được hiển thị */}
      <div className={styles.content}>
        <h1 className={styles.banner_title}>
          {data_movies_randum.original_title}
        </h1>
        <div className={styles.button}>
          <button className={styles.button_Play}>Play</button>
          <button className={styles.button_My_list}>My list</button>
        </div>

        <h1 className={styles.banner_description}>
          {data_movies_randum.overview}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
