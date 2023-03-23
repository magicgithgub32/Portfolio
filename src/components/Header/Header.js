import "./Header.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeLogoTheme();
  });
};

export const changeLogoTheme = () => {
  const themeBtn = document.getElementById("themeBtn");
  console.log(themeBtn.src);
  if (themeBtn.src.includes("sun.png")) {
    themeBtn.src = "icons/moon.png";
  } else {
    themeBtn.src = "icons/sun.png";
  }
};

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
          <button id="themeBtn"><img src="icons/sun.png" alt="icon" id="themeBtn"></button>

      </nav>
      `;
};
