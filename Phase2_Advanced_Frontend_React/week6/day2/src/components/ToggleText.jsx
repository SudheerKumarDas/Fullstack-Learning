import React from 'react'
import { useState } from 'react';

function ToggleText() {
    const [toggle, setToggle]=useState(false);

    function togglefunction(){
        setToggle(!toggle);
    }

  return (
    <div>
        <button onClick={togglefunction}>Toggle Text</button>
        {toggle==true? "Hello Text": ""}
    </div>
  )
}

export default ToggleText