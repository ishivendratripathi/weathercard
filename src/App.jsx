import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setdata] = useState({
    name: "mumbai",
    temp: 29.99,
    weather: "haze",
    humidity: 74,
    country: "IN"
  })
  const [weather, setweather] = useState('');

  function eventhandler() {
    if (weather !== '') {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=47fd11a805473a403a69f164a42d14fe&units=metric`;
      axios.get(API)
        .then(function (res) {
          setdata({
            ...data,
            name: res.data.name,
            temp: res.data.main.temp,
            weather: res.data.weather[0].main,
            humidity: res.data.main.humidity,
            country: res.data.sys.country
          })
        })
    }
  }
  return (
    <>
      <div id="box">
        <input type="text" id="textid" placeholder='enter state' onChange={e => setweather(e.target.value)} />
        <button id="buttonid" onClick={eventhandler}>Search</button>
        <br></br>
        <br></br>
        <h1>weather in {data.name}</h1>
        <h2>{data.temp}</h2>
        <h3>{data.weather}</h3>
        <h4>{data.humidity}</h4>
        <h4>{data.country}</h4>
        <a href="https://github.com/ishivendratripathi" target='_blank'><button>github</button></a>
      </div>
    </>
  )
}
export default App
