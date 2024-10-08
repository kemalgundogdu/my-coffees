import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapView from "./components/Map";

const App = () => (
  <APIProvider
    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    libraries={['marker']}
  >
    <MapView />
  </APIProvider>
);

export default App;
