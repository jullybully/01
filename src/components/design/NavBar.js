import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Cart from "./Cart"; // Import the Cart component
import RestaurantDetails from "../context/RestaurantDetails";

function NavBar() {
  const [click, setClick] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Initializing as an empty array

  const handleClick = () => setClick(!click);
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            GP
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/discovery"
                className="nav-links"
                onClick={handleClick}
              >
                Discovery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/restaurant"
                className="nav-links"
                onClick={handleClick}
              >
                Restaurants
              </NavLink>
            </li>
          </ul>

          <div className="nav-cart" onClick={handleCartClick}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-item-count">{cartItems.length}</span>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      {showCart && <Cart cartItems={cartItems} />}
      <RestaurantDetails addToCart={addToCart} />{" "}
      {/* Pass addToCart function */}
    </>
  );
}

export default NavBar;
