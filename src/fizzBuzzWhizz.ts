
/**
 * Given a natural number greater than zero.
 *
 * - "Fizz" if the number is divisible by 3.
 * - "Buzz" if the number is divisible by 5.
 * - The number if it is not divisible by 3 or 5.
 *
 * Input result:
 *
 * 1  1
 * 2  2
 * 3  Fizz
 * 4  4
 * 5  Buzz
 * 6  Fizz
 * 9  Fizz
 * 10 Buzz
 * 15 FizzBuzz
 * 20 Buzz
 * 30 FizzBuzz
 * 75 FizzBuzz
 *
 * Prime
 *
 * Add the following new rule: If a number is prime, return "Whizz". Only consider numbers up to 100.
 *
 * Input result:
 *
 * 1  1
 * 2  Whizz
 * 3  FizzWhizz
 * 4  4
 * 5  BuzzWhizz
 */



export const game = (input: number): string | number => {
  let result = "";

  if (input % 3 === 0) {
    result += "Fizz";
  }

  if (input % 5 === 0) {
    result += "Buzz";
  }

  let isPrime = input >= 2;

  for (let i = 2; i * i <= input; i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result += "Whizz";
  }

  if (result !== "") {
    return result;
  }

  return input;
};
