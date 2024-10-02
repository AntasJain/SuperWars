import { useEffect, useState } from "react";
import GetStarted from "../components/GetStarted";
import PlayGame from "../components/PlayGame";
import BottomAlert from "../components/BottomAlert";
import GameOver from "../components/GameOver";
import { useDispatch } from "react-redux";
import { resetData } from "../store/playerDataSlice";

const TradeScreen = ({ loading, error, characters, reset }) => {
  const [playerReady, setPlayerReady] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const resetAction = useDispatch();
  useEffect(() => {
    setPlayerReady(false);
    setIsGameOver(false);
  }, [reset]);
  const handlePlayerReady = () => {
    setPlayerReady(!isGameOver);
  };
  const handleGameOver = () => {
    setIsGameOver(true);
  };
  const handleReset = () => {
    resetAction(resetData());
    setPlayerReady(false);
    setIsGameOver(false);
  };
  const handlePlayAgain = () => {
    setPlayerReady(true);
    setIsGameOver(false);
  };
  return (
    <div>
      {!playerReady ? (
        <GetStarted onPlayerReady={handlePlayerReady} />
      ) : !isGameOver ? (
        <PlayGame characters={characters} onGameOver={handleGameOver} />
      ) : (
        <GameOver onReset={handleReset} onPlayAgain={handlePlayAgain} />
      )}
      <BottomAlert loading={loading} error={error} />
    </div>
  );
};

export default TradeScreen;
