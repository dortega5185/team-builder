import React from 'react';


const DummyData = props => {
    return (
        <div>
            {props.something.map((member, index) => {
                return (
                    <div key={index}>
                        <p>{member.firstName}</p>
                        <p>{member.lastName}</p>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DummyData;