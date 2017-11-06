import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterContainer from './CharacterContainer'
import CharacterList from './CharacterList'
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
     <CharacterContainer />
    );
  }
}

export default App;
