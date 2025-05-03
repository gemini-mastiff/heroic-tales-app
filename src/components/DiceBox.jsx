import { useState } from "react";
import styled from "styled-components";

export default function DiceBox({ skillTotal }) {
  const [result, setResult] = useState(null);
  const [diffNum, setDiffNum] = useState(2);

  const handleDifficulty = (value) => {
    setDiffNum(value);
  };

  const diffDice = [];
  {
    for (let i = 1; i <= 3; i++) {
      diffDice.push(
        <DiceHover
          key={`initDice${i}`}
          isSelected={i <= diffNum}
          onClick={() => handleDifficulty(i)}
        >
          ?
        </DiceHover>
      );
    }
  }

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

  return (
    <DiceBoxStyled>
      <Header>Dice Box</Header>
      <DiceRow>{diffDice}</DiceRow>
      <hr />
      <DiceRow>{skillDice}</DiceRow>
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
  display: flex;
  justify-content: center;
  align-items: center;
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
