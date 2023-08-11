import React, { useState, useRef } from "react";

export default function ListProduct({ products, onDelete }) {
  function onDeleteProduct(productId) {
    onDelete(productId);
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.id} - {product.name} - {product.price}{" "}
              <button onClick={() => onDeleteProduct(product.id)}>
                Delete Product
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
