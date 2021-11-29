/**
 * Admin Page
 * Root of CMS app
 */

import React from "react";
import CategoryList from "./Category/CategoryList";

const Admin = ({ carte }) => {
    
    
  
    return (
    <div>
      <ol>
        {carte.map((family, i) => {
          return <li key={i}>{family.name}
                <CategoryList  categories={family.categories}/>
        </li>;
        })}
      </ol>
    </div>
  );
};

export default Admin;
