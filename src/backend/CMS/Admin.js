/**
 * Admin Page
 * Root of CMS app
 */

import React, { useEffect} from "react";
import CategoryList from "./Category/CategoryList";
import Login from "../../Components/Login"
import { verifyToken } from "../Utils/verifyToken";
import { useNavigate } from "react-router";





const Admin = ({ carte }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    try {
      verifyToken(token)
    }catch(err){
      localStorage.removeItem('token')
      navigate('/login')
    }
    
  }, []);




  
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
