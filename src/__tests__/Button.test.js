import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

const clickHandler = () => { ''; };
test('if . button is acting like a button', () => {
  const { getByRole } = render(<Button buttonName="." clickHandler={clickHandler} />);
  const dot = getByRole('button');
  expect(dot).toBeInTheDocument();
});

test('check if buttonnames are rendered correctly', () => {
  const { getByText } = render(<Button buttonName="." clickHandler={clickHandler} />);
  const dot = getByText(/./i);
  expect(dot).toBeInTheDocument();
});