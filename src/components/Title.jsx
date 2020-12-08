import React from 'react';
import "./styles.css";
import line from "../assets/line.png"

function Title () {
    return (
        <div>
            
            <h3 className="title"><img className="line" src={line} alt="ornament"/>Post Managment</h3>
            <p className="subtitle">Select the social media on which you want to publish</p>
        </div>
        
    )
}

export default Title;