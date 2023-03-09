import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacView from "./components/Faculty/FacView";
import Login from "./components/Login/Login";
import StuSignUp from "./components/Login/StuSignUp";
import StuDetails from "./components/Student/StuDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/StuSignUp" element={<StuSignUp />} />
          <Route path="/StuDetails" element={<StuDetails />} />
          <Route path="/FacView" element={<FacView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
