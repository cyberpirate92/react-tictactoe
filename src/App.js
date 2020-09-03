import React from 'react';
import Board from './Board';
import './App.css';

const DEFAULT_SIZE = 4;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='App-title'>
                    <h1>Tic Tac Toe</h1>
                </div>
                <div className="App-button-panel">
                    <button className='App-reset-btn' onClick={() => window.location.reload()}>Reset</button>
                </div>
                <Board N={this.props.size || DEFAULT_SIZE} />
            </div>
        );
    }
}
    
export default App;
