import React from 'react'

function Joke(props) {
  return (
    <div>
        <h3>{props.setup}</h3>
        <h3>{props.punchline}</h3>
        <hr />    
     </div>
  )
}

export default Joke