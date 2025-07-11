import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/Empresa" element={<Empresa />}>
        </Route>
        <Route exact path="/Contato" element={<Contato />}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
