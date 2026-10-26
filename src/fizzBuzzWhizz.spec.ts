
import { game } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game", () => {
  test("1 returns 1", () => {
    expect(game(1)).toEqual(1);
  });

  test("2 returns Whizz", () => {
    expect(game(2)).toEqual("Whizz");
  });

  test("3 returns FizzWhizz", () => {
    expect(game(3)).toEqual("FizzWhizz");
  });

  test("4 returns 4", () => {
    expect(game(4)).toEqual(4);
  });

  test("5 returns BuzzWhizz", () => {
    expect(game(5)).toEqual("BuzzWhizz");
  });

  test("6 returns Fizz", () => {
    expect(game(6)).toEqual("Fizz");
  });

  test("9 returns Fizz", () => {
    expect(game(9)).toEqual("Fizz");
  });

  test("10 returns Buzz", () => {
    expect(game(10)).toEqual("Buzz");
  });

  test("15 returns FizzBuzz", () => {
    expect(game(15)).toEqual("FizzBuzz");
  });

  test("20 returns Buzz", () => {
    expect(game(20)).toEqual("Buzz");
  });

  test("30 returns FizzBuzz", () => {
    expect(game(30)).toEqual("FizzBuzz");
  });

  test("75 returns FizzBuzz", () => {
    expect(game(75)).toEqual("FizzBuzz");
  });

  test("97 returns Whizz", () => {
    expect(game(97)).toEqual("Whizz");
  });

  test("99 returns Fizz", () => {
    expect(game(99)).toEqual("Fizz");
  });

  test("100 returns Buzz", () => {
    expect(game(100)).toEqual("Buzz");
  });
});
