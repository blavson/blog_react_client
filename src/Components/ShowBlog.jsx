import React, { Component } from 'react'
import axios from 'axios'

export default class ShowBlog extends Component {
  constructor() {
    super()
    this.state={article : {}}
  }

  async componentDidMount() {
    let slug = this.props.location.pathname.replace(/\/blog\//, '')
    const result = await axios.get(`http://localhost:8000/blog/${slug}`)
    const data = result.data
    this.setState({ article : data })
  }

  render() {
    const { article } = this.state.article
    
    
    return (
      <div className="container">
        <div className="blog-title">{ this.state.article.title}</div>
        <div className="blog-body"><p>{ this.state.article.body} </p></div>
      </div>
    )
  }
}
