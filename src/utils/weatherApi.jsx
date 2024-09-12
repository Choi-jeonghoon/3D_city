export const getCurrentWeather = async (lat, lon, Key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    console.error(`Error Api`, error);
    return null;
  }
};
