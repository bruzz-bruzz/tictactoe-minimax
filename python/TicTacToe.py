from Win import status
from Bot import minimax

class TicTacToe:
    def __init__(self):
        self.board = ['-' for _ in range(9)]

    def printBoard(self):
        print("\nBoard:")
        for x in range(3):
            row = self.board[x*3 : x*3+3]
            print(f" {row[0]} | {row[1]} | {row[2]} ")
            if x < 2:
                print("---|---|---")
        print()

    def run(self):
        print("Player: X \nBot: O")
        while True:
            self.printBoard()
            if '-' not in self.board:
                print("Tie!")
                break
            
            # User Turn
            try:
                userChoice = int(input('Enter your choice (0-8): '))
                if userChoice < 0 or userChoice > 8 or self.board[userChoice] != '-':
                    print("Invalid move, try again.")
                    continue
            except ValueError:
                print("Please enter a number.")
                continue

            self.board[userChoice] = 'X'
            if status(self.board, 'X', 'O') == 'Player':
                self.printBoard()
                print("You win!")
                break
            
            if '-' not in self.board:
                print("Tie!")
                break

            # Bot Turn
            print("Bot is thinking...")
            ai_choices = minimax(self.board, 'X', 'O')
            if ai_choices:
                c = ai_choices[0]
                self.board[c] = 'O'
                if status(self.board, 'X', 'O') == 'Bot':
                    self.printBoard()
                    print("You lose!")
                    break
