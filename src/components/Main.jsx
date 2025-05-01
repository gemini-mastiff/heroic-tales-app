import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";
import CharSheet from "./CharSheet.jsx";
import DiceBox from "./DiceBox.jsx";

const CharArr = [
  {
    name: "Sir Tomwell",
    race: "Human",
    class: "Ranger",
    subclass: "Hunter",
    skills: [
      { name: "Shooting", rating: 2 },
      {
        name: "Tracking",
        rating: 1,
      },
      {
        name: "Traps",
        rating: 1,
      },
      { name: "Survival", rating: 1 },
    ],
    abilities: [],
    stats: {
      hits: 0,
      health: 5,
      injuries: 0,
      armour: 0,
      cast: 0,
    },
    desc: null,
    inventory: [],
    img: null,
  },
];

export default function Main() {
  return (
    <MainStyled>
      <WidthContainer>
        <GameGrid>
          <RollLog>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            tempora consequatur illo cupiditate! Laborum fugit iure, eligendi
            rem consequuntur enim! Amet assumenda adipisci quam quas
            consequatur, eaque voluptatem tempora asperiores.
          </RollLog>
          <CharSheetContainer>
            {CharArr.map((char) => {
              return <CharSheet char={char} />;
            })}
          </CharSheetContainer>
          <DiceBox></DiceBox>
        </GameGrid>
      </WidthContainer>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
  display: flex;
`;

const GameGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  padding: 1em 0;
  gap: 1em;
`;

const RollLog = styled.div`
  grid-row: 1/3;
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;

const CharSheetContainer = styled.div`
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;
