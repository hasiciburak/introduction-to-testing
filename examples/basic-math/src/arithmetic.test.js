import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should add a negative and a positive number', () => {
    expect(add(-1, 2)).toBe(1);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '2')).toBe(3);
  });

  it('should get real angry if you give it a first arguement cannot be parsed into a number', () => {
    expect(() => add('2', 'b')).toThrow(/not a number/);
  });

  it('should get real angry if you give it a first arguement cannot be parsed into a number', () => {
    expect(() => add('a', '2')).toThrow(/not a number/i);
  });

  it('should throw if the first number is NaN', () => {
    expect(() => add(NaN, 2)).toThrow(/not a number/i);
  });

  it('should throw if the second number is NaN', () => {
    expect(() => add(2, NaN)).toThrow(/not a number/i);
  });

  it('should throw if both numbers are NaN', () => {
    expect(() => add(NaN, NaN)).toThrow(/not a number/i);
  });

  it('should accept as a 0 if first number is undefined', () => {
    expect(add(undefined, 2)).toBe(2);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a negative and a positive number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply decimal numbers', () => {
    expect(multiply(2.5, 2)).toBe(5);
  });

  it('should be commutative', () => {
    expect(multiply(2, 3)).toBe(multiply(3, 2));
  });

  it('should throw error when multiplying with undefined', () => {
    expect(() => multiply(undefined, 5)).toThrow(/not a number/i);
    expect(() => multiply(2, undefined)).toThrow(/not a number/i);
  });

  it('should throw error when multiplying with NaN', () => {
    expect(() => multiply(NaN, 3)).toThrow(/not a number/i);
    expect(() => multiply(2, NaN)).toThrow(/not a number/i);
  });

  it('should throw error when multiplying with null', () => {
    expect(() => multiply(null, 5)).toThrow(/not a number/i);
    expect(() => multiply(2, null)).toThrow(/not a number/i);
  });

  it('should throw error when multiplying number with boolean', () => {
    expect(() => multiply(true, 5)).toThrow(/not a number/i);
    expect(() => multiply(2, false)).toThrow(/not a number/i);
  });
});
