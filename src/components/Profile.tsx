import ProfileImg from "../assets/profile-pic (12).png";
import useTheme from "../hooks/useTheme";
import Social from "./Social";
const Profile = () => {
  const { isDark } = useTheme();
  return (
    <section>
      <div
        className={`${
          isDark ? "text-primary-text-dark" : "text-primary-text-light"
        }`}
      >
        <div className="mx-auto flex flex-col items-center justify-center py-20 px-10">
          <img
            src={ProfileImg}
            alt="Hero Image"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-2 hover:animate-pulse">
            Dnyaneshwar Ghodse
          </h1>
          <p
            className={
              `${
                isDark ? "text-primary-text-dark" : "text-primary-text-light"
              }` + " text-lg md:text-2xl"
            }
          >
            Front End Engineer
          </p>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Profile;
