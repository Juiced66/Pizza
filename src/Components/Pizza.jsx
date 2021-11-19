import React from "react";

const Pizza = ({ img, name, ingredients, sizes}) => {
    console.log(img, name, ingredients, sizes)
  return (
    <div className="card">
      <div className="accroche">Pizza du moment : {name} </div>
      <img src={img} alt={name} />
      <div className="ingredients">{ingredients.join(', ')}</div>
        {sizes.map((size) => (
          <div>{size.name}{" : "}{size.price}€</div>
        ))}
    </div>
  );
};

export default Pizza;
