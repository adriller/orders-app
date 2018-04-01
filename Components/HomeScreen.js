import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color} from './conf/conf';

export default class HomeScreen extends React.Component {
  static navigationOptions = {header: null};

goToLogin(){
  const nav = this.props.navigation;
  setTimeout(function () {
    nav.navigate('Page2');
  }, 2000);
}

goToUserMain(){
  this.props.navigation.navigate('Page2');
}

goToSellerMain(){
  this.props.navigation.navigate('Page5');
}

render() {
  return (
    <View style={styles.container}>
      <View style={{flex: 8, alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
        <Image
          style={{width: 100, height: 100, }}
          source={require('./img/logo_white.png')}
          />
        <Text style={{color: 'white', marginTop: 20, fontSize: 20}}>my orders</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'flex-end'}}>
        <Image
          source={require('./img/fire_up.png')}
          />
      </View>
      {this.goToLogin()}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
