import React from "react";

import NavBar from "../pages/browse/Navbar/NavBar";

import styles from "./error.module.css";
const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className={styles.error}>
        <div className={styles.message}>
          <h1>Page not found</h1>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
