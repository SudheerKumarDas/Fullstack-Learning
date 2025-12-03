import React from 'react'
import { useState } from 'react'

function ThemeSwitcher() {
    const [theme, setTheme] = useState('Light');

  return (
    <div>
        <h2>Theme : {theme}</h2>
        <button onClick={()=> setTheme("Light")}>Light</button>
        <button onClick={()=> setTheme("Dark")}>Dark</button>

        <div 
            style={{
                height: "300px",
                marginTop: "20px",
                padding: "10px",
                backgroundColor: theme === "Light" ? "#eee" : "#333",
                color: theme === "Light" ? "#000" : "#fff"
            }}
        >
            Theme Preview Box</div>
    </div>
  )
}

export default ThemeSwitcher