import React from "react";
import { IonIcon } from "@ionic/react";
import "../../styles/pages/home.css";

export default function Home() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <h1>PiSchool</h1>
        </div>

        <div className="user-area">
          <IonIcon name="person-circle-outline" />
          <h2>Accueil</h2>
        </div>
      </header>

      {/* CONTENT */}
      <main className="content">

        <div className="map" id="map"></div>

        <p className="info-text">
          Votre enfant est actuellement dans le <br />
          car et arrivera au GS Elephant <br />
          dans approximativement <span>5 min</span>
        </p>

        <h3 className="info-title">
          <IonIcon name="megaphone-outline" /> Infos Utiles
        </h3>

        {/* SWIPER supprimé pour stabiliser */}
        <div className="info-box">
          <p>Pas d'images pour le moment</p>
        </div>

      </main>

      {/* BOTTOM NAV */}
      <footer className="bottom-nav">

        <button>
          <IonIcon name="clipboard-outline" />
        </button>

        <button>
          <IonIcon name="notifications-outline" />
        </button>

        <button className="active">
          <IonIcon name="home-outline" />
        </button>

        <button>
          <IonIcon name="accessibility-outline" />
        </button>

        <button>
          <IonIcon name="settings-outline" />
        </button>

      </footer>

    </div>
  );
}