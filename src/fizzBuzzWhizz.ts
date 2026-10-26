
export const game = (input: number): string | number => {
  let result = "";

  // Regla 1: divisible por 3
  if (input % 3 === 0) {
    result += "Fizz";
  }

  // Regla 2: divisible por 5
  if (input % 5 === 0) {
    result += "Buzz";
  }

  // Regla 3: comprobar si es primo
  let isPrime = input >= 2;

  for (let i = 2; i * i <= input; i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Regla adicional: los números primos devuelven Whizz
  if (isPrime) {
    result += "Whizz";
  }

  // Si no se aplicó ninguna regla, devuelve el número
  return result || input;
};
