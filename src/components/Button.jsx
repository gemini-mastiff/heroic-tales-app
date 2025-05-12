import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7f5af0;
  color: var(--PRIMARY-TEXT);
  font-family: inherit;
  font-size: ${(props) => (props.$small === true ? "0.8em" : "1.2em")};
  border: none;
  padding: 0.5em 1em;
  border-radius: 100px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default Button;
