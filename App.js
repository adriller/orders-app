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
import Page9 from './Components/Page9';
import Page10 from './Components/Page10';
import Page11 from './Components/Page11';
import Page12 from './Components/Page12';
import Page13 from './Components/Page13';
import Page14 from './Components/Page14';
import Page15 from './Components/Page15';


const RootStack = StackNavigator({
  Home: {
    screen: Page12,
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
  Page9: {
    screen: Page9,
  },
  Page10: {
    screen: Page10,
  },
  Page11: {
    screen: Page11,
  },
  Page12: {
    screen: Page12,
  },
  Page13: {
    screen: Page13,
  },
  Page14: {
    screen: Page14,
  },
  Page15: {
    screen: Page15,
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
