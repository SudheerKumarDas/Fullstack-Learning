import React from 'react'

function ChildToParent({sendMessage}) {
  return (
    <div>
        <button onClick={()=> sendMessage("Hello App!")}>Send Message</button>
    </div>
  )
}

export default ChildToParent