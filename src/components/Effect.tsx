import React, { useState, useEffect } from "react";
import { Card } from "@surya-digital/leo-reactjs-material-ui";
import { MyButton } from "../Utils/MyButton";

// when ever there are changes in the state we use a useEffect hook to handle the effect effieciently
// it is also used to listen to data from external pages like network connection, api or 3rd party library

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component rendered and value of count is ", count);
    return () => {
      console.log("component removed");
    };
  }, [count]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useEffect</h1>
      <Card
        style={{
          margin: "auto",
          width: "250px",
          borderRadius: "20px",
          padding: "16px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Count: {count}</h2>
        <MyButton
          title="Increment Count"
          icon="plus"
          color="green"
          handleClick={() => {
            setCount((count) => count + 1);
          }}
        />
      </Card>
      <hr style={{ marginTop: "32px" }} />
    </div>
  );
};

export default Effect;
