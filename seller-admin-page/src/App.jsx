import React, { useState, useRef } from "react";
// import ProductInput from "./ProductInput";

function ProductInput({ onSubmit }) {
  let [data, setData] = useState({});
  const updateData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(data);
    data = {};
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="id">Product ID</label>
        <input onChange={updateData} type="text" id="id" name="id" />
        <label htmlFor="price">Selling Price</label>
        <input onChange={updateData} type="text" id="price" name="price" />
        <label htmlFor="name">Product Name</label>
        <input onChange={updateData} type="text" id="name" name="name" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

function ListProduct({ products }) {
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.id} - {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const totalAmount= useRef(0);
  const [products, addProduct] = useState([]);

  function onSubmit(product) {
    totalAmount.current += parseInt(product.price);
    addProduct((prevData) => [...prevData, product]);
    
  }

  return (
    <div>
      <ProductInput onSubmit={onSubmit} />
      <ListProduct products={products} />
      <div><h3>Total Value Worth of Products: {totalAmount.current}</h3></div>
    </div>
  );
}

export default App;
