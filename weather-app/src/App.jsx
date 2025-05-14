import React, { useState, useRef } from "react";
import Getdata from "./Components/Getdata";
import './App.css';


const App = () => {
  const inputRef = useRef("");
  const [city, setCity] = useState("");
  const api_key = "12bb4504758e9f24f16bef147ccc620a";

  const handleSearch = () => {
    const userInput = inputRef.current.value.trim();
    if (userInput) {
      setCity(userInput);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="search-box">
          <input type="text" placeholder="Enter your city" className="input-box" ref={inputRef} id="input-box" />
          <button className="fa-solid fa-magnifying-glass" id="search-btn" onClick={handleSearch}></button>
        </div>
      </div>
      {city && <Getdata userId={city} apiKey={api_key} />}
    </div>
  );
};

export default App;
