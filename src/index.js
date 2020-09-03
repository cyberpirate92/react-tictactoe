import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var boardSize = prompt('Enter board size (3-10)', 4);

if (!boardSize || isNaN(boardSize)) {
  boardSize = 4;
} else {
  // Make sure size is in the inclusive range (3, 10)
  boardSize = Math.min(Math.max(Math.abs(boardSize), 3), 10);
}

ReactDOM.render(
  <React.StrictMode>
    <App size={boardSize} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
