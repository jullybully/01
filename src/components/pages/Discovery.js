import React from "react";
import { Link } from "react-router-dom";
import "./Discovery.css";
import RestaurantList from "../context/RestaurantList";
function Discovery() {
  return (
    <div className="discovery-container">
      <div className="discovery-image">
        <img
          src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1560&q=80"
          alt="Food"
        />
      </div>

      <div className="discovery-content">
        <div className="row">
          <div className="discovery-columns">
            <div className="column">
              <img
                src="https://img.icons8.com/?size=512&id=L1IYKiSYAO8Z&format=png"
                alt="working time"
                className="discovery-icons"
              />
              <h3 className="column-heading">Working Hours</h3>
              <p>Mon - Sat: 9AM - 10PM</p>
              <p>Sun: 10AM - 8PM</p>
            </div>

            <div className="column">
              <img
                src="https://img.icons8.com/?size=512&id=487&format=png"
                alt="working time"
                className="discovery-icons"
              />
              <h3 className="column-heading">Delivery Time</h3>
              <p>It usually takes 20 minutes to deliver food.</p>
            </div>

            <div className="column">
              <img
                src="https://img.icons8.com/?size=512&id=11218&format=png"
                alt="working time"
                className="discovery-icons"
              />
              <h3 className="column-heading">Support</h3>
              <p>Support: 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="discovery-columns">
          <div className="column">
            <div className="column-left">
              <h1 className="first-heading">
                We Are Ready to Deliver Your Favorite Food Items
              </h1>
              <div>
                <p className="paragraph-column">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur fringilla felis, eu tempor felis facilisis
                  vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur fringilla felis, eu tempor felis facilisis
                  vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur fringilla felis, eu tempor felis facilisis
                  vel.
                </p>
              </div>
              <div>
                <Link to="/restaurant" className="quick-order-button">
                  Quick Order
                </Link>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="column-right">
              <img
                src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1094&q=80"
                alt="Food"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="discovery-columns">
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Burger"
                className="category-item-image"
              />
              <p className="item-text">Burger</p>
              <p className="item-subtext">19 places</p>
            </div>
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                alt="Pizza"
                className="category-item-image"
              />
              <p className="item-text">Pizza</p>
              <p className="item-subtext">11 places</p>
            </div>
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1464500650248-1a4b45debb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80"
                alt="Wok"
                className="category-item-image"
              />
              <p className="item-text">Wok</p>
              <p className="item-subtext">5 places</p>
            </div>
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=977&q=80"
                alt="Salad"
                className="category-item-image"
              />
              <p className="item-text">Salad</p>
              <p className="item-subtext">9 places</p>
            </div>
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1512685076844-4161e436c4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Lithuanian"
                className="category-item-image"
              />
              <p className="item-text">Lithuanian</p>
              <p className="item-subtext">22 places</p>
            </div>
            <div className="category-item">
              <img
                src="https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="American"
                className="category-item-image"
              />
              <p className="item-text">American</p>
              <p className="item-subtext">14 places</p>
            </div>
          </div>
        </div>
      </div>
      <RestaurantList />
    </div>
  );
}

export default Discovery;
