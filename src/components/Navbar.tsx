import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-cyan-400 text-lg font-semibold">
          {`<dev_danny />`}
        </div>
        <div className="flex items-center max-sm:hidden">
          <a href="#" className="text-cyan-400 hover:text-cyan-200 mr-4">
            Work
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-200 mr-4">
            Experience
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-200">
            Skills
          </a>
        </div>
        <div className="sm:hidden cursor-pointer text-cyan-200">
          <MenuOutlined />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
