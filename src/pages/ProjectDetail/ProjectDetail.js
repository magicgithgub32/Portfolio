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
    <div class="detail-img-container">
    <img src=${project.detail.imageDetail} alt=${project.detail.titleDetail} />
    <img src=${project.detail.imageDetail2} alt=${project.detail.titleDetail} />
    </div>
    <p>${project.detail.descDetail}</p>
  `;
};
