import React from 'react';
import ReactDOM from 'react-dom'
const ipcRenderer = window.require('electron').ipcRenderer

//Require for webpack to use as a module
require('../styles/styles.css');

class App extends React.Component {
  uploadFile(event) {
    console.log('file: ', event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <label className="clickable">
          <div>Upload your story</div>
          <input
            className="remove"
            onChange={this.uploadFile}
            type="file" />
        </label>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
