# Tic-Tac-Toe Minimax Bot

This project is a complete implementation of an unbeatable Tic-Tac-Toe game. It includes both a command-line Python interface and a modern React-based web frontend, both powered by the same Minimax algorithm logic.

## Frontend Link

[Link](https://tictactoe-minimax-orpin.vercel.app/)

## Features

- **Unbeatable AI**: The bot uses the Minimax algorithm to ensure it never loses.
- **Dual Interface**:
    - **Python Console**: A classic command-line experience.
    - **React Frontend**: A modern web interface built with React, Vite, and Tailwind CSS.
- **Responsive UI**: The web frontend is styled to be clean, intuitive, and mobile-friendly.

## Project Structure

```text
tttMinimax/
├── python/             # Python console implementation
│   ├── Bot.py          # Minimax algorithm logic
│   ├── TicTacToe.py    # Game loop and CLI
│   └── Win.py          # Win condition detection
└── frontend/           # React web implementation
    ├── src/
    │   └── components/
    │       ├── App.tsx # Main UI and game state
    │       └── engine.ts # TypeScript port of Minimax logic
    └── package.json    # Frontend dependencies and scripts
```

## How to Run

### Python Version
1. Ensure you have Python installed.
2. Navigate to the `python/` directory:
   ```bash
   cd python
   ```
3. Run the game:
   ```bash
   python main.py
   ```

### Web Frontend
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the provided local URL (usually `http://localhost:5173`) in your browser.

## Built With

- **Logic**: Minimax Algorithm
- **Python**: Core game engine
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
