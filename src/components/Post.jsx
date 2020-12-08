import React from 'react';
import "./styles.css"
import photo from "../assets/post-img.png"
import Button from "../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSmile } from "@fortawesome/free-solid-svg-icons"

const smileIcon = <FontAwesomeIcon icon={faSmile} color="#75c6a5" />

function Post() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Bakery Day</h5>
                <img className="card-img-top" src={photo} alt="bakery offer"/>
                <div className="form-group row">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Write your post"></textarea>
                    <Button
                        btnName="Edit Image"
                    />     
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm counter">
                        <p>{smileIcon} 0/250</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;