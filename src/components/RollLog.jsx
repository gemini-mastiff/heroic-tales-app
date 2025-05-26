import styled from "styled-components";
import RollLogItem from "./RollLogItem.jsx";

export default function RollLog({ rollLog, height }) {
  return (
    <RollLogContainer $height={height}>
      {rollLog.length < 1
        ? "Make some Rolls!"
        : rollLog.map((item, i, arr) => {
            if (i === arr.length - 1) {
              return (
                <RollLogItem key={crypto.randomUUID()} roll={rollLog[i]} />
              );
            } else {
              return (
                <div key={crypto.randomUUID()}>
                  <RollLogItem key={crypto.randomUUID()} roll={rollLog[i]} />
                  <hr />
                </div>
              );
            }
          })}
    </RollLogContainer>
  );
}

const RollLogContainer = styled.div`
  flex: 1;
  height: ${(props) => props.$height};
  background-color: var(--MAIN-COLOUR);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5em;
  overflow: auto;
`;
