import quatreFromage from "../assets/img/quatreFromage.jpg";
import quatreSaisons from "../assets/img/quatreSaisons.jpg";
import reine from "../assets/img/reine.jpg";
import quatreFromageBlc from "../assets/img/quatreFromageBlc.jpg";
import kebab from "../assets/img/kebab.jpg";

const carte = {
  familles: [
    {
      name: "Pizzas",
      colonnes : ['Pizza', '26cm', '33cm'],
      categories: [
        {
          name: "Tomate",
          produits: [
            {
              name : "4 Fromages",
              payload: ["tomate", "bleu", "chevre", "roquefort", "olives"],
              prices : [{'26cm': 9},{'33cm': 10.5}]
            },
            {
              name : "Margarita",
              payload: ["tomate", "mozzarella", "basilic", "olives"],
              prices : [{'26cm': 7},{'33cm': 8.5}]
            },
          ]
        },
        {
          name: "Crème",
          produits: [
            {
              name : "4 Fromages",
              payload: ["Crème", "bleu", "chevre", "roquefort", "olives"],
              prices : [{'26cm': 9},{'33cm': 10.5}]
            },
            {
              name : "Raclette",
              payload: ["Crème", "emmental", "Mozzarella", "Jambon blanc", "Chorizo", "Pomme de terre","Fromage raclette","olives"],
              prices : [{'26cm': 10},{'33cm': 12}]
            },
          ]
        },


      ],
    },
    {
      name: "Boissons",
      colonnes : ['Boisson', 'tarif'],
      categories: [
        {
          name: "Sodas",
          
          produits: [
            {
              name : 'Soda canette 33cl',
              payload : ["Coca-cola", "Orangina", "Fanta", "Sprite", "Oasis","Ice tea"],
              prices : [{'tarif' : 2}],
            },
          ]
        },
        {
          name: "Bière 25 cl",
          produits: [
            {
              name : 'Soda canette 33cl',
              payload : ["Coca-cola", "Orangina", "Fanta", "Sprite", "Oasis","Ice tea"],
              prices : [{'tarif' : 2}],
            },
          ]
        },
      ],
    },
  ],
};

// const carte = {
//   categories: [
//     {
//       nameCat: "Tomate",
//       pizzas: [
//         {
//           name: "4 Fromages",
//           sizes: [
//             {
//               name: "26cm",
//               price: 11,
//             },
//             {
//               name: "33cm",
//               price: 16,
//             },
//           ],
//           ingredients: ["tomate", "bleu", "chevre", "roquefort", "olives"],
//           img: quatreFromage,
//         },
//         {
//           name: "4 Saisons",
//           sizes: [
//             { price: 10, name: "Petite" },
//             { price: 13, name: "Grande" },
//           ],
//           ingredients: [
//             "tomate",
//             "artichauds",
//             "champignons",
//             "poivrons",
//             "jambon",
//             "olives",
//           ],
//           img: quatreSaisons,
//         },
//         {
//           name: "Reine",
//           sizes: [
//             { price: 10, name: "Petite" },
//             { price: 13, name: "Grande" },
//           ],
//           ingredients: ["tomate", "champignons", "jambon", "olives"],
//           img: reine,
//         },
//       ],
//     },
//     {
//       nameCat: "Blanche",
//       pizzas: [
//         {
//           name: "4 Fromages",
//           sizes: [
//             { price: 10, name: "Petite" },
//             { price: 13, name: "Grande" },
//           ],
//           ingredients: ["Creme", "bleu", "chevre", "roquefort", "olives"],
//           img: quatreFromageBlc,
//         },
//         {
//           name: "Kebab",
//           sizes: [
//             { price: 10, name: "Petite" },
//             { price: 13, name: "Grande" },
//           ],
//           ingredients: ["Creme", "kebab", "oignons", "olives"],
//           img: kebab,
//         },
//       ],
//     },
//   ],
// };
export default carte;
