import { SkillIcon } from "../../components/SkillIcon/SkillIcon";
import { skillsData } from "../../data/skillsData";
import "./TechSkills.css";

export const TechSkills = () => {
  const main = document.querySelector("main");
  main.innerHTML = ` 
  <section class="skills">
    <h1>Software Skills </h1>
    <article>
      ${skillsData.map((skill) => SkillIcon(skill.icon, skill.desc)).join("")}
    </article>
    </section>

    `;
};
