import { useState } from "react";
import GetStarted from "../components/GetStarted";
import PlayGame from "../components/PlayGame";
import BottomAlert from "../components/BottomAlert";
import GameOver from "../components/GameOver";

const TradeScreen = ({ loading, error, characters }) => {
  const [playerReady, setPlayerReady] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const handlePlayerReady = () => {
    setPlayerReady(!isGameOver);
  };
  const handleGameOver = () => {
    setIsGameOver(true);
  };
  return (
    <div>
      {!playerReady ? (
        <GetStarted onPlayerReady={handlePlayerReady} />
      ) : !isGameOver ? (
        <PlayGame characters={characters} onGameOver={handleGameOver} />
      ) : (
        <GameOver />
      )}
      <BottomAlert loading={loading} error={error} />
    </div>
  );
};

export default TradeScreen;
