import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";

const Layout = () => {
  return (
    <div className="bg-slate-900">
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
