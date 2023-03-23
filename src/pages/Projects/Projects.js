import "./Projects.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { cleanPage } from "../../utils/cleanPage";

const main = document.querySelector("main");

export const Projects = () => {
  // cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <h2>These are <span>Projects</span> I've been doing lately</h2>
    <div class="projects-gallery">
        ${projectsData.map((project) => ProjectCard(project)).join("")}
    </div>
    </section>
    `;

  const addEventListenerForProjectDetail = (id) => {
    const project = document.getElementById(id);
    project.addEventListener("click", () => {
      ProjectDetail(id);
    });
  };

  for (const project of projectsData) {
    addEventListenerForProjectDetail(project.id);
  }
};
