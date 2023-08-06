import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Four0Four from "../views/404";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/ScrollToTop";

function Routess() {
  //força a que es posicioni a dalt. De fet a mi no em feia falta però el del curs ho necessitava...
  // useScrollToTop();
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetail />} />
        <Route path="*" element={<Four0Four />} />
      </Routes>
    </Router>
  );
}

export default Routess;
