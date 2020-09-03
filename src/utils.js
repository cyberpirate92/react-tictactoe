class Utils {
    /**
     * Check if game has a winner
     * 
     * @param {String[][]} board The tic tac toe grid 
     * @param {Number} row Last move row index
     * @param {Number} col Last move col index
     * 
     * @returns {Object}
     */
    static hasWinner(board, row, col) {
        if (board[row][0] && board[row].every(x => x === board[row][0])) {
            return { 
                winner: board[row][0], 
                cells: this.getCells('row', board.length, row),
            };
        }

        if (board[0][col] && board.every(v => v[col] === board[0][col])) {
            return {
                winner: board[0][col],
                cells: this.getCells('column', board.length, col),
            };
        }
        
        let left = board[0][0];
        let right = board[0][board.length-1];

        if (left && right) {
            let leftDiagonal = [];
            let rightDiagonal = [];

            for (let i=0; i<board.length; i++) {
                leftDiagonal.push(board[i][i]);
                rightDiagonal.push(board[i][board.length-i-1]);
            }

            if (leftDiagonal.every(val => val === left)) {
                return {
                    winner: left,
                    cells: this.getCells('leftDiagonal', board.length),
                };
            }

            if (rightDiagonal.every(val => val === right)) {
                return {
                    winner: right,
                    cells: this.getCells('rightDiagonal', board.length),
                };
            }
        }

        return null;
    }

    /**
     * Get cell numbers represented by the given sequence type
     * 
     * @param {String} sequenceType Any one of (`row` | `column` | `leftDiagonal` | `rightDiagonal`)
     * @param {Number} boardSize size of the tic-tac-toe board
     * @param {Number} rowOrCol Only required when `sequenceType` is `row` or `column`
     * 
     * @returns {Number[]}
     */
    static getCells(sequenceType, boardSize, rowOrCol) {
        let cells = [...Array(boardSize)];
        let count = 0;

        switch(sequenceType) {
            case 'row': 
                cells = cells.map(_ => (boardSize * rowOrCol) + count++);
                break;
            case 'column':
                cells = cells.map(_ => (boardSize * count++) + rowOrCol);
                break;
            case 'leftDiagonal':
                cells = cells.map(_ => (boardSize * count) + count++);
                break;
            case 'rightDiagonal': 
                cells = cells.map(_ => (boardSize * count) + (boardSize - count++ - 1));
                break;
            default:
                console.warn('Unknown sequenceType ignored');
        }

        return cells;
    }
}

export default Utils;