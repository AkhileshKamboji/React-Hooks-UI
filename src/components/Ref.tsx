import React, { useRef, useState } from "react";
import { MyButton } from "../Utils/MyButton";
import { Card } from "@surya-digital/leo-reactjs-material-ui";

const Ref = () => {
  const [render, setRender] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Example of useRef</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "32px",
        }}
      >
        <WithState />
        <WithRef />
      </div>
      <MyButton
        color="blue"
        title="Render the complete parent"
        handleClick={() => {
          setRender((render) => render + 1);
          console.log(render);
        }}
      />
      <hr />
    </div>
  );
};

const WithRef = () => {
  const value = useRef(0);
  return (
    <Card
      style={{
        width: "250px",
        borderRadius: "20px",
        padding: "16px",
      }}
    >
      <h4 style={{ textAlign: "center" }}>With useRef</h4>
      <h2 style={{ textAlign: "center" }}>Value: {value.current}</h2>
      <MyButton
        title="Increment value"
        icon="plus"
        color="green"
        handleClick={() => {
          value.current = value.current + 1;
          console.log("the value of value is: ", value);
        }}
      />
    </Card>
  );
};

const WithState = () => {
  const [y, setY] = useState(0);
  return (
    <Card
      style={{
        width: "250px",
        borderRadius: "20px",
        padding: "16px",
      }}
    >
      <h4 style={{ textAlign: "center" }}>With useState</h4>
      <h2 style={{ textAlign: "center" }}>Y: {y}</h2>
      <MyButton
        icon="plus"
        color="red"
        title="Increment Y"
        handleClick={() => {
          setY((y) => y + 1);
          console.log("the value of y is: ", y);
        }}
      />
    </Card>
  );
};

export default Ref;
