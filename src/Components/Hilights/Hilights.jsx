import React, { Component } from "react";
import Slider from "react-slick";
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
    const familles = this.props.carte
    console.log(familles)
    
    
    /** Only pizzas are Hiligthed for now **/
    let pizzaFamille =  familles.filter(({name}) =>  name === 'Pizzas')
    console.log(pizzaFamille)
    
    let hilightedPizzas = []

    pizzaFamille[0].categories.forEach(((category)=> {
      const categoryHiligth = category.products.filter((produit) => produit.hasOwnProperty('img'))
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
                  colonnes={pizzaFamille[0].columns}
                />
            );
          ;
        })}
      </Slider>
    );
  }
}


