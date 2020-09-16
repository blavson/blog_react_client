import React, { Component } from 'react'
import './AboutMe.css'

export default class Author extends Component {
  render() {
    return (
      <div className="container">
        <div className="author-container">
        <div className="row">
          <div className="left-side col s2 m2">
            left side
          </div>
          <div className="right-side-top col s10 m10">
            right side
        </div>
       <div className="row">
       <div class="input-field col s6">
          <input  id="nick_name" type="text" class="validate" />
          <label for="nick_name">Nickname</label>
        </div>
         </div> 
        </div>
          </div>
      </div>
    )
  }
}
