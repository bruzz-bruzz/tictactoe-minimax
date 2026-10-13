from Win import status
from Bot import minimax
import random
class TicTacToe:
    def __init__(self):
        self.board = ['-' for _ in range(9)]
    def printBoard(self):
        for x in range(3):
            arr = []
            for y in range(3):
                arr.append(str((x * 3) + y))
            print(' '.join(arr) + '             ' + ' '.join(self.board[(x * 3):(x * 3) + y + 1]))
    def run(self):
        print("Player: X \nBot:O")
        while True:
            if self.board.count('-') == 0:
                print("Tie!")
                break
            self.printBoard()
            userChoice = int(input('Enter your choice: '))
            self.board[userChoice] = 'X'
            if status(self.board,'X','O') == 'Player':
                print("You win!")
                break
            aiChoice = minimax(self.board,'X','O')
            c = None
            for x in range(len(aiChoice)):
                c = aiChoice[x]
                if c:
                    if self.board[aiChoice[x]] == '-':
                        break
            print(c)
            if c != None:
                self.board[c] = 'O'
                if status(self.board,'X','O') == 'Bot':
                    print("You lose!")
                    break