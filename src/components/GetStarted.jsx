import { Button, Card, CardFooter, Dropdown, Form } from "react-bootstrap";
import "./GetStarted.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deckSize, setPlayerName } from "../store/playerDataSlice";

const GetStarted = ({ onPlayerReady }) => {
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState("");
  const selector = useSelector((state) => state.playerSlice);
  const handleDeckSize = (eventKey) => {
    dispatch(deckSize(eventKey));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerRef.current.value !== "") {
      const playerName = playerRef.current.value;
      dispatch(setPlayerName(playerName));
      onPlayerReady();
    } else {
      setInputError("You must Enter player name to continue.");
    }
  };

  return (
    <Card className="custom-card">
      <Card.Title className="custom-card-title">Get Started!</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicInput">
            <Form.Label className="custom-card-label">
              Enter Player Name..
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ninja Killer.."
              className="custom-card-placeholder"
              ref={playerRef}
            ></Form.Control>
          </Form.Group>
          <br />
          <Dropdown onSelect={handleDeckSize}>
            Select your deck Size
            <br />
            <br />
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selector.deckSize}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={5}>5</Dropdown.Item>
              <Dropdown.Item eventKey={10}>10</Dropdown.Item>
              <Dropdown.Item eventKey={15}>15</Dropdown.Item>
              <Dropdown.Item eventKey={20}>20</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            variant="primary"
            type="submit"
            className="custom-button mt-3"
          >
            Play Game
          </Button>
        </Form>
      </Card.Body>
      <CardFooter hidden={inputError === ""} className="custom-card-footer">
        {inputError}
      </CardFooter>
    </Card>
  );
};

export default GetStarted;
