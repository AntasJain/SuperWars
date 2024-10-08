import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./CharacterCard.css";
import StatsTable from "./StatsTable";

const CharacterCard = ({
  id,
  name,
  imageUrl,
  publisher,
  powerstats,
  flipItNow = false,
  compCardClickable = true,
}) => {
  const [isDummy, setIsDummy] = useState(false);
  const [isFlippedState, setIsFlippedState] = useState(false); // Default is not flipped

  useEffect(() => {
    setIsDummy(name.startsWith("Dummy"));
  }, [name]);

  const handleCardClick = () => {
    if (!isDummy) {
      setIsFlippedState(!isFlippedState);
    }
  };

  useEffect(() => {
    setIsFlippedState(flipItNow);
  }, [flipItNow]);

  return (
    <Card
      className={`purple-card ${isDummy ? "non-hoverable" : ""} ${
        !compCardClickable ? "non-clickable" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className={`card-inner ${isFlippedState ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="card-front">
          <Card.Img variant="top" src={imageUrl} draggable="false" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{publisher ? publisher : "Unknown"}</Card.Text>
          </Card.Body>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <Card.Img
            variant="top"
            src={imageUrl}
            draggable="false"
            className="blurred-back"
          />
          <div className="overlay">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{publisher ? publisher : "Unknown"}</Card.Text>

            <StatsTable powerstats={powerstats} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CharacterCard;
