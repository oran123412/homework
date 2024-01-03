import { useState } from "react";
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import { CounterSettingContext } from "./store/counterContext";
import { loginSettingContext } from "./store/approveLogin";

function App() {
  const [login, setLogin] = useState();
  const [counter, setCounter] = useState(0);
  return (
    <loginSettingContext.Provider value={{ login, setLogin }}>
      <CounterSettingContext.Provider value={{ counter, setCounter }}>
        <LayoutComponent>
          <Router />
        </LayoutComponent>
      </CounterSettingContext.Provider>
    </loginSettingContext.Provider>
  );
}

export default App;
