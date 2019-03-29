import React from 'react';

const search = (props) => {

      const inputStyle = {
        width: '100%',
        border: '2px solid #334',
        padding: '10px',
        boxSizing: 'border-box',
        marginBottom: '30px',
        fontSize: '1.3em',
      };

    return (
      <div>
        <input style={inputStyle} type="text" onChange={props.onChangeHandler} placeholder="Search for Artist"/>
      </div>
    );
}

export default search;
