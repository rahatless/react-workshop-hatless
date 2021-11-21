import React, { useState, useEffect } from "react";
import { Title, Row, Display, Button } from "../commonstyle";
function Effect() {
  console.log("render");
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(0);
  const [db, setDB] = useState({});

  const increment = () => {
    setAdd(add + 1);
  };
  const decrement = () => {
    setSubtract(subtract - 1);
  };

  // useEffect(() => {
  //   fetch("https://api.jsonbin.io/b/619920db0ddbee6f8b0f3e80").then(
  //     async (res) => {
  //       const data = await res.json();
  //       setDB(data);
  //     }
  //   );
  // }, []);

  return (
    <>
      <Title>useEffect Hook</Title>
      <Row>
        <Display>{add}</Display>
        <Button onClick={increment}>Increment</Button>
      </Row>
      <Row>
        <Display>{subtract}</Display>
        <Button onClick={decrement}>Decrement</Button>
      </Row>
      <Row>
        <Display>Database Content:</Display>
        <Display>{JSON.stringify(db)}</Display>
      </Row>
    </>
  );
}

export default Effect;
