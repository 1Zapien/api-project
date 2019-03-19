import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY ;

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }




  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const ApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${ApiKey}`);
    const data = await ApiCall.json();
    console.log(data);

    if(city && country && data.cod !== '404'){

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message
      });

    }
  }



  render() {
    
  
    return (
      <div className="App">
        <Titles/>
        <Forms getWeather={this.getWeather}/>
        <Weather 
          temp={this.state.temp}
          city ={this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}      
        />
        <h1> Race-day</h1>
        <p>Weather</p> 
      </div>
    );
  }
}

export default App;
