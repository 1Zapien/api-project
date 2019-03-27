import React from'react';




const Weather = props =>(
        <div className="weather__info" >
            <p className="weather__key"> Location:
             {
                props.city && props.country ? 
                 <span className="weather__value"> {props.city}, {props.country}</span> : null
            }</p>
            
            <p className="weather__key"> Temperature:
            {
                props.temp ? 
                <span className="weather__value"> {props.temp}°F</span> : null 
                
            }</p>
            
            <p className="weather__key"> Humidity:
            {
                props.temp ? <span className="weather__value"> {props.humidity}%</span> : null
                    
            }</p>

            <p className="weather__key"> Description: 
            {
                props.temp ? 
                 <span className="weather__value"> {props.description}</span>: null
            }</p>
            {
                props.temp ? 
                <p className="weather__key"> <b>Scroll down for park and data!</b></p> : null
            }
            {
                props.error ? 
                <p className="weather__key"> Error: <span className="weather__value">{props.error}</span>
                </p> : null
            }
                
        </div>
    );

export default Weather;