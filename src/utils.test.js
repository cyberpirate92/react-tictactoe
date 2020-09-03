import Utils from './utils';

const tests = [
    {
        lastX: 2,
        lastY: 0,
        board: [
            ['X', 'X', 'O'],
            ['', 'X', 'X'],
            ['O', 'O', 'O'],
        ],
        isDraw: false,
        expectedCells: [6, 7, 8],
        expectedWinner: 'O',
        description: 'Row Match',
    },
    {
        lastX: 2,
        lastY: 0,
        board: [
            ['X', 'O', 'O'],
            ['X', 'O', 'O'],
            ['X', '', 'X'],
        ],
        isDraw: false,
        expectedCells: [0, 3, 6],
        expectedWinner: 'X',
        description: 'Column Match',
    },
    {
        lastX: 2,
        lastY: 2,
        board: [
            ['X', 'X', 'O'],
            ['O', 'X', 'O'],
            ['O', '', 'X'],
        ],
        isDraw: false,
        expectedCells: [0, 4, 8],
        expectedWinner: 'X',
        description: 'Left Diagonal Match',
    },
    {
        lastX: 2,
        lastY: 0,
        board: [
            ['X', 'X', 'O'],
            ['', 'O', 'O'],
            ['O', 'X', 'X'],
        ],
        isDraw: false,
        expectedCells: [2, 4, 6],
        expectedWinner: 'O',
        description: 'Right Diagonal Match',
    },
    {
        lastX: 2,
        lastY: 2,
        board: [
            ['X', 'O', 'O'],
            ['O', 'X', 'X'],
            ['X', 'X', 'O'],
        ],
        isDraw: true,
        description: 'No Winner (Draw)',
    },
    {
        lastX: 2,
        lastY: 2,
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        isDraw: true,
        description: 'No Winner (Empty Board)',
    },
];

describe('Winner Detection', () => {
    tests.forEach(testData => {
        test(testData.description, () => {
            let result = Utils.hasWinner(testData.board, testData.lastX, testData.lastY);
            if (testData.isDraw) {
                expect(result).toBeFalsy();
            } else {
                expect(result).toBeTruthy();
                expect(result.winner).toBe(testData.expectedWinner);
                expect(result.cells).toEqual(testData.expectedCells);
            }
        });
    });
});