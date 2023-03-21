import "./ProjectDetail.css";
import { projectsData } from "../../data/projectsData";

export const ProjectDetail = (id) => {
  const main = document.querySelector("main");
  main.innerHTML = `
  <div class="projectDetail-container"></div>
    
    `;

  const project = projectsData.find((ProjectDetail) => ProjectDetail.id === id);

  const container = document.querySelector(".projectDetail-container");
  container.innerHTML += `
      <h2>${project.detail.titlePost}</h2>
      
      <div class="detail-img-container"><img src=${project.detail.imageDetail} alt=${project.detail.titleDetail} /></div>
      <p>${project.detail.descDetail}</p>
    `;
};
