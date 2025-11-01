import React from 'react'

const SkillList = ({skills}) => {
    console.log("Skills",skills);
  return (
    <div>
      <h1>Skill List</h1>
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>
           <p id={`skill-number-${index}`}>{skill}</p>
          <button onClick={() => deleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillList
