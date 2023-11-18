import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import useTheme from "../hooks/useTheme";

const ThemeIcon = () => {
  const { isDark, setIsDark } = useTheme();

  const handleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className="text-gray-100" onClick={handleTheme}>
      {isDark ? (
        <div className="flex justify-center items-center mr-4 px-1 rounded border-2 cursor-pointer">
          <BulbFilled className="cursor-pointer" />
          <span className={`${!isDark && "text-neutral-800"}`}>Light</span>
        </div>
      ) : (
        <div className="flex justify-center items-center mr-4 px-1 rounded border-2 cursor-pointer">
          <BulbOutlined className="text-neutral-800 cursor-pointer" />
          <span className={`${!isDark && "text-neutral-800"}`}>Dark</span>
        </div>
      )}
    </div>
  );
};

export default ThemeIcon;
