export function getStatus(board: string[], player: string, bot: string): string {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] !== '-' && board[a] === board[b] && board[a] === board[c]) {
            if (board[a] === player) return 'Player';
            if (board[a] === bot) return 'Bot';
        }
    }
    return 'None';
}
function getScore(currentBoard: string[], depth: number, player: string, bot: string): number | null {
    const stat = getStatus(currentBoard, player, bot);
    if (stat === 'Bot') return 10 - depth;
    if (stat === 'Player') return depth - 10;
    if (!currentBoard.includes('-')) return 0;
    return null;
}
function recur(currentBoard: string[], depth: number, isMaximizing: boolean, player: string, bot: string): number {
    const score = getScore(currentBoard, depth, player, bot);
    if (score !== null) return score;

    if (isMaximizing) {
        let bestScore = -1000;
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '-') {
                currentBoard[i] = bot;
                bestScore = Math.max(bestScore, recur(currentBoard, depth + 1, false, player, bot));
                currentBoard[i] = '-';
            }
        }
        return bestScore;
    } else {
        let bestScore = 1000;
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '-') {
                currentBoard[i] = player;
                bestScore = Math.min(bestScore, recur(currentBoard, depth + 1, true, player, bot));
                currentBoard[i] = '-';
            }
        }
        return bestScore;
    }
}
export default function minimax(board: string[], player: string, bot: string): number[] {
    let bestMove: number | null = null;
    let bestScore = -1000;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '-') {
            board[i] = bot;
            const score = recur(board, 0, false, player, bot);
            board[i] = '-';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    if (bestMove === null) {
        return board.map((val, idx) => val === '-' ? idx : -1).filter(val => val !== -1);
    }
    return [bestMove];
}
