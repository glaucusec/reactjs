import React, { useState, useRef } from "react";


export default function ProductInput({ onSubmit }) {
    let [data, setData] = useState({ id: "", price: "", name: "" });
    const updateData = (e) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };
  
    const submit = (e) => {
      e.preventDefault();
      onSubmit(data);
      setData({ id: "", price: "", name: "" });
    };
  
    return (
      <div>
        <form onSubmit={submit}>
          <label htmlFor="id">Product ID</label>
          <input
            onChange={updateData}
            type="text"
            id="id"
            name="id"
            value={data.id}
          />
          <label htmlFor="price">Selling Price</label>
          <input
            onChange={updateData}
            type="text"
            id="price"
            name="price"
            value={data.price}
          />
          <label htmlFor="name">Product Name</label>
          <input
            onChange={updateData}
            type="text"
            id="name"
            name="name"
            value={data.name}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
  