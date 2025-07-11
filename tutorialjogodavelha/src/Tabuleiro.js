import { useState } from "react";
import Square from "./Square";
import "./styles.css";

export default function Tabuleiro() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const vencedor = marcacoesVencedoras(squares);

  function handleClick(index) {
    if (squares[index] || vencedor) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  let status;
  if (vencedor) {
    status = `🏆 Vencedor: ${vencedor}`;
  } else if (squares.every(Boolean)) {
    status = "🤝 Deu velha!";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <h2>{status}</h2>
      <div className="tabuleiro">
        {squares.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

function marcacoesVencedoras(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // linhas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colunas
    [0, 4, 8],
    [2, 4, 6], // diagonais
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
