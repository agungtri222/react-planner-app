import React, { useState, useEffect } from "react";
import "../styles/styles.css";

const WeatherWidget = () => {
  const [city, setCity] = useState(null); // Storing data from API
  const [search, setSearch] = useState("Indonesia"); // For searching in API

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setCity(data.main);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setCity(null);
      }
    };

    fetchWeatherData();
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className="input"
      />
      {!city ? (
        <p style={{ textAlign: "center" }}>No city found</p>
      ) : (
        <div className="seconddiv">
          <h2>{search}</h2>
          <h3>{city.temp} °C</h3>
          <p>
            Min {city.temp_min} °C | Max {city.temp_max} °C
          </p>
          <p>Pressure {city.pressure} hPa</p>
          <p>Humidity {city.humidity} %</p>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;
