import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
`;

export default function Main() {
  return (
    <MainStyled>
      <WidthContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam hic
          voluptate aspernatur, laudantium nostrum voluptas beatae perferendis
          libero consectetur non necessitatibus consequuntur nobis deleniti
          ullam quisquam ad distinctio reprehenderit eum!
        </p>
      </WidthContainer>
    </MainStyled>
  );
}
