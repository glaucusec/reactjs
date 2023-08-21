import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../../store/CartProvider";

import "./Cart.css";

export default function Cart({ setShowCart, showCart }) {
  console.log('I am cart');
  const cartCtx = useContext(CartContext);
  
  function decreaseItemFromCartHandler(medicine_id) {
    cartCtx.reduceItemFromCart(medicine_id);
  }

  function increaseItemToCartHandler(medicine_id) {
    cartCtx.increaseItemFromCart(medicine_id);
  }

  return createPortal(
    <>
      <div className={`modal ${showCart}`}>
        <div onClick={() => setShowCart("")} className="modal-background"></div>
        <div className="modal-content">
          <div className="column cart-items">
            {cartCtx.items.map((item) => {
              return (
                <div key={item.medicine_id}>
                  <div className="columns">
                    <div className="column">
                      <>
                        <h2 className="title is-3">{item.medicine_name}</h2>
                        <div className="columns">
                          <div className="column cart_price">
                            ${item.medicine_price}
                          </div>
                          <div className="column">
                            <p className="cart_item_amount">
                              x{item.medicine_amount}
                            </p>
                          </div>
                        </div>
                      </>
                    </div>
                    <div className="column">
                      <button
                        onClick={() => decreaseItemFromCartHandler(item.medicine_id)}
                        className="button"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseItemToCartHandler(item.medicine_id)}
                        className="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
            <h2 className="title is-4">Total Amount: ${}</h2>
            <div className="field is-grouped">
              <div className="control">
                <button onClick={() => setShowCart("")} className="button is-link">
                  Close
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Order</button>
              </div>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </>,
    document.querySelector("#portal")
  );
}
