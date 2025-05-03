function randomResults(num) {
  const results = [];
  for (let i = 0; i < num; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

function calcSuccesses(arr, minNum) {
  let successes = 0;
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    if (result >= minNum) successes++;
  }
  return successes;
}

function getSuccessLevel(results, successNum) {
  let sixes = 0;
  let ones = 0;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result === 6) sixes++;
    else if (result === 1) ones++;
  }

  if (successNum > 0) {
    if (sixes > results.length / 2) return "Crit Success!";
    else return "Success!";
  } else {
    if (ones > results.length / 2) return "Crit Failure!";
    else return "Failure!";
  }
}

export default function rollCalc(checkNum, skillNum) {
  const checkResults = randomResults(checkNum);
  const skillResults = randomResults(skillNum);
  const successNum =
    calcSuccesses(checkResults, 5) + calcSuccesses(skillResults, 6);
  const successLevel = getSuccessLevel(
    checkResults.concat(skillResults),
    successNum
  );

  return { results: { checkResults, skillResults }, successNum, successLevel };
}
