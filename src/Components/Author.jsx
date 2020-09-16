import React, { Component } from 'react'
import axios from 'axios'

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
      let mposts = this.state.posts.map( (p, i) => <li key={i}>{p.title}</li>)
   // }
    return (
      <div className="container">
        <ul>
          {mposts}
        </ul>
      </div>
    )
  }
}
