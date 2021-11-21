import React, { useState, useCallback } from "react";
import { Display, Row, Button } from "../commonstyle.jsx";
function Callback() {
  return (
    <>
      <Parent />
    </>
  );
}

export default Callback;

function Parent() {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [render, setRender] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Row>
        <Display>Parent</Display>
        <Display>{`Count: ${count}`}</Display>
      </Row>
      <Row>
        <Display>{decrement}</Display>
        <Button onClick={() => setDecrement(decrement - 1)}>Decrement</Button>
      </Row>
      <Row>
        <Child increment={increment} />
      </Row>
      <Row>
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

const Child = React.memo(function ({ increment }) {
  console.log("child renders");
  return (
    <>
      <Display>{`I am a good child and I increment the state by a function given by my parent.`}</Display>
      <Button onClick={increment}>Increment</Button>
    </>
  );
});
