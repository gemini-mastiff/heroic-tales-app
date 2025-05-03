function randomResults(num) {
  const results = [];
  for (let i = 0; i < num; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

function calcSuccess(arr, minNum) {
  let successes = 0;
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    if (result >= minNum) successes++;
  }
  return successes;
}

export default function rollCalc(checkNum, skillNum) {
  const checkResults = randomResults(checkNum);
  const skillResults = randomResults(skillNum);
  const successes = calcSuccess(checkResults, 5) + calcSuccess(skillResults, 6);

  return { results: { checkResults, skillResults }, successes };
}
