import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        width={"70%"}
        title={`<dev_danny />`}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex justify-center align-middle">
          <ul className="">
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
        </div>
      </Drawer>
      <nav className="">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-cyan-400 text-lg font-semibold">
            {`<dev_danny />`}
          </div>
          <div className="flex items-center max-sm:hidden">
            <a
              href="#project-list"
              className="text-cyan-400 hover:text-cyan-200 mr-4"
            >
              Work
            </a>
            <a
              href="#experience"
              className="text-cyan-400 hover:text-cyan-200 mr-4"
            >
              Experience
            </a>
            <a href="#" className="text-cyan-400 hover:text-cyan-200">
              Skills
            </a>
          </div>
          <div className="sm:hidden cursor-pointer text-cyan-200">
            <MenuOutlined onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
