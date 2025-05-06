import { useState } from "react";
import styled from "styled-components";
import Button from "./Button.jsx";

export default function DiceBox({
  skillTotal,
  results,
  resetSkills,
  handleResults,
  setResults,
}) {
  const [checkNum, setCheckNum] = useState(1);

  const handleDifficulty = (value) => {
    setResults(false);
    setCheckNum(value);
  };

  const checkDice = [];
  const skillDice = [];

  if (results) {
    const checkResults = results.results.checkResults;
    const skillResults = results.results.skillResults;
    for (let i = 0; i < 3; i++) {
      checkDice.push(
        <CheckDice
          key={crypto.randomUUID()}
          $isSelected={i < checkResults.length}
          onClick={() => handleDifficulty(i)}
        >
          {i < checkResults.length ? checkResults[i] : "?"}
        </CheckDice>
      );
    }

    for (let i = 0; i < skillResults.length; i++) {
      skillDice.push(
        <Dice key={crypto.randomUUID()} $isSelected={true}>
          {skillResults[i]}
        </Dice>
      );
    }
  } else {
    for (let i = 0; i < 3; i++) {
      checkDice.push(
        <CheckDice
          key={crypto.randomUUID()}
          $isSelected={i <= checkNum}
          onClick={() => handleDifficulty(i)}
        >
          ?
        </CheckDice>
      );
    }

    for (let i = 1; i <= skillTotal; i++) {
      skillDice.push(
        <Dice key={crypto.randomUUID()} $isSelected={true}>
          ?
        </Dice>
      );
    }
  }

  return (
    <DiceBoxStyled>
      <Header>Dice Box</Header>
      <DiceRow>{checkDice}</DiceRow>
      <hr />
      <DiceRow>{skillDice.length > 0 ? skillDice : "Add some skills!"}</DiceRow>

      <SuccessDisplay>
        <SuccessTitle>{results.successLevel}</SuccessTitle>
        {results.successNum > 0 && (
          <SuccessText>
            {results.successNum} {results.successNum > 1 ? "levels" : "level"}{" "}
            of success
          </SuccessText>
        )}
      </SuccessDisplay>
      <ButtonContainer>
        <Button onClick={() => resetSkills()}>Reset</Button>
        <Button onClick={() => handleResults(checkNum)}>Roll</Button>
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
    props.$isSelected ? "var(--PRIMARY-TEXT)" : "var(--BG-COLOUR)"};
  height: 50px;
  width: 50px;
  border: 2px solid
    ${(props) =>
      props.$isSelected ? "var(--PRIMARY-TEXT)" : "var(--BG-COLOUR)"};
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
`;
const CheckDice = styled(Dice)`
  &:hover {
    opacity: 0.6;
  }
`;

const SuccessDisplay = styled.div`
  height: 60px;
  text-align: center;
`;

const SuccessTitle = styled.p`
  font-family: "Spectral SC", serif;
  font-size: 1.75rem;
  font-weight: bold;
`;

const SuccessText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: -0.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
