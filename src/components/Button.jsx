import React from 'react';
import "./styles.css";

function Button (props) {
    return(
        <button type="button" class="btn btn-primary">{props.btnName}</button>
    )
}

export default Button;