import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--MAIN-COLOUR);
  text-align: center;
  padding: 1em;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>Placeholder Text</p>
    </FooterStyled>
  );
}
