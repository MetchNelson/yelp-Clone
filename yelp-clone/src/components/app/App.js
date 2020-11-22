import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
//import ReactDOM from 'react-dom';

/*
ReactDOM.render(
  <div className="App">
    <h1>Voracious!</h1>
    <SearchBar />
    <BusinessList />
  </div>,
document.getElementById('app')
)
*/


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Voracious!</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

//ReactDOM.render(<App />, document.getElementById('main'));
export default App;
