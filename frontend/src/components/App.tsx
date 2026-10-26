import './App.css'
import {useState, useEffect} from 'react'
import minimax, { getStatus } from './engine'
import Github from './Github'
export default function App(){
    const [player, setPlayer] = useState<"X"|"O"|null>(null)
    const [ai, setAi] = useState<"X"|"O"|null>(null)
    const [board, setBoard] = useState(Array(9).fill('-'))
    const [turn, setTurn] = useState<"PLAYER"|"AI"|"GAME_OVER">("PLAYER")
    const [winner, setWinner] = useState<"PLAYER"|"AI"|"TIE"|null>(null)
    useEffect(() => {
        if (turn === 'AI' && player && ai) {
            const bestMoves = minimax(board, player, ai)
            if (bestMoves.length > 0) {
                const bestMove = bestMoves[0]
                const newBoard = [...board]
                newBoard[bestMove] = ai
                setBoard(newBoard)
            }
            setTurn('PLAYER')
        }
        if (player && ai) {
            const status = getStatus(board, player, ai)
            if (status === 'Player') {
                setWinner('PLAYER')
                setTurn('GAME_OVER')
            } else if (status === 'Bot') {
                setWinner('AI')
                setTurn('GAME_OVER')
            } else if (!board.includes('-')) {
                setWinner('TIE')
                setTurn('GAME_OVER')
            }
        }
    }, [board, turn, player, ai])
    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>
            
            {ai === null && player === null && (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Select your character:</h3>
                    <p className="italic text-gray-600 mb-6">X Goes First</p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600" onClick={()=>{
                            setPlayer("X")
                            setAi("O")
                            setTurn("PLAYER")
                        }}>X</button>
                        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600" onClick={()=>{
                            setPlayer("O")
                            setAi("X")
                            setTurn("AI")
                        }}>O</button>
                    </div>
                </div>
            )}
            {ai !== null && player !== null && (
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">
                        {winner ? (winner === 'TIE' ? 'It\'s a Tie!' : `Game Over: ${winner} Wins!`) : (turn === 'PLAYER' ? 'Your turn' : 'Bot is thinking...')}
                    </h3>
                    <div className="grid grid-cols-3 gap-2 bg-gray-400 p-2 rounded shadow-inner">
                        {board.map((val,idx)=>(
                            <button 
                                key={idx}
                                className={`w-24 h-24 bg-white flex items-center justify-center text-4xl font-bold rounded ${turn !== 'PLAYER' || val !== '-' ? 'cursor-not-allowed' : 'hover:bg-gray-100'}`}
                                disabled={turn !== 'PLAYER' || val !== '-' || !!winner}
                                onClick={()=>{
                                    if(turn === 'PLAYER' && val === '-'){
                                        const newBoard = [...board]
                                        newBoard[idx] = player
                                        setBoard(newBoard)
                                        setTurn('AI')
                                    }
                            }}>{val === '-' ? '' : val}</button>
                        ))}
                    </div>
                    {winner && (
                        <button className="mt-8 bg-gray-800 text-white font-bold py-2 px-6 rounded hover:bg-gray-900" onClick={() => {
                            setBoard(Array(9).fill('-'))
                            setPlayer(null)
                            setAi(null)
                            setWinner(null)
                            setTurn("PLAYER")
                        }}>Restart Game</button>
                    )}
                </div>
            )}
            <Github profileURL={"https://github.com/bruzz-bruzz"} repoURL={"https://github.com/bruzz-bruzz/tictactoe-minimax"} />
        </div>
    )
}