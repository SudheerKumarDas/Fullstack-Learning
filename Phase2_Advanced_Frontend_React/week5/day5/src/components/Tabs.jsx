import React, { useEffect } from 'react'
import { useState } from 'react'

function Tabs() {
    const [currentTab,setCurrentTab]=useState("feed");

    useEffect(
        ()=>{
            console.log("sending backend request for "+currentTab);
        },[currentTab]
    )
  return (
    <div>
        <button onClick={()=>
            setCurrentTab("feed")
        } style={{color: currentTab == "feed" ? "red" : "black"}}>Feed</button>
        <button onClick={()=>
            setCurrentTab("notifications")
        } style={{color: currentTab == "notifications" ? "red" : "black"}}>Notifications</button>
        <button onClick={
            ()=> setCurrentTab("messages")
        } style={{color: currentTab == "messages" ? "red" : "black"}}>Messages</button>
        <button onClick={()=>
            setCurrentTab("jobs")
        } style={{color: currentTab == "jobs" ? "red" : "black"}}>Jobs</button>
    </div>
  )
}

export default Tabs