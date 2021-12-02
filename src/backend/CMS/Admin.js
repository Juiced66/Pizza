/**
 * Admin Page
 * Root of CMS app
 */

import React from "react";
import CategoryList from "./Category/CategoryList";
import Login from "../../Components/Login"
import { getCookie } from "../Utils/getCookie";


const Admin = ({ carte, setToken, token }) => {
  const cookieToken = getCookie('token')
  console.log(cookieToken)

  if(!token) {
    return <Login setToken={setToken}  />
  }
  
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
