import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import burgerData from "../data/restaurants/Burgers.json";
import pizzaData from "../data/restaurants/Pizza.json";
import "./RestaurantList.css";

const RestaurantList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [deliveryTimes, setDeliveryTimes] = useState({});
  const [fastestDeliveries, setFastestDeliveries] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error retrieving user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const calculateDeliveryTime = async (restaurant) => {
    if (userLocation) {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            restaurant.location
          )}&key=302c2aea7e27419aac5dd976ff692847`
        );
        const data = await response.json();
        console.log("Geocoding data:", data);

        const { lat, lng } = data.results[0].geometry;

        const restaurantLocation = {
          latitude: lat,
          longitude: lng,
        };

        const distance = calculateDistance(userLocation, restaurantLocation);
        const averageBikingSpeed = 15;
        const estimatedTime = (distance / averageBikingSpeed) * 60;

        return Math.round(estimatedTime);
      } catch (error) {
        console.error("Error retrieving geocoding data:", error);
        return "N/A";
      }
    }
    return "N/A";
  };

  const calculateDistance = (location1, location2) => {
    const { latitude: lat1, longitude: lon1 } = location1;
    const { latitude: lat2, longitude: lon2 } = location2;

    const toRad = (value) => (value * Math.PI) / 180;
    const earthRadius = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  };

  const findFastestDeliveries = (times, limit) => {
    const sortedDeliveries = Object.entries(times).sort(
      ([, timeA], [, timeB]) => Number(timeA) - Number(timeB)
    );
    const fastestDeliveries = sortedDeliveries
      .slice(0, limit)
      .map(([restaurantId]) => restaurantId);

    return fastestDeliveries;
  };

  useEffect(() => {
    const fetchDeliveryTimes = async () => {
      const promises = [...burgerData.places, ...pizzaData.places].map(
        async (restaurant) => {
          const deliveryTime = await calculateDeliveryTime(restaurant);
          return { restaurantId: restaurant.id, deliveryTime };
        }
      );

      const deliveryTimesArray = await Promise.all(promises);
      const times = {};

      deliveryTimesArray.forEach(({ restaurantId, deliveryTime }) => {
        times[restaurantId] = deliveryTime;
      });

      setDeliveryTimes(times);
      setFastestDeliveries(findFastestDeliveries(times, 5));
    };

    fetchDeliveryTimes();
  }, [userLocation]);

  const addToCart = (item) => {
    // Add logic for adding the item to the cart
  };

  return (
    <div className="container">
      <h2>Burger Restaurants</h2>
      <div className="restaurant-list">
        {burgerData.places.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            estimatedDeliveryTime={deliveryTimes[restaurant.id] || "N/A"}
          />
        ))}
      </div>

      <h2>Pizza Restaurants</h2>
      <div className="restaurant-list">
        {pizzaData.places.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            estimatedDeliveryTime={deliveryTimes[restaurant.id] || "N/A"}
          />
        ))}
      </div>

      <h2>Fastest Delivery</h2>
      <div className="restaurant-list">
        {fastestDeliveries.map((restaurantId) => {
          const restaurant =
            burgerData.places.find(
              (place) => place.id === Number(restaurantId)
            ) ||
            pizzaData.places.find((place) => place.id === Number(restaurantId));

          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              estimatedDeliveryTime={deliveryTimes[restaurant.id] || "N/A"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
