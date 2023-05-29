import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantData from "../data/restaurants/Burgers.json";
import "./RestaurantDetails.css";
import MenuItemPopup from "./MenuItemPopup";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [truncatedDescription, setTruncatedDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState("");
  const [popupPrice, setPopupPrice] = useState("");

  // Find the restaurant object by matching the ID
  const restaurant = restaurantData.places.find(
    (place) => place.id === Number(id)
  );

  useEffect(() => {
    if (restaurant) {
      const words = restaurant.description.split(" ");
      const truncatedText = words.slice(0, 30).join(" ");
      setTruncatedDescription(truncatedText);
    }
  }, [restaurant]);

  const handleOpenPopup = (item, price) => {
    setPopupItem(item);
    setPopupPrice(price);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddToCart = (item, price) => {
    // Implement your cart logic here
    console.log(`Adding ${item} to cart with price $${price}`);
    handleClosePopup();
  };

  if (!restaurant) {
    return <div></div>;
  }

  return (
    <div className="restaurant-details">
      <div className="restaurant-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Restaurant"
        />
        <div className="restaurant-info">
          <div>
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="restaurant-location">{restaurant.location}</p>
          </div>
          <p className="restaurant-description">{truncatedDescription}</p>
        </div>
      </div>

      <div className="restaurant-details-row">
        <div className="menu-section">
          <h3 className="section-heading">Burgers</h3>
          <div className="menu-items">
            {restaurant.menu.burgers.map((burger, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                    alt="Burger"
                  />
                </div>
                <p className="menu-item-name">{burger}</p>
                <p className="menu-item-price">
                  ${restaurant.prices.burgers[burger]}
                </p>
                <button
                  className="view-details-button"
                  onClick={() =>
                    handleOpenPopup(burger, restaurant.prices.burgers[burger])
                  }
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h3 className="section-heading">Drinks</h3>
          <div className="menu-items">
            {restaurant.menu.drinks.map((drink, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    alt="Drink"
                  />
                </div>
                <p className="menu-item-name">{drink}</p>
                <p className="menu-item-price">
                  ${restaurant.prices.drinks[drink]}
                </p>
                <button
                  className="view-details-button"
                  onClick={() =>
                    handleOpenPopup(drink, restaurant.prices.drinks[drink])
                  }
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h3 className="section-heading">Sauces</h3>
          <div className="menu-items">
            {restaurant.menu.sauces.map((sauce, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Sauce"
                  />
                </div>
                <p className="menu-item-name">{sauce}</p>
                <p className="menu-item-price">
                  ${restaurant.prices.sauces[sauce]}
                </p>
                <button
                  className="view-details-button"
                  onClick={() =>
                    handleOpenPopup(sauce, restaurant.prices.sauces[sauce])
                  }
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="restaurant-details-row description-row">
        <div className="address">
          <h3 className="section-heading">Address</h3>
          <p>{restaurant.location}</p>
        </div>

        <div className="description">
          <h3 className="section-heading">Description</h3>
          <p>{restaurant.description}</p>
        </div>

        <div className="working-hours">
          <h3 className="section-heading">Working Hours</h3>
          <ul>
            {Object.entries(restaurant.workingHours).map(([day, hours]) => (
              <li key={day}>
                <strong>{day}:</strong> {hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-popup" onClick={handleClosePopup}>
              &times;
            </span>
            <MenuItemPopup
              item={popupItem}
              price={popupPrice}
              addToCart={handleAddToCart}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
