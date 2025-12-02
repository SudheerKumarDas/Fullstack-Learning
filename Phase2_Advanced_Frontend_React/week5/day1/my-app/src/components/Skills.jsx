import React from 'react'

function Skills() {

    const skills = ['JavaScript','Python','HTML','CSS','React'];
  return (
        <ul>
            {
                skills.map((skill,index)=>{
                return  <li key={index}>{skill}</li>
                })
            }
        </ul>
  )
}

export default Skills