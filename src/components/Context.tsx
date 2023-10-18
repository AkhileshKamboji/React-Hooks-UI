import { Card } from "@surya-digital/leo-reactjs-material-ui";
import React, { createContext, useContext } from "react";

const ValueContext = createContext<string | null>(null);

const Context = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of useContext</h1>
      <ValueContext.Provider value="'value of context'">
        <ChildComponent />
      </ValueContext.Provider>
      <hr />
    </div>
  );
};

const ChildComponent = () => {
  const value = useContext(ValueContext);
  return (
    <Card
      style={{
        margin: "16px",
        padding: "16px",
      }}
    >
      {value && `The content is passed via Context ${value}`}
      <ChildComponent2 />
    </Card>
  );
};

const ChildComponent2 = () => {
  const value = useContext(ValueContext);
  return (
    <Card
      style={{
        margin: "16px",
        padding: "16px",
      }}
    >
      {value && `The content is passed via Context ${value}`}
      <ChildComponent3 />
    </Card>
  );
};

const ChildComponent3 = () => {
  const value = useContext(ValueContext);
  return (
    <Card
      style={{
        margin: "16px",
        padding: "16px",
      }}
    >
      {value && `The content is passed via Context ${value}`}
    </Card>
  );
};

export default Context;
