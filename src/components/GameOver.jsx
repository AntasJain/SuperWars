import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./GameOver.css";
const GameOver = ({ onReset, onPlayAgain }) => {
  const selector = useSelector((state) => state.playerSlice);
  const handlePlayAgain = () => {
    onPlayAgain();
  };
  const handleResetGame = () => {
    onReset();
  };
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Game Over</Card.Title>
        <p style={{ color: "black" }}>{selector.name}'s' Score</p>

        <p style={{ fontSize: "40px", color: "black" }}>{selector.score}</p>
        <div className="button-container">
          <Button className="button" onClick={handlePlayAgain}>
            Play Again
          </Button>
          <Button className="button" onClick={handleResetGame}>
            Reset Game
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameOver;
