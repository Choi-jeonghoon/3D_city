export const getCurrentWeather = async (lat, lon, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    console.error(`Error Api`, error);
    return null;
  }
};

export const getCityWeather = async (city, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return {
      city: city,
      weatherData: data,
    };
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    return null;
  }
};
