import React from "react";

const MenuItemPopup = ({ item, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item, price);
  };

  return (
    <div className="menu-item-popup">
      <h3 className="menu-item-name">{item}</h3>
      <p className="menu-item-price">${price}</p>
      <button onClick={this.handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItemPopup;
