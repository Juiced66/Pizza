import React from 'react';
import Category from './Category';

const CategoryList = ({categories}) => {

    return (
        <ol>
            {categories.map((category)=>{
                return <li><Category category={category} /></li>
            })}
        </ol>
    );
}

export default CategoryList;
