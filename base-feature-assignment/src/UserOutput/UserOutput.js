import React from 'react'

const UserOutput = (props) => {

    const outputStyle= {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
    }

    return (
        <div style={outputStyle}>
            <p>Hello there {props.username}</p>
            <p>Welcome to my new react app</p>
        </div>
    )
}

export default UserOutput;