from Win import status
def minimax(board,player,bot):
    res = []
    def recur(board,player,bot,start):
        stat = status(board,player,bot)
        if stat == 'Bot':
            res.append(start)
        elif stat == 'Player':
            pass
        else:
            tmp = board[:]
            for x in range(len(tmp)):
                if tmp[x] == '-':
                    arr = tmp[:]
                    arr[x] = bot
                    recur(arr,player,bot,start)
    for x in range(len(board)):
        if board[x] == '-':
            recur(board,player,bot,x)
    print(res)