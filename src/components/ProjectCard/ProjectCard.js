import "./ProjectCard.css";

export const ProjectCard = (project) => {
  return `
    <article class="project-card" id=${project.id}>
        <img src=${project.picture} alt=${project.name} />
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <p>Tech Stack: ${project.tech.join(", ")}</p>
        <div class="project-card-links">
            <a href=${project.link}>🔗 Check it out</a>
            <a href=${project.git}>💻 See the code</a>
        </div>
    </article>
    `;
};
