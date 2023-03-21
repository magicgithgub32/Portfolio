import { LoveCard } from "../../components/LoveCard/LoveCard";
import { loveData } from "../../data/LoveData";
import { cleanPage } from "../../utils/cleanPage";
import "./Love.css";

const main = document.querySelector("main");

export const Love = () => {
  // cleanPage(main);
  main.innerHTML = `
    <section class="love">
    <h2>Just a bunch of things I <span>enjoy</span>ed over the years</h2>
    <div class="love-gallery">
        ${loveData.map((thing) => LoveCard(thing)).join("")}
    </div>
    </section>
    `;
};
