import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

const HeaderContainer = styled.header`
  background-color: var(--MAIN-COLOUR);
`;

const HeaderStyled = styled.div`
  padding: 1em 0;
`;

const Logo = styled.h1`
  font-family: "Spectral SC", serif;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <WidthContainer>
        <HeaderStyled>
          <Logo>Heroic Tales</Logo>
        </HeaderStyled>
      </WidthContainer>
    </HeaderContainer>
  );
}
