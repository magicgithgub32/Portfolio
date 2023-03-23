import "./ProjectDetail.css";
import { projectsData } from "../../data/projectsData";

export const ProjectDetail = (id) => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="projectDetail-container"></div>
  `;

  const project = projectsData.find((projectDetail) => projectDetail.id === id);

  const container = document.querySelector(".projectDetail-container");

  container.innerHTML += `
    <h2>${project.projectDetail.titleDetail}</h2>
    ${Divider()}
    <div class="detail-img-container"><img src=${
      project.projectDetail.imageDetail
    } alt=${project.projectDetail.titleDetail} /></div>
    <p>${project.projectDetail.descDetail}</p>
  `;
};
