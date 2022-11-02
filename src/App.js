import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/landing/LandingPage";
import AboutUs from "./pages/about/AboutUs";
import LoginMusisi from "./pages/login/LoginMusisi";
import LoginTempat from "./pages/login/LoginTempat";
import HomeMusisi from "./pages/home/HomeMusisi"
import RegistrationMusisi from "./pages/registration/RegistrationMusisi";
import RegistrationTempat from "./pages/registration/RegistrationTempat";
import Riwayat from "./pages/riwayat/Riwayat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<LoginMusisi />} />
      <Route path="/registration" element={<RegistrationMusisi />} />
      <Route path="/login-tempat" element={<LoginTempat />} />
      <Route path="/registration-tempat" element={<RegistrationTempat />} />
      <Route path="/home-musisi" element={<HomeMusisi/>} />
      <Route path="/riwayat" element={<Riwayat/>} />
    </Routes>
  );
}

export default App;
