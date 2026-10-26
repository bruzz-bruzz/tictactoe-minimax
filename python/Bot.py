from Win import status

def minimax(board, player, bot):
    def get_score(current_board, depth):
        stat = status(current_board, player, bot)
        if stat == 'Bot':
            return 10 - depth
        elif stat == 'Player':
            return depth - 10
        elif '-' not in current_board:
            return 0
        return None

    def recur(current_board, depth, is_maximizing):
        score = get_score(current_board, depth)
        if score is not None:
            return score
        
        if is_maximizing:
            best_score = float('-inf')
            for i in range(len(current_board)):
                if current_board[i] == '-':
                    current_board[i] = bot
                    best_score = max(best_score, recur(current_board, depth + 1, False))
                    current_board[i] = '-'
            return best_score
        else:
            best_score = float('inf')
            for i in range(len(current_board)):
                if current_board[i] == '-':
                    current_board[i] = player
                    best_score = min(best_score, recur(current_board, depth + 1, True))
                    current_board[i] = '-'
            return best_score

    best_move = None
    best_score = float('-inf')
    
    for i in range(len(board)):
        if board[i] == '-':
            board[i] = bot
            score = recur(board, 0, False)
            board[i] = '-'
            if score > best_score:
                best_score = score
                best_move = i
    
    if best_move is None:
        return [i for i in range(len(board)) if board[i] == '-']
    return [best_move]

