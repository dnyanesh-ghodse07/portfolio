import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import useTheme from "../hooks/useTheme";

const ThemeIcon = () => {
  const { setIsDark } = useTheme();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={() => setIsDark(true)}>Dark</div>,
    },
    {
      key: "2",
      label: <div onClick={() => setIsDark(false)}>Light</div>,
    },
    {
      key: "3",
      label: <div>System</div>,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
        <Button className="text-slate-700 dark:text-slate-200 mr-2">
          Theme
        </Button>
      </Dropdown>
      <div className="text-gray-100"></div>
    </>
  );
};

export default ThemeIcon;
