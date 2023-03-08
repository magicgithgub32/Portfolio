import "./Footer.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeLogoTheme();
  });
};

export const changeLogoTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "🌞") {
    themeBtn.innerText = "🌑";
  } else {
    themeBtn.innerText = "🌞";
  }
};

export const Footer = () => {
  return `
            <nav>
                <ul>
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
              <div>
                <button id="themeBtn">🌞</button>
         </nav>
            `;
};
