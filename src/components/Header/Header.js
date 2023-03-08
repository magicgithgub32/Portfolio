import "./Header.css";

export const Header = () => {
  return `
      <nav>
          <h3>Rub</h3>
          <ul>
              <li>
                  <a href="#" id="homelink">Home</a>
              </li>
              <li>
                  <a href="#" id="skills">Tech Skills</a>
              </li>
              <li>
                  <a href="#" id="projectslink">Projects</a>
              </li>
          </ul>
      </nav>
      `;
};

const template = Header();
