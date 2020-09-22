import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import ShowBlog from './ShowBlog'
import Article from './Article'
import M from "materialize-css"
import MyPagination from './MyPagination'
import MySorting from './MySorting'

class Home extends Component {
  constructor() {
    super();
    this.getPostData = this.getPostData.bind(this);
    this.state = { 
      order :'date_desc',  
      page : 1, 
      limit : 5,
      posts : []         
        }
  }

    async getPostData  ( page, limit) {
      const prms =  await axios.get('http://localhost:8000/', 
                                 {params :  
                                  { order :'date_desc',  
                                    page : page , 
                                    limit : limit}})
      const respcards = prms.data.results
      const count = prms.data.count 
      // this.props.pagingFunction(4,5,6)
      this.setState({ 
                      posts : respcards,
                      count :count
      })

    }             

    async componentDidMount() {
    M.AutoInit()
    this.getPostData(this.state.order, this.state.page, this.state.limit)
    }
    

    sortChange =(event)=> {
      console.log(this.state)
      this.getPostData(this.state.order, this.state.page, this.state.limit)
    }
    
    render() {
      let rcards = this.state.posts
      let psts 
      if (rcards)
       psts = rcards.map((o, idx) => {
        return  (
        <div key={idx}  className="col s12 m12">
          <Article  title={o.title} 
                    slug={o.slug} 
                    thumbnail={o.thumbnail}  
                    name={o.name} 
                    user_id = {o.user_id}/> 
       </div>
      )
  })
    return (
      <div className="container">
        <MySorting sortChange={this.sortChange}/>
        <div className="row">
         {psts}
         </div>
        <MyPagination  
                  getData={this.getPostData} 
                  limit = {this.state.limit}
                  count = {this.state.count}
                  />
    </div>
    )}
}

export default Home