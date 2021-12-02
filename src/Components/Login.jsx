import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import propTypes from 'prop-types';




async function loginUser(credentials) {
  return fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


function Login() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState("");
  const history = useNavigate();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      email,
      password
    });
    await setToken(user.token);
    
    localStorage.setItem("token", user.token)
    history('/admin')
  }


  
  return (
    <div className="login-wrapper">
      <h1>Authentification</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nom d'utilisateur</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Mot de passe</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: propTypes.func.isRequired
// }

export default Login;
