import React, { useState, useRef } from "react";
import ListProduct from "./ListProduct";
import ProductInput from "./ProductInput";


function App() {
  const totalAmount = useRef(0);
  const [products, setProduct] = useState([]);

  function onAddProduct(product) {
    totalAmount.current += parseInt(product.price);
    localStorage.setItem(
      product.id,
      JSON.stringify({
        name: product.name,
        price: product.price,
      })
    );
    setProduct((prevData) => [...prevData, product]);
  }

  function onDeleteProduct(productId) {
    let newProducts = [];
    products.forEach((product) => {
      if (product.id !== productId) {
        newProducts.push(product);
      } else {
        totalAmount.current -= parseInt(product.price);
      }
    });
    localStorage.removeItem(productId);
    setProduct(newProducts);
  }

  return (
    <div>
      <ProductInput onSubmit={onAddProduct} />
      <ListProduct products={products} onDelete={onDeleteProduct} />
      <div>
        <h3>Total Value Worth of Products: {totalAmount.current}</h3>
      </div>
    </div>
  );
}

export default App;
