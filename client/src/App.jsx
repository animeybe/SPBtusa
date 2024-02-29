// import { useState } from "react";
import Header from "./components/modules/Header/Header.jsx";
import Footer from "./components/modules/Footer/Footer.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import "./IncludeFonts.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
