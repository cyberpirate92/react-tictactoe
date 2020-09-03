import React from 'react';
import Board from './Board';
import './App.css';

const DEFAULT_SIZE = 4;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='App-title'>
                    <h2>Tic Tac Toe</h2>
                </div>
                <Board N={this.props.size || DEFAULT_SIZE} />
            </div>
        );
    }
}
    
export default App;
    