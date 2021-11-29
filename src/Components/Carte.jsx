import React from "react";

const LigneCarte = ({ name, prices, payload , color }) => {
  const toDisplay = payload.join(', ')
  return (
    <>
      <tr>
        <td className="carte-ligne" style={{ color: color }}>
          {name}
        </td>
        {prices.map((price,i) => {
            if(prices.length === 1 && i === 2 ){
              return (
                <td key={price + i} style={{ color: color, textAlign:"right" }}>{price + " €"}</td>
              )
            }
            return (
              <td key={price + i} style={{ color: color }}>{price !== null && (price + " €")}</td>
            )
        })}
      </tr>
      <tr colSpan="3">
        <td style={{ color: color }}>{toDisplay}</td>
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
         {categorie.name !== "_" && <h4>{categorie.name}</h4>}
        </th>
      </tr>
      <tr>
        {console.log(colonnes)}
        {colonnes.map((colonne, i) => {
          return i === 0 ? <th key={colonne + i}>{colonne}</th> : <th className="tarif" key={colonne + i}>{colonne}</th>;
        })}
      </tr>
    </thead>
  );
};

const Carte = ({carte}) => {

  

  return carte.map((famille) => {
    return (
      <div key={"famille" + famille.name}>
        <h2>Nos {famille.name}</h2>
        {famille.categories.map((categorie) => {
          return (
            <table key={"table" + categorie.name}>
              <THead colonnes={famille.columns} categorie={categorie} />
              <tbody>
              {categorie.products.map((produit, i) => {
                return (
                  <LigneCarte
                    key={produit.name + i}
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
