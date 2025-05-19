import React from "react";
import "./card.css";

export default function Card({ product, deleteProduct }) {
  return (
    <div className="card">
      <div className="titleCard">
        <h1 className="nome">{product.name}</h1>
        <p className="categoria">{product.categoria}</p>
        <p className="cidade">{product.cidade}</p>
      </div>
      <div className="descCard">
        <p className="descricao">{product.descricao}</p>
      </div>
      <div className="precoCard">
        <p className="preco">R$ {product.preco}</p>
        <button href="#">Comprar</button>
        <button
          onClick={() => deleteProduct(product.id)}
          className="deleteButton"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}