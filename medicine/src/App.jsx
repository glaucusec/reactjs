import React, { useState } from "react";
import MedicineForm from "./components/MedicineForm/MedicineForm";
import MedicineProvider from "./store/MedicineProvider";
import MedicineList from "./components/MedicineList/MedicineList";

import CartProvider from "./store/CartProvider";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

import "./App.css";

function App() {
  console.log('I am App');
  const [showCart, setShowCart] = useState("");

  return (
    <MedicineProvider>
      <CartProvider>
        <div className="container">
          <Header setShowCart={setShowCart} />
          <MedicineForm />
          <MedicineList />
          <Cart setShowCart={setShowCart} showCart={showCart} />
        </div>
      </CartProvider>
    </MedicineProvider>
  );
}

export default App;
