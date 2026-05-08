import { useEffect } from "react"
import { useState } from "react";

export default function UseEffectHook(){
    const [count, setCount]=useState(0);
    console.log("component rendered");
    useEffect(()=>{
        console.log("useEffect hook ran");
    })
    useEffect(()=>{
        console.log("this useEffect ran only once when mounted first");
    },[]);
    useEffect(()=>{
        console.log("this useEffect ran when its dependency array i.e. count changes !!");
    },[count]);
    return (
        <>
            <h1>Hello useEffect</h1>
            <button onClick={()=>setCount(count+1)}>Counter increase button {count}</button>
        </>
    )
}