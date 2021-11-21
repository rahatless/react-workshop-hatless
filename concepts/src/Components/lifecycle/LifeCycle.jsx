import React, { useState, useEffect } from "react";
import { Display, Row, Button } from "../commonstyle.jsx";
function LifeCycle() {
  const [showChild, setShowChild] = useState(true);
  const toggle = () => {
    setShowChild(!showChild);
  };
  return (
    <>
      <Row>
        <Button onClick={toggle}>Toggle Child Visibility</Button>
        <Parent showChild={showChild} />
      </Row>
    </>
  );
}

export default LifeCycle;

function Parent({ showChild }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Display>Parent</Display>
      <Button onClick={increment}>Increment</Button>
      {showChild && <Child count={count} />}
    </>
  );
}

function Child({ count }) {
  useEffect(() => {
    console.log("UseEffect in child fires!");
    return () => {
      console.log("This console log fires");
    };
  });
  return (
    <>
      <Display>{`I am a good child and i render whatever my parent gives me.`}</Display>
      <Display>{`Count in Child: ${count}`}</Display>
    </>
  );
}
