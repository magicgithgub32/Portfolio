import { SkillIcon } from "../../components/SkillIcon/SkillIcon";
import { skillsData } from "../../data/skillsData";
import { cleanPage } from "../../utils/cleanPage";
import "./TechSkills.css";

const main = document.querySelector("main");

export const TechSkills = () => {
  // cleanPage(main);
  main.innerHTML = ` 
  <section class="skills">
    <h1>Software Skills </h1>
    <article>
      ${skillsData.map((skill) => SkillIcon(skill.icon, skill.desc)).join("")}
    </article>
    </section>

    `;
};
