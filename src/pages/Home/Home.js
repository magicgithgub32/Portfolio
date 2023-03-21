import "./Home.css";
import { Avatar } from "../../components/Avatar/Avatar";
import { cleanPage } from "../../utils/cleanPage";

const main = document.querySelector("main");

export const Home = () => {
  //   cleanPage(main);
  main.innerHTML = `
    <section class="home">
        <article>
            <h2>
            Hello there, my name is <span>Rubén</span>
            </h2>
            <h3>
            <span>
            Full-stack developer
            </span>
            </h3>
            <h3>
            <span>Rock{TheCode}</span>
            <h3>
        </article>
        <article>
        ${Avatar("/images/126ffa2.jpg", "Me")}
        </article>
    </section>
    
    `;
};
