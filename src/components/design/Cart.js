import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-popup">
      <h2>Cart</h2>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p className="empty-message">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
