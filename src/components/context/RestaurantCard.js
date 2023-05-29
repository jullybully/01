import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant, estimatedDeliveryTime }) => {
  const { id, name, description, location } = restaurant;

  const shortDescription = description.split(" ").slice(0, 10).join(" ");

  const handleClick = () => {
    window.location.href = `/restaurant/${id}`;
  };

  return (
    <div className="restaurant-card" onClick={handleClick}>
      <img
        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        alt="Restaurant"
        className="card-image"
      />
      <h1 className="card-name">{name}</h1>
      <p className="card-description">{shortDescription}...</p>
      <p className="card-location">{location}</p>
      <p className="card-delivery-time">
        Estimated Delivery Time: {estimatedDeliveryTime} minutes
      </p>
    </div>
  );
};

export default RestaurantCard;
