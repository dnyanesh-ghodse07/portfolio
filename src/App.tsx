import { useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import ThemeContext from "./store/themeContext";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Layout />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
