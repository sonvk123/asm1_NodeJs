import React from "react";

import NavBar from "../pages/browse/Navbar/NavBar";

import { useLocation } from "react-router-dom";

import styles from "./error.module.css";
const Error = () => {
  const location = useLocation();

  const status = location.state?.status;
  const errorMessage = location.state?.message;

  return (
    <>
      <NavBar />
      <div className={styles.error}>
        <div className={styles.message}>
          <h1>Mã lỗi: {status}</h1>
          <h1>Message: {errorMessage}</h1>
        </div>
      </div>
    </>
  );
};

export default Error;
