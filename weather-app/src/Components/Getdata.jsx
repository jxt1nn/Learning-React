import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import cloud from '../assets/cloud.png';
import clear from '../assets/clear.png';
import rain from '../assets/rain.png';
import mist from '../assets/mist.png';
import snow from '../assets/snow.png';


const Getdata = ({ userId, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userId}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.cod === "404") {
          setNotFound(true);
          setWeatherData(null);
        } else {
          setNotFound(false);
          setWeatherData(data);
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setNotFound(true);
      });
  }, [userId, apiKey]);

  const getImage = (weatherMain) => {
  switch (weatherMain) {
    case 'Clouds': return cloud;
    case 'Clear': return clear;
    case 'Rain': return rain;
    case 'Mist': return mist;
    case 'Snow': return snow;
    default: return cloud;
  }
};

  return (
    <>
      {notFound ? (
        <div className="location-not-found">
          <h1>Sorry, Location not found!!!</h1>
          <img src="/assets/404.png"  alt="404 error" />
        </div>
      ) : weatherData ? (
        <div className="weather-body">
          <img src={getImage(weatherData.weather[0].main)} alt="Weather" className="weather-img" />
          <div className="weather-box">
            <p className="temp">{Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup></p>
            <p className="description">{weatherData.weather[0].description}</p>
          </div>
          <div className="weather-details">
            <div className="humidity">
              <i className="fa-solid fa-droplet"></i>
              <div className="text">
                <span id="humidity">{weatherData.main.humidity}%</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span id="wind-speed">{weatherData.wind.speed}Km/H</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: '20px', textAlign: 'center' }}>Loading weather data...</p>
      )}
    </>
  );
};

export default Getdata;
