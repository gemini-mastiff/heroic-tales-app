import { useState } from "react";
import styled from "styled-components";
import Button from "./Button.jsx";

export default function Dropdown({ value, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <DropdownStyled>
      <Button $small onClick={(e) => handleOpen(e)}>
        {value}
      </Button>
      {isOpen && (
        <DropdownList onClick={() => setIsOpen(false)}>{children}</DropdownList>
      )}
    </DropdownStyled>
  );
}

const DropdownStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5em;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  padding: 0.5em;
  list-style: none;
  text-align: center;
  border: 2px solid var(--PRIMARY-TEXT);
  border-radius: 20px;
  background-color: var(--BG-COLOUR);
`;
