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
              <li>
                  <a href="#">
                      <img src="/icons/github.png" alt="GitHub icon"/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/icons/gmail.png" alt="Gmail icon"/>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/icons/linkedin.png" alt="LinkedIn icon"/>
                  </a>
              </li>
          </ul>
      </nav>
      `;
};

const template = Header();
