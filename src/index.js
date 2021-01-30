/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();*/


import React, { Component } from 'react';
import { render } from 'react-dom';
import Matrix from './Matrix';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Matrix name={'foo'} />
        <br />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

