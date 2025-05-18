import React, { useEffect, useState } from 'react'

const Call = ({ city , apiKey}) => {
const [weatherObject , setWeatherObject] = useState("");

   useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      fetch(url)
      .then(res => res.json())
      .then(data => {setWeatherObject(data)});

   },[apiKey,city]);

  return (
    <div>
      {weatherObject && (
        <>
          <h2>Weather in {weatherObject.name}</h2>
          <p>Temperature: {weatherObject.main.temp} °C</p>
          <p>Temperature: {weatherObject.main.humidity} °C</p>
          <p>Weather: {weatherObject.weather[0].description}</p>
        </>
      )}
    </div>
  )
}

export default Call