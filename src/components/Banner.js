import React from 'react';
//import BannerButton from "./BannerButton.js"

function Banner(props) {
    return (
        <div className="speech-bubble">
            <p className="speech-bubble-text">{props.introText}
                <span>{props.highlight}</span>{props.endText}
            </p>
            <button className="start-btn" >
                {props.buttonText}  
            </button>
        </div>
    )
};
export default Banner;