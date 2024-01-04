
// need users.
// a board.
// pieces.
// rules.

// 2 players, 8x8 board, both players get 12 pieces.

// model the board.
    // boolean variables to identify piece positions.
    let position = false;
    // variable to hold the board.
    let board = [[]]; // should 64 items be initiatied in array.

// model the pieces.
    let team1 = 'black';
    let team2 = 'white';

// model gameplay and write func for winning condition...
    board.push(Array(64).fill(0));
    console.log(board);
    let rows = 8;
    let columns = 8;

    for (let row=0; row < rows; row++){
        for (let column=0; column < columns; column++){
            console.log(`(${row}, ${column})`);
        }
    }
