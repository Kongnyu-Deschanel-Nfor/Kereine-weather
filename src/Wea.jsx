import React, { useState } from 'react'
const api={
    key:"893d6806e040a1f82549d7f7bf21043c",
    base:"http://api.openweathermap.org/data/2.5/",
  
  };
function Wea() {
    const[search, setSearch]= useState("");
    const[weather, setWeather]= useState({});
  const searchPressed=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
      .then((result) => {
        setWeather(result); 
      });
  }
  return (
    <div className="App"
  
    >
    <header className="App-header">
      <h1>Weather App</h1>
  </header>
  <div>
  
  <input type="text"
  placeholder="Enter city/town..."
  onChange={(e)=> setSearch(e.target.value)} />
  <button onClick={searchPressed}>search</button>

  </div>

<p>{weather.name}</p>
<p>{weather?.main?.temp}°c</p>

  <div>
      {weather.weather && weather.weather.length > 0 && (
        <>
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </>
      )}
  </div>
</div>
  )
}

export default Wea