import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Cadastro from './Components/Cadastro';
import CardPage from './Components/CardPage';
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <nav className='navbar'>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/card">Card</Link>
      </nav>
      <Routes>
        <Route path="/cadastro" element={<Cadastro addProduct={addProduct} />} />
        <Route path="/card" element={<CardPage products={products} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);