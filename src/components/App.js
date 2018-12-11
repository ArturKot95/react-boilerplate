import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello, {this.props.user}</h1>
      </div>
    );
  }
}

export default App;
