/**
 * category display
 */

import React, { useState } from "react";
import ProductList from "../Products/ProductList";
import CategoryEditor from "./CategoryEditor";

const Category = ({ category }) => {
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = () => {
    setEditMode(false)
    console.log("fetch update to db");
  };

  const handleDelete = () => {
    console.log("fetch delete to db");
  };

  

  return (
    <div>
      {editMode ? (
        <CategoryEditor
          onCancel={() => setEditMode(false)}
          onUpdate={() => handleUpdate()}
          data={category.name}
        />
      ) : (
        <div>
          <div>{category.name}</div>
          <button onClick={() => setEditMode(!editMode)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      )}

      <ProductList products={category.products} />
    </div>
  );
};

export default Category;
