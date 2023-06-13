export default function isValidSudoku(board: string[][]): boolean {
  /* INITIAL NOTES
  // we now it's bounded to 9x9
  // meaning we only have 9 (3x3) sections with delimited boundaries (starting position)
  // I had the idea of checking columns + row, on each cell, but that's not necessary we can check rows and columns independently
  // ex. column 0, starts at position [0][0]
  //     column 1, starts at position [0][1]

  // what;'s going to be complicated is checking the 3x3 boundaries, since we need to jump into 3 different arrays

  // first idea, divide the validation into 3 methods, one for columns, one for rows, and one for 3x3 spaces.
  // check later if it can be refactores into a better solution or a single validation.
  */

  // O(r*c) where r is the number of rows and C the number of colums
  // in this example both are the same so we can infer a O(n2)
  // extra space of:
  //    O(n) -> array of 9 positions to store the column.
  //    O(n) -> array of 3x3 to store the squares.
  //    O(n) -> Hashmap or set used to validate that no numbers is repeated.

  let squares: string[][] = [];
  for (let row = 0; row < board.length; row++) {
    if (!isValid(board[row])) return false;
    const column: string[] = [];
    for (let col = 0; col < board[row].length; col++) {
      column.push(board[col][row]);
      const squareIndex = Math.floor(col / 3);
      if (!squares[squareIndex]) {
        squares[squareIndex] = [];
      }
      squares[squareIndex].push(board[col][row]);
    }
    if (!isValid(column)) return false;

    if (Math.floor(row % 3) === 2) {
      for (const square of squares) {
        if (!isValid(square)) return false;
      }
      squares = [];
    }
  }

  return true;
}

function isValid(values: string[]): boolean {
  const valid: Map<string, true> = new Map();
  for (const value of values) {
    if (parseInt(value) > 9) return false;
    if (valid.has(value)) return false;

    if (value !== '.') valid.set(value, true);
  }
  return true;
}
