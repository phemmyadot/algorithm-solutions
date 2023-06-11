function collatzIterative(n) {
  let steps = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }
  return steps;
}

function collatzRecursive(n, steps = 0) {
  if (n === 1) {
    return steps;
  }

  if (n % 2 === 0) {
    return collatzRecursive(n / 2, steps + 1);
  } else {
    return collatzRecursive(3 * n + 1, steps + 1);
  }
}

const n = 6;
const recursiveSteps = collatzRecursive(n);
const iterativeSteps = collatzIterative(n);

console.log(`Recursive Steps: ${recursiveSteps}`);
console.log(`Iterative Steps: ${iterativeSteps}`);
