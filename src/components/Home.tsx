import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@surya-digital/leo-reactjs-material-ui";

const components = [
  "State",
  "Effect",
  "Memo",
  "Callback",
  "Context",
  "Ref",
  "Reducer",
  "MaterialUI",
  "LeoUI",
  "Internationalization",
];

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Select the hook to see</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "16px",
          margin: "32px",
          flexWrap: "wrap",
        }}
      >
        {components.map((ele) => {
          return (
            <div
              style={{
                flexBasis: "30%",
              }}
              onClick={() => {
                navigate("/" + ele);
              }}
            >
              <Card
                key={ele}
                style={{
                  padding: "16px",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {ele.endsWith("UI")
                  ? ele
                  : ele === "Internationalization"
                  ? ele
                  : "use" + ele}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
