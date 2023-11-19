import ProfileImg from "../assets/profile-pic (12).png";
import Social from "./Social";
const Profile = () => {
  return (
    <section>
      <div className="text-primary-text-light dark:text-primary-text-dark">
        <div className="mx-auto flex flex-col items-center justify-center py-10">
          <img
            src={ProfileImg}
            alt="Hero Image"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-2 hover:animate-pulse">
            Dnyaneshwar Ghodse
          </h1>
          <p className="text-secondary-text-light dark:text-secondary-text-dark text-lg md:text-2xl">
            Front End Engineer
          </p>
          <Social />
          <div>
            <div className="text-heading-text text-lg pb-2">Summary :</div>
            <p className="mt-2">
              Enthusiastic and dedicated Front End developer with 2 years of
              experience in designing, developing, and delivering high-quality
              web applications. Adept at translating design mockups into
              responsive and interactive user interfaces while collaborating
              with cross- functional teams to ensure seamless user experiences.
              Proficient in React.js, Redux, and modern frontend technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
