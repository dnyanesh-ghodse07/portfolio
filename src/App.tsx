import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./App.css";
import Profile from "./assets/profile-pic (12).png";

function App() {
  // const cards = [
  //   { id: 1, title: "Dashboard", content: "Lorem ipsum dolor sit amet." },
  //   { id: 2, title: "Blog", content: "Consectetur adipiscing elit." },
  //   { id: 5, title: "Notes", content: "Lorem ipsum dolor sit amet." },
  //   { id: 7, title: "Ecomm", content: "Consectetur adipiscing elit." },
  //   {
  //     id: 3,
  //     title: "Card 3",
  //     content: "Sed do eiusmod",
  //   },
  // ];
  return (
    <>
      {/* container */}
      <div className="h-screen flex bg-slate-900">
        <div className="">
          <div className="social flex flex-col gap-4 p-4 text-teal-400 text-2xl">
            <GithubOutlined />
            <LinkedinOutlined />
            <MailOutlined />
            <InstagramOutlined />
          </div>
        </div>
        <div className="main relative">
          <nav className="p-4 absolute top-0 w-full">
            <div className="mx-auto flex justify-between items-center">
              <div className="text-white text-lg font-semibold">
                {`<dev_danny />`}
              </div>
              <div className="flex items-center">
                <a href="#" className="text-white mr-4">
                  Work
                </a>
                <a href="#" className="text-white mr-4">
                  Experience
                </a>
                <a href="#" className="text-white">
                  Skills
                </a>
              </div>
            </div>
          </nav>
          <div className="h-full overflow-y-scroll">
            <section>
              <div className="text-white">
                <div className="mx-auto flex flex-col items-center justify-center py-20 px-10">
                  <img
                    src={Profile}
                    alt="Hero Image"
                    className="filter rounded-full w-32 h-32 mb-4"
                  />
                  <h1 className="text-4xl font-bold mb-2">
                    Dnyaneshwar Ghodse
                  </h1>
                  <p className="text-lg">Front End Engineer</p>
                </div>
              </div>
            </section>
            <section>
              <div className="flex flex-wrap overflow-x-auto space-x-4 p-4 my-8">
                <p className="text-cyan-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias saepe eligendi dolorem ipsum obcaecati natus rem non id,
                  temporibus aperiam explicabo distinctio blanditiis repellendus
                  aliquid unde eaque laudantium vitae! Perspiciatis. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Ea eveniet, quod
                  explicabo dignissimos quis blanditiis commodi velit. Error,
                  ex. Modi blanditiis vitae aliquid! Magni accusamus, corporis
                  magnam neque atque similique? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Deserunt asperiores soluta sit
                  aliquid quae possimus id eos, magni fugiat minima! Adipisci
                  aliquam molestias earum, libero numquam odit iste itaque
                  eaque! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Similique sapiente, recusandae explicabo repellat
                  doloremque animi beatae sint, laboriosam qui magnam corrupti
                  at optio harum facere vel possimus tempore, a expedita?
                </p>
              </div>
            </section>
            <section className="container mx-auto p-4">
              <div className="gap-2 flex flex-wrap -mx-2">
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
                <div className="border-y-teal-200 border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
                  <h1>Title</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur deleniti minus sunt possimus delectus dolorum,
                    eos eum. Quae nobis eius molestias soluta velit beatae
                    cupiditate veritatis iusto. Recusandae, delectus
                    perspiciatis.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="">
          <div className="social flex flex-col gap-4 p-4 text-teal-400 text-2xl">
            <GithubOutlined />
            <LinkedinOutlined />
            <MailOutlined />
            <InstagramOutlined />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
