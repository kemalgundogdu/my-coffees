import React, { useState, useEffect, useRef } from "react";
import {
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Bar from "../Bar";
import { useLocation } from "../../context/locationContext";
import { useName } from "../../context/nameContext";
import getCafes from "../../api";

function MapView() {
  const { lat, lon, setLat, setLon } = useLocation();
  const [cafes, setCafes] = useState([]);
  const { name } = useName();
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);

  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const markerRefs = useRef([]);

  useEffect(() => {
    setCafes([]);
    if (lat && lon && name) {
      getCafes(lat, lon, name).then((data) => {
        setCafes(data.results);
      });
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setLat(latitude);
        setLon(longitude);
        setLocationError(false);
      },
      (error) => {
        console.error(error);
        setLocationError(true);
      }
    );
  }, [lat, lon, setLat, setLon, name]);

  const handleMarkerClick = (index) => {
    setActiveMarkerIndex(index === activeMarkerIndex ? null : index);
  };

  return (
    <div>
      {locationError ? (
        <div className="p-4 text-center text-red-500">
          Konum bilgisi alınamadı. Lütfen konum izinlerinizi kontrol edin.
        </div>
      ) : userLocation ? (
        <Map
          mapId={"a9256a2a167e5e4a"}
          style={{ width: "100vw", height: "100vh" }}
          center={userLocation}
          zoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
          componentRestrictions={{ country: "TR" }}
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: true,
          }}
          mapTypeId={"roadmap"}
        >
          <Bar />
          {Array.isArray(cafes) &&
            cafes.map((place, index) => (
              <AdvancedMarker
                key={index}
                ref={(el) => (markerRefs.current[index] = el)} // Referansı kaydet
                clickable={true}
                onClick={() => handleMarkerClick(index)}
                position={{
                  lat: place.geometry.location.lat,
                  lng: place.geometry.location.lng,
                }}
                title={place.name}
              >
                <Pin background={"#e45757"} borderColor={"#ffb0b0"} scale={1} />
                {activeMarkerIndex === index && (
                  <InfoWindow
                    anchor={markerRefs.current[index]} // Marker referansı
                    maxWidth={200}
                    onCloseClick={() => handleMarkerClick(index)}
                  >
                    <div>
                      <h2 className="text-lg font-semibold">{place.name}</h2>
                      <p className="text-sm">{place.vicinity}</p>
                      <div className="flex flex-col gap-1 mt-1">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat},${place.geometry.location.lng}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-2 bg-blue-500 text-white rounded"
                        >
                          Yol Tarifi Al
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-2 bg-blue-500 text-white rounded"
                        >
                          Haritada Göster
                        </a>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </AdvancedMarker>
            ))}
        </Map>
      ) : (
        <div className="p-4 text-center text-gray-500">
          Harita yükleniyor, lütfen konum izni verin.
        </div>
      )}
    </div>
  );
}

export default MapView;
