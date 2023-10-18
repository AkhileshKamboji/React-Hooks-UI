import React from "react";

const Count = (props: { text: string; count: number }) => {
  return (
    <h4 style={{ fontWeight: "500" }}>
      {props.text} is {props.count}
    </h4>
  );
};

export default React.memo(Count);
