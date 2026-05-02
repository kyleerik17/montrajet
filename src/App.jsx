import { useState } from "react";
import ProfileSelection from "./components/ProfileSelection";
import ParentRegister from "./components/ParentRegister";
import DriverRegister from "./components/DriverRegister";
import HotesseRegister from "./components/HotesseRegister";
import Login from "./components/Login.";
import Home from "./components/pages/home";

function App() {
  const [screen, setScreen] = useState("profile");
  const [role, setRole] = useState(null);

  if (screen === "profile") {
    return (
      <ProfileSelection
        onSelect={(selectedRole) => {
          setRole(selectedRole);
          setScreen("login");
        }}
      />
    );
  }

  if (screen === "login") {
    return (
      <Login
        role={role}
        onBack={() => setScreen("profile")}
        onRegister={() => {
          if (role === "parent") setScreen("parentRegister");
          if (role === "driver") setScreen("driverRegister");
          if (role === "hotesse") setScreen("hotesseRegister");
        }}
        // 👉 AJOUT IMPORTANT
        onSuccess={() => setScreen("home")}
      />
    );
  }

  if (screen === "parentRegister") {
    return (
      <ParentRegister
        onBack={() => setScreen("profile")}
        onLogin={() => setScreen("login")}
      />
    );
  }

  if (screen === "driverRegister") {
    return (
      <DriverRegister
        onBack={() => setScreen("profile")}
        onLogin={() => setScreen("login")}
      />
    );
  }

  if (screen === "hotesseRegister") {
    return (
      <HotesseRegister
        onBack={() => setScreen("profile")}
        onLogin={() => setScreen("login")}
      />
    );
  }

  // 🏠 HOME AJOUTÉ
  if (screen === "home") {
    return (
      <Home
        role={role}
        onBack={() => setScreen("profile")}
      />
    );
  }

  return null;
}

export default App;