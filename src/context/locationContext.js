import { createContext, useContext, useState } from "react";
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const values = {
    lat,
    lon,
    setLat,
    setLon,
  };

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
