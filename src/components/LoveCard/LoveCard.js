import "./LoveCard.css";

export const LoveCard = (thing) => {
  return `
    <div class="love-card" >
        <img src=${thing.picture} alt=${thing.title} />
    </div>
    `;
};
