// import { useState } from "react";
import Header from "./components/modules/Header/Header.jsx";
import Footer from "./components/modules/Footer/Footer.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import Delivery from "./components/pages/Delivery/Delivery.jsx";
import "./IncludeFonts.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/delivery" Component={Delivery} />
      </Routes>

      <Footer />
    </Router>
  );
}
