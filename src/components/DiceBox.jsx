import d6Svg1 from "../assets/dice/d6-1.svg";
import d6Svg2 from "../assets/dice/d6-2.svg";
import d6Svg3 from "../assets/dice/d6-3.svg";
import d6Svg4 from "../assets/dice/d6-4.svg";
import d6Svg5 from "../assets/dice/d6-5.svg";
import d6Svg6 from "../assets/dice/d6-6.svg";
import solidD6Svg1 from "../assets/dice/solid-d6-1.svg";
import solidD6Svg2 from "../assets/dice/solid-d6-2.svg";
import solidD6Svg3 from "../assets/dice/solid-d6-3.svg";
import solidD6Svg4 from "../assets/dice/solid-d6-4.svg";
import solidD6Svg5 from "../assets/dice/solid-d6-5.svg";
import solidD6Svg6 from "../assets/dice/solid-d6-6.svg";

import styled from "styled-components";

export default function DiceBox() {
  return (
    <DiceBoxStyled>
      <Header>Dice Box</Header>
      <DiceRow>
        <Dice src={d6Svg6} />
        <Dice src={d6Svg6} />
        <Dice src={d6Svg6} />
      </DiceRow>
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

const Dice = styled.img`
  width: 50px;
  &:hover {
    opacity: 0.6;
  }
`;
