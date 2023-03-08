import "./style.css";

import { Header } from "./src/components/Header/Header";
import { Home } from "./src/pages/Home/Home";
import { TechSkills } from "./src/pages/TechSkills/TechSkills";

import { linkPage } from "./src/utils/linkPage";
import { changeTheme, Footer } from "./src/components/Footer/Footer";

document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();

Home();
changeTheme();

linkPage("#homelink", Home);
linkPage("#techSkills", TechSkills);
