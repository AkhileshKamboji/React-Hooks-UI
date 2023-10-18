import { Card } from "@surya-digital/leo-reactjs-material-ui";
import React, { useState, useMemo } from "react";
import { MyButton } from "../Utils/MyButton";

const initialItems = new Array(19_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 19_999_998,
  };
});

const Memo = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useMemo</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "32px",
        }}
      >
        <WithoutMemo />
        <WithMemo />
      </div>
      <hr />
    </div>
  );
};

const WithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <Card
      style={{
        width: "250px",
        // border: "1px solid black",
        borderRadius: "20px",
        padding: "16px",
        margin: "auto",
      }}
    >
      <h4 style={{ textAlign: "center" }}>Without useMemo</h4>
      <h4 style={{ textAlign: "center" }}>Selected Item: {selectedItem?.id}</h4>
      <h2 style={{ textAlign: "center" }}>Count: {count}</h2>
      <MyButton
        icon="plus"
        color="red"
        title="Increment Count"
        handleClick={() => {
          setCount((count) => count + 1);
        }}
      />
    </Card>
  );
};

const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <Card
      style={{
        width: "250px",
        borderRadius: "20px",
        padding: "16px",
        margin: "auto",
      }}
    >
      <h4 style={{ textAlign: "center" }}>With useMemo</h4>
      <h4 style={{ textAlign: "center" }}>Selected Item: {selectedItem?.id}</h4>
      <h2 style={{ textAlign: "center" }}>Count: {count}</h2>
      <MyButton
        icon="plus"
        color="green"
        title="Increment Count"
        handleClick={() => {
          setCount((count) => count + 1);
        }}
      />
    </Card>
  );
};

export default Memo;
