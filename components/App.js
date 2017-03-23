import React from 'react';
import ReactDOM from 'react-dom'
const ipcRenderer = window.require('electron').ipcRenderer

//Require for webpack to use as a module
require('../styles/styles.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
