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
    project.addEventListener("click", (event) => {
      const isCodeLink = event.target.classList.contains("code-link");
      if (!isCodeLink) {
        event.preventDefault(); //This is to avoid showing projectDetail page for a second before showing the gitHub page or the app itself
        ProjectDetail(id);
      }
    });
  };

  projectsData.forEach((project) => {
    addEventListenerForProjectDetail(project.id);
  });
};
