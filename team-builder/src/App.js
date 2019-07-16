import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import MemberForm from './components/MemberForm'
import Team from './components/Team'
import { textAlign } from '@material-ui/system';

function App() {

  const [team, setTeam] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})

  useEffect(() => {
    setTeam([{
      id: 1,
      name: "Joseph Garcia",
      email: "bishopg85@gmail.com",
      role: "Exective"
    }])
  },[])

  const addMember = member => {
    console.log(member)

    setTeam([...team, {...member, id:team.length+1}])
  }

  const editMember = member => {
    console.log('Edit Works')
    setMemberToEdit(member)    
  }

  const removeMember = id => {
    console.log(id)
    let newTeam = team.filter(mem => mem.id !== id)
    setTeam(newTeam)
  }

  return (
    <div className="App">
    {console.log(team)}
      <MemberForm addMember={addMember} memberToEdit={memberToEdit}/>
      <h1 style={{textAlign: 'center'}}> Team Member</h1> 
      <Team team={team} editMember={editMember} removeMember={removeMember}/> 
    </div>
  );
}

export default App;
