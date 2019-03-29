import React from 'react';

const search = (props) => {

      const inputStyle = {
        width: '100%',
        border: '2px solid #334',
        padding: '10px',
        boxSizing: 'border-box',
        marginBottom: '30px'
      };

    
    //   const buttonStyle = {
    //     width: '100px',
    //     height: '25px',
    //     border: '2px solid black',
    //     backgroundColor: 'black',
    //     color: 'white',
    //     fontSize: '1.2em',
    //     textAlign: 'center',
    //     padding: '5px',
    //     marginBottom: '10px'
    //   }

    return (
       <div> 
        <input style={inputStyle} type="text" onChange={props.onChangeHandler} placeholder="Search for Artist"/> </div>
    );
}

export default search;

// html


// styles
const containerStyle = {
    padding: '30px'
  };
  const inputStyle = {
    width: '100%',
    border: '2px solid #334',
    padding: '10px',
    boxSizing: 'border-box',
    marginBottom: '30px'
  };
  const titleStyle = {
    marginBottom: '20px'
  }

  const buttonStyle = {
    width: '100px',
    height: '25px',
    border: '2px solid black',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1.2em',
    textAlign: 'center',
    padding: '5px',
    marginBottom: '10px'
  }