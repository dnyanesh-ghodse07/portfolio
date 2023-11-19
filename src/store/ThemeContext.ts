import { MouseEventHandler, createContext } from "react";

type Theme = {
  isDark: boolean;
  toggleDarkMode: MouseEventHandler<HTMLDivElement>;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<Theme>({
  isDark: false,
  toggleDarkMode: () => false,
  setIsDark: () => false,
});

export default ThemeContext;
