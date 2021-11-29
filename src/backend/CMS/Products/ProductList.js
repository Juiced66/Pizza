import React, { useState } from 'react';
import Product from './Product';
import ProductFactory from './ProductFactory';

const ProductList = ({products}) => {
    
    const [newProduct, setNewProduct] = useState(false);
     
    return (
        <ol>
            {products.map((product) => <li> <Product product={product}/></li>)}
            {newProduct && <ProductFactory/>}
            <div><button onClick={()=> setNewProduct(true)}>Add</button></div>   
        </ol>
    );

}

export default ProductList;
