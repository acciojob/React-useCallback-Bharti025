import React,{useCallback, useState} from 'react'
import SkillList from './SkillList'
const UseCallbackComp = ({skills}) => {
  const [skill, setSkill] = useState('')

  const addSkill = () => {
    if(skill.trim() === '') return
    skills.push(skill)
    console.log(skills)
    setSkill('')
  }

  const deleteSkill=useCallback((index)=>{
    let output=skills.filter((_,i)=>i!==index)
    console.log(output)
  },[skills])

  return (
    <div>
        <h1 id="heading">Add Skill</h1>
      <input id="skill-input" type="text" onChange={(e) => setSkill(e.target.value)} />
      <button id="skill-add-button" onClick={addSkill}>Add Skill</button>

      <SkillList skills={skills} deleteSkill={deleteSkill} />
        </div>
  )
}

export default UseCallbackComp
