function semiPrimeCount(n) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function getPrimeNumbers(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  function isSemiPrime(num) {
    const primes = getPrimeNumbers(num);
    let count = 0;
    for (let i = 0; i < primes.length; i++) {
      for (let j = i; j < primes.length; j++) {
        if (primes[i] * primes[j] === num) {
          count++;
          break;
        }
      }
    }
    return count === 2;
  }

  let count = 0;
  for (let i = 4; i < n; i++) {
    if (isSemiPrime(i)) {
      count++;
    }
  }
  return count;
}

console.log(semiPrimeCount(30));
