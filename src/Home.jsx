import {useState, useEffect} from 'react';

const Home = ({weather}) => {

  const[defaultData, setDefaultData] = useState(null);

  useEffect(() => {
      let dfCity= 'kalaburagi';
      const defaultCity = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dfCity}&appid=750ba6d938ae909bda9801b19e5fba4e`)
      const data = await res.json();
      setDefaultData(data);
  }
    defaultCity();
  },[])

  const data = weather ? weather : defaultData;

  if(!data){
    return <h2>Loading...</h2>;        //this line helps to load fully, if not the data will be null the app wont run. 
  }

    return(
    <div className="temp-container">
      <h1 className="title">{data.name}</h1>

      <div className="temp-val">
        <h1>{Math.round(data.main.temp-273.15)}<span>°</span></h1>
      </div>

      <div className="low-high-temp">
        <h2><span><i className="fa-solid fa-temperature-high"></i></span>{Math.round(data.main.temp_max - 273.15)}</h2>
        <h2><span><i className="fa-solid fa-temperature-low"></i></span>{Math.round(data.main.temp_min - 273.15)}</h2>
      </div>

      <div className="desc">
        <h3>{data.weather[0].description}</h3>
      </div>
    </div>
    );
}

export default Home;