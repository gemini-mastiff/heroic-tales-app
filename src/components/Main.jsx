import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";
import CharSheet from "./CharSheet.jsx";

const CharArr = [
  {
    name: "Sir Tomwell",
    race: "Human",
    class: "Ranger",
    subclass: "Hunter",
    skills: [
      { skill: "Shooting", rating: 2 },
      {
        skill: "Tracking",
        rating: 1,
      },
      {
        skill: "Traps",
        rating: 1,
      },
      { skill: "Survival", rating: 1 },
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
          <DiceBox>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            placeat velit non ullam expedita nam necessitatibus error in itaque
            dolorum, officiis consectetur aut ab cupiditate libero dignissimos
            fuga cum mollitia?
          </DiceBox>
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
`;

const CharSheetContainer = styled.div`
  background-color: var(--MAIN-COLOUR);
`;

const DiceBox = styled.div`
  background-color: var(--MAIN-COLOUR);
`;
