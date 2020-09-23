import React from 'react'

export default function MySorting(props) {

  return (
    <div className="row">
    <div className="input-field col s3 offset-s9">
      <select className="articles-sort right" onChange={props.sortChange}>
        <option value="date_desc" >By Date (latest to oldest)</option>
        <option value="date_asc">By Date(oldest to latest)</option>
        <option value="title_asc">By Title(A-Z)</option>
        <option value="title_desc">By Title(Z-A)</option>
      </select>
    </div>
 </div>
  )
}
