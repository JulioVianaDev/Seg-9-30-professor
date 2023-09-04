import React from 'react'
import { FormatarData } from '../../fn-helpers/FormatDate'
import "./Note.css"
function Note(props) {
  return (
    <div className="note-card">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{FormatarData(props.date)}</h3>

    </div>
  )
}

export default Note