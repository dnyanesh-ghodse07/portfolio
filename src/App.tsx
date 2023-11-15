import "./App.css";
import Layout from "./pages/Layout";

// import ProjectList from "./components/ProjectList";
// import Experience from "./components/Experience";
// import Profile from "./components/Profile";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <div className="h-screen flex bg-slate-900">
        <div className=""></div>
        <div className="main relative">
          <Navbar />
          <div className="h-full overflow-y-scroll">
            <Profile />
            <Experience />
            <ProjectList />
          </div>
        </div>
        <div className="">
          <div className="h-full border-l-2 border-sky-500"></div>
        </div>
      </div> */}
      <Layout />
    </>
  );
}

export default App;
