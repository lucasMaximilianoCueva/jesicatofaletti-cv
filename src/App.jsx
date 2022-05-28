import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Experience from "./Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import React from "react";
import Studies from './components/Studies'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremi" element={<AboutMe />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/estudios" element={<Studies />} />
        <Route path="*" element={"NotFound"} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
