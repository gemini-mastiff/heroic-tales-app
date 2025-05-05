import styled from "styled-components";
import React from "react";

export default function RollLogItem({ roll }) {
  const checkResults = roll.results.checkResults;
  const skillResults = roll.results.skillResults;

  return (
    <ItemStyled>
      <p>
        <SuccessLevel>{roll.successLevel}</SuccessLevel>{" "}
        {roll.successNum > 0 &&
          `(${roll.successNum} ${
            roll.successNum > 1 ? "successes" : "success"
          })`}
      </p>
      <p>
        (
        {checkResults.map((result, i, arr) => {
          return (
            <React.Fragment key={crypto.randomUUID()}>
              {result >= 5 || result === 1 ? (
                <NumSpan success={result === 1 ? false : true}>
                  {result}
                </NumSpan>
              ) : (
                result
              )}
              {arr.length - 1 === i ? null : ", "}
            </React.Fragment>
          );
        })}
        )
      </p>
    </ItemStyled>
  );
}

const ItemStyled = styled.div``;

const ItemHeader = styled.p``;

const SuccessLevel = styled.span`
  font-weight: bold;
`;

const NumSpan = styled.span`
  color: ${(props) => (props.success === true ? "green" : "red")};
`;
