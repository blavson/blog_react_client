import React, { Component } from 'react'
import axios from 'axios'
import './BlogPage.css'
import M from  'materialize-css'

export default class BlogPage extends Component {
  errorList =''
  constructor() {
    super();
    this.state = {
      title : '',
      body  : '',
      tags : '',
      errors : []
    }
  }


  handleInputText= (event) => {
    this.setState({
      title : event.target.value
    })
  }

  handleTextArea = (event) => {
    this.setState({
      body : event.target.value
    })
  }

  handleInputTags  = (event) => {
    this.setState({
      tags : event.target.value
    })
  }


  handleFocusTextArea = () => {

  }

  handleOnblurEvent = (event) => {
      const id = event.target.id.split('_');
      const er = this.state.errors
    er.push( id[1] + " is empty")
    this.setState({
      errors : er
    })
    console.log(this.state.errors)
  }

  handleTextOnblurEvent = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.addBlog } >
      <div className="container">
      <div className = "row">  
         <div className="input-field col s6 offset-s3">
          <label htmlFor="blog_title">Blog Title</label>
          <input  id="blog_title" type="text" className="validate" onBlur={this.handleOnblurEvent } onChange= {this.handleInputText} required/>
         {this.state.error ?  <span className="helper-text" data-error={this.state.error} ></span> : '' }
         </div>
        <div className="input-field col s6 offset-s3">  
          <textarea  id="blog_body" className="materialize-textarea"  onBlur={this.handleOnblurEvent}  onChange={this.handleTextArea} required />  
          <label htmlFor="comments">Blog</label>  
        </div>
        <div className="input-field col s6 offset-s3">
          <label htmlFor="blog_tags">Tags</label>
          <input  id="blog_tags" type="text" className="validate" onBlur={this.handleOnblurEvent } onChange= {this.handleInputTags}/>
         {this.state.error ?  <span className="helper-text" data-error={this.state.error} ></span> :'' }
         </div>
         <ul className="error-list">
           {this.errorList}
        </ul>
       <div className = "col s4 offset-s5">  
        <button className="btn waves-effect waves-light" type="submit" name="action" >Submit
        <i className="material-icons right">send</i>
      </button>
      </div>
   </div> 

   </div>
   </form>
    )
  }
  


  addBlog = (event) => {
    event.preventDefault();

    if (this.state.title.length == 0) {
      const s = this.state.errors
      s.push("Title is empty")
      this.setState ({
        errors : s
      })
    }


    if (this.state.body.length == 0) {
      const s = this.state.errors
      s.push("Body is empty")
      this.setState ({
        errors : s
      })
    }

    if (this.state.errors.length > 0) {
      this.errorList = this.state.errors.map((e, i) => {
        return ( <li key={i} className="error-list-item">{e}</li>)
       })
     } 
    else {
      const sendInfo = {
          title : this.state.title,
          body : this.state.body,
          tags : this.state.tags
     }

        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: sendInfo,
          url : 'http://localhost:8000/blog',
        };
              axios(options)
            .then(data => {
              console.log(data)
              if (data.status === 201) 
              M.toast({html: "Blog successfully saved", classes :'toast-success'});
            }).catch((error )=> {
              console.log(error)
              M.toast({html: "Something Wrong With the title", classes :'toast-error'})
            }) 
          }
        }
 }