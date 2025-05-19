import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from './Components/Cadastro';
import CardPage from './Components/CardPage';
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/produtos')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  const addProduct = async (product) => {
    try {
      const res = await fetch('http://localhost:3001/api/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });

      if (!res.ok) throw new Error("Erro ao cadastrar produto");

      const data = await res.json();
      setProducts([...products, { ...product, id: data.id }]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/produtos/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error("Erro ao deletar produto");

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <nav className='navbar'>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/card">Card</Link>
      </nav>
      <Routes>
        <Route path="/cadastro" element={<Cadastro addProduct={addProduct} />} />
        <Route path="/card" element={<CardPage products={products} deleteProduct={deleteProduct} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);