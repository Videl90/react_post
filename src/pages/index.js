import React from 'react';
import Title from '../components/Title';
import Checkbox from '../components/Checkbox';
import Post from '../components/Post';
import Button from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const fbIcon = <FontAwesomeIcon icon={faFacebook} color="#75c6a5" />
const igIcon = <FontAwesomeIcon icon={faInstagram} color="#75c6a5"/>
const twIcon = <FontAwesomeIcon icon={faTwitter} color="#75c6a5" />

const style={
    color:"red"
}

function PostDiscount (){
    return(
        <div className="container">
            <div className="row">
                <Title></Title>
            </div>
            <div className="row">
                <div className="col-sm">
                    <Checkbox 
                        image={fbIcon} 
                        socialmedia="Facebook"
                    />
                    <Checkbox 
                        image={igIcon} 
                        socialmedia="Instagram"
                    />
                    <Checkbox 
                        image={twIcon} 
                        socialmedia="Twitter"
                    />
                </div>
                <div className="col-sm">
                    <Post></Post>
                </div>
            </div>
            <div className="row btns">
                <div className="col-sm">
                    <Button
                        style={{color:"red"}}
                        btnName="Close"
                    />
                </div>
                <div className="col-sm publishBtn">
                    <Button
                        btnName="Preview post before publishing"
                        style={style}
                    />
                </div>
            </div>
        </div>
    )
   
}

export default PostDiscount;