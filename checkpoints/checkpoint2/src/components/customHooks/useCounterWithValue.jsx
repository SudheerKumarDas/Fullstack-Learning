import { useState } from 'react'
import React from 'react'

export const useCounterWithValue = (initialValue) => {
    const [count,setCount]=useState(initialValue);
    const increaseCount = () => {
        setCount(c=>c+1);
    }
    const decreaseCount = () => {
        setCount(c=>c-1)
    }
    const resetZero = () =>{
        setCount(0);
    }
  return {
    count:count,
    increaseCount:increaseCount,
    decreaseCount:decreaseCount,
    resetZero:resetZero
  }
}
