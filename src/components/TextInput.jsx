import styled from "styled-components";

export default function TextInput({ name, value, onChange }) {
  return (
    <InputDiv>
      <label htmlFor={name}>{name}:</label>
      <input type="text" id={name} value={value} onChange={onChange} />
    </InputDiv>
  );
}

const InputDiv = styled.div``;
