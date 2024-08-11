import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapView from "./components/Map";

const App = () => (
  <APIProvider
    apiKey={"AIzaSyDYGKH8deelB4rECL5uQoGB-SYhh1IByL8"}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <MapView />
  </APIProvider>
);

export default App;
