import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import {
  getAllRooms,
  createRoom,
  joinRoom,
  getJoinedRooms,
} from "../../api/api";
import InputArea from "../inputarea/InputArea";

const useStyles = createUseStyles({
  outer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    justifyContent: "center",
    height: "100vh",
    boxSizing: "border-box",
    fontFamily: "'Roboto Mono', monospace",
  },
  list: {
    flex: 1,
    margin: "0px 15px",
    borderRadius: "10px",
    backgroundColor: "#5e6472",
    padding: "5px",
    alignSelf: "stretch",
    fontFamily: "'Roboto Mono', monospace",
  },
  center: {
    flex: 1,
    margin: "0px 15px",
    borderRadius: "10px",
    backgroundColor: "#5e6472",
    padding: "10px",
    height: "fit-content",
    fontFamily: "'Roboto Mono', monospace",
  },
  title: {
    fontSize: "2rem",
    color: "white",
    textAlign: "center",
    fontFamily: "'Roboto Mono', monospace",
  },
  room: {
    borderRadius: "5px",
    backgroundColor: "#adb5bd",
    margin: "10px",
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "10px",
    cursor: "pointer",
    fontFamily: "'Roboto Mono', monospace",
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
    alignSelf: "center",
    fontFamily: "'Roboto Mono', monospace",
  },
});
const Rooms = () => {
  const navigate = useNavigate();
  const params = useParams();
  const styles = useStyles();

  return (
    <div className={styles.outer}>
      <div className={styles.list}>
        <div className={styles.title}>All Rooms</div>
        {/* All rooms will be rendered here */}
      </div>
      <div className={styles.list}>
        <div className={styles.title}>Joined Rooms</div>
        {/* Joined rooms will be rendered here */}
      </div>
      <div className={styles.center}>
        <InputArea />
        <button className={styles.button}>Create room</button>
      </div>
    </div>
  );
};

export default Rooms;
