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
      Weather: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=gwalior&units=metric&appid='+ApiKey)
            .then( (response) => {
                console.log(response);
                const data={
                    cloudiness:response.data.weather[0].description,
                    sunrise:new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
                    sunset:new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
                    humidity:response.data.main.humidity,
                    currentTemp:response.data.main.temp,
                    pressure:response.data.main.pressure,
                    wind:response.data.wind.speed,
                    cityName:response.data.name,
                    // date:moment().format("DD MMM YYYY") 
                  }
                  console.log(response.data.weather[0].description);
                  this.setState(()=>({Weather:data}));
            }
            ).catch( err => {console.log(err)}) 
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="container">
            <div className="title_container">
              <Titles w = {this.state.Weather} />
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
