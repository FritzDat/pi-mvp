import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Cadastro from './Components/Cadastro';
import Card from './Components/Card';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <nav className='navbar'>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/card">Card</Link>
    </nav>
    <Routes>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  </Router>
);