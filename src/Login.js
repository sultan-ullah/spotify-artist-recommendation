import React from 'react';

const login = (props) => {
    var clientId = '14b4201cd7a14ba09d298bb2b48cc09a'; // Your client id
    var redirectUri = 'http://localhost:3000/'; // Your redirect uri
    var scope = '';
    var state = '123';  
      
    let url = 'https://accounts.spotify.com/authorize' + 
    '?client_id=' + clientId +
    '&redirect_uri=' + encodeURIComponent(redirectUri) +
    '&scope=' + encodeURIComponent(scope) +
    '&response_type=token' +
    '&states=' + encodeURIComponent(state);

    const containerStyle = {
        padding: '30px'
      };
      const titleStyle = {
        marginBottom: '20px'
      }
      const buttonStyle = {
        width: '200px',
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box'
      }

      const linkStyle = {
          textDecoration: 'none'
      }

    if (!window.location.hash) {
        return (
            <div style={containerStyle}>
                <h3 style={titleStyle}>DiscoverArtists</h3>
                <a style={linkStyle} href={url}><div style={buttonStyle}>Login To Spotify</div></a>
            </div>
            );
    } else {
        return (
        <div style={containerStyle}>
            <h3 style={titleStyle}>DiscoverArtists</h3>
            {props.children}
        </div>);
    }    
}

export default login;