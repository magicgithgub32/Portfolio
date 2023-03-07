import "./Home.css";
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
  const main = document.querySelector("main");
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
