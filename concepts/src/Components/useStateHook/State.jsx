import React, { useState } from "react";
import useCount from "./useCount";
import { Row, Display, Button } from "../commonstyle";

function State() {
  const [count, increment] = useCount(1);
  const [count1, increment1] = useCount(1);
  return (
    <>
      <Row>
        <Display>{count}</Display>
        <Button onClick={increment}>Validate</Button>
      </Row>
      <Row>
        <Display>{count1}</Display>
        <Button onClick={increment1}>Validate</Button>
      </Row>
    </>
  );
}

export default State;
