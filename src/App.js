import React, {useState} from "react";
import Form from './Form';
import './App.css';
import DummyData from "./DummyData";

function App() {

  const [memberList, setMemberList] = useState([
    {
      // firstName: "David",
      // lastName: "Ortega",
      // email: "omg@gmail.com",
      // role: "Web Developer"
    },
    {
      // firstName: "Austin",
      // lastName: "Devito",
      // email: "awesome@gmail.com",
      // role: "Web Designer"
    }
  ]);

  const addNewMember= (event) => {
    setMemberList([...memberList, event]);
  }

  return (
    <div className="App">
      <h1>Sign Up for the Team</h1>
      <Form addNewMember={addNewMember}/>
      <DummyData something ={memberList}/>
    </div>
  );
}

export default App;
