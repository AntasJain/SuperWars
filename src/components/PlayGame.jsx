import {
  Button,
  Card,
  CardFooter,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { shuffleCards } from "../logic/shuffle";
import "./PlayGame.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../store/playerDataSlice";

const PlayGame = ({ characters, onGameOver }) => {
  const [deckPlayer, setDeckPlayer] = useState([]);
  const [deckComputer, setDeckComputer] = useState([]);
  const [card, setCard] = useState(0);
  const [compCardClickable, setCompCardClickable] = useState(false);
  const [computerCardFlipped, setComputerCardFlipped] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [thisRoundResult, setThisRoundResult] = useState("");
  const dispatch = useDispatch();
  const powerstats = [
    "INTELLIGENCE",
    "STRENGTH",
    "SPEED",
    "DURABILITY",
    "POWER",
    "COMBAT",
  ];
  const playerName = useSelector((state) => state.playerSlice).name;
  const [score, setScore] = useState({ computer: 0, player: 0, draw: 0 });

  useEffect(() => {
    const { deckPlayer, deckComputer } = shuffleCards(characters);
    setDeckPlayer(deckPlayer);
    setDeckComputer(deckComputer);
  }, [characters]);

  const handleButtonClick = (stat) => {
    if (card < deckPlayer.length && card < deckComputer.length) {
      const playerStat = deckPlayer[card]?.powerstats[stat.toLowerCase()];
      const computerStat = deckComputer[card]?.powerstats[stat.toLowerCase()];

      if (playerStat > computerStat) {
        setThisRoundResult("w");
        setScore((prevScore) => ({
          ...prevScore,
          player: prevScore.player + 1,
        }));
      } else if (playerStat < computerStat) {
        setThisRoundResult("l");
        setScore((prevScore) => ({
          ...prevScore,
          computer: prevScore.computer + 1,
        }));
      } else {
        setThisRoundResult("d");
        setScore((prevScore) => ({
          ...prevScore,
          draw: prevScore.draw + 1,
        }));
      }
      setComputerCardFlipped(true);
      setCompCardClickable(true);
      setAnimationTrigger(true);
      setTimeout(() => {
        setAnimationTrigger(false);
        setCard(card + 1);
        setCompCardClickable(false);
        setComputerCardFlipped(false);
        if (card === 9) {
          dispatch(updateScore(score.player));
          onGameOver();
        }
      }, 500);
    }
  };

  return (
    <Card className="container-card">
      <Card.Body style={{ minWidth: "40rem" }}>
        <Card.Title>
          <h3>Play SuperWars</h3>
        </Card.Title>
        <Card.Subtitle>{playerName}, your deck is ready</Card.Subtitle>
        <div className="mid-container">
          {deckPlayer.length > 0 && deckComputer.length > 0 ? (
            <>
              <CharacterCard
                id={deckPlayer[card]?.id}
                name={deckPlayer[card]?.name}
                imageUrl={deckPlayer[card]?.images.md}
                publisher={deckPlayer[card]?.biography.publisher}
                powerstats={deckPlayer[card]?.powerstats}
                flipItNow={false}
              />

              <div className="buttons-container">
                {animationTrigger ? (
                  <img
                    width="400px"
                    src={
                      thisRoundResult === "w"
                        ? require("../assets/W-transparent.png")
                        : thisRoundResult === "l"
                        ? require("../assets/L-transparent.png")
                        : require("../assets/D-transparent.png")
                    }
                    alt={thisRoundResult}
                    className="result-image"
                  />
                ) : (
                  <>
                    <h6>Choose your stat to fight, higher one wins</h6>
                    {powerstats.map((stat) => (
                      <Button
                        key={stat}
                        className="button"
                        onClick={() => handleButtonClick(stat)}
                      >
                        {stat}
                      </Button>
                    ))}
                    <br />
                    scores:
                    <br />
                    <ListGroup horizontal>
                      <ListGroup.Item variant="dark">
                        {playerName}: {score.player}
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Computer: {score.computer}
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Draws: {score.draw}
                      </ListGroup.Item>
                    </ListGroup>
                  </>
                )}
              </div>
              <CharacterCard
                compCardClickable={compCardClickable}
                hoverable={false}
                id={deckComputer[card]?.id}
                name={deckComputer[card]?.name}
                imageUrl={deckComputer[card]?.images.md}
                publisher={
                  computerCardFlipped
                    ? deckComputer[card]?.biography.publisher
                    : "Select stat to reveal"
                }
                powerstats={deckComputer[card]?.powerstats}
                flipItNow={computerCardFlipped}
              />
            </>
          ) : (
            <p>Loading cards...</p>
          )}
        </div>
      </Card.Body>
      <CardFooter>
        <ProgressBar striped variant="success" now={card * 10} key={1} />
      </CardFooter>
    </Card>
  );
};

export default PlayGame;
