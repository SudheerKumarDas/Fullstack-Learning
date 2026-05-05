import React, { useState } from 'react'

function ConditionalRender() {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
       <button onClick={()=>setIsVisible(!isVisible)}>
         Toggle Visibility
       </button>
       {isVisible && <p>This is conditionally rendered paragraph.</p>}
    </div>
  )
}

export default ConditionalRender
