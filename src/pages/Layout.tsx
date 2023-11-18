import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "bg-primary-bg-dark" : "bg-primary-bg-light"}`}>
      <div className="left"></div>
      <div className="md:p-20 max-md:p-5">
        <Navbar />
        <Profile />
        <Experience />
        <ProjectList />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Layout;
