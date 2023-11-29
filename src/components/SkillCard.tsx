interface Skill {
  title: string;
  icon: string;
  // desc: string;
}
const SkillCard = (skill: Skill) => {
  const { icon, title } = skill;

  return (
    <div className="dark:hover:drop-shadow-[0_10px_30px_rgba(255,250,250,0.5)] hover:drop-shadow-[0_10px_30px_rgba(10,10,10,0.5)] flex justify-center items-center gap-2 border-slate-50 p-2">
      <img width={40} src={icon} alt="" />
      <h3 className="text-xl text-slate-800 dark:text-slate-200">{title}</h3>
    </div>
  );
};

export default SkillCard;
