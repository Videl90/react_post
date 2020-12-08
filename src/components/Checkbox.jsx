import React from 'react';
import "./styles.css";

function Checkbox (props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
            <label className="form-check-label" for="invalidCheck">
                <div>
                    {props.image} Publish on {props.socialmedia}
                </div>
            </label>
        </div>
    )
}

export default Checkbox;