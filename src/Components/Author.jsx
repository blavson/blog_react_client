import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Author extends Component {

  constructor() {
    super();
    this.state = {posts : []}
  }
  async componentDidMount() {
      const user_id = this.props.match.params.id
      const result = await axios.get(`http://localhost:8000/author/show/${user_id}`)
      const posts = result.data
      console.log(posts)
      this.setState(posts)
  }




  render() {
    console.log(this.state.posts)
    // if (this.state.posts) {
      let mposts = this.state.posts.map( (p, i) => 
      <div className="row" key={i}>
          <div className="col s12 m12">
              <div className="card">


              <div className="row" >
                 <div className="col s4 m4">
                    <div className="card-image">
                      <img src={p.thumbnail} />
                    </div> 
                  </div>
               <div className="col s8 m8">
                  <span className="card-title">{p.title}</span>
                </div>
              </div>

                <div className="card-content">
                  <p>{p.body.substr(0, 200)}</p>
                </div>
                <div className="card-action">
                  <Link to={`/blog/${p.slug}`}>Full Story</Link>
                </div>
              </div>
           </div>
       </div>
      )
   // }
    return (
      <div className="container">
        <div className="row">
          <div className="col s10 m10">
            {mposts}
          </div>
          <div className="col s2 m2">
            <div className="author-name">
              <h2> Author </h2>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
