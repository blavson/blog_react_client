import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs';

export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      title : '',
      body  : '',
      error : ''
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

  handleFocusTextArea = () => {

  }

  handleOnblurEvent = (event) => {
      const id = event.target.id.split('_');
    const er = id[1] + " is empty"
    this.setState({
      error : er
    })
    console.log(this.state.error)
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
          <input  id="blog_title" type="text" className="validate" onBlur={this.handleOnblurEvent } onChange= {this.handleInputText}/>
         {this.state.error ?  <span className="helper-text" data-error={this.state.error} ></span> : <span></span> }
         </div>
        <div className="input-field col s6 offset-s3">  
          <textarea  id="blog_body" className="materialize-textarea"  onBlur={this.handleOnblurEvent}  onChange={this.handleTextArea} />  
          <label htmlFor="comments">Blog</label>  
         
        </div>
       <div className = "col s4 offset-s5">  
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>
      </div>
   </div> 

   </div>
   </form>
    )
  }
  
//   addBlog = (event)=> {
//     event.preventDefault();

//     if (!this.state.body) {
//       this.setState ({
//         error : 'Body field cannot be empty'
//       })
//     }

//     const sendInfo = {
//       title : this.state.title,
//       body : this.state.body
//     }
//     console.log(sendInfo);
//     if (!this.state.error) {
//       axios.post('http://127.0.0.1:8000/blog',sendInfo)
//     .then(data => {
//       console.log(data);
//     }).catch((error )=> {
//       console.error(error)
//     }) }
//     else {
//       console.log(this.state.error)
//     }

// }

  addBlog = (event) => {
    event.preventDefault();

   const sendInfo = {
      title : this.state.title,
      body : this.state.body
     }

const options = {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  data: qs.stringify(sendInfo),
  url : 'http://localhost:8000/blog',
};
      axios(options)
    .then(data => {
      console.log(data);
    }).catch((error )=> {
      console.error(error)
    }) 
  }
}