import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
  display: flex;
`;

const GameGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  border: 1px solid red;
`;

const RollLog = styled.div`
  grid-row: 1/3;
`;

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            fugit quibusdam eveniet recusandae ipsam quisquam. Illum vitae
            laboriosam, facilis repellat quasi sit dolorem odio aperiam magnam
            ipsum, non laudantium possimus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            placeat velit non ullam expedita nam necessitatibus error in itaque
            dolorum, officiis consectetur aut ab cupiditate libero dignissimos
            fuga cum mollitia?
          </p>
        </GameGrid>
      </WidthContainer>
    </MainStyled>
  );
}
