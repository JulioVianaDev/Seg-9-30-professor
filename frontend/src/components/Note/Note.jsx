import React from 'react'
import { FormatarData } from '../../fn-helpers/FormatDate'

function Note(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{FormatarData(props.date)}</h3>

    </div>
  )
}

export default Note