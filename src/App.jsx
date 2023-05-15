import React from "react";
import { Container } from "react-bootstrap";
import SudokuSolver from "./components/SudokuSolver";

function App() {
  return (
    <Container className="text-center">
      <h1 className="mt-3 heading">Sudoku Solver</h1>
      <SudokuSolver />
    </Container>
  );
}

export default App;
