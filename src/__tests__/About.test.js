import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

describe('Home component test', () => {
  test('should render the expected output', () => {
    const component = renderer.create(
      <Quote />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
