import React from "react";
import { Bus, Phone, Lock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/hotesse.css";

export default function HotesseRegister({ onBack }) {
  return (
    <div className="screen">

      {/* HEADER */}
      <div className="top">
        <button className="back" onClick={onBack}>← Profils</button>
        <div className="badge">Profil Hôtesse</div>
      </div>

      {/* TITLE */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1 }}>
        <h1>Créer compte hôtesse</h1>
        <p className="subtitle">
          Gestion des passagers et bus assigné
        </p>
      </motion.div>

      {/* FORM */}
      <div className="form-card">

        <label>Nom</label>
        <input placeholder="Nom" />

        <label>Prénom</label>
        <input placeholder="Prénom" />

        <label>Téléphone</label>
        <div className="password">
          <Phone size={18} />
          <input placeholder="Téléphone" />
        </div>

        <label>Mot de passe</label>
        <div className="password">
          <Lock size={18} />
          <input type="password" placeholder="Mot de passe" />
        </div>

        {/* BUS */}
        <label>Bus assigné</label>
        <div className="saved">
          <div className="avatar">
            <Bus size={20} />
          </div>

          <div style={{ flex: 1, marginLeft: 10 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>
              Bus 12 - Abidjan Nord
            </p>
            <p className="subtitle" style={{ margin: 0 }}>
              Ligne scolaire principale
            </p>
          </div>

          <span style={{ color: "#a78bfa" }}>✔</span>
        </div>

        <label>Zone</label>
        <div className="password">
          <MapPin size={18} />
          <input placeholder="Zone de travail" />
        </div>

        <button className="main-btn">Créer compte</button>

      </div>
    </div>
  );
}