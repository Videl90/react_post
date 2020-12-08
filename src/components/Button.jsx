import React from 'react';
import "./styles.css";

function Button (props) {
    return(
        <button type="input" class="btn btn-primary" style={props.style}>{props.btnName}</button>
    )
}

export default Button;