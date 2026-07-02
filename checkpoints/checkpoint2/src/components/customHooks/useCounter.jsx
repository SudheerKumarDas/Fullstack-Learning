import React from 'react'

import { useState } from 'react'

export const useCounter = () => {
    const [count,setCount]=useState(0);

    const increaseCount=()=>{
        setCount(count=>count+1);
    }
  return {
    count:count,
    increaseCount:increaseCount
  }
}
