import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import State from "./components/State";
import Home from "./components/Home";
import Effect from "./components/Effect";
import Memo from "./components/Memo";
import Callback from "./components/CallbackComponents/Callback";
import Context from "./components/Context";
import Ref from "./components/Ref";
import Reducer from "./components/Reducer";
import MaterialUI from "./components/MaterialUI/MaterialUI";
import LeoUI from "./components/LeoUI/LeoUI";
import { ThemeConfig } from "@surya-digital/leo-reactjs-material-ui";
import typographyStyles from "./Theme/Typography";
import lightColorPalette from "./Theme/LightColorPalette";
import Internationalization from "./components/Internationalization";

function App() {
  return (
    <div>
      <ThemeConfig
        typography={typographyStyles}
        theme="light"
        baseColorTokens={[{ name: "light", colorTokens: lightColorPalette }]}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/State" element={<State />} />
            <Route path="/Effect" element={<Effect />} />
            <Route path="/Memo" element={<Memo />} />
            <Route path="/Callback" element={<Callback />} />
            <Route path="/Context" element={<Context />} />
            <Route path="/Ref" element={<Ref />} />
            <Route path="/Reducer" element={<Reducer />} />
            <Route path="/MaterialUI" element={<MaterialUI />} />
            <Route path="/LeoUI" element={<LeoUI />} />
            <Route
              path="/Internationalization"
              element={<Internationalization />}
            />
          </Routes>
        </Router>
      </ThemeConfig>
    </div>
  );
}

export default App;
