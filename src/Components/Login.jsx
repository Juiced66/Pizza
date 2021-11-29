import React from "react";

function Login() {
  return (
    <div className="login-wrapper">
      <h1>Authentification</h1>
      <form>
        <label>
          <p>Nom d'utilisateur</p>
          <input type="text" />
        </label>
        <label>
          <p>Mot de passe</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
