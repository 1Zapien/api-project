import React from'react';
import windicon from '../img/wind.png'; // with import



const Wind = props =>(
        <div className="wind__info" >
            <div className="wind__img" >
            {
                props.wind ? 
                <img src={windicon} alt="Img" className="windIcon" height="50" width="50"/> : null
            }
            </div>
            <div className="wind__data" >
            {
                props.wind ? 
                <p className="wind__key"> Wind speed:  <span className="wind__value">{props.wind}mph</span></p> : null
            }
            {
                props.wind? 
                <p className="wind__key"> Running against the wind will slow you down <span className="wind__value">{props.effect} seconds per mile</span></p>: null
            }
            {
                props.wind ? 
                <p className="wind__key"> Running with the Wind will speed you up <span className="wind__value">{props.effect/2} seconds per mile</span></p>: null
            }
            </div>
                
        </div>
    );

export default Wind;