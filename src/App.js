import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';
import Footer from './components/Footer';
import axios from 'axios';

const ApiWeatherKey = process.env.REACT_APP_WEATHER_API_KEY ;
const ApiYelpKey = process.env.REACT_APP_YELP_API_KEY;


class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    park: undefined,
    error: undefined
  }

  getYata = (place) => {

      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${place}`, {
        headers: {
          Authorization: `Bearer ${ApiYelpKey}`
      },
        params: {
        categories: 'active',
        title: "Parks",
        alias: "parks",
        term: "park"
      }
      })
      .then((res) => {
        console.log(res);
        let values  = [];

        for(let i= 0; i< 4; i++ ){
          values.push(res.data.businesses[i].name);
          values.push(<br></br>);

        }

        this.setState({
          temp: this.state.temp,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          description: this.state.humidity,
          park: values,
          error: this.state.error
        });
      })
      .catch((err) => {
      console.log ('error')
      return 'error';
      })
    }


  

  getData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    


    const ApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${ApiWeatherKey}`);
    const data = await ApiCall.json();
    console.log(data);

    
    if(city && country && data.cod !== '404'){

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        park: undefined,
        error: ""
      });
    }else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        park: undefined,
        error: data.message
      });

    }
    this.getYata(city);
  }



  render() {


    
    
  
    return (
    <div>
      <div className="row">
          <div className="col-6 col-md title-left">
            <h5>Left</h5>
            <Titles/>
          </div>
          <div className="col-6 col-md form-right">
            <h5>Right</h5>
                <Forms getData={this.getData}/>
                <Weather 
                  temp={this.state.temp}
                  city ={this.state.city}
                  country = {this.state.country}
                  humidity = {this.state.humidity}
                  description = {this.state.description}
                  park = {this.state.park}
                  error = {this.state.error}     
                  />

            
          </div>
          <Footer/>
      </div>
    </div>
    );
  }
}



export default App;
