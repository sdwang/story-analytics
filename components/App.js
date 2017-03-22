import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div>
          We are using Node.js {process.versions.node}
          Chromium {process.versions.chrome}
          and Electron {process.versions.electron}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
