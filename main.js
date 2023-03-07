import "./style.css";

import { Header } from "./src/components/Header/Header";
import { Home } from "./src/pages/Home/Home";
import { linkPage } from "./src/utils/linkPage";

document.querySelector("header").innerHTML = Header();

linkPage("#homelink", Home);

Home();
