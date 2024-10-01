import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { shuffleCards } from "../logic/shuffle";
import { dummydata } from "../dummy/dummydata";
import "./PlayGame.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const PlayGame = ({ characters }) => {
  const { deckPlayer, deckComputer } = shuffleCards(characters);
  const [card, setCard] = useState(0);
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
  const [isFlipped, setIsFlipped] = useState(false);
  const handleButtonClick = (stat) => {
    if (card < 9) {
      if (
        deckPlayer[card].powerstats[stat.toLowerCase()] >
        deckComputer[card].powerstats[stat.toLowerCase()]
      ) {
        setScore((prevScore) => ({
          ...prevScore,
          player: prevScore.player + 1,
        }));
      } else if (
        deckPlayer[card].powerstats[stat.toLowerCase()] <
        deckComputer[card].powerstats[stat.toLowerCase()]
      ) {
        setScore((prevScore) => ({
          ...prevScore,
          computer: prevScore.computer + 1,
        }));
      } else {
        setScore((prevScore) => ({
          ...prevScore,
          draw: prevScore.draw + 1,
        }));
      }
      setIsFlipped(true);
      setCard(card + 1);
    }
  };
  return (
    <Card className="container-card">
      <Card.Body
        style={{
          minWidth: "40rem",
        }}
      >
        <Card.Title>
          <h3>Play SuperWars</h3>
        </Card.Title>
        <Card.Subtitle>{playerName} your deck is ready</Card.Subtitle>
        <div className="mid-container">
          <CharacterCard
            id={deckPlayer[card].id}
            name={deckPlayer[card].name}
            imageUrl={deckPlayer[card].images.md}
            publisher={deckPlayer[card].biography.publisher}
            powerstats={deckPlayer[card].powerstats}
          />

          <div className="buttons-container">
            <br />
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
            <br />
            <ListGroup horizontal>
              <ListGroup.Item>
                {playerName}: {score.player}
              </ListGroup.Item>
              <ListGroup.Item>Computer: {score.computer}</ListGroup.Item>
              <ListGroup.Item>Draws: {score.draw}</ListGroup.Item>
            </ListGroup>
          </div>
          <CharacterCard
            hoverable={false}
            id={deckComputer[card].id}
            name={"Computer Card"}
            imageUrl={dummydata(card).images.md}
            publisher={"Select stat to reveal"}
            powerstats={deckComputer[card].powerstats}
            isFlipped={isFlipped}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlayGame;
