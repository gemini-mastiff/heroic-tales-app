export default function RollLogItem({ roll }) {
  return (
    <div>
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
}
