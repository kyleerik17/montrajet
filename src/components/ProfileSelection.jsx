import React from "react";
import "../styles/profile.css";

export default function ProfileSelection({ onSelect }) {
  return (
    <div className="screen">

      {/* STATUS */}
      <div className="status">
        <span>9:41</span>
        <div className="status-right">
          <span>WiFi</span>
          <div className="battery"></div>
        </div>
      </div>

      {/* CHIP */}
      <div className="chip">
        <div className="dot"></div>
        <span>Trajet en cours</span>
      </div>

      {/* TITLE */}
      <h1>
        Bonjour,<br />qui êtes-vous ?
      </h1>

      <p className="subtitle">
        Choisissez votre profil pour continuer
      </p>

      <span className="section">SÉLECTIONNER UN PROFIL</span>

      {/* CARDS */}
      <div
        className="card blue clickable"
        onClick={() => onSelect("parent")}
      >
        <div className="icon">👤</div>
        <div>
          <h3>Parent</h3>
          <p>Suivez le bus de votre enfant en direct</p>
        </div>
        <span className="arrow">›</span>
      </div>

      <div
        className="card green clickable"
        onClick={() => onSelect("driver")}
      >
        <div className="icon">🕒</div>
        <div>
          <h3>Chauffeur</h3>
          <p>Gérez votre itinéraire et les arrêts</p>
        </div>
        <span className="arrow">›</span>
      </div>

      <div
        className="card purple clickable"
        onClick={() => onSelect("hotesse")}
      >
        <div className="icon">✔</div>
        <div>
          <h3>Hôtesse</h3>
          <p>Gérez les présences et les élèves</p>
        </div>
        <span className="arrow">›</span>
      </div>

      {/* DIVIDER */}
      <div className="divider">
        <div></div>
        <span>ou</span>
        <div></div>
      </div>

      {/* QR BUTTON */}
      <div
        className="qr clickable"
        onClick={() => alert("Scanner QR")}
      >
        📷 Scanner un QR code d'accès
      </div>

    </div>
  );
}