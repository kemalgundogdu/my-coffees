import axios from "axios";

// cors hatası için geçici proxy çözümü
const proxyUrl = "https://api.allorigins.win/get?url=";
const targetUrl = encodeURIComponent(
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.0847699,29.0492408&radius=3000&type=cafe&keyword=Espressolab&key=" +
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY
);

export const getCafes = async () => {
  try {
    const response = await axios.get(proxyUrl + targetUrl);
    const data = JSON.parse(response.data.contents); // JSON.parse ile yanıtı ayrıştırıyoruz
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
