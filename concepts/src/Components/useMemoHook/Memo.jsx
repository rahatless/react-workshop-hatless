import React, { useState, useMemo } from "react";
import { Row, Display, Button } from "../commonstyle";

function Memo() {
  const [number, setNumber] = useState(0);
  const [render, setRender] = useState(0);

  console.log("before fibo");
  const fibo = fibonacci(number);
  console.log("after fibo");
  console.log(`Fibonacci of ${number} is ${fibo}`);

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  return (
    <>
      <Row>
        <Display>{`${number} Fibonnaci is: ${fibo}`}</Display>
        <Button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            setRender(render + 1);
          }}
        >
          Render
        </Button>
      </Row>
    </>
  );
}

export default Memo;
