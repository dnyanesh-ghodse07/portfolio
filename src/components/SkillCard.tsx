interface Skill {
  title: string;
  icon: string;
  // desc: string;
}
const SkillCard = (skill: Skill) => {
  const { icon, title } = skill;

  return (
    <div className="flex justify-center items-center gap-2 border-slate-50 p-2">
      <img width={40} src={icon} alt="" />
      <h3 className="text-xl">{title}</h3>
    </div>
  );
};

export default SkillCard;
