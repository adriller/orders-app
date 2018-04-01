import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page7 from './Components/Page7';
import Page8 from './Components/Page8';


const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Page2: {
    screen: Page2,
  },
  Page3: {
    screen: Page3,
  },
  Page4: {
    screen: Page4,
  },
  Page5: {
    screen: Page5,
  },
  Page6: {
    screen: Page6,
  },
  Page7: {
    screen: Page7,
  },
  Page8: {
    screen: Page8,
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
