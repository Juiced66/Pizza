import React, { Component } from "react";
import Slider from "react-slick";
import carte from "../appConfig/pizzas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pizza from "./Pizza";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let categories = carte.categories;

    return (
      <Slider {...settings}>
        {categories.map((categorie) => {
          return categorie.pizzas.map((pizza) => {
            return (
                <Pizza
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  sizes={pizza.sizes}
                  img={pizza.img}
                />
            );
          });
        })}
      </Slider>
    );
  }
}


