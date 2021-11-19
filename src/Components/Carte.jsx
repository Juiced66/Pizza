import React from "react";

const LigneCarte = ({ name, sizes, ingredients }) => {
  let listIngredients = ingredients.join(", ");

  return (
    <>
      <tr>
        <td className="carte-ligne"> {name} </td>
        {sizes.map((size) => {
          return <td>{`${size.price}€`}</td>;
        })}
      </tr>
      <tr colSpan="3">
        <td>{listIngredients}</td>
      </tr>
    </>
  );
};

const Carte = ({ carte }) => {
  console.log(carte.categories);
  return (
    <div>
      <h2>Nos Pizzas</h2>
      <table>
        {carte.categories.map((categorie) => {
          return (
            <>
              <thead>
                <tr>
                  <th colSpan="3">{categorie.nameCat}</th>
                </tr>
                <tr>
                  <th>Pizza :</th>
                  <th>Petite</th>
                  <th>Grande</th>
                </tr>
              </thead>
              <tbody>
                {categorie.pizzas.map((pizza) => (
                  <LigneCarte
                    name={pizza.name}
                    sizes={pizza.sizes}
                    ingredients={pizza.ingredients}
                  />
                ))}
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Carte;
