// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from "react-test-renderer";

import StartPage from "../app/pages/StartPage";
// import TestAppNavigator from '../app/navigation/Navigation';

// Run 'jest' OR 'yarn test' in terminal to test

// Snapshot Testing: If there is a need to update snapshot,
// use 'jest --UpdateSnapshot' but use with caution
// as error may be due to our fault,
// can refer to this: https://jestjs.io/docs/snapshot-testing 

it('Start page renders correctly', () => {
  const tree = renderer
    .create(<StartPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Testing React Navigation from Start Page (Unsure how to implement)

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