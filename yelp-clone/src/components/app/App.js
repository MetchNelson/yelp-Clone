import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>voracious!</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;
