import { useState } from "react";
import styled from "styled-components";
import rollCalc from "../js/rollCalc.js";
import Button from "./Button.jsx";

export default function DiceBox({ skillTotal, resetSkills }) {
  const [results, setResults] = useState(false);
  const [checkNum, setCheckNum] = useState(1);

  console.log(results);

  const handleDifficulty = (value) => {
    setResults(false);
    setCheckNum(value);
  };

  const handleResults = () => {
    setResults(rollCalc(checkNum + 1, skillTotal));
  };

  const checkDice = [];

  const skillDice = [];
  {
    for (let i = 1; i <= skillTotal; i++) {
      skillDice.push(
        <Dice key={`skillDice${i}`} isSelected={true}>
          ?
        </Dice>
      );
    }
  }

  if (results) {
    {
      for (let i = 0; i < 3; i++) {
        checkDice.push(
          <DiceHover
            key={`checkDiceResults${i}`}
            isSelected={i < results.results.checkResults.length}
            onClick={() => handleDifficulty(i)}
          >
            {i < results.results.checkResults.length
              ? results.results.checkResults[i]
              : "?"}
          </DiceHover>
        );
      }
    }
  } else {
    {
      for (let i = 0; i < 3; i++) {
        checkDice.push(
          <DiceHover
            key={`initDice${i}`}
            isSelected={i <= checkNum}
            onClick={() => handleDifficulty(i)}
          >
            ?
          </DiceHover>
        );
      }
    }
  }

  return (
    <DiceBoxStyled>
      <Header>Dice Box</Header>
      <DiceRow>{checkDice}</DiceRow>
      <hr />
      <DiceRow>{skillDice.length > 0 ? skillDice : "Add some skills!"}</DiceRow>
      <ButtonContainer>
        <Button onClick={() => resetSkills()}>Reset</Button>
        <Button onClick={() => handleResults()}>Roll</Button>
      </ButtonContainer>
    </DiceBoxStyled>
  );
}

const DiceBoxStyled = styled.div`
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;

const Header = styled.p`
  font-family: "Spectral SC", serif;
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: underline;
`;

const DiceRow = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75em 0;
  gap: 1em;
`;
const Dice = styled.div`
  color: ${(props) =>
    props.isSelected ? "var(--PRIMARY-TEXT)" : "var(--BG-COLOUR)"};
  height: 50px;
  width: 50px;
  border: 2px solid
    ${(props) =>
      props.isSelected ? "var(--PRIMARY-TEXT)" : "var(--BG-COLOUR)"};
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
`;
const DiceHover = styled(Dice)`
  &:hover {
    opacity: 0.6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
