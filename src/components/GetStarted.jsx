import { Button, Card, Form } from "react-bootstrap";
import "./GetStarted.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../store/playerDataSlice";

const GetStarted = () => {
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const playerName = playerRef.current.value;
    dispatch(setPlayerName(playerName));
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
          <Button
            variant="primary"
            type="submit"
            className="custom-button mt-3"
          >
            Play Game
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default GetStarted;
