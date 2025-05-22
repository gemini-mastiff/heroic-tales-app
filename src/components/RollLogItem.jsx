import styled from "styled-components";
import React from "react";

function formatResults(arr, target) {
  return arr.map((result, i, arr) => {
    return (
      <React.Fragment key={crypto.randomUUID()}>
        {result >= target || result === 1 ? (
          <NumSpan $success={result === 1 ? false : true}>{result}</NumSpan>
        ) : (
          result
        )}
        {arr.length - 1 === i ? null : ", "}
      </React.Fragment>
    );
  });
}

export default function RollLogItem({ roll }) {
  const checkResults = roll.results.checkResults;
  const skillResults = roll.results.skillResults;

  const checkResultsArr = formatResults(checkResults, 5);
  const skillResultsArr = formatResults(skillResults, 6);

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
        ({checkResultsArr})
        {skillResults.length > 0 && <> ({skillResultsArr})</>}
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
  text-shadow: ${(props) =>
    props.$success === true
      ? "rgba(44,182,125,1) 0px 0px 10px,rgba(44,182,125,1) 0px 0px 10px, rgba(44,182,125,1) 0px 0px 10px, rgba(44,182,125,1) 0px 0px 10px;"
      : "rgba(239,69,101,1) 0px 0px 10px, rgba(239,69,101,1) 0px 0px 10px, rgba(239,69,101,1) 0px 0px 10px, rgba(239,69,101,1) 0px 0px 10px;"};
`;
