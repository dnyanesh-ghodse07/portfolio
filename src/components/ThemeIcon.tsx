import { Switch } from "antd";
import useTheme from "../hooks/useTheme";

const ThemeIcon = () => {
  const { setIsDark } = useTheme();

  const onChange = (checked: boolean) => {
    setIsDark(!checked)
  };

  return (
    <>
      <Switch checkedChildren="Dark" unCheckedChildren="Light" className="bg-slate-500 mr-3" onChange={onChange} />
      <div className="text-gray-100"></div>
    </>
  );
};

export default ThemeIcon;
