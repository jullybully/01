import React, { useState, useEffect } from "react";
import RestaurantList from "../context/RestaurantList";
import "./Home.css";

function Home() {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Discover and get great food",
    "Looking for something healthy?",
    "Feeling lazy?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      <div
        className="full-width"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
        }}
      >
        <h2 className="text-center">{texts[textIndex]}</h2>
      </div>
      <div className="delivery-row">
        <div className="delivery-column">
          <div className="delivery-container">
            <div className="delivery-content">
              <div>
                <h2>Delivered.</h2>
                <p>
                  We will make it incredibly easy for you to discover and get
                  what you want. Delivered to you – quickly, reliably, and
                  affordably.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1516005492235-7a8d3a652dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Delivery"
              />
            </div>
          </div>
        </div>
      </div>

      <RestaurantList />

      <div className="container">
        <div className="text-width">
          <h2 className="text-center">Did you know?</h2>
          <p className="text-center">
            Getting home-delivered sushi is more than your life made easy. When
            you order, you help thousands of hard-working restaurant and store
            owners and couriers make a living.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
