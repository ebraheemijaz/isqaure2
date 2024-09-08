import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import Loader from "./Loader";

export const DetailsContect = createContext();

export default function InfoContext({ children }) {
  const [loader, setLoading] = useState(true);
  const [shopDetails, setShopDetails] = useState({});

  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/shop-detail?populate[shop_image_1]=*&populate[shop_image_2]=*&populate[owner_img]=*&populate[banner][populate]=*&populate[Logo]=*`
        );

        const data = await response.json();
        setShopDetails(data.data.attributes);
        console.log("shop", shopDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    };

    fetchShopDetails();
  }, []);

  return (
    <DetailsContect.Provider value={shopDetails}>
      {loader && <Loader />}
      {!loader && children}
    </DetailsContect.Provider>
  );
}
