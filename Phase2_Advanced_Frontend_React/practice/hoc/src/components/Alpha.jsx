import React from 'react'

const Alpha = (props) => {
  return (
    <div>
        <h1>Hello From Alpha to </h1>
        {props.user}
        <h2>This is second heading</h2>
        <p>This is a paragraph in alpha component.</p>
    </div>
  )
}

export default Alpha