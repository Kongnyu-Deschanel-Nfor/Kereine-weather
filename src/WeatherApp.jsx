
import {useEffect, useState} from "react";
import './wea.css'
//import icon from "./assets/icon.jpg";
import React from 'react';
const api={
  key:"893d6806e040a1f82549d7f7bf21043c",
  base:"http://api.openweathermap.org/data/2.5/",

};
function WeatherApp() {
  const[search, setSearch]= useState("Buea");
  const[weather, setWeather]= useState({});
  useEffect(()=>{
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res)=>res.json())
        .then((result) => {
          setWeather(result); 
        });
    
  },[])

  const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  .then((res)=>res.json())
    .then((result) => {
      setWeather(result); 
    });
  }
  return (
    <div className="App">
          <header className="App-header">
            <h1>Weather App</h1>
        </header>
        <div className="bar">
        
        <input
        style={{ 
          padding:'10px'
         }}
         type="text"
        placeholder="Enter city/town..."
        onChange={(e)=> setSearch(e.target.value)} />
        <button 
        style={{ 
          padding:'10px'
         }}
        onClick={searchPressed}>search</button>
         <button
 style={{ 
    background:'red',
    textAlign:'center',
    padding:'5px',
    marginLeft:'205px'
  }}
 >Log Out</button>
        </div>

      <p
      style={{ 
        fontSize:'80px'
       }}
      >{weather.name}</p>
      <img 
      style={{ 
        height:'24vh'
       }}
      src="cloudy.png"/>
      <p
      style={{ 
        fontSize:'60px'
       }}
      >{weather?.main?.temp}°c</p>

        <div
        style={{ 
        fontSize:'30px'
       }}
        >
            {weather.weather && weather.weather.length > 0 && (
              <>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
              </>
            )}
        </div>
</div>
  );
}


export default WeatherApp;
