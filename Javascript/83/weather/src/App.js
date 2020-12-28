import './App.css';
import React, { Component } from 'react';
import WeatherData from './WeatherData';

class App extends Component {
  state = {

  }
  
  getWeather = e => {
    let zip = e.target.value;
    const key = 'cb7c71219cf09eb0bb414b932669be97';
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${key}&zip=${zip}&units=imperial`)
      .then(r => {
        if (!r.ok) {
          throw new Error('error!!');
        }
        return r.json();
      })
      .then(weatherData => {
        console.log(weatherData);
        this.setState({
          weather: {
            name: weatherData.name,
            imgsrc:`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
            temp: weatherData.main.temp,
            descr: weatherData.weather[0].description
          }
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const weather = this.state.weather ?
      <WeatherData weather={this.state.weather}>
      </WeatherData>: <div></div>
    return (
      <>
      <div>
        <input type="number" placeholder="Enter Zip" onBlur={this.getWeather}></input>
      </div>
      {weather}
      </>
    );
  }
}

export default App;




