import React from 'react'

function Child({sendMessage}) {
  return (
    <div>
        <button onClick={()=> sendMessage("Hello Parent")}>send Message</button>
    </div>
  )
}

export default Child