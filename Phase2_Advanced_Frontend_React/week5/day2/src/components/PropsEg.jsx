import React from 'react'

function PropsEg(props) {
  return (
    <div>
        <h2>Name : {props.name}</h2>
        <p>Age : {props.age}</p>
    </div>
  )
}

export default PropsEg