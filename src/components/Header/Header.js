import "./Header.css";

const lightClass = "light";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle(lightClass);
    changeLogoTheme();
  });
};

export const changeLogoTheme = () => {
  const themeImg = document.querySelector("#themeImg");
  const isLightMode = document.body.classList.contains(lightClass);
  if (!isLightMode) {
    themeImg.src = "icons/sun.png";
    return;
  }
  themeImg.src = "icons/moon.png";
};

export const Header = () => {
  return `
      <nav>
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
          <button id="themeBtn"><img src="icons/sun.png" alt="icon" id="themeImg"></button>

      </nav>
      `;
};
