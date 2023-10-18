import React, { memo } from "react";
import { MyButton } from "../../Utils/MyButton";

const CallbackButton = (props: {
  withCallback: boolean;
  children: string;
  handleClick: () => void;
}) => {
  console.log(`Button clicked ${props.children}`);
  return (
    <div style={{ margin: "8px" }}>
      <MyButton
        icon="plus"
        color={props.withCallback ? "green" : "red"}
        handleClick={props.handleClick}
        title={props.children}
      />
    </div>
  );
};

export default memo(CallbackButton);
