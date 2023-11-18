import { useContext } from "react";
import ThemeContext from "../store/themeContext";

function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export default useTheme;
