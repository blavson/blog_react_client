import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import ShowBlog from './ShowBlog'
import Article from './Article'

export default class Home extends Component {
 state = {posts : [{}]}
    async componentDidMount() {
    const prms =  await axios.get('http://localhost:8000/')
    const respcards = prms.data
    this.setState({ posts : respcards})
    console.log(this.state)
    }
    
    
    render() {
      let rcards = this.state.posts
      console.log(rcards)
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
        <div className="row">
         {psts}
         </div>
    </div>
    )}
}
