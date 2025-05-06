import styled from "styled-components";
import RollLogItem from "./RollLogItem.jsx";

export default function RollLog({ rollLog }) {
  const rollLogArr = [];
  for (let i = 0; i < rollLog.length; i++) {
    if (i === rollLog.length - 1) {
      rollLogArr.push(
        <RollLogItem key={crypto.randomUUID()} roll={rollLog[i]} />
      );
    } else {
      rollLogArr.push(
        <div key={crypto.randomUUID()}>
          <RollLogItem key={crypto.randomUUID()} roll={rollLog[i]} />
          <hr />
        </div>
      );
    }
  }

  return (
    <RollLogContainer>
      {rollLog.length < 1 ? (
        "Make some Rolls!"
      ) : (
        <RollLogStyled>{rollLogArr}</RollLogStyled>
      )}
    </RollLogContainer>
  );
}

const RollLogContainer = styled.div`
  grid-row: 1/3;
  background-color: var(--MAIN-COLOUR);
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0.5em;
`;

const RollLogStyled = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: auto;
`;
