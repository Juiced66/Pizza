import React, { useState } from "react";

const Product = ({ product }) => {

const [dataVisible, setDataVisible] = useState(false);

const toggleShowData = ()=>{
    setDataVisible(!dataVisible)
}
  return (
    <div>
      <div onClick={()=>toggleShowData()}>{product.name}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <ol style={{display : dataVisible ? 'block' : 'none'}}>
        {product.payload.map((data, i) => (
          <li key={i}>
            {data}
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))}
        <li><button>Add</button></li>
      </ol>
      <ol style={{display : dataVisible ? 'block' : 'none'}}>
        Prix :
        {product.prices.map((price, i) => {
          return (
            <li key={i}>
              {price + " €"}{" "}
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          );
        })}
        <li><button>Add</button></li>
      </ol>
    </div>
  );
};

export default Product;
