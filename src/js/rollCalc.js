function randomResults(num) {
  const results = [];
  for (let i = 0; i < num; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

export default function rollCalc(diffNum, skillNum) {
  const diffResults = randomResults(diffNum);

  return diffResults;
}
