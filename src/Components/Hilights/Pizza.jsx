import React from "react";

const PizzaHilight = ({ img, name, payload, prices, colonnes }) => {
  const listIngredients = payload.join(", ");
  return (
    <div className="card" key={name}>
      <div className="accroche">Gros plan : {name} </div>
      <img src={img} alt={name} />
      <div className="ingredients">{listIngredients}</div>
      <div>
        {prices.map((price, i) => (
          <div key={price}>
            {colonnes[i + 1]} : {price} €
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaHilight;
