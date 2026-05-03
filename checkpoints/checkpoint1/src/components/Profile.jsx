import React from 'react'

function Profile(props) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <ul>
        Skills : 
        {props.skills.map((skill,index)=>{
          return  <li key={index}>{skill}</li>
      })}
      </ul>
      <p>I am a {props.profession}</p>
    </div>
  )
}

export default Profile
