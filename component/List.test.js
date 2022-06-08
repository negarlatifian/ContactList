const Customer = require('./Customer');
import { fireEvent, render } from '@testing-library/react-native';
// const renderer = require('react-test-renderer');

// test('renders correctly', () => {
//   const tree = renderer.create(<Customer />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('Customer tests', () => {
  describe('Displays correct user by id', () => {
    const index = 2;
    let getByTestId;
    beforeEach(() => {
      ({ getByTestId } = render(<Customer index={index} />));
    });
    it('gets correct user name', () => {
      expect(getByTestId('index').name.first).toEqual('Leah');
    });
  });
});
