import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<Quote />);
    const text = screen.getByText('Quote');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Quote />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});