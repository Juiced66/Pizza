import React from "react";

const LigneCarte = ({ name, prices, payload , color }) => {
  const listIngredients = payload.join(', ')
  return (
    <>
      <tr>
        <td className="carte-ligne" style={{ color: color }}>
          {name}
        </td>
        {prices.map((price) => {
            return (
              <td style={{ color: color }}>{price + " €"}</td>
            )
        })}
      </tr>
      <tr colSpan="3">
        <td style={{ color: color }}>{listIngredients}</td>
      </tr>
    </>
  );
};

const THead = ({ colonnes, categorie }) => {
  console.log(colonnes)
  return (
    <thead>
      <tr>
        <th colSpan="3">
          <h4>{categorie.name}</h4>
        </th>
      </tr>
      <tr>
        {colonnes.map((colonne, i) => {
          return <th key={colonne}>{colonne}</th>;
        })}
      </tr>
    </thead>
  );
};

const Carte = ({carte}) => {
  const famillesProduits = carte.familles;

  return famillesProduits.map((famille) => {
    return (
      <div>
        <h2>Nos {famille.name}</h2>
        {famille.categories.map((categorie) => {
          console.log(famille)
          return (
            <table>
              <THead colonnes={famille.colonnes} categorie={categorie} />
              <tbody>
              {categorie.produits.map((produit, i) => {
                return (
                  <LigneCarte
                    name={produit.name}
                    prices={produit.prices}
                    payload={produit.payload}
                    color={ i % 2 !== 0 && "#b7ac37"}
                  />
                );
              })}
              </tbody>
            </table>
          );
        })}
      </div>
    );
  });

  // return (
  //   <div>
  //     <h2>Nos {carte.famille.name}</h2>
  //     <table>
  //       {carte.categories.map((categorie) => {
  //         return (
  //           <>
  //             <THead produit={"Pizzas"} categorie={categorie} colonnes={}/>
  //             <tbody>
  //               {categorie.pizzas.map((pizza, i) =>
  //                 i%2 === 0 ? (<LigneCarte
  //                   name={pizza.name}
  //                   sizes={pizza.sizes}
  //                   ingredients={pizza.ingredients}
  //                   color={'#b7ac37'}
  //                 />
  //               ):<LigneCarte
  //               name={pizza.name}
  //               sizes={pizza.sizes}
  //               ingredients={pizza.ingredients}
  //             />
  //               )}
  //             </tbody>
  //           </>
  //         );
  //       })}
  //     </table>
  //   </div>
  // );
};

export default Carte;
