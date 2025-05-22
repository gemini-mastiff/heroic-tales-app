import styled from "styled-components";
import WidthContainer from "./WidthContainer.jsx";

export default function Footer() {
  return (
    <FooterStyled>
      <WidthContainer>
        <p>
          Based on{" "}
          <a
            href="https://squidhead-games.itch.io/heroic-tales"
            target="_blank"
          >
            Heroic Tales
          </a>{" "}
          by Squidhead Games
        </p>
        <p>
          View the source on{" "}
          <a
            href="https://github.com/gemini-mastiff/heroic-tales-app"
            target="_blank"
          >
            Github
          </a>
        </p>
        <p>&#169; 2025 Joseph Webb</p>
      </WidthContainer>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: var(--MAIN-COLOUR);
  text-align: center;
  padding: 0.5em 0;
`;
