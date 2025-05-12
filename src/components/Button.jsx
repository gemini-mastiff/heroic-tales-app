import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7f5af0;
  color: var(--PRIMARY-TEXT);
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 0.5em 1em;
  border-radius: 100px;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
