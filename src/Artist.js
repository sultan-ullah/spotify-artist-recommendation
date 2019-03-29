import React from "react";

const artist = ({name, image, onClickHandler}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '10px',
  }

  const imageStyle = {
    width: '70px',
    height: '70px',
    marginRight: '20px',
  }

  const nameStyle = {
    fontSize: '1.2em',
    fontWeight: 'bolder'
  }
  return (
    <div style={containerStyle} onClick={onClickHandler}>
      <img src={image} style={imageStyle}/>
      <div style={nameStyle}>{name}</div>
    </div>
  );
}

export default artist;
