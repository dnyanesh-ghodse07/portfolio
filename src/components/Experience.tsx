import { Tabs } from "antd";
import useTheme from "../hooks/useTheme";
const Experience = () => {
  const { isDark } = useTheme();
  const items = [
    {
      key: "1",
      label: "Analytic Edge",
      children: (
        <ul
          className={
            `${
              isDark ? "text-secondary-text-dark" : "text-secondary-text-light"
            }` + " list-disc md:text-lg"
          }
        >
          <li>
            Developed and maintained responsive web applications using React.js,
            collaborating with design and backend teams to ensure pixel- perfect
            implementations.
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
      ),
    },
    {
      key: "2",
      label: "Dhwani",
      children: (
        <ul
          className={
            `${
              isDark ? "text-secondary-text-dark" : "text-secondary-text-light"
            }` + " list-disc md:text-lg"
          }
        >
          <li>
            Assisted in building and enhancing user interfaces for web
            applications using React.js and modern frontend technologies.
          </li>
          <li>
            Implemented responsive designs and optimized CSS styles, leading to
            a 15% increase in mobile user engagement.
          </li>
          <li>
            Worked closely with senior developers to debug and improve code
            quality, contributing to an overall 30% reduction in technical debt.
          </li>
          <li>
            Participated in code reviews, providing constructive feedback to
            peers and maintaining coding standards.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section id="experience" className="py-4">
      <h4 className="text-heading-text">Professional Experience:</h4>
      <div className={`${isDark ? "active-tab-dark" : "active-tab-light"}`}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabBarStyle={{
            color: "red",
          }}
        />
      </div>
    </section>
  );
};

export default Experience;
