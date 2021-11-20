import React from "react";

const PizzaHilight = ({ img, name, payload, prices, colonnes }) => {
  const listIngredients = payload.join(", ");
  console.log(colonnes)
  return (
    <div className="card">
      <div className="accroche">Pizza du moment : {name} </div>
      <img src={img} alt={name} />
      <div className="ingredients">{listIngredients}</div>
      <div>
        {prices.map((price, i) => (
          <div>
            {colonnes[i + 1 ]} : {price} €
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaHilight;
