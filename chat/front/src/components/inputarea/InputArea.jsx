import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  outer: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    resize: "none",
    maxHeight: "300px",
    width: "100%",
    outline: "none",
    border: "none",
    backgroundColor: "#4a4e58",
    borderRadius: "10px",
    color: "white",
    padding: "10px",
  },
});

const InputArea = ({ onChange, value, placeholder, name }) => {
  const styles = useStyles();
  return (
    <div className={styles.outer}>
      <TextareaAutosize
        placeholder={placeholder}
        value={value}
        className={styles.textarea}
        maxRows={5}
        minRows={2}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default InputArea;
