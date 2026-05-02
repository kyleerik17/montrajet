import React from "react";
import "../styles/register.css";

export default function ParentRegister({ onBack }) {
  return (
    <div className="screen">

      {/* HEADER */}
      <div className="top">
        <span className="back" onClick={onBack}>← Profils</span>
        <span className="badge">Profil Parent</span>
      </div>

      <h1>Créer mon compte</h1>
      <p className="subtitle">
        Inscrivez-vous pour suivre vos enfants
      </p>

      {/* FORM CARD */}
      <div className="form-card">

        <div className="row">
          <input placeholder="Marie" />
          <input placeholder="Koné" />
        </div>

        <input placeholder="Email" />
        <input placeholder="+225 07 ..." />
        <input type="password" placeholder="Mot de passe" />

        {/* CHILD SECTION */}
        <div className="section-title">Enfants rattachés</div>

        <div className="child">
          <div className="avatar">AK</div>
          <div>
            <strong>Awa Koné</strong>
            <p>CM2 — Bus Ligne 3</p>
          </div>
          <span className="remove">✕</span>
        </div>

        <div className="add-child">
          + Ajouter un enfant
        </div>

      </div>

      <p className="secure">🔒 Données chiffrées et sécurisées</p>

      <button className="main-btn">
        Créer mon compte
      </button>

      <p className="login">
        Déjà inscrit ? <span>Se connecter</span>
      </p>

    </div>
  );
}