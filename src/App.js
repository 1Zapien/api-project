import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';
import Wind from './components/Wind';
import Footer from './components/Footer';
import axios from 'axios';
import yelplogo from './img/yelp.png'; // with import
require('dotenv').config()

//const ApiWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
//const ApiYelpKey = process.env.REACT_APP_YELP_API_KEY;

//console.log("this is ApiWeatherKey " + ApiWeatherKey );


class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    park: undefined,
    adress: undefined,
    cities: undefined,
    zip: undefined,
    wind: undefined,
    link: undefined,
    error: undefined,
    check: false
  }

  getYata = (place) => {

      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${place}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
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
        let images = [];
        let address = [];
        let cities = [];
        let zip = [];
        let links = [];

        for(let i= 0; i< 4; i++ ){
          values.push(res.data.businesses[i].name);
          images.push(res.data.businesses[i].image_url);
          address.push(res.data.businesses[i].location.address1);
          cities.push(res.data.businesses[i].location.city);
          zip.push(res.data.businesses[i].location.zip_code);
          links.push(res.data.businesses[i].url);
        }

        this.setState({
          temp: this.state.temp,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          description: this.state.description,
          park: values,
          adress: address,
          cities: cities,
          zip: zip,
          wind: this.state.wind,
          link: links,
          img:images,
          error: this.state.error,
          check: true
        });
      })
      .catch((err) => {
      console.log ('error')
      return 'error';
      })
    }


  

  getData = async (e) => {
    e.preventDefault();


    const city = (e.target.elements.city.value).toLowerCase().split(' ').join('+');
    const country = e.target.elements.country.value;
    


    const ApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const data = await ApiCall.json();
    console.log(data);

    
    if(city && country && data.cod !== '404'){

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        park: 'Loading',
        adress: 'Loading',
        cities: 'Loading',
        zip: 'Loading',
        wind: data.wind.speed,
        link: 'Loading',
        img:'Loading',
        error: "",
        check: false
      });
    }else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        park: undefined,
        adress: undefined,
        cities: undefined,
        zip: undefined,
        wind: undefined,
        link: undefined,
        img:'Loading',
        error: data.message,
        check: false
      });

    }
    this.getYata(city);
  }


  render() {    

    const sites = [];
    if(this.state.check){
      for(let i = 0; i <this.state.park.length; i++){
        sites.push(
              
              <div className="row parks">
                <div className="col-6 col-md park-left">
                  <img src={this.state.img[i]} alt="Img" className={"cardImg"}/>
                </div>
                <div className="col-6 col-md park-right">
                  <p className="park--title">{this.state.park[i]}</p>
                  <p className="park-data">Address: {this.state.adress[i]}</p>
                  <p className="park-data">City: {this.state.cities[i]}</p>
                  <p className="park-data">Zip code: {this.state.zip[i]}</p>
                  <a href={this.state.link[i]} className="park-logo"  rel="noopener noreferrer" target="_blank"  >Link to yelp page: <img src={yelplogo} alt="gyelp logo" height="50" width="50" ></img> </a>
                </div>
             </div>
             )

      }
    }
    let windcal = (wind) => {
        let cal;
        if(this.state.wind){
          cal = Math.round((this.state.wind/10) * 12);
      }
      return cal;
    }



    return (
    <div>
          <div className="title-left">
            <Titles/>  
          </div>
          <div className="form-right">
          <Forms getData={this.getData}/>
                <Weather 
                  temp={this.state.temp}
                  city ={this.state.city}
                  country = {this.state.country}
                  humidity = {this.state.humidity}
                  description = {this.state.description}
                  error = {this.state.error}     
                  />       
          </div>
          <div className="row parks">
                <Wind
                  wind = {this.state.wind}
                  effect = {windcal(this.state.wind)} 
                  />
          </div>  
      {sites}
      <Footer/>
    </div>
    );
  }
}



export default App;
