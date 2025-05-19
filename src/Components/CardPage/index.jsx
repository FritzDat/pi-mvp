import React from "react";
import Card from '../Card';
import "../CardPage/cardpage.css";

export default function CardPage({ products, deleteProduct }) {
  return (
    <div className="card-container">
      {products.length > 0 ? (
        products.map((product) => (
          <Card key={product.id} product={product} deleteProduct={deleteProduct} />
        ))
      ) : (
        <p>Nenhum produto cadastrado ainda.</p>
      )}
    </div>
  );
}