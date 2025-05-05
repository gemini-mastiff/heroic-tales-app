import styled from "styled-components";
import RollLogItem from "./RollLogItem.jsx";

export default function RollLog({ rollLog }) {
  return (
    <RollLogContainer>
      {rollLog.length < 1 ? (
        "Make some Rolls!"
      ) : (
        <RollLogStyled>
          {rollLog.map((roll) => {
            return <RollLogItem key={crypto.randomUUID()} roll={roll} />;
          })}
        </RollLogStyled>
      )}
    </RollLogContainer>
  );
}

const RollLogContainer = styled.div`
  grid-row: 1/3;
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;

const RollLogStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
