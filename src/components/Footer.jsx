import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

export default function Footer() {
  return (
    <FooterStyled>
      <WidthContainer>
        <p>
          Based on{" "}
          <Link
            href="https://squidhead-games.itch.io/heroic-tales"
            target="_blank"
          >
            Heroic Tales
          </Link>{" "}
          by Squidhead Games
        </p>
        <p>
          View the source on{" "}
          <Link
            href="https://github.com/gemini-mastiff/heroic-tales-app"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <p>&#169; 2025 Joseph Webb</p>
      </WidthContainer>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: var(--MAIN-COLOUR);
  text-align: center;
  padding: 0.75em 0;
  font-size: 1rem;
`;

const Link = styled.a`
  color: #7f5af0;
  &:active {
    color: #2cb67d;
  }
`;
