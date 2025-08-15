import React, { createContext, useContext, useEffect, useState } from "react";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

const restaurantApi = createContext();

export function RestaurantProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, []);

  return (
    <restaurantApi.Provider value={{product}}>{children}</restaurantApi.Provider>
  );
}

export function useRestaurant() {
  return useContext(restaurantApi);
}
