import "./Projects.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";

export const Projects = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="projects">
    <h2>These are <span>Projects</span> I have been doing lately</h2>
    <div class="projects-gallery">
        ${projectsData.map((project) => ProjectCard(project)).join("")}
    </div>
    </section>
    `;
};
