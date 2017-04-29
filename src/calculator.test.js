import { calc } from './calculator';

it('Base 2', () => {
  expect(calc('10 + 10', 2)).toBe('100');
  expect(calc('0.1 + 0.1', 2)).toBe('1');

  expect(calc('10 - 1', 2)).toBe('1');
  expect(calc('1 - 0.1', 2)).toBe('0.1');

  expect(calc('100 * 100', 2)).toBe('10000');
  expect(calc('0.1 * 0.1', 2)).toBe('0.01');

  expect(calc('1000 / 10', 2)).toBe('100');
  expect(calc('101 / 10', 2)).toBe('10.1');
});

it('Base 8', () => {
  expect(calc('4 + 4', 8)).toBe('10');
  expect(calc('0.4 + 0.4', 8)).toBe('1');

  expect(calc('5 + 5', 8)).toBe('12');
  expect(calc('0.5 + 0.5', 8)).toBe('1.2');

  expect(calc('10 - 1', 8)).toBe('7');
  expect(calc('1 - 0.1', 8)).toBe('0.7');

  expect(calc('2 * 4', 8)).toBe('10');
  expect(calc('0.2 * 4', 8)).toBe('1');

  expect(calc('10 / 2', 8)).toBe('4');
  expect(calc('1 / 2', 8)).toBe('0.4');
});

it('Base 10', () => {
  expect(calc('5 + 5', 10)).toBe('10');
  expect(calc('0.5 + 0.5', 10)).toBe('1');

  expect(calc('6 + 6', 10)).toBe('12');
  expect(calc('0.6 + 0.6', 10)).toBe('1.2');

  expect(calc('10 - 3', 10)).toBe('7');
  expect(calc('1 - 0.3', 10)).toBe('0.7');

  expect(calc('2 * 5', 10)).toBe('10');
  expect(calc('0.2 * 5', 10)).toBe('1');

  expect(calc('10 / 2', 10)).toBe('5');
  expect(calc('1 / 2', 10)).toBe('0.5');
});

it('Base 16', () => {
  expect(calc('8 + 8', 16)).toBe('10');
  expect(calc('0.8 + 0.8', 16)).toBe('1');

  expect(calc('5 + 5', 16)).toBe('a');
  expect(calc('0.5 + 0.5', 16)).toBe('0.a');

  expect(calc('10 - 1', 16)).toBe('f');
  expect(calc('1 - 0.1', 16)).toBe('0.f');

  expect(calc('2 * 8', 16)).toBe('10');
  expect(calc('0.2 * 8', 16)).toBe('1');

  expect(calc('10 / 2', 16)).toBe('8');
  expect(calc('1 / 2', 16)).toBe('0.8');

  expect(calc('0xa + 1', 16)).toBe('b');
  expect(calc('0xa + 10', 16)).toBe('1a');

  expect(calc('0xa * 10', 16)).toBe('a0');
  expect(calc('0xa * 100', 16)).toBe('a00');
  expect(calc('0xa * 0xa', 16)).toBe('64');

  expect(calc('0xd0 / 10', 16)).toBe('d');
  expect(calc('0xd0 / 0xd', 16)).toBe('10');
});
