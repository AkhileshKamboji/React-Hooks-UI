import React, { useReducer } from "react";
import { Card } from "@surya-digital/leo-reactjs-material-ui";
import { MyButton } from "../Utils/MyButton";

const reducer = (state: any, action: any) => {
  if (action === "increment") {
    console.log("incremented via reducer");
    return state + 1;
  } else if (action === "double") {
    console.log("doubled via reducer");
    if (state === 0) return state;
    state = state * 2;
    return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useReducer</h1>
      <Card
        style={{
          margin: "auto",
          width: "450px",
          borderRadius: "20px",
          padding: "16px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Count: {state}</h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-around",
            marginBottom: "16px",
          }}
        >
          <MyButton
            icon="plus"
            color="green"
            title="Increment Count"
            handleClick={() => {
              dispatch("increment");
            }}
          />
          <MyButton
            icon="cross"
            color="green"
            title="Double Count"
            handleClick={() => {
              dispatch("double");
            }}
          />
        </div>
      </Card>
      <hr style={{ marginTop: "32px" }} />
    </div>
  );
};

export default Reducer;
