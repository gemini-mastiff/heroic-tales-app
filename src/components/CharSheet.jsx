import styled from "styled-components";
import noImgSvg from "../assets/account.svg";

export default function CharSheet({ char }) {
  return (
    <CharHeader>
      <div>
        <CharName>{char.name}</CharName>
        <CharRole>{`${char.race} ${char.class} (${char.subclass})`}</CharRole>
      </div>
      <CharImg src={char.img ? char.img : noImgSvg} alt="" />
    </CharHeader>
  );
}

const CharHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CharName = styled.h2`
  font-family: "Spectral SC", serif;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
`;

const CharRole = styled.p`
  font-family: "Spectral SC", serif;
  font-size: 1.5;
`;

const CharImg = styled.img`
  height: 120px;
  border: 4px solid var(--BG-COLOUR);
`;
