import { checkPrime,computePrimes } from "./prime";

describe('Check Prime', () => {
    it('should return true if number is prime', () => {
        expect(checkPrime(5)).toBe(true);
    });
    it('should return false if number is prime', () => {
        expect(checkPrime(8)).toBe(false);
    });
});

describe('computePrimeNumbers', () => {
    //check if number is contained in result
    it('should contain prime numbers only', () => {
        const result = computePrimes(1,10)
        expect(result).toContain(2);
        expect(result).toContain(3);
        expect(result).toContain(5);
        expect(result).toContain(7);
     
    });
    //check equality of contents of array
    it('should contain prime numbers only', () => {
        const result = computePrimes(1,10)
        let expectedNumbers = [2,3,5,7]
        expect(result).toEqual(expectedNumbers)
    });

});


