function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

const args = process.argv.slice(2);

if (args.length !== 10) {
  console.error("Please enter exactly 10 numbers.");
  process.exit(1);
}

const numbers = args.map(Number);

if (numbers.some(isNaN)) {
  console.error("All inputs must be valid numbers.");
  process.exit(1);
}

const sumEvenNumbers = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);

const sumEvenIndex = numbers.reduce((acc, num, idx) => idx % 2 === 0 ? acc + num : acc, 0);

const sumPrimes = numbers.reduce((acc, num) => isPrime(num) ? acc + num : acc, 0);

console.log("Sum of even numbers:", sumEvenNumbers);
console.log("Sum of numbers at even indices:", sumEvenIndex);
console.log("Sum of prime numbers:", sumPrimes);
