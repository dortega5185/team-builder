import React, { useState } from "react";

const Form = props => {
    // console.log('props', props)
    const [member, setMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    })
    const handleChange = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
      event.preventDefault();
      props.addNewMember(member)
      console.log(member.name);
      console.log(member.flastname);
      console.log(member.flastname);
      console.log(member.email);
      console.log(member.role);
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fnameInput">First Name: </label>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            maxLength="15"
            placeholder="First Name"
            id="firstName"
            value={member.firstName}
          />
          <label htmlFor="flastNameInput">Last Name: </label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            maxLength="15"
            placeholder="Last Name"
            id="lastName"
            value={member.lastName}
          /><br/>
          <label htmlFor="emailInput">Email: </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email@bob.com"
            id="email"
            value={member.email}
          />
          <label htmlFor="rolePositions">Role: </label>
            <select id='role' name='role' onChange={handleChange}>
              <option value="BackEnd Engineer">BackEnd Engineer</option>
              <option value="FrontEnd Engineer">FrontEnd Engineer</option>
              <option value="Designer">Designer</option>
            </select>
          <br />
          <button>Submit!</button>
        </form>
      </div>
    );
}

export default Form;