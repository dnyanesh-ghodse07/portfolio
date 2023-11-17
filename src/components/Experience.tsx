const Experience = () => {
  return (
    <section>
      <div className="flex flex-wrap overflow-x-auto space-x-4 p-4 my-8">
        <p className="text-cyan-200">
          <div className="tabs flex gap-3">
            <button className="text-cyan-400 border-b-2 border-cyan-600 p-2 hover:text-cyan-300">
              Analytic Edge
            </button>
            <button className="text-cyan-400 border-b-2 border-cyan-600 p-2 hover:text-cyan-300">
              Dhwani
            </button>
          </div>
          <span>2021-2023</span>
          <ul className="list-disc">
            <li>
              Developed and maintained responsive web applications using
              React.js, collaborating with design and backend teams to ensure
              pixel- perfect implementations.
            </li>
            <li>
              Implemented complex frontend logic, including state management,
              resulting in improved performance and code maintainability.
            </li>
            <li>
              Contributed to architectural decisions, ensuring scalability and
              optimization of the application for a growing user base.
            </li>
            <li>
              Collaborated with QA engineers to identify and resolve frontend-
              related bugs, resulting in a 20% decrease in post-release issues.
            </li>
            <li>
              Actively participated in daily stand-ups and sprint planning,
              following agile methodologies to deliver features on time.
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Experience;
