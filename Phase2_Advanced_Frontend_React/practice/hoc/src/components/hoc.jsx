import React from 'react'

const hoc = (Component) => {
  return ()=>{
    return (
        <div className='border-4 border-black'>
            <Component/>
        </div>
    )
  }
}

export default hoc