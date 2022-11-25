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
import ProfileMusisi from "./pages/profile/ProfileMusisi";
import EditProfileMusisi from "./pages/profile/EditProfileMusisi";
import DetailLowongan from "./pages/detail/DetailLowongan";
import Lamar from "./pages/detail/Lamar";
import HomeTempat from "./pages/home/HomeTempat";
import Pelamar from "./pages/tempat/Pelamar";
import FormLowongan from "./pages/tempat/FormLowongan";
import EditLowongan from "./pages/tempat/EditLowongan";
import ProfileTempat from "./pages/profile/ProfileTempat";
import ConfirmationMusisiReg from "./pages/confirmation/confirmation_reg_musisi";
import LoginAdmin from "./pages/admin/LoginAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<LoginMusisi />} />
      <Route path="/admin/login" element={<LoginAdmin/>} />
      <Route path="/admin/dashboard" element={<HomeAdmin/>} />
      <Route path="/registration" element={<RegistrationMusisi />} />
      <Route path="/login-tempat" element={<LoginTempat />} />
      <Route path="/registration-tempat" element={<RegistrationTempat />} />
      <Route path="/home-musisi" element={<HomeMusisi/>} />
      <Route path="/riwayat" element={<Riwayat/>} />
      <Route path="/detail/:id" element={<DetailLowongan/>}/>
      <Route path="/detail/lamar" element={<Lamar/>}/>
      <Route path="/profile/:id" element={<ProfileMusisi/>}/>
      <Route path="/profile/edit/:id" element={<EditProfileMusisi/>}/>
      <Route path="/lowongan" element={<HomeTempat />} />
      <Route path="/daftar-pelamar" element={<Pelamar />} />
      <Route path="/lowongan/buat-lowongan" element={<FormLowongan />} />
      <Route path="/lowongan/edit-lowongan/:id" element={<EditLowongan />} />
      <Route path="/profile-owner/:id" element={<ProfileTempat />} />
    </Routes>
  );
}

export default App;
