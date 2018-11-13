import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

    render() {
        return(
            <div className='Weathercontainer'>
                <h2>{this.props.passedData.cityName}, {this.props.passedData.country}</h2>
                <div className='MainInfo'>
                    <h1>{this.props.passedData.currentTemp}<span>&deg;C</span><span id='condition'> {this.props.passedData.cloudiness}</span></h1>
                    <p><span>Minimum Temperature :</span> {this.props.passedData.temp_min}&deg;C</p>
                    <p><span>Maximum Temperatur :</span> {this.props.passedData.temp_max}&deg;C</p>
                </div>
                <p><span>Sunrise :</span> {this.props.passedData.sunrise} AM</p>
                <p><span>Sunset :</span> {this.props.passedData.sunset} PM</p>
                <p><span>Humiduty :</span> {this.props.passedData.humidity}%</p>
                <p><span>Pressure :</span>  {this.props.passedData.pressure} hpa</p>
                <p><span>Wind :</span> {this.props.passedData.wind} m/s</p>
                
            </div>
        );
    };
};

export default Weather;