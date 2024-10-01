import { useState } from "react";
import GetStarted from "../components/GetStarted";
import PlayGame from "../components/PlayGame";
import BottomAlert from "../components/BottomAlert";

const TradeScreen = ({ loading, error, characters }) => {
  const [playerReady, setPlayerReady] = useState(false);
  const handlePlayerReady = () => {
    setPlayerReady(true);
  };
  return (
    <div>
      {!playerReady ? (
        <GetStarted onPlayerReady={handlePlayerReady} />
      ) : (
        <PlayGame characters={characters} />
      )}
      <BottomAlert loading={loading} error={error} />
    </div>
  );
};

export default TradeScreen;
