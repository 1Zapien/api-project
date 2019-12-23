import React from'react';
import yelplogo from '../img/yelp.png'; // with import
import weatherlogo from '../img/weather.png'; // with import



/*footer says what tools app was made with*/
const Footer = () =>(

    <div className="footer">
            <ul>
                <li><p className="footer--text">Made With:</p></li>
                <li><a href="https://openweathermap.org/"> <img src={weatherlogo} alt="weather api logo" className="logo" height="30" width="30"></img></a></li>
                <li><a href="https://www.yelp.com"><img src={yelplogo} alt="yelp logo" className="logo" height="30" width="30"></img></a></li>
            </ul>
    </div>

);



export default Footer;