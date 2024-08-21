import axios from "axios";

// Google Places API'yi kullanarak kafeleri getiren fonksiyon
const getCafes = async (lat, lon, name) => {
  // filtrelerken kullanılacak ismi küçük harfe çevir
  const lowerName = name ? name.toLowerCase() : "";
  // Google Places API'yi kullanarak kafeleri getir
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const targetUrl = encodeURIComponent(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=12000&type=cafe&keyword=${name}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );

  try {
    const response = await axios.get(proxyUrl + targetUrl);
    const data = JSON.parse(response.data.contents); // JSON.parse ile yanıtı ayrıştırıyoruz

    // Verileri filtrele
    if (data && data.results) {
      const filteredCafes = data.results.filter((place) =>
        place.name.toLowerCase().includes(lowerName)
      );
      return { ...data, results: filteredCafes }; // Filtrelenmiş veriyi döndür
    } else {
      console.error("Beklenen veri yapısı mevcut değil:", data);
      return { results: [] };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getCafes;
