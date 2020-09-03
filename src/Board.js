import React from 'react';
import Square from './Square';
import Utils from './utils';
import './Board.css';

const FILL_TYPE = {
    EMPTY: '',
};

class Board extends React.Component {

    constructor(props) {
        super(props);

        let board = [...Array(this.props.N)].map(x => [...Array(this.props.N)].fill(FILL_TYPE.EMPTY));
        let playerName = 'X';
        let winner = '';
        
        this.clickHandler = this.clickHandler.bind(this);
        
        this.state = {
            board,
            playerName,
            winner,
            winningSequence: new Set()
        };
    }

    clickHandler(squareNumber) {
        // if game over, do nothing
        if (this.state.winner) {
            return;
        }

        let row = parseInt(squareNumber / this.props.N);
        let col = squareNumber % this.props.N;
        let board = JSON.parse(JSON.stringify(this.state.board));
        let playerName = this.state.playerName === 'X' ? 'O' : 'X';

        // Square already filled, do nothing
        if (board[row][col] !== FILL_TYPE.EMPTY) {
            return;
        }

        board[row][col] = this.state.playerName;

        let result = Utils.hasWinner(board, row, col) || {};
        
        if (result.winner) {
            console.log(`Winner is ${result.winner}`);
            console.log(`Winning sequence is ${result.cells}`);
            console.log('Game Over!');

            this.setState({
                winner: result.winner,
                winningSequence: new Set(result.cells), 
            });
        }

        this.setState({
            board,
            playerName,
        });
    }

    render() {
        let count = -1;
        let squares = [...Array(this.props.N)].map(_ => {
            return (
                <div className="Board-row" key={(count + 1) * this.props.N * 2}>
                    {[...Array(this.props.N)].map(_ => {
                        count += 1;
                        return (
                            <Square 
                                key={count.toString()} 
                                id={count} 
                                highlight={this.state.winningSequence.has(count)} 
                                label={this.state.board[parseInt(count/this.props.N)][parseInt(count%this.props.N)]} 
                                clickHandler={this.clickHandler} 
                            />
                        )}
                    )}
                </div>
            );
        });

        return (
            <div className="Board">
                {squares}
            </div>
        );
    }
}

export default Board;
