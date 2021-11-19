import quatreFromage from "../assets/img/quatreFromage.jpg";
import quatreSaisons from "../assets/img/quatreSaisons.jpg";
import reine from "../assets/img/reine.jpg";
import quatreFromageBlc from "../assets/img/quatreFromageBlc.jpg";
import kebab from "../assets/img/kebab.jpg";
console.log(kebab);
const carte = {
  categories: [
    {
      nameCat: "Tomate",
      pizzas: [
        {
          name: "4 Fromages",
          sizes: [
            {
              name: "Petite",
              price: 11,
            },
            {
              name: "Grande",
              price: 16,
            },
          ],
          ingredients: ["tomate", "bleu", "chevre", "roquefort", "olives"],
          img: quatreFromage,
        },
        {
          name: "4 Saisons",
          sizes: [
            { price: 10, name: "Petite" },
            { price: 13, name: "Grande" },
          ],
          ingredients: [
            "tomate",
            "artichauds",
            "champignons",
            "poivrons",
            "jambon",
            "olives",
          ],
          img: quatreSaisons,
        },
        {
          name: "Reine",
          sizes: [
            { price: 10, name: "Petite" },
            { price: 13, name: "Grande" },
          ],
          ingredients: ["tomate", "champignons", "jambon", "olives"],
          img: reine,
        },
      ],
    },
    {
      nameCat: "Blanche",
      pizzas: [
        {
          name: "4 Fromages",
          sizes: [
            { price: 10, name: "Petite" },
            { price: 13, name: "Grande" },
          ],
          ingredients: ["Creme", "bleu", "chevre", "roquefort", "olives"],
          img: quatreFromageBlc,
        },
        {
          name: "Kebab",
          sizes: [
            { price: 10, name: "Petite" },
            { price: 13, name: "Grande" },
          ],
          ingredients: ["Creme", "kebab", "oignons", "olives"],
          img: kebab,
        },
      ],
    },
  ],
};
export default carte;
