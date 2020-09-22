import React, { Component } from 'react'
import paginationAction from '../actions/paginationAction'
 import axios from 'axios'

 class MyPagination extends Component {
  
  state ={
      current_page : 1
  }

  componentDidMount() {
    this.props.getData(1, 5) 
  }


  changePage =(event) => {
    this.setState({
      current_page : parseInt(event.target.text)
    })
    this.props.getData(parseInt(event.target.text),5) 
    console.log(this.state.current_page, event.target.text)
  }

  customizeRenderOutput() {
    const num_of_pages = this.props.count / this.props.limit
    let lee = [];
    for (let i = 1; i <= num_of_pages; i++) {
      if (i === this.props.current_page) 
          lee.push(<li className="active" key={i}><a href="#">{i}</a></li>)
         else 
          lee.push(<li className="waves-effect" onClick={this.changePage} key={i}><a href="#">{i}</a></li>)
      }
      return  lee.map(e =>e)
  }

  render() {

    return (
    <div className="row">
      <ul className="pagination center">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        {this.customizeRenderOutput()}
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    </div>        
    )
  }
}



export default MyPagination