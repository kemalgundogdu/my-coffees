import React, { useState, useEffect } from "react";
import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import Bar from "../Bar";

import { getCafes } from "../../api";

function MapView() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    getCafes().then((data) => {
      setCafes(data.results);
    });
  }, []);

  useEffect(() => {
    console.log("cafeler:", cafes);
  }, [cafes]);
  return (
    <Map
      mapId={"a9256a2a167e5e4a"} // light map kimliği
      style={{ width: "100vw", height: "100vh" }} // Haritanın boyutları
      defaultCenter={{ lat: 41.0847699, lng: 29.0492408 }} // Haritanın başlangıç merkezi
      defaultZoom={12} // Haritanın başlangıç yakınlaştırma seviyesi
      gestureHandling={"greedy"} // Kullanıcı etkileşimlerinin nasıl ele alınacağı
      disableDefaultUI={true} // Tüm varsayılan UI kontrollerini devre dışı bırakır
      componentRestrictions={{ country: "TR" }} // Harita bileşenlerinin kısıtlamaları
      options={{
        fullscreenControl: false, // Tam ekran kontrol düğmesini kaldırır
        mapTypeControl: false, // Harita türü kontrol düğmesini kaldırır
        streetViewControl: false, // Sokak görünümü kontrol düğmesini kaldırır
        zoomControl: false, // Yakınlaştırma kontrol düğmesini kaldırır
      }}
      mapTypeId={"roadmap"} // Haritanın türü (örneğin, 'roadmap', 'satellite', 'hybrid', 'terrain')
    >
      <Bar />
      {/* kafelerin konunları listeleniyor */}
      {cafes.map((place, index) => (
        <AdvancedMarker
          key={index}
          position={{
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          }}
          title={place.name}
        >
          <Pin background={"#e45757"} borderColor={"#ffb0b0"} scale={1} />
        </AdvancedMarker>
      ))}
    </Map>
  );
}

export default MapView;
