from Win import status
from collections import defaultdict
def minimax(board,player,bot):
    res = defaultdict(list)
    def recur(board,player,bot,start,turn,c):
        if board.count('-') > 0:
            stat = status(board,player,bot)
            if stat == 'Player':
                res[c].append(start)
            elif stat == 'None':
                tmp = board[:]
                for x in range(len(tmp)):
                    if tmp[x] == '-':
                        arr = [j for j in tmp]
                        if turn:
                            arr[x] = bot
                        else:
                            arr[x] = player
                        recur(arr,player,bot,x,not turn,c + 1)
    for x in range(len(board)):
        if board[x] == '-':
            recur(board,player,bot,x,True,0)
    m = min(res.keys()) if res.keys() else None
    if not m:
        return [None]
    print(res[m])
    return res[m]