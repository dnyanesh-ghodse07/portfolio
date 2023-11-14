import "./App.css";

function App() {
  const cards = [
    { id: 1, title: "Dashboard", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Blog", content: "Consectetur adipiscing elit." },
    { id: 5, title: "Notes", content: "Lorem ipsum dolor sit amet." },
    { id: 7, title: "Ecomm", content: "Consectetur adipiscing elit." },
    {
      id: 3,
      title: "Card 3",
      content: "Sed do eiusmod",
    },
  ];
  return (
    <>
      <nav className="bg-cyan-800 p-4">
        <div className="container mx-auto flex justify-around items-center">
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
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center py-20 px-10">
          <img
            src="./assets/profile-pic (12).png"
            alt="Hero Image"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">Dnyaneshwar Ghodse</h1>
          <p className="text-lg">Front End Engineer</p>
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-4 p-4 my-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-64 bg-white rounded drop-shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
          >
            <img
              className="rounded"
              src="https://images.pexels.com/photos/19042206/pexels-photo-19042206/free-photo-of-model-in-sombrero-and-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-700">{card.content}</p>
            </div>
            <div className="flex gap-3 p-4">
              <a className="text-sky-900 hover:text-green-800 cursor-pointer">
                Github
              </a>
              <a className="text-cyan-500 cursor-pointer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
