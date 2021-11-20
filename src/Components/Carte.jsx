import React from "react";

const LigneCarte = ({ name, sizes, ingredients,color }) => {
  let listIngredients = ingredients.join(", ");

  return (
    <>
      <tr >
        <td  className="carte-ligne" style={{color:color}}> {name} </td>
        {sizes.map((size) => {
          return <td style={{color:color}}>{`${size.price}€`}</td>;
        })}
      </tr>
      <tr colSpan="3" >
        <td style={{color:color}}>{listIngredients}</td>
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
                  <th colSpan="3"><h4>{categorie.nameCat}</h4></th>
                </tr>
                <tr>
                  <th>Pizza :</th>
                  <th>26cm</th>
                  <th>33cm</th>
                </tr>
              </thead>
              <tbody>
                {categorie.pizzas.map((pizza, i) => 
                  i%2 === 0 ? (<LigneCarte
                    name={pizza.name}
                    sizes={pizza.sizes}
                    ingredients={pizza.ingredients}
                    color={'#b7ac37'}
                  />
                ):<LigneCarte
                name={pizza.name}
                sizes={pizza.sizes}
                ingredients={pizza.ingredients}
              />
                )}
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Carte;
