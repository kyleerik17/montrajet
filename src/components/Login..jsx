import React from "react";
import "../styles/login.css";

export default function Login({ onBack, onRegister }) {
  return (
    <div className="screen">

      <div className="top">
        <span className="back" onClick={onBack}>← Profils</span>
        <span className="badge">Connexion</span>
      </div>

      <h1>Bon retour 👋</h1>
      <p className="subtitle">
        Connectez-vous à votre espace
      </p>

      <div className="form-card">

        <label>EMAIL</label>
        <input placeholder="exemple@gmail.com" />

        <label>MOT DE PASSE</label>
        <div className="password">
          <input type="password" placeholder="••••••••" />
          <span>👁</span>
        </div>

        <p className="forgot">Mot de passe oublié ?</p>

      </div>

      <button className="main-btn">Se connecter</button>

      <p className="register">
        Pas encore de compte ? <span onClick={onRegister}>S'inscrire</span>
      </p>

    </div>
  );
}