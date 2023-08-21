import React, { useContext, useMemo } from "react";

import { CartContext } from "../../store/CartProvider";

import "./Header.css";

export default function Header({ setShowCart }) {
  console.log("I am Header");
  const cartCtx = useContext(CartContext);

  const ItemLength = useMemo(() => {
    return cartCtx.items.reduce((length, item) => {
      return length + item.medicine_amount;
    }, 0);
  }, [cartCtx.items]);

  return (
    <div className="columns header">
      <div className="column">
        <h1 className="title is-1 has-text-centered h1-title">Med Shop</h1>
      </div>
      <div className="column is-one-fifth button_div">
        <button
          onClick={() => {
            setShowCart("is-active");
          }}
          className="button cart_button"
        >
          Cart<p className="cart_item_count">{ItemLength}</p>
        </button>
      </div>
    </div>
  );
}
