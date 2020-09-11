import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
 state = {posts : [{}]}
    async componentDidMount() {
    const prms =  await axios.get('http://localhost:8000/')
    const respcards = prms.data
    this.setState({ posts : respcards})
    console.log(this.state)
    }
    
    
    async goToLink(slug) {
      const resp = await axios.get(`http://localhost:8000/blog/${slug}`)
      const data = resp.data
      console.log(data)
    }

    render() {
      let rcards = this.state.posts
      console.log(rcards)
      let psts 
      if (rcards)
       psts = rcards.map((o, idx) => {
        return  (<div key={idx}  className="col s12 m12">
            <div className="card horizontal">
         <div className="card-image" >
           <img  src={o.thumbnail}/>
         </div>
         <div className="card-stacked">
           <div className="card-title">
           {o.title}
           </div> 
           <div className="card-content">
             <p>Lorem ipsum, dolr sit amet consectetur adipisicing elit. Est, et?</p>
           </div>
           <div className="card-action">
             <Link to="#" onClick={()=>this.goToLink(`${o.slug}`)} >View Full Post</Link>
           </div>
         </div>
       </div>
  </div>)})
    return (
      <div className="container">
        <div className="row">
         {psts}
         </div>
    </div>
    )}
}
