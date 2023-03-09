import "./SkillIcon.css";

export const SkillIcon = (icon, desc) => {
  return `
    <img class="skillIcon" src=${icon} alt=${desc} />
    `;
};
