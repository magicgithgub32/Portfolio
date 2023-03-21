import "./style.css";

import { Header } from "./src/components/Header/Header";
import { Home } from "./src/pages/Home/Home";
import { TechSkills } from "./src/pages/TechSkills/TechSkills";
import { Projects } from "./src/pages/Projects/Projects";
import { changeTheme, Footer } from "./src/components/Footer/Footer";
import { linkPage } from "./src/utils/linkPage";
import { Love } from "./src/pages/Love/Love";
import { About } from "./src/pages/About/About";

document.querySelector("header").innerHTML = Header();

document.querySelector("footer").innerHTML = Footer();

Home();
changeTheme();

linkPage("#homeLink", Home);
linkPage("#skillsLink", TechSkills);
linkPage("#projectsLink", Projects);
linkPage("#loveLink", Love);
linkPage("#aboutLink", About);
