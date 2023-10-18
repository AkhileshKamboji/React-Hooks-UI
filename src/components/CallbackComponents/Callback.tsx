import React, { useCallback, useState } from "react";
import CallbackButton from "./CallbackButton";
import Count from "./CallbackCount";
import { Card } from "@surya-digital/leo-reactjs-material-ui";

const Callback = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useCallback</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <WithoutCallback></WithoutCallback>
        <WithCallback></WithCallback>
      </div>
      <hr />
    </div>
  );
};

const WithCallback = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <Card
      style={{
        flexBasis: "25%",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h4 style={{ textAlign: "center" }}>With useCallback</h4>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Count text="Age" count={age} />
          <CallbackButton withCallback={true} handleClick={incrementAge}>
            Increment age
          </CallbackButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Count text="Salary" count={salary} />
          <CallbackButton withCallback={true} handleClick={incrementSalary}>
            Increment salary
          </CallbackButton>
        </div>
      </div>
    </Card>
  );
};

const WithoutCallback = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <Card
      style={{
        flexBasis: "25%",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h4 style={{ textAlign: "center" }}>Without useCallback</h4>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Count text="Age" count={age} />
          <CallbackButton withCallback={false} handleClick={incrementAge}>
            Increment age
          </CallbackButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Count text="Salary" count={salary} />
          <CallbackButton withCallback={false} handleClick={incrementSalary}>
            Increment salary
          </CallbackButton>
        </div>
      </div>
    </Card>
  );
};

export default Callback;
