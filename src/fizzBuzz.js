var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this.isDivisibleBy(number, 3);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this.isDivisibleBy(number, 5);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this.isDivisibleBy(number, 15);
};

FizzBuzz.prototype.isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return 'FizzBuzz';
  }
  else if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  }
  else if (this.isDivisibleByThree(number)) {
    return 'Fizz';
  }
  else return number
};
