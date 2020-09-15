import React from 'react';
import {Link} from 'react-router-dom'
import Avatar from './Avatar'

const Article = (props) => {
  return (
    <div className="card horizontal">
      <div className="card-image" >
        <img  src={props.thumbnail}/>
      </div>
      <div className="card-stacked">
        <div className="row">
          <div className="col s8 m8">
            <div className="card-title">
              {props.title}
            </div> 
             <div className="card-content">
                <p>Lorem ipsum, dolr sit amet consectetur adipisicing elit. Est, et?</p>
             </div>  
          </div>
          <div className="col s4 m4">
            <Avatar author={props.name} user_id={props.user_id}/> 
          </div>
        </div>
      <div className="card-action">
         <Link to={`/blog/${props.slug}`} >View Full Post</Link>
       </div>
      </div>
  </div>   );
}

export default Article;