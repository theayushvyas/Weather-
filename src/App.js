import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from '../src/components/Form';
import Weather from '../src/components/Weather';
import axios from 'axios';


const ApiKey = process.env.REACT_APP_APIKEY;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cityWeather: null,
    }
  }

  componentDidMount() {
    axios.post('http://api.openweathermap.org/data/2.5/weather?q=gwalior&units=metric&appid='+ApiKey)
            .then( (weatherData) => {
                console.log(weatherData);
                const data={
                    cloudiness:weatherData.weather[0].description,
                    lat:weatherData.coord.lat,
                    lon:weatherData.coord.lon,
                    icon:weatherData.weather[0].icon,
                    sunrise:new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(),
                    sunset:new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
                    humidity:weatherData.main.humidity,
                    currentTemp:weatherData.main.temp,
                    pressure:weatherData.main.pressure,
                    wind:weatherData.wind.speed,
                    cityName:`${weatherData.name},${weatherData.sys.country}`,
                    // date:moment().format("DD MMM YYYY") 
                  }
                  this.setState(()=>({cityWeather:data}));
            }
            ).catch( err => {console.log(err)}) 
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="container">
            <div className="title_container">
              <p>{this.state.ApiData}</p>
              <Titles />
            </div>
            <div className="form_container">
              <Form />
              <Weather />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
