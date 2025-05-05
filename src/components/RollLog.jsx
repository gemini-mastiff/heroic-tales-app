import styled from "styled-components";

export default function RollLog({ rollLog }) {
  return (
    <RollLogContainer>
      {rollLog.length < 1 ? (
        "Make some Rolls!"
      ) : (
        <RollLogStyled>
          {rollLog.map((roll) => {
            return (
              <div key={crypto.randomUUID()}>
                <p>
                  {roll.successLevel}{" "}
                  {roll.successNum > 0 &&
                    `(${roll.successNum} ${
                      roll.successNum > 1 ? "successes" : "success"
                    })`}
                </p>
                <p>
                  {`(${roll.results.checkResults})`}{" "}
                  {roll.results.skillResults.length > 0 &&
                    `(${roll.results.skillResults})`}
                </p>
              </div>
            );
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
