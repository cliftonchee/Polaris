import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from "react-test-renderer";

import StartPage from "../app/pages/StartPage";
import Button from "../app/components/Button";

// Run 'jest' OR 'yarn test' in terminal to test

// Snapshot Testing: If there is a need to update snapshot,
// use 'jest --UpdateSnapshot' but use with caution
// as error may be due to our fault,
// can refer to this: https://jestjs.io/docs/snapshot-testing 

describe('<Page />', () => {
  it('Start page renders correctly', () => {
    const tree = renderer
      .create(<StartPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

// Tests button
describe('<Button />', () => {
  // Renders button
  it('Renders button without crashing', () => {
    render(<Button value="Get started" />);
    const startButton = screen.getByTestId("button");
    expect(startButton).toBeTruthy();
  });
  // Tests navigation
  //it('Goes to Login Page when clicked', async () => {
    // let navigation;

    // beforeEach(() => {
    //   navigation = { navigate: jest.fn() };
    // });

    // render(<StartPage navigation={navigation}/>)
    // render(<Button value="Get started" />);
    // const startButton = screen.getByTestId("button");

    // fireEvent.press(startButton);
    // const newTitle = await screen.getByText(/P O L A R I S/i);

    // expect(newTitle).toBeTruthy();
   //})
 })

//Testing React Navigation from Start Page (Unsure how to implement)

// describe('Testing React Navigation', () => {
//   test('screen contains a button linking to the login page', async () => {
//     const component = (
//       <NavigationContainer>
//         <TestAppNavigator />
//       </NavigationContainer>
//     );

//     render(component);
//     const button = await screen.findByText('Go to notifications');

//     expect(button).toBeOnTheScreen();
//   });

//   test('clicking on the button takes you to the notifications screen', async () => {
//     const component = (
//       <NavigationContainer>
//         <TestAppNavigator />
//       </NavigationContainer>
//     );

//     render(component);
//     const title = screen.queryByText('P O L A R I S');
//     const subtitle = screen.queryByText('Connect with the stars');
//     const button = await screen.findByText('Get started');

//     expect(title).toBeOnTheScreen();
//     expect(subtitle).toBeOnTheScreen();

//     fireEvent(button, 'press');
//     const newScreen = await screen.findByText('Forgot Password');

//     expect(newScreen).toBeOnTheScreen();
//   });
// });