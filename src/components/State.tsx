import React, { useState } from "react";
import { Card } from "@surya-digital/leo-reactjs-material-ui";
import { MyButton } from "../Utils/MyButton";

const State = () => {
  const [x, setX] = useState(0);
  let y = 0;
  console.log("the value of x is: ", x);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useState</h1>
      <div
        style={{
          display: "flex",
          padding: "32px",
          justifyContent: "space-around",
        }}
      >
        <Card
          style={{
            width: "200px",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Without useState</h4>
          <h2 style={{ textAlign: "center" }}>Y: {y}</h2>
          <MyButton
            title="Increment Y"
            icon="plus"
            color="red"
            handleClick={() => {
              y++;
              console.log("the value of y is: ", y);
            }}
          />
        </Card>
        <Card
          style={{
            width: "200px",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <h4 style={{ textAlign: "center" }}>With useState</h4>
          <h2 style={{ textAlign: "center" }}>X: {x}</h2>
          <MyButton
            title="Increment X"
            icon="plus"
            color="green"
            handleClick={() => {
              setX((x) => x + 1);
            }}
          />
        </Card>
      </div>
      <hr />
    </div>
  );
};

export default State;
