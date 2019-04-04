import React from'react';




const Weather = props =>(
        <div className="weather__info" >
             {
                props.city && props.country ? 
                <p className="weather__key"> Location: <span className="weather__value"> {props.city}, {props.country}</span></p> : null
            }
            
            {
                props.temp ? 
                <p className="weather__key"> Temperature: <span className="weather__value"> {props.temp}°F</span> </p>: null 
                
            }
            
            {
                props.temp ? 
                <p className="weather__key"> Humidity: <span className="weather__value"> {props.humidity}%</span> </p>: null
                    
            }
            {
                props.temp ? 
                <p className="weather__key"> Description:  <span className="weather__value"> {props.description}</span></p>: null
            }
            {
                props.temp ? 
                null: <p className="weather__key"> Announcement: Narrowing search by state coming soon!</p>
            }
            {
                props.temp ? 
                <p className="weather__key"> <b>Scroll down for parks and data!</b></p> : null
            }
            {
                props.error ? 
                <p className="weather__key"> Error: <span className="weather__value">{props.error}</span>
                </p> : null
            }
                
        </div>
    );

export default Weather;