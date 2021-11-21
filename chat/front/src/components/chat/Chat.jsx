import React, { useEffect, useState } from "react";
import Chatbox from "../chatbox/Chatbox";
import { createUseStyles } from "react-jss";
import { getRoom } from "../../api/api";
import { useParams } from "react-router-dom";

const useStyles = createUseStyles({
  memberswrap: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "20px",
    backgroundColor: "#d6d6d6",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Roboto Mono', monospace",
  },
  title: {
    padding: "5px",
    fontSize: "2rem",
    fontWeight: 400,
    fontFamily: "'Roboto Mono', monospace",
  },
  member: {
    padding: "5px",
    fontSize: "0.9rem",
    fontFamily: "'Roboto Mono', monospace",
  },
});

const Chat = () => {
  const params = useParams();
  const styles = useStyles();

  return (
    <>
      <div className={styles.memberswrap}>
        <div className={styles.title}>Members</div>
        {/* All members will be rendered here */}
      </div>
      <Chatbox />
    </>
  );
};

export default Chat;
