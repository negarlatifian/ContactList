// const Customer = require('./Customer');
import Customer from './Customer';
import { fireEvent, render } from '@testing-library/react-native';
import List from './List';
// const renderer = require('react-test-renderer');

// test('renders correctly', () => {
//   const tree = renderer.create(<Customer />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('Customer tests', () => {
  // describe('Displays correct user by id', () => {
  //   const index = 2;
  //   let component;
  //   beforeEach(() => {
  //     component = render(<Customer route={index}/>);
  //   });
  //   it('gets correct user name', () => {
  //     expect(component(customer[index]).name.first).toEqual('Leah');
  //   });
  // });
//   describe('Customer tests', () => {
//     describe('Displays correct user by id', () => {
//     const index = 2;
//     let component;
//     beforeEach(() => {
//       component = render(<List/>);
      
//     });
//     it('gets correct user name', () => {
//       expect(component(customer[index]).name.first).toEqual('Leah');
//     });
//   });
// });



describe('List tests', () => {
  // const messageText = 'A test string';
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<List />));
    // fireEvent.changeText(getByTestId('mainTitle'), messageText);
  });
  it('checks that title "list" exists', () => {
    expect(getByTestId('mainTitle').children[0]).toEqual('List');
  });
  it('check name exists in list', () => {
    expect(getByTestId('testName2').children[0]).toEqual('Leah');
    expect(getByTestId('testName2').children[2]).toEqual('Thompson');
  });
});

describe('List tests', () => {
  // const messageText = 'A test string';
  let getByTestId;
  let getByTestId2;
  beforeEach(() => {
    ({ getByTestId } = render(<List />));
    fireEvent.press(getByTestId('testName2'));
  });
  it('checks that email', () => {
    expect(getByTestId2('customerEmail').children[0]).toEqual('leah.thompson@example.com');
  });

});
