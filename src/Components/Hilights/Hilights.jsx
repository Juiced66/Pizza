import React, { Component } from "react";
import Slider from "react-slick";
import carte from "../../appConfig/pizzas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PizzaHilight from "./Pizza";

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
    const familles = carte.familles
    

    let pizzaFamille =  familles.filter((famille) =>  famille.name === 'Pizzas')
    pizzaFamille = pizzaFamille[0]
    
    let hilightedPizzas = []

    pizzaFamille.categories.forEach(((category)=> {
      const categoryHiligth = category.produits.filter((produit) => produit.hasOwnProperty('img'))
      hilightedPizzas = [...hilightedPizzas, ...categoryHiligth ]
      
    }))

    return (
      <Slider {...settings}>
        {hilightedPizzas.map((pizza) => {
            return (
                <PizzaHilight
                  key={pizza.name}
                  name={pizza.name}
                  payload={pizza.payload}
                  prices={pizza.prices}
                  img={pizza.img}
                  colonnes={pizzaFamille.colonnes}
                />
            );
          ;
        })}
      </Slider>
    );
  }
}


