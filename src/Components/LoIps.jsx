import React, { Component } from 'react'
import axios from 'axios'
import slugify from 'stack-utils'

export default class LoIps extends Component {

   generateLoremIpsum = (_id, count) => {
    const ans =  axios.post('http://localhost:8000/blog/loremipsum')
  }


  render() {
    return (
      <div>
        <button onClick={() => this.generateLoremIpsum(1, 50)}> Generate </button>
      </div>
    )
  }
}
