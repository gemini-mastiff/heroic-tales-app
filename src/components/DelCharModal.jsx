import styled from "styled-components";
import Button from "./Button.jsx";

export default function DelCharModal({ char, setDelChar, handleCharDel }) {
  return (
    <DelCharStyled>
      <p>Are you sure you want to delete {char.name}?</p>
      <ButtonContainer>
        <Button $small onClick={() => setDelChar(false)}>
          No
        </Button>
        <Button $small onClick={(e) => handleCharDel(e, char.id)}>
          Yes, I'm sure
        </Button>
      </ButtonContainer>
    </DelCharStyled>
  );
}

const DelCharStyled = styled.div`
  text-align: center;
  padding: 0.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 0.75em;
`;
