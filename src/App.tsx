import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import ThemeContext from "../src/store/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  console.log(isDark);
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleDarkMode, setIsDark }}>
        <div className={isDark ? "dark-mode" : ""}>
          <Layout />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
