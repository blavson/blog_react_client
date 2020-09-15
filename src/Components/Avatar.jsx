import React from 'react';
import './Avatar.css'
import { Link } from 'react-router-dom';



const Avatar = (props) => {
  return (
    <div className="author">
    <div className="author-image">
      <img src="http://lorempixel.com/120/120/" />
      <span className="author-name"><Link to={`author/show/${props.user_id}`}> {props.author}</Link></span>
    </div>
    <div className="author-descr">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
  );
}

export default Avatar;
