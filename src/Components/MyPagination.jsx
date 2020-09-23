import React, { Component } from 'react'
import paginationAction from '../actions/paginationAction'
 import axios from 'axios'

 class MyPagination extends Component {
  constructor(props) {
    super(props)

    this.state ={
      current_page : 1,
    }
    const {limit = 5, total = 30 } = props
    this.total_pages = Math.ceil(this.props.total / this.props.limit)
  }

  componentDidMount() {
    this.props.getData('date_desc',1, 5) 
    const num_of_pages = Math.ceil(this.props.count / this.props.limit)
    this.setState({
          ...this.state,
          num_of_pages : num_of_pages
    })
  }

  range = (f, t) => {
    const r = [];
     for(let i = f; i < t; i++)
      r.push(i)
    return r
  }

  changePage =(event) => {
    this.setState({
      ...this.state,
      current_page : parseInt(event.target.text)
    })
   this.props.getData(parseInt(event.target.text),5) 
  }

  customizeRenderOutput() {
    let lee = [];
    console.log("Current page", this.state.current_page)
    const rng = this.range(1,10)
    const rngmap = rng.map(page => {
       return ( (page === this.state.current_page) ? 
      <li className="active" key={page}><a href="#">{page}</a></li> :
      <li className="waves-effect" onClick={this.changePage} key={page}><a href="#">{page}</a></li>)
    })
    // for (let i = 1; i <= this.num_of_pages; i++) {
    //   if (i === this.state.current_page) 
    //       lee.push(<li className="active" key={i}><a href="#">{i}</a></li>)
    //      else 
    //       lee.push(<li className="waves-effect" onClick={()=> this.props.getData(this.props.order, this.state.current_page, this.props.limit)}  key={i}><a href="#">{i}</a></li>)
    //   }
    //   return  lee.map(e =>e)
    return rngmap
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