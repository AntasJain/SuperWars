import { useSelector } from "react-redux";
import Credits from "../components/Credits";
import CharacterCard from "../components/CharacterCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useMemo, useState } from "react";
import "./Collection.css";
import { dummydata } from "../dummy/dummydata";

const Collection = () => {
  const { characters } = useSelector((state) => state.heroSlice);
  const [selectedCharacter, setSelectedCharacter] = useState("A");
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const handleCharacterChange = (letter) => {
    setSelectedCharacter(letter);
  };
  const filteredCharacters = useMemo(() => {
    return characters.filter((character) =>
      character.name[0].toUpperCase().startsWith(selectedCharacter)
    );
  }, [characters, selectedCharacter]);
  const qtyPlaceholders = (4 - (filteredCharacters.length % 4)) % 4;
  const completeCharacters = [
    ...filteredCharacters,
    ...Array.from({ length: qtyPlaceholders }, (_, index) =>
      dummydata(index + 1)
    ),
  ];
  return (
    <>
      <div className="button-overlay d-flex justify-content-center flex-wrap mb-4">
        {alphabets.map((letter) => (
          <Button
            key={letter}
            variant={selectedCharacter === letter ? "primary" : "secondary"}
            onClick={() => handleCharacterChange(letter)}
            className="mx-1"
          >
            {letter}
          </Button>
        ))}
      </div>

      <Container className="position-relative mb-4">
        <Row>
          {completeCharacters.map((character) => (
            <Col xs={6} sm={4} md={3} key={character.id} className="mb-4">
              <CharacterCard
                name={character.name}
                id={character.id}
                imageUrl={character.images.md}
                publisher={character.biography.publisher}
                powerstats={character.powerstats}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <div className="credits-section mt-4">
        <Credits />
      </div>
    </>
  );
};

export default Collection;
