import { useState } from 'react'
import './App.css'
import Home from './Home';
import Search from './components/Search';

function App() {

  const [weather, setWeather] = useState(null);

  const handleWeatherData = (data) => {
    setWeather(data);
  }

  return (
    <div className="main-container">
    <Search onSearch={handleWeatherData}/>
    <Home weather={weather}/>
    </div>
  )
}

export default App

