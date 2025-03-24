import React, { useState } from "react";
import "./cadastro.css";

export default function Cadastro({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    preco: "",
    categoria: "comida",
    descricao: "",
    vendedor: "particular",
    cpf: "",
    cidade: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.preco || !formData.descricao || !formData.cidade) return;

    addProduct({ ...formData, id: Date.now() });
    setFormData({ name: "", preco: "", categoria: "comida", descricao: "", vendedor: "particular", cpf: "", cidade: "" });
  };

  return (
    <div className="mainDiv">
      <div className="loginDiv">
        <h2>Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="loginForm">
            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="Insira o nome" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="loginForm">
            <label htmlFor="preco">Preço: R$</label>
            <input className="inputPreco" type="number" placeholder="Insira o preço" name="preco" value={formData.preco} onChange={handleChange} required />
          </div>
          <div className="loginForm">
            <label htmlFor="categoria">Categoria:</label>
            <select name="categoria" value={formData.categoria} onChange={handleChange}>
              <option value="Comida">Comida</option>
              <option value="Hobby">Hobbies</option>
              <option value="Esporte">Esportes</option>
              <option value="Eletrodoméstico">Eletrodomésticos</option>
            </select>
          </div>
          <div className="loginForm">
            <label htmlFor="descricao">Descrição:</label>
            <textarea name="descricao" cols="25" rows="5" placeholder="Insira a descrição" value={formData.descricao} onChange={handleChange} required />
          </div>
          <h2>Vendedor</h2>
          <div className="loginForm">
            <label htmlFor="vendedor">Vendedor:</label>
            <select name="vendedor" value={formData.vendedor} onChange={handleChange}>
              <option value="particular">Particular</option>
              <option value="empresa">Empresa</option>
            </select>
          </div>
          <div className="loginForm">
            <label htmlFor="cpf">CPF/CNPJ:</label>
            <input className="inputPreco" type="number" placeholder="Insira o CPF/CNPJ" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </div>
          <div className="loginForm">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" placeholder="Insira sua cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
          </div>
          <button className="loginButton" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
