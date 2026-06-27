import React from 'react'

const Hoc = (component) => {
  return ()=>{
    return (
        <div className='border-4 border-black'>
            <component/>
        </div>
    )
  }
}

export default Hoc