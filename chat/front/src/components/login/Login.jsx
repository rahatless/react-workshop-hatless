import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import InputArea from "../inputarea/InputArea";
import { login, signup } from "../../api/api";

const useStyles = createUseStyles({
  outerBox: {
    position: "absolute",
    padding: "10px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    backgroundColor: "#5e6472",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    fontFamily: "'Roboto Mono', monospace",
  },
  space: {
    margin: "5px",
  },
  wrapper: {
    margin: "5px",
    flex: 1,
    padding: "10px",
    backgroundColor: "#3f434e",
    borderRadius: "10px",
  },
  button: {
    flex: 1,
    height: "40px",
    width: "fit-content",
    margin: "10px 0px",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    marginLeft: "5px",
    backgroundColor: "#aed9e0",
    outline: "none",
    cursor: "pointer",
    fontFamily: "'Roboto Mono', monospace",
    alignSelf: "center",
  },
});
const Login = () => {
  const styles = useStyles();
  return (
    <div className={styles.outerBox}>
      <div className={styles.wrapper}>
        <InputArea />
        <div className={styles.space}></div>
        <InputArea />
        <button className={styles.button}>Login</button>
      </div>

      <div className={styles.wrapper}>
        <InputArea />
        <div className={styles.space}></div>
        <InputArea />
        <button className={styles.button}>Signup</button>
      </div>
    </div>
  );
};

export default Login;
