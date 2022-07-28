// import { useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/WeatherService';

function App() {

  const fetchWeather = async() => {
    const data = await getWeatherData('weather', {q: 'London'});
    console.log(data);
  };

  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700">
        <TopButtons/>
        <Inputs />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="Hourly Forecast"/>
        <Forecast title="Daily Forecast"/>

    </div>
  );
}

export default App;
