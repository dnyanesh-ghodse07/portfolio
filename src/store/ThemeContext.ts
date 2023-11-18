import { Dispatch, SetStateAction, createContext } from "react";

type Theme = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext<Theme>({
  isDark: false,
  setIsDark: () => {},
});

export default ThemeContext;
