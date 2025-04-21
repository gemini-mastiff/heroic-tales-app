import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

const HeaderStyled = styled.header`
  background-color: var(--MAIN-COLOUR);
  padding: 1em 0;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <WidthContainer>
        <h1>Heroic Tales</h1>
      </WidthContainer>
    </HeaderStyled>
  );
}
