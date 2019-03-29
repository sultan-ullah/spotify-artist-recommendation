import React, { Component } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Login';
import Artist from './Artist';
import Search from './Search';
import Info from './Info';


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
    let pathArray = window.location.hash.split('&');
    let clientInfo  = {};
    pathArray.forEach((item, index) => {
      let split = item.split('=');
      clientInfo[split[0].replace('#', '')] = split[1];
    });
    if (clientInfo.access_token !== undefined) {
      this.state = {
        ...this.state,
        loggedIn: true
      }; 
      this.spotify.setAccessToken(clientInfo.access_token);
    }
  }

  onChangeHandler(event) {
    if (event.target.value !== '') {
      this.spotify.searchArtists(event.target.value, {limit: 20}, (error, data) => {
        if (error) console.log(error)
        else {
          let artists = data.artists.items.map((item) => {
            return <Artist 
              key={item.id}
              name={item.name}
              image={(item.images[2]) ? item.images[2].url: 'https://via.placeholder.com/70'}
              onClickHandler={() => this.onClickHandler(item.id, item.name, event)}
            />
          });
          this.setState({
            ...this.state,
            artistList: artists
          });
        }
      });
    } else {
      this.setState({
        ...this.state,
        artistList: ''
      });
    }
  }

  backButtonHandler(event) {
    this.setState({
      ...this.state,
      selected: false,
      artistList: ''
    });
  }


  onClickHandler(id, name, event) {
    console.log(name);
    this.setState({
      ...this.state,
      selected: true,
      name: name,
      artistList: ''
    });

    this.spotify.getArtistRelatedArtists(id, (error, data) => {
      if (error) console.log(error);
      else {
        let relatedArtists = data.artists.map((item) => {
          return <Artist 
            key={item.id}
            name={item.name}
            image={(item.images[2]) ? item.images[2].url: 'https://via.placeholder.com/70'}
            onClickHandler={() => this.onClickHandler(item.id, item.name, event)}
          />
        });
        this.setState({
          ...this.state,
          artistList: relatedArtists
        });
      }
    });
  }


  render() {
    return (
      <Login>
        {!this.state.selected ? 
          <Search onChangeHandler={this.onChangeHandler}/>: 
          <Info name={this.state.name} buttonHandler={this.backButtonHandler}/>
        }
        {this.state.artistList}
      </Login>
    );
  }
}

export default App;
