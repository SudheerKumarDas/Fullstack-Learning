import { useEffect } from "react"

export default function UseEffectHook(){
    useEffect(()=>{
        console.log("this is rendered on every re-render");
    })
    return (
        <>
            <h1>Hello useEffect</h1>
        </>
    )
}