import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import ThemeIcon from "./ThemeIcon";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const isDarkClass = `${isDark ? "active-tab-dark" : "active-tab-light"}`;
  const isDarkText = isDark
    ? "text-primary-text-dark"
    : "text-primary-text-light";

  return (
    <>
      <div className={isDarkClass}>
        <Drawer
          className={isDarkClass}
          width={"70%"}
          title={<div className={isDarkText}>{`<dev_danny />`}</div>}
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col justify-center align-middle gap-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#project-list"
                  className="text-cyan-400 hover:text-cyan-200 mr-4"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-cyan-400 hover:text-cyan-200 mr-4"
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-400 hover:text-cyan-200">
                  Skills
                </a>
              </li>
            </ul>
            <div>
              <ThemeIcon />
            </div>
          </div>
        </Drawer>
      </div>

      <nav className="">
        <div className="mx-auto flex justify-between items-center">
          <div className={isDarkText + " text-lg font-semibold"}>
            {`<dev_danny />`}
          </div>
          <div className="flex items-center max-sm:hidden">
            <ThemeIcon />
            <a
              href="#project-list"
              className={isDarkText + " hover:text-cyan-200 mr-4"}
            >
              Work
            </a>
            <a
              href="#experience"
              // className="text-cyan-400 hover:text-cyan-200 mr-4"
              className={isDarkText + " hover:text-cyan-200 mr-4"}
            >
              Experience
            </a>
            <a href="#" className={isDarkText + " hover:text-cyan-200"}>
              Skills
            </a>
          </div>
          <div className={isDarkText + " sm:hidden cursor-pointer"}>
            <MenuOutlined onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
