import React from "react";
import Card from '../Card';
import "../CardPage/cardpage.css"

export default function CardPage({ products }) {
  return (
    <div>
      <div className="card-container">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p>Nenhum produto cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
}
