import React,{useCallback, useState} from 'react'
import SkillList from './SkillList'
const UseCallbackComp = () => {
  const [skills,setSkills]=useState([]);
  const [skill, setSkill] = useState('');

  const addSkill = () => {
    if(skill.trim() === '') return
     setSkills((prev) => [...prev, skill]); // immutable up
    console.log(skills)
    setSkill("");
  }

  const deleteSkill=useCallback((index)=>{
    let output=skills.filter((_,i)=>i!==index)
    console.log(output);
    setSkills(output);
  },[])


  return (
    <div>
        <form onSubmit={addSkill}>
          <h1 id="heading">Add Skill</h1>
          <input id="skill-input" type="text" onChange={(e) => setSkill(e.target.value)} />
          <button id="skill-add-btn" type="submit">Add Skill</button>
        </form>
      <SkillList skills={skills} deleteSkill={deleteSkill} />
      </div>
  )
}

export default UseCallbackComp
