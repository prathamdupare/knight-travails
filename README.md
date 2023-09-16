# Knight's Shortest Path Finder

This JavaScript script calculates the shortest path for a knight on a chessboard from a given starting position to an ending position using the breadth-first search (BFS) algorithm. It finds a series of valid knight moves that take the knight from the start to the end position.

## Features

- Determines the shortest path for a knight on an 8x8 chessboard.
- Ensures that all moves are valid and do not go off the board.
- Provides detailed output of the shortest path, including the number of moves required.

## Usage

To use this script, you can follow these steps:

1. Clone or download the repository to your local machine.

2. Open the `knight_moves.js` file in your favorite code editor or integrate it into your JavaScript project.

3. Use the `knightMoves(start, end)` function to find the shortest path between two positions on the chessboard. The `start` and `end` parameters should be arrays representing the [x, y] coordinates of the starting and ending positions.

4. The script will return the shortest path as an array of positions and also print the path and the number of moves to the console.

5. Customize and extend the script as needed for your specific application.

## Example

Here's an example of how to use the script:

```javascript
const start = [0, 0];
const end = [3, 3];

const shortestPath = knightMoves(start, end);

if (shortestPath) {
  console.log(`Shortest Path: ${shortestPath}`);
} else {
  console.log("No valid path found.");
}
```
