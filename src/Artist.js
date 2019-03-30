import React from "react";
import spotifyIcon from "./spotify-icon.png";
const artist = ({name, image, link, onClickHandler}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '10px',
    cursor: 'pointer'
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

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div style={mainContainerStyle}>
      <div style={containerStyle} onClick={onClickHandler}> 
      <img src={image} style={imageStyle}/>
      <div style={nameStyle}>{name}</div>
      </div>
      <a href={link}><div><img src={spotifyIcon} style={{width: '30px', height: '30px'}}/></div></a>
    </div>
  );
}

export default artist;
