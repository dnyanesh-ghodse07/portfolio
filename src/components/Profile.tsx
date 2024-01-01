import Social from "./Social";
import ProfileImg from '../assets/profile-pic (12).png';
const Profile = () => {
  return (
    <section>
      <div className="text-primary-text-light dark:text-primary-text-dark pt-20">
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
            <h1 className="border-l-2 pl-2 text-heading-text text-md">
              Summary :
            </h1>
            <p className="mt-2">
            Highly skilled Front-End Developer with over 2 years of experience in developing and implementing front-end architectures that have resulted in significant increases in page load speed and user engagement. Proficient in collaborating with back-end teams to integrate user-facing elements with server-side logic and optimizing components for maximum performance. Adept at identifying and resolving performance and scalability issues, staying up-to-date with emerging technologies and frameworks, and reducing development time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
