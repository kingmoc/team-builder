import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import MemberForm from './components/MemberForm'
import Team from './components/Team'

function App() {

  const [team, setTeam] = useState([])

  useEffect(() => {
    setTeam([
      {
        name: "Joseph Garcia",
        email: "joe.c.a.garcia@gmail.com",
        role: "DevOps"
      }
  ])
  },[])

  return (
    <div className="App">
      <MemberForm />
      <Team team={team}/> 
    </div>
  );
}

export default App;
