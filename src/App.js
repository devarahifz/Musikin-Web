import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
import ProfilePelamar from "./pages/tempat/ProfilePelamar";

function App() {
  return (
    <>
    <ToastContainer className="mt-5 pt-5" />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<LoginMusisi />} />
      <Route path="/admin" element={<LoginAdmin/>} />
      <Route path="/admin/dashboard" element={<HomeAdmin/>} />
      <Route path="/registration" element={<RegistrationMusisi />} />
      <Route path="/login-tempat" element={<LoginTempat />} />
      <Route path="/registration-tempat" element={<RegistrationTempat />} />
      <Route path="/home-musisi" element={<HomeMusisi/>} />
      <Route path="/riwayat/:id" element={<Riwayat/>} />
      <Route path="/detail/:id" element={<DetailLowongan/>}/>
      <Route path="/detail/lamar" element={<Lamar/>}/>
      <Route path="/profile/:id" element={<ProfileMusisi/>}/>
      <Route path="/profile/edit/:id" element={<EditProfileMusisi/>}/>
      <Route path="/lowongan" element={<HomeTempat />} />
      <Route path="/daftar-pelamar/:id" element={<Pelamar />} />
      <Route path="/daftar-pelamar/profile-pelamar/:id" element={<ProfilePelamar />} />
      <Route path="/lowongan/buat-lowongan" element={<FormLowongan />} />
      <Route path="/lowongan/edit-lowongan/:id" element={<EditLowongan />} />
      <Route path="/profile-owner/:id" element={<ProfileTempat />} />
      <Route path="/confirmation" element={<ConfirmationMusisiReg />} />
    </Routes>
    </>
  );
}

export default App;
