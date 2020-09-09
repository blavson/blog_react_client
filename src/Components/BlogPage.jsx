import React, { Component } from 'react'
import axios from 'axios'
import './BlogPage.css'
import M from  'materialize-css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import authAction from '../actions/authAction'

class BlogPage extends Component {
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

  async componentDidMount() {

    let lgn= JSON.parse(localStorage.getItem('login'))
    if (lgn === null) {
      this.props.userAuth(false, 0)
      this.props.history.push('/user/login')
      return
    } 
    
    const resp =  await  axios.post('http://localhost:8000/user/secure/verify', {token : lgn.token})
    .then(response => {
      if (response.status === 200) 
        this.props.userAuth(true, lgn._id)
      else  
       this.props.history.push('/user/login') 
    }).catch(error => console.error(error));
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

  handleOnblurTitleEvent = (event) => {
    if (event.target.value.length > 0) {
      this.setState({
        title : event.target.value
      }) 
    } 
   }
  


  handleOnblurBodyEvent = (event) => {
    if (event.target.value.length > 0) {
    this.setState({
      body : event.target.value
    }) 
  } 
 }

  handleTextOnblurEvent = (event) => {
    console.log(event.target.value)
  }

  addBlog = (event) => {
    event.preventDefault();

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

  render() {
    return (
      <form onSubmit={this.addBlog } >
      <div className="container">
      <div className = "row">  
         <div className="input-field col s6 offset-s3">
          <label htmlFor="blog_title">Blog Title</label>
          <input  id="blog_title" type="text" className="validate" onBlur={this.handleOnblurTitleEvent } onChange= {this.handleInputText} />
         {this.state.error ?  <span className="helper-text" data-error={this.state.error} ></span> : '' }
         </div>
        <div className="input-field col s6 offset-s3">  
          <textarea  id="blog_body" className="materialize-textarea"  onBlur={this.handleOnblurBodyEvent}  onChange={this.handleTextArea}  />  
          <label htmlFor="comments">Blog</label>  
        </div>
        <div className="input-field col s6 offset-s3">
          <label htmlFor="blog_tags">Tags</label>
          <input  id="blog_tags" type="text" className="validate" onChange= {this.handleInputTags}/>
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
 }
 function mapStateToProps(state)  {
  console.log(state);
  return ({
    userstat : state.auth
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userAuth : authAction
  }, dispatch)
}

  export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)