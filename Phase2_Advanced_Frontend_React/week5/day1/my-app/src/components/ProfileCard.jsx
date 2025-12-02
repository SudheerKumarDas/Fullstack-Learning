import React from 'react'

function ProfileCard(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
        <p>{props.msg}</p>
    </div>
  )
}

export default ProfileCard