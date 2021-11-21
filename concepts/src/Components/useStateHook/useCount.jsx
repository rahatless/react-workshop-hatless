import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    for (let x = 0; x < 5; x++) {
      setCount((temp) => temp + 1);
    }
  };
  return [count, incrementCount];
};

export default useCount;
