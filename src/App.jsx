import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setdata] = useState({
    name: "Mumbai",
    temp: 29.99,
    weather: "Haze",
    humidity: 74,
    country: "IN"
  });
  const [weather, setweather] = useState('');

  // API Request
  function eventhandler() {
    if (weather !== '') {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=47fd11a805473a403a69f164a42d14fe&units=metric`;
      axios.get(API)
        .then(function (res) {
          setdata({
            name: res.data.name,
            temp: res.data.main.temp,
            weather: res.data.weather[0].main,
            humidity: res.data.main.humidity,
            country: res.data.sys.country
          });
        });
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        padding: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
          Weather App
        </h1>
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setweather(e.target.value)}
          style={{
            width: "calc(100% - 20px)",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={eventhandler}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Search
        </button>
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "20px", color: "#555" }}>
            {data.name}, {data.country}
          </h2>
          <p style={{ fontSize: "18px", color: "#777" }}>{data.weather}</p>
          <p style={{ fontSize: "32px", color: "#007BFF", fontWeight: "bold" }}>
            {data.temp}°C
          </p>
          <p style={{ fontSize: "16px", color: "#777" }}>
            Humidity: {data.humidity}%
          </p>
        </div>
        <a
          href="https://github.com/ishivendratripathi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
