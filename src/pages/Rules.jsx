import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigation = useNavigate();
  const handleGotIt = () => {
    navigation("/");
  };
  return (
    <Card
      style={{
        width: "50rem",
      }}
    >
      <CardBody>
        <CardTitle>Rules to play SuperWars</CardTitle>
        <ListGroup
          style={{
            justifyContent: "start",
            textAlign: "start",
          }}
        >
          <ListGroupItem>
            Player needs to set a name before starting games.
          </ListGroupItem>
          <ListGroupItem>
            Player can customize number of cards in their deck - 5/10/15/20; The
            default count is 5.
          </ListGroupItem>
          <ListGroupItem>
            On the gaming screen, player can click on their card to flip and
            find out the stats, and then select one of the stats to pit agains
            computer deck.
          </ListGroupItem>
          <ListGroupItem>
            Once the stat is selected, player can see if they won or lose that
            round, or if it was a draw.
          </ListGroupItem>
          <ListGroupItem>
            Only after selecting the stat can player see the stats of computer
            card as it flips after clicking any stat.
          </ListGroupItem>
          <ListGroupItem>
            Once all cards are exhausted (used) player can see their score
            percentage, and can either choose to replay or reset.
          </ListGroupItem>
          <ListGroupItem>
            <i>Happy Playing!</i>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter style={{ backgroundColor: "White", border: "none" }}>
        <Button onClick={handleGotIt}>Got it!</Button>
      </CardFooter>
    </Card>
  );
};

export default Rules;
