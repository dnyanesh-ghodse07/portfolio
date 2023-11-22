import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import ToolsAndTech from "../components/ToolsAndTech";
import Contact from "../components/contact";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "bg-primary-bg-dark" : "bg-primary-bg-light"}`}>
      <Navbar />
      <div className="md:p-10 max-md:p-5">
        <Profile />
        <Experience />
        <ToolsAndTech />
        <ProjectList />
        <Contact />
        <div className="">dev danny</div>
      </div>
    </div>
  );
};

export default Layout;
