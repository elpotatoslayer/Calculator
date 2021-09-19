import calculate from '../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

describe('check calculator', () => {
  test('if it adds two numbers', () => {
    const result = calculate({ total: '5', next: '2', operation: '+' }, '=');
    const { total } = result;
    expect(total).toEqual('7');
  });

  test('if it subtracts two numbers', () => {
    const result = calculate({ total: '5', next: '2', operation: '-' }, '=');
    const { total } = result;
    expect(total).toEqual('3');
  });

  test('if it multiply two numbers', () => {
    const result = calculate({ total: '5', next: '2', operation: 'X' }, '=');
    const { total } = result;
    expect(total).toEqual('10');
  });

  test('if it divides two numbers', () => {
    const result = calculate({ total: '4', next: '2', operation: '÷' }, '=');
    const { total } = result;
    expect(total).toEqual('2');
  });
  test('if it calculates the percentage of a number', () => {
    const result = calculate({ total: '4', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('0.04');
  });
});
