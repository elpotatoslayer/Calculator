 
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<Display />);
    const text = screen.getByText('0');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Display />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});