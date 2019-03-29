import React from 'react';

const info = ({name, buttonHandler}) => {
    const buttonStyle = {
        width: '100px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box'
    }

    const textStyle = {
        margin: '20px 0'
    }


    return (
    <div>
        <div style={buttonStyle} onClick={buttonHandler}>Back</div>
        <div style={textStyle}>If you like <strong>{name}</strong></div>
        <div style={textStyle}>You might like: </div>
      </div>
    );
}

export default info;