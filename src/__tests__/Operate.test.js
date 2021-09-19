import operate from '../logic/operate';

describe('Test methods of the operate.js module', () => {
  test('Adding 25 and 40 returns 65', () => {
    expect(operate(25, 40, '+')).toBe('65');
  });

  test('Subtracting 25 from 40 returns 15', () => {
    expect(operate(40, 25, '-')).toBe('15');
  });

  test('Divide 5 by 2 returns 2.5', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });

  test('Divide 5 by 0 returns NaN', () => {
    expect(operate(5, 0, '÷')).toBe('NaN');
  });
});
