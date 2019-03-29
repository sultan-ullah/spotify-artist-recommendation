import React, { Component } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";


class App extends Component {
  state = {};
  spotify = new SpotifyWebApi();
  
  constructor() {
    super();
    this.setClientTokens()
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.backButtonHandler = this.backButtonHandler.bind(this)
    this.state = {
      selected: false
    }

  }

  setClientTokens() {
    let pathArray = window.location.pathname.split('&');
    let clientInfo  = {};

    pathArray.forEach((item, index) => {
      let split = item.split('=');
      clientInfo[split[0].replace('/', '')] = split[1];
    });
    this.spotify.setAccessToken(clientInfo.access_token);
  }

  onChangeHandler(event) {
    if (event.target.value === '') {
      this.setState({
        ...this.state,
        artistsList: ''
      });
      return;
    }
    let queryTerm = event.target.value;
    let artists = [];
    this.spotify.searchArtists(queryTerm, {limit: 20}, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        let artists = [];
        const containerStyle = {
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '10px'
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

        artists = data.artists.items.map((item) => {
          return(
            <div key={item.id} style={containerStyle} onClick={() => {this.onClickHandler(item.id, event)}}>
              <img src={(item.images[2]) ? item.images[2].url: 'https://via.placeholder.com/70'} style={imageStyle}/>
              <div style={nameStyle}>{item.name}</div>
            </div>
          );
        });
        this.setState({
          artistsList: artists
        });
      }
    });
    // console.log(artists)
  }

  backButtonHandler(event) {
    this.setState({
      ...this.state,
      selected: false
    });
  }


  onClickHandler(id, event) {
    console.log(id);
    this.spotify.getArtist(id, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({
          ...this.state,
          name: data.name,
        })
      }
    });
  

    this.spotify.getArtistRelatedArtists(id, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        const containerStyle = {
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '10px',
          margin: '0 auto'
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

        let relatedArtists = data.artists.map((item, index) => {
          return (
            <div key={item.id} style={containerStyle} onClick={() => {this.onClickHandler(item.id, event)}}>
              <img src={(item.images[2]) ? item.images[2].url: 'https://via.placeholder.com/70'} style={imageStyle}/>
              <div style={nameStyle}>{item.name}</div>
            </div>);
        })
        // console.log(relatedArtists)
        this.setState({
          ...this.state,
          relatedArtists: relatedArtists
        })
      }
    });

    this.setState({
      ...this.state,
      selected: true,
      artistsList: ''
    })
  }


  render() {
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


    if (!this.state.selected) {
        return (
          <div style={containerStyle}>
            <h3 style={titleStyle}>DiscoverArtists</h3>
            <input style={inputStyle} type="text" onChange={this.onChangeHandler} placeholder="Search for Artist"/>
            {this.state.artistsList}
          </div>
        );
      } else {
        console.log(this.state.relatedArtists)
        return (
          <div style={containerStyle}>
            <h3 style={titleStyle}>DiscoverArtists</h3>
            <div 
              style={buttonStyle}
              onClick={this.backButtonHandler} 
              >Back</div>
            <h3>If you like <strong>{this.state.name}</strong></h3>
            <br />
            <h3>You might also like...</h3>
            <br />
            {this.state.relatedArtists}
          </div>);
      }      

    }
}

export default App;
