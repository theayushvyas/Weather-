import React, { Component }  from 'react';
import './Form.css';
import Weather from './Weather';
import axios from 'axios';


const ApiKey = process.env.REACT_APP_APIKEY;
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          Weather: {},
          problem: false
        }
        this.clickHandler = this.clickHandler.bind(this);
      }

      handleEvent = (event) => {
        event.preventDefault();
        let InputData = event.target.value;
        this.setState({InputData: InputData})
      }

      clickHandler(e) {
        e.preventDefault();
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.state.InputData+'&units=metric&appid='+ApiKey)
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
                        country:response.data.sys.country,
                        temp_max: response.data.main.temp_max,
                        temp_min:response.data.main.temp_min
                        }
                        this.setState(()=>({Weather:data, problem: false}));
                }
                ).catch( err => {
                    this.setState({problem: true})
                }); 
      }

    render() {
        let showWeather;
        if(this.state.problem) {
            showWeather = <p id='error'>Something went wrong.</p>
        }else {
            if(this.state.Weather.currentTemp !== undefined) {
                showWeather  = <Weather passedData = {this.state.Weather} error = {this.state.problem} />
            }else{
                showWeather = null;
            }
        }
        return(
            <div className='form_container_div'>
                <form>
                    <input onChange={ event => this.handleEvent(event)} type='text' name='city' placeholder='Enter city name.....' />
                    <button onClick={this.clickHandler}>Get Weather</button>
                </form>
                {showWeather}
                
            </div>
        );
    };
};

export default Form;