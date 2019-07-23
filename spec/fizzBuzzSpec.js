describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function() {
    it('returns fizz for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('returns fizz for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('returns buzz for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('returns buzz for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('returns fizzbuzz for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it('returns fizzbuzz for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other number', function() {
    it('returns 1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
    it('returns 11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});
