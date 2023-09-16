function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const queue = [];
  queue.push({ position: start, path: [start] });

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift();

    if (position[0] === end[0] && position[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path`);
      for (const square of path) {
        console.log(square);
      }
      return path;
    }

    for (const move of moves) {
      const newX = position[0] + move[0];
      const newY = position[1] + move[1];
      const newPosition = [newX, newY];

      if (isValidMove(newPosition) && !visited.has(newPosition.toString())) {
        visited.add(newPosition.toString());

        queue.push({ position: newPosition, path: [...path, newPosition] });
      }
    }
  }
  return null;
}

function isValidMove(position) {
  const [x, y] = position;
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Test cases
console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([3, 3], [4, 3]));
