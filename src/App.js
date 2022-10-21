import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
