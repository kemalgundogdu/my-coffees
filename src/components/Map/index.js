import React from "react";
import { Map } from "@vis.gl/react-google-maps";
import Bar from "../Bar";

function MapView() {
  return (
    <Map
      style={{ width: "100vw", height: "100vh" }} // Haritanın boyutları
      defaultCenter={{ lat: 41.0847699, lng: 29.0492408 }} // Haritanın başlangıç merkezi
      defaultZoom={10} // Haritanın başlangıç yakınlaştırma seviyesi
      gestureHandling={"greedy"} // Kullanıcı etkileşimlerinin nasıl ele alınacağı
      disableDefaultUI={true} // Tüm varsayılan UI kontrollerini devre dışı bırakır
      options={{
        fullscreenControl: false, // Tam ekran kontrol düğmesini kaldırır
        mapTypeControl: false, // Harita türü kontrol düğmesini kaldırır
        streetViewControl: false, // Sokak görünümü kontrol düğmesini kaldırır
        zoomControl: false, // Yakınlaştırma kontrol düğmesini kaldırır
      }}
      mapTypeId={"roadmap"} // Haritanın türü (örneğin, 'roadmap', 'satellite', 'hybrid', 'terrain')
      clickableIcons={false} // Yer işaretlerinin tıklanabilir olup olmadığı
      styles={[
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ]} // Harita stilleri
    >
      <Bar/>
    </Map>
  );
}

export default MapView;
