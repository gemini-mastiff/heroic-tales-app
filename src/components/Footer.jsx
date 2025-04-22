import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

const FooterStyled = styled.footer`
  background-color: var(--MAIN-COLOUR);
  text-align: center;
  padding: 0.5em 0;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <WidthContainer>
        <p>Placeholder Text</p>
      </WidthContainer>
    </FooterStyled>
  );
}
