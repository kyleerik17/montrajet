import React from "react";
import "../styles/driver.css";

export default function DriverRegister({ onBack }) {
  return (
    <div className="screen">

      {/* HEADER */}
      <div className="top">
        <span className="back" onClick={onBack}>← Profils</span>
        <span className="badge green">Profil Chauffeur</span>
      </div>

      <h1>Créer mon compte</h1>
      <p className="subtitle">
        Inscrivez-vous pour gérer vos trajets
      </p>

      {/* FORM */}
      <div className="form-card">

        <div className="row">
          <input placeholder="Prénom" />
          <input placeholder="Nom" />
        </div>

        <input placeholder="Email" />
        <input placeholder="+225 07 ..." />
        <input type="password" placeholder="Mot de passe" />

        {/* PERMIS */}
        <label className="label">NUMÉRO DE PERMIS</label>
        <input placeholder="Ex: CI-12345678" />

        <label className="label">TYPE DE PERMIS</label>
        <input placeholder="Ex: B, C, D" />

      </div>

      <p className="secure">🔒 Données chiffrées et sécurisées</p>

      <button className="main-btn green">
        Créer mon compte
      </button>

      <p className="login">
        Déjà inscrit ? <span>Se connecter</span>
      </p>

    </div>
  );
}