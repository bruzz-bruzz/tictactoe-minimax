def status(board, player, bot):
    winning_combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6]              # diagonals
    ]
    for combo in winning_combos:
        if board[combo[0]] == board[combo[1]] == board[combo[2]]:
            if board[combo[0]] == player:
                return 'Player'
            if board[combo[0]] == bot:
                return 'Bot'
    return 'None'
