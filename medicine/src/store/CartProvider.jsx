import React, { createContext, useState, useContext, useMemo } from "react";
import { MedicineContext } from "./MedicineProvider";

export const CartContext = createContext({});

export default function CartProvider(props) {
  console.log("I am cartProvider");
  const medicineContext = useContext(MedicineContext);

  const [cartItems, updateCartItems] = useState([]);

  function addCartItemHandler(medicine_id) {
    const med = medicineContext.meds.find(
      (med) => med.medicine_id === medicine_id
    );
    if (!med) return;

    const isAlreadyAdded = cartItems.some(
      (item) => item.medicine_id === med.medicine_id
    );
    const updatedItems = cartItems.map((item) =>
      item.medicine_id === med.medicine_id
        ? { ...item, medicine_amount: item.medicine_amount + 1 }
        : item
    );

    isAlreadyAdded
      ? updateCartItems(updatedItems)
      : updateCartItems([...updatedItems, { medicine_amount: 1, ...med }]);

    //   Reduce the quantity.

    medicineContext.reduceQuantity(medicine_id);
  }

  function reduceItemFromCart(medicine_id) {
    const index = cartItems.findIndex((med) => med.medicine_id === medicine_id);
    const updatedCartItems = [...cartItems];
    // Reduce the quantity from Cart
    updatedCartItems[index].medicine_amount -= 1;
    // Increase the quantity from Medicine
    medicineContext.increaseQuantity(medicine_id);
    if (updatedCartItems[index].medicine_amount <= 0) {
      updatedCartItems.splice(index, 1);
    }
    updateCartItems(updatedCartItems);
  }

  function increaseItemFromCart(medicine_id) {
    const index = cartItems.findIndex((med) => med.medicine_id === medicine_id);
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].medicine_amount += 1;
    medicineContext.reduceQuantity(medicine_id);
    updateCartItems(updatedCartItems);
  }

  const CartCtx = useMemo(
    () => ({
      items: cartItems,
      addCartItem: addCartItemHandler,
      reduceItemFromCart: reduceItemFromCart,
      increaseItemFromCart: increaseItemFromCart,
    }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={CartCtx}>
      {props.children}
    </CartContext.Provider>
  );
}
