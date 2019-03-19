import React from'react';



const Weather = props =>(
        <div className="Weather" >
            {props.city && props.country ? <p> Location: {props.city}, {props.country}</p>: null}
            {props.temp ? <p> Temperature: {props.temp}°F</p> : null }
            {props.temp ? <p> Humidity: {props.humidity}%</p> : null}
            {props.temp ? <p> Description: {props.description}</p> : null}
            {props.error ? <p> Error: {props.error}</p> : null}
        </div>
    );

export default Weather;