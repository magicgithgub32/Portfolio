import "./Header.css";

export const Header = () => {
  return `
      <nav>
          <h3>Rub</h3>
          <ul>
              <li>
                  <a href="#" id="homeLink">Home</a>
              </li>
              <li>
                  <a href="#" id="skillsLink">Tech Skills</a>
              </li>
              <li>
                  <a href="#" id="projectsLink">Projects</a>
              </li>
              <li>
                  <a href="#" id="aboutLink">About</a>
              </li>
              <li>
                  <a href="#" id="loveLink">💜</a>
              </li>
          </ul>
      </nav>
      `;
};
