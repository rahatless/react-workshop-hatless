import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  box: (props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: props.type === "incoming" ? "flex-start" : "flex-end",
    height: "fit-content",
  }),
  outer: (props) => ({
    maxWidth: "50%",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: props.type === "incoming" ? "#87e4d1" : "#9de3ee",
    marginBottom: "5px",
  }),
  name: {
    fontWeight: 600,
    fontSize: "0.7rem",
    color: "#ee7368",
  },
  body: {
    color: "black",
    fontSize: "0.8rem",
    wordWrap: "break-word",
  },
});
const Message = ({ type, content, user }) => {
  const styles = useStyles({ type });
  return (
    <div className={styles.box}>
      <div className={styles.outer}>
        {type === "incoming" && <div className={styles.name}>{user}</div>}
        <div className={styles.body}>{content}</div>
      </div>
    </div>
  );
};

export default Message;
