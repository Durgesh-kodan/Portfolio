import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";
import Tools from "./Tools.jsx";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My TechStack</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Tools/>
      </div>
    </section>
  );
};

export default Skills;
